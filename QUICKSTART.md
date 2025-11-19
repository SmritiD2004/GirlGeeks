# ArthSakhi Quick Start Guide

## Getting Started in 5 Minutes

### 1. Prerequisites
- Ensure you have Node.js 16+ installed
- You have Supabase credentials (URL and Anon Key)

### 2. Environment Setup
Create a `.env` file in the project root:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Install & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5173
```

### 4. First Time Setup
- Click "Sign Up" to create an account
- Complete the 4-step onboarding form
- Watch the interactive tutorial
- Start exploring!

## Test Credentials (Demo Mode)
You can use these email/password for testing:
- Email: test@arthsakhi.demo
- Password: Test@123456

## Main Features to Try

### Dashboard
- See your learning progress
- View earned badges
- Check current streak
- Access quick action buttons

### Learning Modules
- Choose a module from categories
- Work through sections
- Mark complete to earn badges
- Track progress

### Chatbot
- Ask financial questions
- Try keywords: "budget", "saving", "digital payment", "loan", "scheme"
- See responses in your preferred language

### Schemes
- View government schemes for your state
- Read eligibility criteria
- Check application steps
- Visit official websites

### Community
- Share your financial journey
- Read others' success stories
- Comment on posts
- Support fellow learners

### Language Switch
- Change language anytime from navigation
- Supports: English, Hindi, Marathi, Tamil, Bengali

## Useful Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Shift + L` | Switch language |
| `Ctrl + K` | Open command palette |
| `Escape` | Close modals |
| `Enter` | Send chat messages |

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Supabase Connection Issues
- Verify `.env` file has correct credentials
- Check Supabase project is active
- Ensure RLS policies are enabled
- Test connection: `npm run dev`

### Data Not Syncing
- Refresh the page
- Check browser console for errors
- Verify user is authenticated
- Check Supabase dashboard for data

## Development Tips

### Adding New Module
1. Update `src/data/moduleContent.js`
2. Add to `MODULE_TEMPLATES` array
3. Run `npm run dev` (auto-seed to database)

### Adding New Language
1. Update `src/contexts/LanguageContext.jsx`
2. Add language code and name to `languages` array
3. Add translations to `translations` object

### Customizing Colors
Edit Tailwind config in `tailwind.config.js`:
- Primary: `emerald-*`
- Secondary: `teal-*`
- Accents: `orange-*`, `yellow-*`, `blue-*`

## Production Deployment

### Build
```bash
npm run build
```

### Deploy
Upload the `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## API Integration Ready

The app is structured to easily integrate with backend APIs:

### Chat API
Replace the mock `generateResponse` function in `Chatbot.jsx` with:
```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message: userMessage })
});
```

### Learning Progress
Update `handleCompleteModule` to call your backend API for saving progress

### Analytics
Add tracking calls to monitor user engagement metrics

## Database Seeding

Initial data (modules, schemes) is automatically seeded on first login. To manually seed:

```javascript
import { seedDatabase } from './lib/seedData';
seedDatabase();
```

## Performance Tips

1. **Reduce Bundle Size**
   - Tree-shake unused dependencies
   - Lazy load components

2. **Optimize Images**
   - Use WebP format
   - Compress before deployment
   - Use responsive images

3. **Database Queries**
   - Use pagination for large datasets
   - Add indexes on frequently queried columns
   - Cache query results

## Next Steps

1. ✅ Set up environment and run locally
2. ✅ Explore all features
3. ⬜ Customize branding (colors, fonts, copy)
4. ⬜ Integrate real AI/ML backend
5. ⬜ Deploy to production
6. ⬜ Add real government scheme data
7. ⬜ Integrate payment gateway (if needed)
8. ⬜ Add analytics tracking

## Support

- Check README.md for detailed documentation
- Review component comments for code explanations
- Check Supabase documentation: https://supabase.com/docs
- React documentation: https://react.dev

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check code quality
4. Submit a pull request

---

**Happy Learning! 🎓💰**
