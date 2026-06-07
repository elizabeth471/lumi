# Testing Protocol — Customizable Framework for Ian

**Purpose**: Define how we test everything we build before delivery. This is a living document that Ian can modify based on his experience and preferences.

**Current Status**: Placeholder framework (based on research). Ready for Ian's input and customization.

---

## My Autonomous Testing Capability

I can test everything locally and autonomously before you see it. Here's what I can do without human intervention:

### What I Test Autonomously

**Code Quality**
- Type checking (TypeScript compilation)
- Linting (ESLint, Prettier)
- Build process (Next.js, Electron, etc.)
- Unit test execution (if tests exist)

**Functionality**
- Component rendering (visual check)
- State management (Redux, Context, local state)
- Navigation flows (routing, page transitions)
- Form submission (input validation, error handling)
- API integration (mock requests, response handling)

**Performance**
- Build time and size
- Bundle analysis (code splitting efficiency)
- Initial load time
- Memory usage during operation
- CPU usage under normal conditions

**Accessibility**
- Automated WCAG 2.1 checks (axe, lighthouse)
- Color contrast validation
- Screen reader compatibility (basic)
- Keyboard navigation testability
- Semantic HTML structure

**Visual/UI**
- Screenshot comparison (visual regression testing)
- Responsive layout (mobile/tablet/desktop)
- Theme switching (light/dark mode)
- Animation performance (frame rate, jank)
- Cross-browser compatibility

### What I Can't Test Autonomously (Needs Human)

- User experience (how it *feels* to use)
- Accessibility in real screen readers (just detection)
- Real-world performance (actual network conditions)
- Edge cases I haven't anticipated
- Acceptance criteria you have in mind but didn't state
- Emotional response or brand alignment

---

## Testing Framework Levels

### Level 1: Smoke Test (Always Run)
Quick check that the build doesn't break.

```
Duration: 2-5 minutes
Cost: Low (~$0.02)
What I check:
- Code compiles without errors
- No TypeScript errors
- No critical linting issues
- App starts (no runtime errors on load)
- Navigation works (basic routing)
```

### Level 2: Functional Test (Every Feature)
Verify the feature works as intended.

```
Duration: 5-15 minutes per feature
Cost: Medium (~$0.05-0.10 per feature)
What I check:
- User flow works end-to-end
- Forms accept valid input
- Errors display for invalid input
- State persists (if applicable)
- No console errors
- Expected data appears on screen
```

### Level 3: Performance Test (Before Delivery)
Ensure nothing is slow or heavy.

```
Duration: 10-20 minutes
Cost: Medium (~$0.08)
What I check:
- Initial load time <3s
- Page transitions <1s
- Memory doesn't leak (consistent across multiple actions)
- CPU doesn't spike >50%
- Bundle size within limits
- No unnecessary re-renders
```

### Level 4: Accessibility Audit (Before Delivery)
Verify WCAG 2.1 AA compliance.

```
Duration: 15-30 minutes
Cost: Medium (~$0.10)
What I check:
- Color contrast ratios
- Keyboard navigation works
- Focus indicators visible
- Form labels properly associated
- Alternative text for images
- Semantic HTML structure
- Reduced motion respected
- Screen reader announces key elements
```

### Level 5: Integration Test (Complex Features)
Test how multiple parts work together.

```
Duration: 20-45 minutes
Cost: Higher (~$0.15)
When I run this:
- Multiple features interact (e.g., chat + animations)
- External API calls involved
- Complex state management
- Multi-step workflows
What I check:
- All parts communicate correctly
- No data loss between steps
- Error in one part doesn't break others
- State is consistent across features
```

### Level 6: Real-World Scenario Test (Before Major Delivery)
Test like an actual user would.

```
Duration: 30-60 minutes
Cost: High (~$0.20+)
When I run this:
- Major feature or redesign
- Before showing to Ian or external users
- Before deploying to production
What I check:
- Complete user journey (start to finish)
- Realistic edge cases (weird inputs, slow network)
- Accessibility for diverse users (keyboard-only, screen reader, etc.)
- Performance under realistic conditions
- Visual polish and design consistency
```

