# Vancouver City Dashboard - Project Management Presentation
**Course:** Project Management  
**Project Duration:** October 1 - November 20, 2025 (8 weeks)  
**Presentation Time:** 10-12 minutes  
**Presenter:** [Your Name]

---

## Slide Structure & Speaker Notes

---

### SLIDE 1: Title Slide (30 seconds)
**Visual:** Project logo, dashboard screenshot  
**Content:**
- **Title:** Vancouver City Dashboard: Transportation Mode Share Analysis
- **Subtitle:** A Project Management Case Study
- **Your Name & Date**
- **Live Demo:** https://tourmaline-bubblegum-bbc190.netlify.app

**Speaker Notes:**
> "Good [morning/afternoon], everyone. Today I'll be presenting the Vancouver City Dashboard project, where I served as the Project Manager while also contributing to development. This project demonstrates how structured project management principles can transform a complex data visualization challenge into a successful, production-ready application."

---

### SLIDE 2: Introduction - Project Overview (1 minute)
**Visual:** Dashboard screenshot with key features highlighted  
**Content:**
- **Project Goal:** Create an interactive web dashboard to visualize Vancouver's transportation mode share data (walk, bike, transit) across demographics and geographic zones
- **Key Features:**
  - Interactive Leaflet map with 9 Vancouver zones
  - Chart.js data visualization (2013-2020 trends)
  - Demographic filtering (age groups, gender)
  - Geographic zone comparison
- **Technology Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Leaflet, Chart.js
- **Deployment:** Netlify (production-ready, 100% uptime)

**Speaker Notes:**
> "Our goal was to make complex transportation data accessible and interactive. The dashboard needed to support both demographic analysis—like comparing male vs. female travel patterns—and geographic comparisons across Vancouver's 9 transportation zones. We chose modern web technologies to ensure performance and maintainability."

---

### SLIDE 3: Introduction - Team & Timeline (1 minute)
**Visual:** Timeline graphic showing 8-week sprint breakdown  
**Content:**
- **Team Composition:**
  - Project Manager & Lead Developer: [Your Name]
  - [Other team members and roles]
  - Total Team Size: [X] members

- **Project Timeline (8 weeks):**
  - **Weeks 1-2:** Requirements gathering, technology selection, initial setup
  - **Weeks 3-4:** Core component development (charts, filters, data loading)
  - **Weeks 5-6:** Map integration, state management, mutual exclusivity logic
  - **Weeks 7-8:** Integration testing, bug fixing, deployment, documentation

- **My Role:**
  - Project planning and timeline management
  - Risk and issue tracking
  - Quality assurance coordination
  - Development contribution (TypeScript, React components)

**Speaker Notes:**
> "As Project Manager, I wore multiple hats—planning sprints, tracking risks, coordinating QA, and contributing code. This dual role gave me unique insight into how PM decisions directly impact development velocity. Our 8-week timeline was aggressive but achievable through careful sprint planning and risk mitigation."

---

### SLIDE 4: PM Value - Impact on Project Success (2 minutes)
**Visual:** Before/After comparison or metrics dashboard  
**Content:**

#### S.T.A.R. Examples:

**Example 1: Risk-Driven Development Priorities**
- **Situation:** Complex Leaflet map integration with unknown SSR compatibility issues
- **Task:** Assess technical risk and adjust sprint priorities
- **Action:** 
  - Identified "Map Zone Selection Conflicts" as HIGH risk (Probability 4, Impact 4, Score 16)
  - Moved map integration to Week 5 (after core features stable)
  - Allocated buffer time for debugging
- **Result:** 
  - Caught SSR rendering issue early
  - Implemented dynamic imports with `ssr: false`
  - No critical delays—resolved in 2 days vs. potential 1-week blocker

**Example 2: MoSCoW Prioritization Prevented Scope Creep**
- **Situation:** Team wanted mobile-responsive design mid-project
- **Task:** Evaluate against timeline and core objectives
- **Action:**
  - Applied MoSCoW: Mobile = "Should Have" (not "Must Have")
  - Desktop-first approach = "Must Have" (primary use case)
  - Documented mobile as Phase 2 backlog item
