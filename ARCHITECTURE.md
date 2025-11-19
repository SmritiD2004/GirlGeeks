# ArthSakhi Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (React + Vite)              │
├─────────────────────────────────────────────────────────────┤
│  Auth  │  Dashboard  │  Learning  │  Chatbot  │  Community  │
│                                                              │
│  Contexts: AuthContext, LanguageContext                    │
│  State: User Profile, Language, Progress                   │
└──────────────────────────────────────────────────────────────
                              │
                    Supabase Client SDK
                              │
┌──────────────────────────────────────────────────────────────┐
│           Supabase Backend (PostgreSQL + Auth)              │
├──────────────────────────────────────────────────────────────┤
│  • Authentication & JWT                                     │
│  • Row-Level Security (RLS)                                │
│  • Real-time Subscriptions                                 │
│  • RESTful API                                             │
└──────────────────────────────────────────────────────────────
                              │
┌──────────────────────────────────────────────────────────────┐
│           Database (PostgreSQL)                             │
├──────────────────────────────────────────────────────────────┤
│  user_profiles      chat_history        badges             │
│  learning_modules   community_posts     user_badges        │
│  user_progress      community_comments  streaks            │
│  state_schemes                                             │
└──────────────────────────────────────────────────────────────
```

## Component Architecture

### Authentication Flow
```
User Input
    ↓
Auth.jsx (Sign Up/In)
    ↓
AuthContext.signUp/signIn()
    ↓
Supabase.auth.signUp/signInWithPassword()
    ↓
JWT Token Created
    ↓
Load User Profile
    ↓
Redirect to Onboarding/Dashboard
```

### Data Flow
```
Component Request
    ↓
useAuth() / useLanguage() Hook
    ↓
Context State
    ↓
Supabase Query (with RLS)
    ↓
PostgreSQL (Secure Access)
    ↓
Transform Data
    ↓
Update Component State
    ↓
Re-render Component
```

### Learning Module Flow
```
Dashboard/LearningModules
    ↓
Load Modules from Database
    ↓
Get User Progress
    ↓
Display Categories
    ↓
User Selects Module
    ↓
ModuleContent Renderer
    ↓
Navigate Sections
    ↓
Complete Module
    ↓
Update Progress
    ↓
Update Streak
    ↓
