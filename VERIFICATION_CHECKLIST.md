# Technical Verification Checklist

Use this checklist before and after deployment to ensure everything is working correctly.

---

## 🔧 PRE-DEPLOYMENT (LOCAL)

### Build & Dependencies
- [ ] `npm install` completes without errors
- [ ] `npm run build` succeeds (✓ Compiled successfully)
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No ESLint warnings: `npm run lint`
- [ ] `.next` folder created (< 500MB)

### Application Startup
- [ ] `npm run dev` starts on port 3000
- [ ] Browser loads: http://localhost:3000
- [ ] No errors in browser console
- [ ] No warnings in terminal
- [ ] Hot reload works (save file → auto-refresh)

### Environment Variables
- [ ] `.env.local` file exists
- [ ] `NEXT_PUBLIC_BASE_URL=http://localhost:3000` set
- [ ] No sensitive keys exposed
- [ ] `.env.local` added to `.gitignore`

---

## 🌐 URL VERIFICATION (LOCAL)

### Route Handlers
- [ ] http://localhost:3000/ loads (Hero visible)
- [ ] http://localhost:3000/robots.txt returns content
- [ ] http://localhost:3000/sitemap.xml returns XML
- [ ] http://localhost:3000/og.ts exists (generates image)

### Page Rendering
- [ ] Hero section renders
- [ ] Navigation responsive (desktop & mobile)
- [ ] No missing images/icons
- [ ] Text readable (color contrast)
- [ ] Animations smooth (60fps)

---

## 📋 METADATA VERIFICATION

### HTML Head
```bash
# Right-click → View Page Source
# Look for:
```
- [ ] `<title>Mukesh Pandi — Full Stack Developer & AI Builder`
- [ ] `<meta name="description" content="..."`
- [ ] `<meta property="og:image"`
- [ ] `<meta name="twitter:card"`
- [ ] `<script type="application/ld+json">` (2+ scripts)
- [ ] `<meta name="theme-color"`

### Structured Data
```bash
# DevTools → Right-click → Inspect
# Look for:
```
- [ ] Person schema with name, jobTitle
- [ ] Website schema with URL
- [ ] WebPage schema with description
- [ ] Valid JSON (no syntax errors)

### Canonical URL
- [ ] `<link rel="canonical" href="http://localhost:3000/"`
- [ ] Points to correct domain

---

## ♿ ACCESSIBILITY VERIFICATION

### Keyboard Navigation
- [ ] Press Tab → Skip link appears
- [ ] Continue Tab → All buttons highlighted
- [ ] Can reach all interactive elements
- [ ] Focus indicators visible
- [ ] No keyboard traps

### Screen Reader (NVDA/JAWS/VoiceOver)
- [ ] Page title announced
- [ ] Heading structure clear (h1 → h2)
- [ ] Buttons have labels (aria-label)
- [ ] Links descriptive (not "click here")
- [ ] Form fields labeled (future forms)
- [ ] Navigation landmarks recognized

### Color & Contrast
- [ ] All text ≥ 4.5:1 contrast ratio
- [ ] Cyan on dark: 10.5:1 ✅
- [ ] White on dark: 14.3:1 ✅
- [ ] Links distinguishable from text
- [ ] No color-only information

### Zoom & Responsive
- [ ] Zoom to 200% → readable
- [ ] Mobile (320px) → responsive
- [ ] Tablet (768px) → responsive
- [ ] Desktop (1440px) → optimized
- [ ] No horizontal scroll

### Motion
- [ ] Animations smooth
- [ ] No excessive movement
- [ ] Test with `prefers-reduced-motion`:
  - DevTools → 3-dots → More tools → Rendering
  - Check "Emulate CSS media feature prefers-reduced-motion"
  - Animations should disable or minimize

---

## 🎨 DESIGN CONSISTENCY

### Colors
- [ ] Background: #141827 (dark matte)
- [ ] Secondary: #1b2138
- [ ] Elevated: #232946
- [ ] Cyan: #0097b2 (accent)
- [ ] Gold: #b8922a (whisper)

### Typography
- [ ] Font: Geist Sans / Geist Mono
- [ ] Headings bold (700+)
- [ ] Body: readable size (16px+)
- [ ] Line height: ≥ 1.5

### Spacing
- [ ] Padding: consistent (6, 12 unit grid)
- [ ] Gap: 8, 16, 24, 32px
- [ ] Margin: clear visual hierarchy

---

## ⚡ PERFORMANCE VERIFICATION

### Lighthouse (Local)
```bash
npm run dev
# DevTools → Lighthouse → Analyze page load
```
- [ ] Performance: 95+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 100
- [ ] Overall: 95+

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] INP (Interaction to Next Paint): < 200ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

### No Console Errors
- [ ] DevTools → Console is empty
- [ ] No red error messages
- [ ] No yellow warnings
- [ ] Network requests: all 200/304

### Bundle Size
- [ ] Check DevTools → Network
- [ ] JavaScript total: < 200KB (gzipped)
- [ ] CSS: < 50KB (gzipped)
- [ ] Images optimized

---

## 🔐 SECURITY VERIFICATION

### Headers Present
- [ ] X-Frame-Options: SAMEORIGIN
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: strict-origin

### No Security Issues
- [ ] No inline styles (all Tailwind)
- [ ] No eval() or innerHTML
- [ ] No exposed API keys
- [ ] No debug code in production

### HTTPS Ready
- [ ] Vercel deployment will auto-HTTPS
- [ ] No hardcoded http:// URLs
- [ ] All external links use https://

---

## 📱 MOBILE OPTIMIZATION