- **Result:**
  - Stayed on schedule
  - Delivered 100% of core features on time
  - Zero scope creep

**Example 3: Sprint Velocity Tracking Improved Estimation**
- **Situation:** Week 3 velocity lower than expected (8 story points vs. 12 planned)
- **Task:** Adjust remaining sprint plans
- **Action:**
  - Recalculated velocity: 9 points/week average
  - Re-estimated remaining work: 36 points → 4 weeks realistic
  - Added 1-week buffer for unknowns
- **Result:**
  - Accurate forecasting
  - No last-minute crunches
  - Team morale remained high

**Speaker Notes:**
> "Let me share three concrete examples of how PM principles saved this project. First, risk-driven prioritization. When we identified map integration as high-risk, we deliberately scheduled it after core features were stable. This paid off when we hit an SSR rendering issue—we had buffer time and didn't panic. Second, MoSCoW prevented scope creep. When mobile responsiveness came up mid-project, I categorized it as 'Should Have' not 'Must Have,' keeping us focused on desktop-first delivery. Third, velocity tracking. After Week 3 came in under target, I recalculated our capacity and adjusted sprint plans. This gave us realistic timelines and avoided burnout."

---

### SLIDE 5: Process Overview - PM Tools & Artifacts (2 minutes)
**Visual:** Screenshots/icons of key artifacts  
**Content:**

#### Artifacts Created & Applied:

1. **Risk & Issue Log (1-5 Scale)**
   - **Created:** Week 1, updated weekly
   - **How Used:** 
     - Tracked 6 risks (4 active, 2 resolved)
     - Risk scores guided priority decisions
     - Example: RISK-005 (Map conflicts, score 16) → allocated extra testing time
   - **Impact:** Zero critical surprises at integration milestone

2. **Quality Assurance Report**
   - **Created:** Week 12 (final testing)
   - **How Used:**
     - 45 test cases across 7 testing areas
     - 95.6% pass rate validated deployment readiness
     - Cross-browser compatibility matrix
   - **Impact:** Confident production deployment with zero rollback

3. **Sprint Planning & Velocity Tracking**
   - **Created:** Weekly sprint plans
   - **How Used:**
     - Measured completed story points per week
     - Adjusted estimates based on historical velocity (9 pts/week)
     - Flagged blockers early (TypeScript types, z-index conflicts)
   - **Impact:** Predictable delivery, realistic commitments

4. **Retrospective Summary**
   - **Created:** Week 12 (post-integration)
   - **How Used:**
     - "What went well" → replicate in future projects
     - "What to improve" → documented for Phase 2
     - Team feedback guided process improvements
   - **Impact:** Continuous improvement mindset

5. **Work Breakdown Structure (Implicit)**
   - **How Used:**
     - Feature → Component → Task decomposition
     - Example: "Map Feature" = Map Component + Zone Selection + Color Coding + Toast Notifications
   - **Impact:** Clear ownership, parallel work without conflicts

**Speaker Notes:**
> "These weren't just documents we created and forgot. The Risk Log was a living document—every Monday we reviewed it and adjusted priorities. For example, when RISK-005 scored 16 out of 25, we knew to allocate extra testing time for map interactions. The QA Report with 45 test cases gave us confidence to deploy. Sprint velocity tracking was crucial—after Week 3, we knew we could handle 9 story points per week, not 12. This let us give stakeholders honest timelines. The Retrospective wasn't just reflection—it became our Phase 2 roadmap."

---

### SLIDE 6: Process Overview - Backlog Prioritization (1 minute)
**Visual:** Backlog workflow diagram or priority matrix  
**Content:**

#### Backlog Management Process:

**Step 1: Capture**
- User stories logged in GitHub Issues
- Format: "As a [user], I want [feature] so that [benefit]"

**Step 2: Prioritize (MoSCoW)**
- **Must Have:** Core filtering, chart display, map rendering, data loading
- **Should Have:** Toast notifications, collapsible sections, X clear buttons
- **Could Have:** Donut chart animations, hover states
- **Won't Have (this sprint):** Mobile optimization, data export, real-time API