Load Modules (Refresh)
```

## State Management

### AuthContext
- `user`: Supabase Auth User object
- `profile`: User profile from database
- `loading`: Loading state
- `Methods`:
  - `signUp(email, password)`
  - `signIn(email, password)`
  - `signOut()`
  - `updateProfile(updates)`
  - `refreshProfile()`

### LanguageContext
- `currentLanguage`: Selected language code
- `languages`: Available languages array
- `Methods`:
  - `changeLanguage(lang)`
  - `t(key)`: Translate key
  - `getMultilingual(field)`: Get multilingual field

## Database Schema

### user_profiles
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY (auth.users.id),
  age INTEGER,
  occupation TEXT,
  financial_goals TEXT[],
  literacy_level TEXT,
  home_state TEXT,
  preferred_language TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

### learning_modules
```sql
CREATE TABLE learning_modules (
  id UUID PRIMARY KEY,
  title JSONB (multilingual),
  description JSONB,
  content JSONB (sections),
  category TEXT,
  difficulty_level TEXT,
  order_index INTEGER,
  created_at TIMESTAMPTZ
);
```

### user_progress
```sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY,
  user_id UUID (FK user_profiles),
  module_id UUID (FK learning_modules),
  completed BOOLEAN,
  score INTEGER,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  UNIQUE(user_id, module_id)
);
```

### state_schemes
```sql
CREATE TABLE state_schemes (
  id UUID PRIMARY KEY,
  state TEXT,
  scheme_name JSONB (multilingual),
  description JSONB,
  eligibility JSONB,
  application_steps JSONB,
  contact_info JSONB,
  category TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

### community_posts
```sql
CREATE TABLE community_posts (
  id UUID PRIMARY KEY,
  user_id UUID (FK user_profiles),
  title TEXT,
  content TEXT,
  category TEXT,
  likes_count INTEGER,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

## Row-Level Security (RLS) Policies

### user_profiles
- SELECT: Users can view their own profile
- UPDATE: Users can update their own profile
- INSERT: Only on signup (via trigger or auth)

### user_progress
- SELECT: Users can view only their own progress
- INSERT: Users can create progress for themselves
- UPDATE: Users can update only their own progress

### community_posts
- SELECT: Any authenticated user can read
- INSERT: Authenticated users can create posts
- UPDATE: Only post owner can update
- DELETE: Only post owner can delete

### chat_history
- SELECT: Users can view only their own chats
- INSERT: Users can insert their own chat messages

## API Ready Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Login user
- `POST /auth/signout` - Logout user
- `GET /auth/me` - Current user profile

### Learning
- `GET /api/modules` - List all modules
- `GET /api/modules/:id` - Get module details
- `POST /api/progress` - Record completion
- `GET /api/progress` - Get user progress

### Chatbot
- `POST /api/chat` - Send message
- `GET /api/chat/history` - Get chat history
- `GET /api/suggestions` - Get suggested questions

### Schemes
- `GET /api/schemes` - List schemes
- `GET /api/schemes/:id` - Scheme details
- `GET /api/schemes?state=...` - Filter by state
- `GET /api/schemes?category=...` - Filter by category

### Community
- `GET /api/posts` - List posts
- `POST /api/posts` - Create post
- `GET /api/posts/:id` - Get post with comments
- `POST /api/posts/:id/like` - Like post
- `POST /api/posts/:id/comments` - Add comment

### Analytics
- `GET /api/analytics/engagement` - User engagement stats
- `GET /api/analytics/modules` - Module completion stats
- `GET /api/analytics/states` - State-wise breakdown

## Performance Considerations

### Optimization Strategies
1. **Code Splitting**: Lazy load heavy components
2. **Database Indexing**: Index frequently searched columns
3. **Query Optimization**: Pagination for large datasets
4. **Caching**: Client-side cache for user preferences
5. **Asset Optimization**: Minify CSS/JS, compress images

### Bundle Size
- Total: ~331 KB (minified)
- Gzip: ~98 KB
- React: ~42 KB
- Supabase: ~25 KB
- Tailwind: ~18 KB
- Other: ~13 KB

### Database Query Performance
```
Typical Query Times:
- Get user profile: ~50ms
- Load modules: ~100ms
- Fetch schemes: ~150ms
- Chat history: ~100ms
- Community posts: ~120ms
```

## Security Architecture

### Authentication
- Supabase JWT tokens
- Automatic token refresh
- Secure session management

### Data Protection
- Row-Level Security (RLS) enforced at database
- Sensitive data encrypted in transit (HTTPS)
- User data isolated by user_id

### Input Validation
- Client-side form validation
- Server-side validation via RLS
- SQL injection prevention (parameterized queries)

### Privacy
- User data never sent to third parties
- Analytics are anonymized
- Consent-based tracking

## Scalability

### Horizontal Scaling
- Frontend: Deploy to CDN (Vercel, Netlify, CloudFlare)
- Backend: Supabase auto-scales PostgreSQL

### Vertical Scaling
- Database: Upgrade Supabase plan
- Storage: PostgreSQL handles large datasets
- Real-time: Supabase WebSockets for live updates

### Expected Capacity
- 10,000 active users: No issues
- 100,000 active users: Minimal optimization needed
- 1M+ users: Consider caching layer, CDN optimization

## Monitoring & Logging

### Key Metrics
- User authentication success rate
- Module completion rate
- Chat response time
- API response times
- Database query performance

### Error Tracking
- Browser console errors
- Supabase error logs
- Failed authentication attempts
- Query errors

### Analytics
- User engagement by feature
- Module popularity
- Language preferences
- State-wise distribution

## Deployment Architecture

### Development
```
Local Machine
    ↓
npm run dev
    ↓
Vite Dev Server (localhost:5173)
    ↓
Live Module Reloading
```

### Production
```
GitHub/Git
    ↓
CI/CD Pipeline (GitHub Actions)
    ↓
Build (npm run build)
    ↓
Tests (if configured)
    ↓
Deploy to CDN (Vercel/Netlify)
    ↓
Edge Caching
    ↓
User Browser
```

## Future Architecture Enhancements

1. **AI Integration**
   - Replace rule-based chat with LLM
   - Add ML-based recommendations

2. **Microservices**
   - Separate API for chatbot
   - Independent analytics service

3. **Caching Layer**
   - Redis for session caching
   - CDN for static content

4. **Message Queue**
   - Async task processing
   - Email notifications

5. **Monitoring**
   - Real-time error tracking
   - Performance monitoring
   - User behavior analytics

---

**Architecture Last Updated**: November 2024
