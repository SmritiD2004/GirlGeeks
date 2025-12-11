import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { MessageCircle, Heart, Send, Users } from 'lucide-react';

export default function Community() {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      // OPTIMIZED: Only load 50 most recent posts
      const { data } = await supabase
        .from('community_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50); // ADDED: Limit results

      setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!profile) return;

    try {
      const { error } = await supabase.from('community_posts').insert({
        user_id: profile.id,
        title: newPost.title,
        content: newPost.content,
        category: newPost.category,
      });

      if (error) throw error;

      setNewPost({ title: '', content: '', category: 'general' });
      setShowNewPost(false);
      loadPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleLike = async (postId, currentLikes) => {
    try {
      await supabase
        .from('community_posts')
        .update({ likes_count: (currentLikes || 0) + 1 })
        .eq('id', postId);

      // OPTIMIZED: Update local state instead of reloading all posts
      setPosts(posts.map(p => 
        p.id === postId 
          ? { ...p, likes_count: (currentLikes || 0) + 1 } 
          : p
      ));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
              <Users className="text-emerald-600" />
              {t('community')}
            </h1>
            <p className="text-gray-600">
              {t('communitySubtitle') ||
                'Share your journey, learn from others, and build financial confidence together'}
            </p>
          </div>
          <button
            onClick={() => setShowNewPost(!showNewPost)}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium"
          >
            {showNewPost
              ? t('cancel') || 'Cancel'
              : t('shareStory') || 'Share Your Story'}
          </button>
        </div>
      </div>

      {showNewPost && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t('createNewPost') || 'Create New Post'}
          </h2>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('title') || 'Title'}
              </label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('category') || 'Category'}
              </label>
              <select
                value={newPost.category}
                onChange={(e) =>
                  setNewPost({ ...newPost, category: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="general">
                  {t('category.general') || 'General'}
                </option>
                <option value="success_story">
                  {t('category.success_story') || 'Success Story'}
                </option>
                <option value="question">
                  {t('category.question') || 'Question'}
                </option>
                <option value="advice">
                  {t('category.advice') || 'Advice'}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('content') || 'Content'}
              </label>
              <textarea
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium"
            >
              {t('post')}
            </button>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.id} post={post} onLike={handleLike} t={t} />
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <MessageCircle className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600 text-lg">
              {t('noPostsYet') || 'No posts yet'}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {t('beFirstToShareStory') || 'Be the first to share your story!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function PostCard({ post, onLike, t }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loadingComments, setLoadingComments] = useState(false); // ADDED
  const { profile } = useAuth();

  const loadComments = async () => {
    // OPTIMIZED: Prevent duplicate loading
    if (loadingComments || comments.length > 0) return;
    
    setLoadingComments(true);
    try {
      const { data } = await supabase
        .from('community_comments')
        .select('*')
        .eq('post_id', post.id)
        .order('created_at', { ascending: true })
        .limit(50); // ADDED: Limit comments

      setComments(data || []);
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setLoadingComments(false);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!profile || !newComment.trim()) return;

    try {
      const { data, error } = await supabase
        .from('community_comments')
        .insert({
          post_id: post.id,
          user_id: profile.id,
          content: newComment,
        })
        .select()
        .single();

      if (error) throw error;

      // OPTIMIZED: Add comment to local state instead of reloading
      setComments([...comments, data]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const toggleComments = () => {
    if (!showComments) {
      loadComments();
    }
    setShowComments(!showComments);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                {t(`category.${post.category}`) ||
                  post.category.replace(/_/g, ' ')}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t">
          <button
            onClick={() => onLike(post.id, post.likes_count)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart size={20} />
            <span>{post.likes_count || 0}</span>
          </button>

          <button
            onClick={toggleComments}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <MessageCircle size={20} />
            <span>
              {comments.length} {t('comments')}
            </span>
          </button>
        </div>
      </div>

      {showComments && (
        <div className="px-6 pb-6 border-t bg-gray-50">
          {loadingComments ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <>
              <div className="mt-4 space-y-3">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      {t('user') || 'User'}
                    </p>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                ))}
                {comments.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </div>

              <form onSubmit={handleAddComment} className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder={t('addCommentPlaceholder') || 'Add a comment...'}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}