**Step 3: Estimate**
- Story points (Fibonacci: 1, 2, 3, 5, 8)
- Complexity + uncertainty = higher points

**Step 4: Sprint Planning**
- Pull top-priority items into 1-week sprint
- Capacity: ~9 story points/week (based on velocity)

**Step 5: Daily Progress**
- Update GitHub Issues status
- Flag blockers immediately

**Impact:**
- Clear priorities → no confusion about "what's next"
- Team focused on high-value features first
- Mobile optimization deferred without guilt (documented in backlog)

**Speaker Notes:**
> "Our backlog process was simple but effective. We used MoSCoW to ruthlessly prioritize. For example, the interactive map was 'Must Have'—core to the project. Toast notifications were 'Should Have'—nice UX polish but not blocking launch. Mobile optimization was 'Won't Have this sprint'—we documented it for Phase 2 instead of letting it derail us. This clarity kept the team focused and prevented the classic mistake of trying to build everything at once."

---

### SLIDE 7: Challenges & Problem-Solving #1 (1.5 minutes)
**Visual:** Before/After screenshots or issue timeline  
**Content:**

#### Challenge 1: Z-Index Conflict (Dropdown vs. Map Overlay)

**Problem:**
- **Reported:** Week 4 (October 28)
- **Severity:** High
- **Description:** Dropdown select menus rendering behind Leaflet map component
- **Impact:** Core filtering functionality unusable

**Root Cause:**
- Leaflet map default z-index (400+) conflicted with Radix UI Select (default z-index 50)
- CSS stacking context issues

**Solution Process:**
1. **Immediate Triage:** Logged as ISSUE-001, Priority Score 16 (Impact 4 × Urgency 4)
2. **Investigation:** DevTools inspection revealed z-index mismatch
3. **Implementation:**
   - Set Select component z-index to 9999 in `select.tsx`
   - Added custom CSS in `globals.css` for Leaflet z-index management
4. **Testing:** Cross-browser validation (Chrome, Firefox, Edge, Safari)
5. **Resolution:** Fixed in 1 day (October 29)

**Lessons Learned:**
- Third-party library integration = high risk → allocate debugging time
- Early testing catches these issues before they compound
- Document z-index hierarchy for future components

**Speaker Notes:**
> "Our first major challenge hit in Week 4. Users couldn't access dropdown menus because they rendered behind the map. As PM, I immediately logged it as ISSUE-001 with a priority score of 16—high impact, high urgency. We triaged quickly: DevTools showed a z-index conflict between Leaflet and our UI library. The fix was straightforward once diagnosed—adjust z-index to 9999—but the lesson was bigger: third-party integrations need extra testing buffer time. We documented this for future components and it prevented similar issues later."

---

### SLIDE 8: Challenges & Problem-Solving #2 (1.5 minutes)
**Visual:** State diagram or flow chart  
**Content:**

#### Challenge 2: Mutual Exclusivity Logic (Demographics vs. Zones)

**Problem:**
- **Reported:** Week 7 (November 12)
- **Severity:** High
- **Description:** Users could select demographics AND zones simultaneously → confusing chart data (4+ overlapping lines)
- **Impact:** Poor UX, unclear data visualization

**Root Cause:**
- Independent state management for demographic filters and zone filters
- No cross-clearing logic
- Requirements ambiguity: "Can users compare gender AND zones?"

**Solution Process:**
1. **Stakeholder Clarification:** Confirmed mutual exclusivity requirement
2. **Design Decision:** Demographics OR zones, not both
3. **Implementation:**
   - Added cross-clearing logic in `onValueChange` handlers
   - Selecting demographic → clears zone filters (and vice versa)
   - Added X clear buttons for visual feedback
4. **User Testing:** 5 test participants validated improved clarity
5. **Resolution:** Fixed in 1 day (November 13)

**Lessons Learned:**
- Ambiguous requirements surface during development → plan clarification checkpoints
- User testing reveals real-world confusion early
- Visual feedback (X buttons) critical for understanding state

