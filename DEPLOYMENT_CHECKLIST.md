# ArthSakhi Deployment Checklist

## Pre-Deployment Verification

### Environment Setup
- [ ] Verify `.env` file has correct Supabase URL and API key
- [ ] Ensure database migrations have been applied
- [ ] Check all RLS policies are enabled
- [ ] Verify user authentication is working locally
- [ ] Test all features in development mode

### Code Quality
- [ ] Run `npm run lint` (if configured)
- [ ] Test on Chrome, Firefox, Safari, Edge browsers
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify all links are working
- [ ] Check all images load correctly
- [ ] Test all forms and input validation

### Security Review
- [ ] No sensitive data in code or comments
- [ ] No API keys hardcoded
- [ ] All user inputs validated
- [ ] HTTPS enforced
- [ ] CSP headers configured
- [ ] CORS properly configured
- [ ] RLS policies reviewed and tested

### Performance Check
- [ ] Run `npm run build`
- [ ] Verify bundle size < 400 KB
- [ ] Check Lighthouse score > 80
- [ ] Test on slow 3G network
- [ ] Verify lazy loading works
- [ ] Check database query times

### Accessibility Review
- [ ] Test with keyboard navigation
- [ ] Test with screen reader
- [ ] Verify color contrast ratios
- [ ] Check font sizes are readable
- [ ] Verify all interactive elements are accessible
- [ ] Test focus states

## Deployment Steps

### Step 1: Build Verification
```bash
npm run build
# Should complete with no errors
# dist/ folder should contain: index.html, assets/index-*.css, assets/index-*.js
```

### Step 2: Choose Hosting Platform

#### Option A: Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on git push
5. Configure custom domain

#### Option B: Netlify
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify deploy --prod --dir=dist`
3. Or connect GitHub for continuous deployment
4. Set environment variables in Netlify dashboard
5. Configure custom domain

#### Option C: Traditional Hosting (AWS S3, etc.)
1. Build project: `npm run build`
2. Upload `dist/` folder to server
3. Configure web server for SPA routing
4. Enable compression and caching
5. Configure SSL/HTTPS

### Step 3: Environment Variables
Set these in your hosting platform:
```
VITE_SUPABASE_URL=production_url
VITE_SUPABASE_ANON_KEY=production_anon_key
```

### Step 4: Database Preparation
1. Ensure Supabase project is backed up
2. Run migrations if not already done
3. Seed initial data (modules, schemes)
4. Verify all tables have RLS enabled
5. Test data access permissions

### Step 5: Domain Configuration
1. Point domain DNS to hosting provider
2. Configure SSL certificate (usually automatic)
3. Set up custom domain in Supabase
4. Configure CORS if needed
5. Test domain accessibility

### Step 6: Post-Deployment Testing
- [ ] Verify app loads at custom domain
- [ ] Test user signup and signin
- [ ] Complete onboarding flow
- [ ] Test learning modules
- [ ] Test chatbot functionality
- [ ] Test community posting
- [ ] Check schemes display
- [ ] Verify all links work
- [ ] Test on mobile
- [ ] Verify analytics are tracking

## Monitoring Setup

### Error Tracking
- [ ] Set up Sentry (optional but recommended)
- [ ] Configure error notifications
- [ ] Test error handling

### Performance Monitoring
- [ ] Enable Google Analytics
- [ ] Set up Core Web Vitals tracking
- [ ] Monitor API response times
- [ ] Track user engagement metrics

### Health Checks
- [ ] Set up uptime monitoring
- [ ] Configure SSL certificate renewal
- [ ] Enable backup notifications

## Maintenance Tasks

### Daily
- [ ] Monitor error logs
- [ ] Check database health
- [ ] Verify all services running

### Weekly
- [ ] Review analytics
- [ ] Check for failed transactions
- [ ] Test critical user flows
- [ ] Review user feedback

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Review and optimize database queries
- [ ] Backup database
- [ ] Review security logs
- [ ] Check for broken links
- [ ] Review user metrics

### Quarterly
- [ ] Security audit
- [ ] Performance optimization review
- [ ] Update content (modules, schemes)
- [ ] Plan feature releases
- [ ] Review and update documentation

## Rollback Plan

### If Issues Arise
1. Identify the problem
2. Check logs and error tracking
3. Revert to previous version if needed
4. Update environment variables if required
5. Verify fix in staging first
6. Redeploy if necessary

### Database Rollback
1. Restore from backup
2. Verify data integrity
3. Test critical flows
4. Monitor for issues

## Post-Deployment Checklist

- [ ] App is live and accessible
- [ ] All features working as expected
- [ ] No console errors
- [ ] Analytics tracking correctly
- [ ] Error monitoring configured
- [ ] Backups enabled
- [ ] SSL certificate active
- [ ] Performance acceptable
- [ ] User documentation accessible
- [ ] Support team trained
- [ ] Monitoring alerts configured
- [ ] Downtime notification process established

## Emergency Contacts

**During Issues:**
- DevOps Lead: [Contact Info]
- Database Admin: [Contact Info]
- Frontend Lead: [Contact Info]

## Deployment Sign-Off

- [ ] Project Lead approval
- [ ] Security team approval
- [ ] DevOps team approval
- [ ] QA team approval
- [ ] Product owner approval

---

**Deployment Date**: _______________
**Deployed By**: _______________
**Verified By**: _______________