### Viewport
- [ ] DevTools → Device Toolbar
- [ ] Mobile width: 375px (iPhone SE)
- [ ] Tablet width: 768px (iPad)
- [ ] Touch targets: ≥ 44px

### Mobile Lighthouse
- [ ] Performance: 95+ (mobile)
- [ ] Accessibility: 95+
- [ ] Speed Index: < 3.5s
- [ ] First Paint: < 1.5s

### Touch Interactions
- [ ] Buttons easily tappable
- [ ] No hover-only content
- [ ] Swipe gestures (if any) work
- [ ] No double-tap zoom needed

---

## ✅ PRODUCTION CHECKLIST

### Before Pushing to GitHub
- [ ] All tests pass locally
- [ ] No console errors/warnings
- [ ] Lighthouse 95+ (desktop)
- [ ] Lighthouse 95+ (mobile)
- [ ] Accessibility audit passed
- [ ] Security headers configured

### Before Deploying to Vercel
- [ ] GitHub repo up-to-date
- [ ] `.env.local` not committed
- [ ] `NEXT_PUBLIC_BASE_URL` ready to update
- [ ] Vercel account created
- [ ] Project connected to GitHub

### Post-Deploy Verification
- [ ] Production URL loads
- [ ] Robots.txt returns 200
- [ ] Sitemap.xml returns XML
- [ ] OG image generates
- [ ] Lighthouse 95+ (production)
- [ ] Core Web Vitals good
- [ ] No server errors (Vercel logs)

---

## 🧪 SOCIAL SHARING TESTS

### Test Each Platform

#### Twitter
```
1. https://cards-dev.twitter.com/validator
2. Input: https://your-domain.com
3. Verify:
   - [ ] Image displays (OG image)
   - [ ] Title shows
   - [ ] Description shows
   - [ ] "Card created 2 hours ago"
```

#### LinkedIn
```
1. https://www.linkedin.com/post-inspector/
2. Input: https://your-domain.com
3. Verify:
   - [ ] Image displays
   - [ ] Title shows
   - [ ] Description shows
   - [ ] URL correct
```

#### Discord
```
1. Create test server
2. Share: https://your-domain.com
3. Verify embed:
   - [ ] Title shows
   - [ ] Description shows
   - [ ] Image preview displays
   - [ ] URL clickable
```

#### Facebook (Optional)
```
1. https://developers.facebook.com/tools/debug/
2. Input: https://your-domain.com
3. Verify same as Twitter
```

---

## 🔍 SEO VERIFICATION

### Search Console Readiness
- [ ] robots.txt valid at /robots.txt
- [ ] sitemap.xml valid at /sitemap.xml
- [ ] Canonical URL set
- [ ] Mobile-friendly design
- [ ] Fast page load times

### Structured Data
- [ ] Rich Results Test: https://search.google.com/test/rich-results
- [ ] Input: https://your-domain.com
- [ ] Verify:
   - [ ] No errors
   - [ ] Person markup valid
   - [ ] Website markup valid

### Mobile-Friendly
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Input: https://your-domain.com
- [ ] Status: "Page is mobile friendly" ✅

### Page Speed
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Input: https://your-domain.com
- [ ] Desktop: 95+
- [ ] Mobile: 95+

---

## 📊 ANALYTICS SETUP

### Google Search Console
- [ ] Property added
- [ ] Verification method selected
- [ ] Verified (checkmark visible)
- [ ] Sitemap submitted
- [ ] Indexing requested

### Vercel Analytics
- [ ] Project created
- [ ] Deployments visible
- [ ] Analytics tab available
- [ ] Core Web Vitals tracked

### Google Analytics (Optional)
- [ ] GA4 property created
- [ ] Measurement ID: G-XXXXXXXXXX
- [ ] Added to .env.local (future)
- [ ] Real-time data visible

---

## 🚀 LAUNCH READINESS

### Content Ready
- [ ] Name: Mukesh Pandi ✓
- [ ] Title: Full Stack Developer & AI Builder ✓
- [ ] Bio: Current and accurate ✓
- [ ] Email: Valid and monitored ✓
- [ ] Links: GitHub/LinkedIn active ✓

### Site Ready
- [ ] All pages loading ✓
- [ ] Lighthouse 95+ ✓
- [ ] Mobile optimized ✓
- [ ] Accessible ✓
- [ ] SEO configured ✓
- [ ] Social previews working ✓

### Deployment Ready
- [ ] Vercel account set up ✓
- [ ] GitHub repo connected ✓
- [ ] Environment variables ready ✓
- [ ] Deployment preview checked ✓
- [ ] Production URL tested ✓

---

## ✨ FINAL VERIFICATION

### All Systems Go?
```
✅ Build passes
✅ Tests pass
✅ Lighthouse 95+
✅ Accessibility AAA
✅ SEO configured
✅ Mobile optimized
✅ Social previews working
✅ Security headers set
✅ No console errors
✅ Performance good
✅ Ready to launch!
```

---

## 🎯 Post-Launch (24 hours)

- [ ] Domain resolves correctly
- [ ] SSL certificate valid (HTTPS)
- [ ] Robots.txt accessible
- [ ] Sitemap in GSC
- [ ] Core Web Vitals in Vercel
- [ ] No errors in Vercel logs
- [ ] Analytics tracking (if enabled)

---

## 📝 Sign-Off

When all ✅ boxes checked, your portfolio is:
- **Production-ready** 🚀
- **SEO-optimized** 🔍
- **Performance-tuned** ⚡
- **Accessible** ♿
- **Social-shareable** 📱
- **Recruiter-friendly** 👨‍💼

**Ready to launch!** 🎉