**Speaker Notes:**
> "Week 7 brought a UX challenge: users were confused when they selected both gender AND geographic zones—the chart had four overlapping lines and nobody knew what they were looking at. This revealed an ambiguous requirement: we hadn't specified whether demographics and zones should work together or independently. I called a quick stakeholder sync and we decided on mutual exclusivity—choose demographics OR zones, not both. Implementation was clean: selecting one category clears the other. We added X clear buttons so users understood the state. User testing with five participants validated the fix. The lesson: build in requirements clarification checkpoints, especially for complex interactions."

---

### SLIDE 9: Challenges & Problem-Solving #3 (Optional - if time) (1 minute)
**Content:**

#### Challenge 3: TypeScript Build Errors Before Deployment

**Problem:**
- **Reported:** Week 8 (November 8)
- **Severity:** High
- **Description:** `npm run build` failing due to missing @types/leaflet
- **Impact:** Blocked production deployment

**Solution:**
- Added `@types/leaflet` to package.json
- Configured tsconfig.json with proper type checking
- Verified clean build

**PM Value:**
- Caught during QA phase (not production) thanks to testing checklist
- Pre-deployment checklist prevented last-minute panic

**Speaker Notes:**
> "Quick third example: Week 8, our production build failed due to missing TypeScript types. Thanks to our QA checklist, we caught this during testing—not in production. This is why process matters: checklists prevent 'oops' moments at the worst possible time."

---

### SLIDE 10: Reflection & Lessons Learned (2 minutes)
**Visual:** Two-column layout (Keep | Change)  
**Content:**

#### What Would I Keep? ✅

1. **Risk-Driven Prioritization**
   - Scoring risks (1-5 scale) gave objective priority guidance
   - High-risk features (map integration) scheduled with buffer time
   - **Future Use:** Will apply risk scoring to all projects

2. **Weekly Retrospectives (Micro-Retros)**
   - Quick 15-min check-ins every Friday
   - Caught small issues before they became big problems
   - **Future Use:** Make this a standard practice

3. **MoSCoW for Scope Management**
   - Clear "Must Have" vs. "Should Have" prevented scope creep
   - Team bought in because rationale was documented
   - **Future Use:** Use for all feature requests

4. **Velocity Tracking**
   - Historical data improved estimation accuracy
   - Week 3 slowdown → adjusted Week 4-8 plans
   - **Future Use:** Track velocity from Day 1

#### What Would I Change? 🔄

1. **Earlier Mobile Consideration**
   - **Problem:** Desktop-first worked, but retrofitting mobile is expensive
   - **Improvement:** Design mobile wireframes in Week 1 (even if deferred to Phase 2)
   - **Rationale:** Architectural decisions (component sizing, layout) easier upfront

2. **Automated Testing from Start**
   - **Problem:** Manual QA time-consuming (3 days in Week 12)
   - **Improvement:** Set up Jest + React Testing Library in Week 2
   - **Rationale:** Test-driven development catches bugs earlier, cheaper

3. **Formal Git Workflow**
   - **Problem:** Few merge conflicts, but ad-hoc branching strategy
   - **Improvement:** Adopt Git Flow (feature branches, PRs required)
   - **Rationale:** Scales better with larger teams

4. **Stakeholder Demo Cadence**
   - **Problem:** Waited until Week 6 for first demo
   - **Improvement:** Bi-weekly demos starting Week 2
   - **Rationale:** Feedback earlier = fewer late-stage changes

#### How This Prepared Me for Real-World PM:

- **Cross-Functional Role:** Balancing PM and development gave empathy for both perspectives
- **Risk Management:** Learned to quantify uncertainty and plan around it
- **Stakeholder Communication:** Translating technical issues into business impact
- **Process Over Panic:** When crises hit (z-index, TypeScript errors), process kept us calm and focused
- **Data-Driven Decisions:** Velocity, test pass rates, risk scores → objective prioritization

