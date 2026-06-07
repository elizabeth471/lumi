# lighttroupekids Prototype

A fully functional Next.js prototype implementing all 20 screens (10 parent + 10 child) of the lighttroupekids application.

**Built for:** Ian (tech co-founder candidate)
**Status:** Production-ready architecture, demo-scale data
**Live:** Run locally with `npm run dev`

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`

## What You Get

### Parent Experience (10 screens)
1. Welcome & onboarding
2. Account setup + first child creation
3. Dashboard with stats & quick actions
4. Activity library with filtering
5. Parental controls (time limits, content filtering)
6. Child progress tracking & learning insights
7. Settings (account, notifications, privacy)
8. Activity details & preview
9. Schedule assignment
10. Help center & FAQs

### Child Experience (10 screens)
1. Login (select child name)
2. Activity library
3. Video intro
4. Video playback interface
5. Reflection (rate experience)
6. Game intro
7. Game play (interactive grid)
8. Celebration on win
9. Learning intro
10. Learning activity (multiple choice Q&A)

## Testing the Prototype

**Parent flow:**
1. Click "I'm a Parent"
2. Fill out setup (any email, child name, 2+ interests)
3. Create account → lands on dashboard
4. Explore all parent screens from navigation

**Child flow:**
1. Click "I'm a Child"
2. Select child (uses profiles created in parent setup)
3. Pick an activity (video, game, or learning)
4. Complete the experience

All navigation is client-side. All state is temporary (no persistence).

## Architecture

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom brand colors
- **State:** React Context (AppContext)
- **Routing:** Client-side screen navigation

See `ARCHITECTURE.md` for detailed technical decisions, what's implemented vs. stubbed, and what to build next.

## Key Features

- ✅ All 20 screens rendered exactly per mockups
- ✅ Full Reed copy integrated
- ✅ Grove design system (colors, typography)
- ✅ Responsive (mobile-first for child screens)
- ✅ Interactive forms, game grid, video player mockup
- ✅ Animations (bounce, fade-in)
- ✅ Accessibility (focus visible, touch targets, alt text patterns)
- ✅ TypeScript throughout
- ✅ Production builds successfully

## What's Next

1. **Authentication** — Add backend login (OAuth or email-password)
2. **Data Persistence** — Replace local state with database
3. **Real Content** — Replace hardcoded activities with API
4. **Video Streaming** — Integrate real video player
5. **Analytics** — Track activity completion, time spent
6. **COPPA Compliance** — Ensure data collection meets regulations

See `ARCHITECTURE.md` for detailed implementation roadmap.

## File Structure

```
app/
├── components/          # All React components (reusable + screen-specific)
├── context/             # AppContext for state management
├── globals.css          # Brand styles & animations
├── layout.tsx           # Root layout
├── page.tsx             # Screen router
├── globals.d.ts         # TypeScript CSS module declaration
└── public/              # Static assets (add images here)

Configuration:
├── next.config.js
├── tailwind.config.js   # Brand colors pre-configured
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 12+)

Tested on:
- Desktop (1920x1080)
- Tablet (iPad, 768px width)
- Mobile (iPhone SE, 375px width)

## Development

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm start          # Run production build locally
npm run lint       # Run linter (if configured)
```

## Notes for Ian

1. **This is not a mockup** — every button is clickable, every form works, all screens navigate properly
2. **State is client-side only** — refresh the page and you lose all data. Perfect for demoing, but add persistence before real use
3. **All styling matches Grove** — colors, spacing, typography. Tailwind classes are semantic and documented in components
4. **No external APIs yet** — activities, user data, everything is hardcoded. Designed to swap for real APIs easily
5. **Ready for backend** — The Context structure and component hierarchy make it straightforward to replace `useState` with API calls

## Questions?

See `ARCHITECTURE.md` for detailed documentation on:
- Design decisions (why Next.js, why Tailwind, why Context)
- What's stubbed vs. fully implemented
- Specific technical choices and tradeoffs
- Detailed roadmap for the next phases

---

Built for validation. Ready to scale.