---

## Testing for Each Project Type

### Next.js Prototype Testing

```
Smoke Test:
- npm run build (successful)
- npm run dev (starts without errors)
- Home page loads in <2s
- Navigation links work

Functional Test (per page):
- Page loads
- All interactive elements respond
- Forms submit/validate
- Data displays correctly

Performance Test:
- npm run build size (target: <500KB gzipped for app code)
- npm run dev initial load time (<3s)
- Page transitions smooth (60 FPS)
- No console errors or warnings

Accessibility Test:
- axe scan (0 critical/serious issues)
- Lighthouse accessibility score >90
- Tab navigation works
- Color contrast ≥4.5:1
```

### Electron Desktop App Testing

```
Smoke Test:
- npm run dev opens window without crash
- No main process errors
- Window is responsive

Functional Test:
- Window controls work (minimize, close)
- Settings save/load correctly
- Configuration changes apply
- IPC messages work

Performance Test:
- Idle CPU <5%
- Memory usage <150MB
- Window draw time <16ms (60 FPS)
- Configuration load <500ms

Accessibility Test:
- Keyboard-only navigation possible
- High contrast mode works
- Reduced motion respected
- Screen reader can identify elements
```

### HTML/CSS Testing

```
Smoke Test:
- HTML validates (no critical errors)
- CSS parses correctly
- Page renders without layout breaks

Functional Test:
- All interactive elements work
- Forms submit
- Dropdowns expand/collapse
- Modals open/close

Visual Test:
- Layout is responsive (mobile/tablet/desktop)
- Colors match design spec
- Spacing is consistent
- Animations are smooth

Accessibility Test:
- Color contrast sufficient
- Keyboard navigation works
- Semantic HTML used
- ARIA labels present where needed
```

---

## Testing Checklist (Used Before Delivery)

This checklist runs automatically before I show you anything.

### Pre-Delivery Checklist

- [ ] **Code Quality**
  - [ ] TypeScript/JavaScript compiles without errors
  - [ ] Linting passes (ESLint rules green)
  - [ ] No console errors in development mode
  - [ ] No console warnings (excluding expected third-party)

- [ ] **Build & Performance**
  - [ ] Build completes successfully
  - [ ] Bundle size within target (document target)
  - [ ] Initial load time <3 seconds
  - [ ] No visual jank (60 FPS during animations)

- [ ] **Functionality**
  - [ ] All new features work as described
  - [ ] No regression (existing features still work)
  - [ ] Error handling works (graceful failures)
  - [ ] Edge cases handled (empty states, errors, etc.)

- [ ] **Accessibility**
  - [ ] WCAG 2.1 AA compliance verified (axe/lighthouse)
  - [ ] Color contrast sufficient (4.5:1 minimum)
  - [ ] Keyboard navigation complete
  - [ ] Screen reader friendly (semantic HTML)

- [ ] **Visual**
  - [ ] Responsive on mobile/tablet/desktop
  - [ ] Theme switching works (light/dark)
  - [ ] Design matches specification
  - [ ] No layout shifts or unexpected rendering

- [ ] **Cross-Platform** (if applicable)
  - [ ] Tested on Chrome/Safari/Firefox
  - [ ] Tested on macOS/Windows/Linux (if desktop)
  - [ ] Mobile and desktop both work

---

## Testing Your Way (Customization)

This framework is a starting point. I want to adjust it based on your preferences.

### Questions for You

**About testing depth:**
- Are these 6 levels right, or do you want fewer/more?
- Are there specific test types you care more about?
- Which tests should I always run vs. optional?

**About testing scope:**
- Do you have existing test files I should run?
- Are there specific performance targets I should hit?
- Do you test for accessibility more/less than WCAG AA?