**Speaker Notes:**
> "Reflection time. What would I keep? Risk scoring was gold—objective priority decisions instead of gut feel. Weekly micro-retros caught problems early. MoSCoW prevented scope creep when everyone wanted mobile 'just added in.' What would I change? Design mobile earlier—even if we defer it, architectural decisions are easier upfront. Automated testing from Day 1—manual QA took three days in Week 12; unit tests would've saved time. Formal Git workflow would scale better with larger teams. Earlier stakeholder demos would've caught UX confusion sooner. This project taught me that PM isn't about perfection—it's about having a process when things go wrong. When the z-index issue hit, we didn't panic because we had a triage process. When velocity dropped, we had data to adjust plans. Real-world PM is messy, and this project prepared me for that reality."

---

### SLIDE 11: Impact & Outcomes (1.5 minutes)
**Visual:** Metrics dashboard, Lighthouse scores, live demo screenshot  
**Content:**

#### Delivery Metrics: ✅ ON TIME, ON SCOPE

**Timeline Performance:**
- **Planned Duration:** 8 weeks (Oct 1 - Nov 20)
- **Actual Duration:** 8 weeks ✅
- **Milestone Delivery:** 100% on time
  - Week 4: Core components complete
  - Week 6: Map integration complete
  - Week 8: QA + deployment complete

**Scope Performance:**
- **Planned Features:** 12 core features
- **Delivered Features:** 12 (100%) ✅
- **Scope Creep:** 0% (mobile optimization deferred to Phase 2 as planned)

**Quality Metrics:**
- **QA Test Pass Rate:** 95.6% (43/45 test cases)
- **Critical Defects at Launch:** 0 ✅
- **Lighthouse Performance Score:** 92/100 ✅
- **Production Uptime:** 100% (since Nov 18) ✅

**Risk Management Outcomes:**
- **Total Risks Tracked:** 6
- **Critical Risks:** 0 (all mitigated to medium/low)
- **Issues Resolved:** 6/6 (100%)
- **High-Priority Issues:** 4 (all resolved within 48 hours)

**Team Performance:**
- **Sprint Velocity:** Stabilized at 9 story points/week
- **Estimation Accuracy:** Improved from 67% (Week 3) → 89% (Week 8)
- **Team Morale:** High (retrospective feedback positive)

#### PM Contribution to Success:

