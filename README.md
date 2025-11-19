# ArthSakhi - Financial Literacy & Empowerment Chatbot

**ArthSakhi** (अर्थसखी) is an AI-powered financial literacy and empowerment application designed specifically for women across India. The name combines "Arth" (Wealth) and "Sakhi" (Friend), symbolizing a friendly financial guide for women's financial independence.

## Overview

ArthSakhi provides culturally adaptive financial education through:
- **Conversational AI Chatbot** - Multi-language support for instant financial guidance
- **Progressive Learning Modules** - Bite-sized lessons on budgeting, saving, digital payments, investments, and more
- **State-wise Government Schemes** - Personalized access to relevant financial schemes and banking information
- **Gamification** - Badges, streaks, and progress tracking to maintain engagement
- **Community Support** - Peer-to-peer learning and success story sharing
- **Responsive Design** - Fully optimized for mobile and desktop devices

## Features

### 1. Authentication & Onboarding
- Email/password authentication via Supabase
- Multi-step onboarding to collect user profile (age, occupation, state, language, financial goals)
- Personalized experience based on user profile

### 2. Multi-Language Support
- English, Hindi, Marathi, Tamil, Bengali
- Dynamic content rendering in preferred language
- Multilingual translations for all UI elements

### 3. Learning Dashboard
- Track progress across modules
- View earned badges and streaks
- Monitor learning statistics
- Quick access to key features

### 4. Learning Modules
- 6+ progressive modules covering:
  - Budgeting Basics
  - Digital Payment Safety
  - Saving Money Strategies
  - Understanding Loans
  - Insurance Fundamentals
  - Investment Basics
- Difficulty levels: Beginner, Intermediate, Advanced
- Completion tracking with score tracking
- Automatic streak updates

### 5. AI Chatbot
- Conversational interface for financial queries
- Multi-language responses
- Real-time message history
- Smart response generation based on keywords
- Topics covered:
  - Budgeting and expense management
  - Saving strategies
  - Digital payment methods
  - Loan types and eligibility
  - Investment options
  - Government schemes
  - Fraud prevention and safety

### 6. Government Schemes & Banking Info
- Pre-populated national schemes (PMJDY, Sukanya Samriddhi Yojana, Mudra Yojana)
- State-wise scheme filtering
- Eligibility criteria and application steps
- Contact information and links
- Expandable scheme cards for detailed information

### 7. Community Forum
- Create and share financial journeys
- Success stories and tips
- Peer support discussions
- Like and comment on posts
- Community-driven learning

### 8. Interactive Tutorial
- Step-by-step onboarding tour
- Visual walkthrough of all features
- Skip option for returning users
- Guided exploration of the app

## Tech Stack

- **Frontend Framework**: React 18+ with Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React Icons
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **State Management**: Context API
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── Auth.jsx              # Login/Sign-up component
│   ├── Onboarding.jsx        # User profiling form
│   ├── Dashboard.jsx         # Main dashboard with stats
│   ├── LearningModules.jsx   # Learning content viewer
│   ├── Chatbot.jsx           # AI chatbot interface
│   ├── Schemes.jsx           # Government schemes display
│   ├── Community.jsx         # Forum and peer support
│   ├── Navigation.jsx        # Top navigation bar
│   └── Tutorial.jsx          # Interactive tutorial
├── contexts/
│   ├── AuthContext.jsx       # Authentication state management
│   └── LanguageContext.jsx   # Language selection and translations
├── lib/
│   ├── supabase.js           # Supabase client initialization
│   └── seedData.js           # Database seeding function
├── data/
│   └── moduleContent.js      # Learning module templates and schemes
├── App.tsx                   # Main app component
└── index.css                 # Global styles
```

## Database Schema

### Core Tables
- **user_profiles** - User account information and preferences
- **learning_modules** - Educational content
- **user_progress** - Learning completion tracking
- **badges** - Achievement system
- **user_badges** - User badge collection
- **streaks** - Daily learning streaks
- **state_schemes** - Government schemes and banking info
- **chat_history** - Chatbot conversation logs
- **community_posts** - Forum posts
- **community_comments** - Post comments

All tables have Row-Level Security (RLS) enabled for data privacy and security.

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Supabase account and project
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arthsakhi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

## Usage Flow

1. **Sign Up/Sign In** - Create or access your account
2. **Complete Onboarding** - Set up your profile with language, location, and goals
3. **View Tutorial** - Learn about all features (optional for returning users)
4. **Explore Dashboard** - See your progress and quick action buttons
5. **Learn Modules** - Complete financial literacy modules
6. **Chat with ArthSakhi** - Ask financial questions anytime
7. **Check Schemes** - Discover government schemes for your state
8. **Join Community** - Share experiences and learn from others

## Features in Detail

### Multi-Language Support
The app supports 5 major Indian languages. Users can switch languages anytime, and all content dynamically renders in their chosen language.

### Gamification System
- **Streaks**: Track consecutive days of learning
- **Badges**: Earn achievements for completing milestones
- **Progress Tracking**: Visual progress indicators for each module
- **Leaderboards** (coming soon): Compare with community members

### Data Security
- Row-Level Security on all database tables
- User data only accessible to the authenticated user
- Public content (modules, schemes) readable by all authenticated users
- Secure authentication with Supabase JWT

### Responsive Design
- Mobile-first approach
- Tablet-optimized layout
- Desktop-enhanced experience
- Touch-friendly buttons and navigation

## Future Enhancements

- [ ] Voice input for chatbot queries
- [ ] Video tutorials for learning modules
- [ ] Real AI model integration (currently using rule-based responses)
- [ ] WhatsApp and SMS integration for omni-channel access
- [ ] Advanced analytics dashboard for developers
- [ ] Personalized financial recommendations
- [ ] Integration with banking APIs for real account management
- [ ] Offline mode for areas with limited connectivity
- [ ] AI-powered expense tracking
- [ ] Investment portfolio recommendations

## API Endpoints (Ready for Backend Integration)

### Learning Modules
- `GET /api/modules` - Fetch all learning modules
- `GET /api/modules/:id` - Fetch specific module
- `POST /api/progress` - Record module completion

### Chatbot
- `POST /api/chat` - Send message to chatbot
- `GET /api/chat/history` - Fetch chat history

### Schemes
- `GET /api/schemes` - Fetch schemes
- `GET /api/schemes?state=Maharashtra` - State-specific schemes

### Community
- `GET /api/posts` - Fetch community posts
- `POST /api/posts` - Create new post
- `POST /api/posts/:id/comment` - Add comment

## Security Best Practices

1. **Authentication**: All routes behind authentication walls
2. **RLS Policies**: Granular access control at database level
3. **Input Validation**: Form validation on client and server
4. **XSS Protection**: Content sanitization
5. **Data Encryption**: Sensitive data stored securely in Supabase

## Performance Optimizations

- Code splitting with Vite
- Lazy loading of components
- Optimized database queries with pagination
- Client-side caching of user preferences
- Efficient state management with Context API

## Accessibility Features

- WCAG 2.1 compliance
- High contrast color schemes
- Readable font sizes (minimum 16px)
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Alt text for all images

## Support & Contribution

For issues, questions, or contributions, please contact the development team or submit a pull request.

## License

This project is developed for financial empowerment of women in India.

## Contact

- **Project Owner**: ArthSakhi Team
- **Email**: support@arthsakhi.in
- **Website**: Coming soon

---

**"Every woman deserves financial independence. ArthSakhi is here to guide your journey."**