**About testing process:**
- When should I test? (After every commit? Before showing you? Before deploying?)
- Should I show you test results automatically, or only if something fails?
- Do you want a summary, detailed report, or both?

**About specialized testing agents:**
- Would a dedicated testing agent be useful? (I can build one)
- Would you want A/B testing capabilities?
- Would you want load testing (simulate multiple users)?
- Would you want automated screenshot comparison?

**About tools:**
- Do you use specific testing tools I should integrate?
- Do you use Test-Driven Development (tests first)?
- Do you have CI/CD tests that should pass?

---

## Integration with Development Workflow

### Option A: Test After Every Commit
```
I build → I test → I show you results → You review
(Most thorough, takes longer)
```

### Option B: Test Before Showing You Anything
```
I build → I smoke test → If pass, I show you → You decide if you want full test report
(Fast iteration, details on demand)
```

### Option C: Test on Demand
```
You request testing → I test specific area → I report results
(Minimal overhead, manual control)
```

### Option D: Tiered Approach
```
Smoke test always → Full test before major delivery → Performance test monthly
(Balanced)
```

---

## Example Testing Sequence (Real Scenario)

**Scenario**: You ask me to build an Ian login feature for Blossom OS.

**My process:**

1. **Code & Build**
   - Write code
   - TypeScript compiles ✓
   - ESLint passes ✓
   - Build succeeds ✓

2. **Smoke Test (2 min)**
   - Load Blossom OS ✓
   - Click "Ian" login button ✓
   - Page transitions ✓

3. **Functional Test (5 min)**
   - Type Ian's name ✓
   - Click preferences form ✓
   - Save preferences ✓
   - Preferences persist on reload ✓
   - No console errors ✓

4. **Accessibility Test (10 min)**
   - Tab through form fields ✓
   - Focus visible on each field ✓
   - Color contrast (4.5:1) ✓
   - Screen reader announces form labels ✓
   - Lighthouse a11y score: 95 ✓

5. **Summary Report** (1 min)

```
✅ Ian Login Feature — Ready for Review

Smoke Test: PASS (3 min)
Functional Test: PASS (5 min)
Accessibility Test: PASS (10 min)

Key findings:
- Form submission <200ms (fast)
- Preference storage works
- Tab order is logical

Known limits:
- Not tested with actual screen reader
- Not tested on actual mobile device (only responsive view)
- Email validation is basic

Recommendation: Ready to show Ian
```

**Then**: I show you the feature, you test it with real eyes, provide feedback.

---

## What I'm Learning

Every time we test, I learn:
- What tests catch real issues vs. false positives
- Which test levels are most valuable for this project
- Where you care most about quality
- How we can test faster without sacrificing quality

This document will evolve with your feedback.

---

## Next Steps

1. **During Ian's first session**: I'll ask these questions naturally
2. **Based on Ian's answers**: I'll customize the testing protocol
3. **Month 1**: We'll refine based on real experience
4. **Month 2+**: The protocol becomes automatic (you don't think about it)

---

## Implementation Status

- [x] Autonomous testing capability documented
- [x] Testing framework levels defined (1-6)
- [x] Testing checklists created (pre-delivery)
- [x] Project-specific testing guides (Next.js, Electron, HTML)
- [x] Customization questions ready for Ian
- [x] Example workflow provided
- [ ] Integrate with Blossom OS dashboard (show test results live)
- [ ] Build dedicated testing agent (if Ian wants)
- [ ] Set up automated CI/CD testing (future)

---

**When Ian asks:** "How do you test everything?"

**I'll respond:** 
"I test six levels — smoke test to full integration. I can run all of this autonomously before you see it. Smoke tests take 2-5 minutes, full tests might take 30-60 minutes. But here's the thing: I'm not sure which of these actually matters to you. Some teams care most about performance. Some care most about accessibility. Some have testing tools they're already using. What matters to you?"

**Then we customize based on his answer.**

---

**Last updated:** June 7, 2026  
**Maintained by:** Blossom (Admin Agent)  
**Ready for:** Ian's first technical conversation