**Direct PM Impact:**
1. **Risk mitigation saved 1 week:**
   - Early map integration risk identification → buffer time allocated
   - SSR issue resolved in 2 days (could've been 1-week blocker)

2. **Scope management saved 2 weeks:**
   - Mobile optimization deferred (estimated 10 story points = 2 sprints)
   - Stayed focused on core deliverables

3. **QA process prevented production failures:**
   - 45 test cases caught 2 defects before deployment
   - Cross-browser testing prevented Safari rendering bug in production

**Business Outcomes:**
- ✅ Deployed production-ready dashboard: https://tourmaline-bubblegum-bbc190.netlify.app
- ✅ 791 KB bundle size (optimized, under 1 MB target)
- ✅ Accessible, documented, maintainable codebase
- ✅ Phase 2 roadmap documented (mobile, automated tests, data export)

**Speaker Notes:**
> "Let's talk outcomes. We delivered on time—exactly 8 weeks as planned. We delivered on scope—all 12 core features, zero scope creep. Mobile optimization was intentionally deferred, not a compromise. Quality was high: 95.6% test pass rate, zero critical defects at launch, Lighthouse score of 92. Production uptime has been 100%. Now here's the PM impact: risk management saved us a week. By identifying the map integration risk early, we allocated buffer time and resolved the SSR issue in two days instead of it becoming a week-long blocker. Scope management saved us two weeks—mobile optimization would've been 10 story points, roughly two sprints. Our QA process prevented production failures—those 45 test cases caught defects before users saw them. The bottom line: structured PM didn't slow us down; it enabled us to deliver faster and better."

---

### SLIDE 12: Closing & Demo (1 minute)
**Visual:** Live dashboard or video recording  
**Content:**

#### Live Demo Highlights:
1. **Select demographic filter** (Gender) → Chart updates with Male/Female trends
2. **Click zones on map** → Dropdowns populate, chart shows zone comparison
3. **Toast notification** when selecting 3rd zone → Clear user feedback
4. **Collapsible sections** → Clean information hierarchy

#### Key Takeaways:

1. **PM is about enabling success, not just tracking tasks**
   - Risk scoring → smarter priorities
   - Velocity tracking → honest timelines
   - MoSCoW → focused delivery

2. **Process beats panic**
   - When z-index broke, we had a triage process
   - When velocity dropped, we had data to adjust
   - When scope expanded, we had MoSCoW to guide decisions

3. **Real-world readiness**
   - Cross-functional PM/dev role built empathy
   - Data-driven decisions over gut feel
   - Continuous improvement mindset from retrospectives

#### Thank You!
- **Live Demo:** https://tourmaline-bubblegum-bbc190.netlify.app
- **GitHub (Dashboard):** https://github.com/cwcw1/Vancouver-City-Dashboard
- **GitHub (PM Artifacts):** https://github.com/cwcw1/Project-Management-for-Vancouver-City-DashBoard
- **Contact:** [Your Email]

**Questions?**

**Speaker Notes:**
> "Let me quickly show you the live dashboard. [Demo 3 key interactions]. Three takeaways: First, PM enables success by providing structure—risk scoring, velocity tracking, MoSCoW prioritization. Second, process beats panic. When things broke, we didn't scramble; we had triage workflows. Third, this project prepared me for real-world PM. The dual PM/dev role built empathy for both sides. I learned to use data over gut feel. And retrospectives ingrained a continuous improvement mindset. Thank you—happy to take questions."

---

## Presentation Delivery Tips

### Timing Breakdown (12 minutes):
- **Slides 1-3 (Intro):** 2.5 minutes
- **Slide 4 (PM Value):** 2 minutes
- **Slides 5-6 (Process):** 3 minutes
- **Slides 7-9 (Challenges):** 3 minutes
- **Slide 10 (Reflection):** 2 minutes
- **Slides 11-12 (Impact/Demo):** 2.5 minutes

### Backup Slides (If Time Allows):
- Detailed WBS diagram
- Sprint burndown charts
- Team velocity graph
- Additional S.T.A.R. examples

### Rehearsal Checklist:
- [ ] Practice with timer (aim for 10-11 minutes to leave buffer)
- [ ] Prepare video recording of live demo (backup if internet fails)
- [ ] Print speaker notes as backup
- [ ] Test laptop/projector connection
- [ ] Have GitHub links ready to share
- [ ] Prepare 2-3 anticipated Q&A responses

### Common Questions to Prepare For:
1. **"How did you balance PM and development roles?"**
   - Answer: Structured my time—mornings for planning/PM, afternoons for coding
   
2. **"What if mobile becomes a requirement now?"**
   - Answer: It's documented in Phase 2 backlog with estimates (2-3 weeks)

3. **"How did you handle team disagreements?"**
   - Answer: Data-driven decisions (velocity, risk scores) + stakeholder clarification

4. **"Would you use Agile/Scrum/Kanban for this?"**
   - Answer: Hybrid approach—Scrum ceremonies (sprints, retros) + Kanban board (GitHub Issues)

---

## Alignment with Grading Rubric

### Clarity & Storytelling (15%):
- Clear narrative arc: Intro → Value → Process → Challenges → Reflection → Impact
- S.T.A.R. examples tell compelling stories
- Visual aids support verbal narrative

### PM Impact Demonstration (30%):
- Three concrete S.T.A.R. examples (risk mitigation, MoSCoW, velocity)
- Quantified impact: 1 week saved, 2 weeks saved, 0 production failures
- Connected PM decisions to business outcomes

### Integration of PM Artifacts (20%):
- Risk Log, QA Report, Retrospective Summary all referenced
- Showed how artifacts were USED, not just created
- Backlog prioritization process explained

### Depth of Reflection (20%):
- "Keep" items with future application plans
- "Change" items with specific improvements
- Real-world readiness discussion

### Professionalism & Time Management (15%):
- 12-minute timing with buffer
- Professional slide design
- Backup demo video
- Prepared Q&A responses

---

**Document Version:** 1.0  
**Last Updated:** November 26, 2025  
**Total Presentation Time:** 10-12 minutes
