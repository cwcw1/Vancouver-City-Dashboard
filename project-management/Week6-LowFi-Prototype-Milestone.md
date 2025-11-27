# Week 6 – Low-Fi Prototype Milestone
**Project:** Vancouver City Dashboard  
**Date:** November 11, 2025  
**Sprint:** Weeks 4-6 (October 22 - November 11, 2025)

---

## 1. Sprint Report (Weeks 4-6)

### Sprint Velocity

| Metric | Week 4 | Week 5 | Week 6 | Total |
|--------|--------|--------|--------|-------|
| **Planned SP** | 12 | 10 | 12 | 34 |
| **Completed SP** | 8 | 9 | 11 | 28 |
| **Velocity %** | 67% | 90% | 92% | **82%** |
| **User Stories** | 5 | 6 | 7 | **18** |
| **Bugs** | 2 reported/2 fixed | 3/3 | 4/3 | 9/8 (1 open) |

**Key Insights:** ✅ Velocity improved 67%→92%, ⚠️ Week 4 slow (data complexity), ✅ Bug resolution on track

### Weekly Highlights

**Week 4 (Data):** ✅ Loaded 7 JSON files, error handling, UI scaffolding, Tailwind config  
_Challenges:_ JSON parsing (1 day), TypeScript types (0.5 day)

**Week 5 (Charts):** ✅ Chart.js line chart, custom legend, demographic/zone dropdowns functional  
_Challenges:_ Legend overlap fixed (1 day), useEffect dependency bug (0.5 day)

**Week 6 (Map):** ✅ Leaflet map (9 zones), basic zone click detection, donut charts, collapsible UI  
_Challenges:_ Leaflet SSR + GeoJSON rendering (2 days), z-index conflict (1 day)### Blockers Resolved (Avg 1.3 days)

| ID | Week | Issue | Impact | Resolution |
|----|------|-------|--------|-----------|
| BLK-001 | 4 | JSON parsing | 1 day | Fixed formatting |
| BLK-002 | 4 | TypeScript types | 0.5 day | Explicit types |
| BLK-003 | 5 | Legend overlap | 1 day | Custom component |
| BLK-004 | 6 | Leaflet SSR (RISK-001) | 2 days | Dynamic import `ssr: false` |
| BLK-005 | 6 | GeoJSON not rendering | 2 days | Fixed path + useRef |

---

## 2. Low-Fi Prototype Assessment

### ✅ Met Criteria (PASS)
1. ✅ All 7 data files load
2. ✅ Chart displays with default data
3. ✅ Demographic/zone dropdowns update chart
4. ✅ Map displays 9 zone boundaries
5. ✅ Tailwind styling applied, no console errors
6. ✅ Responsive desktop layout (1024px+)

### ⚠️ Deferred to High-Fi (Weeks 7-8)
- Map click-to-select (populates dropdowns)
- Interactive collapsibles (expand/collapse)
- Mutual exclusivity logic (demo vs. zone filters)
- Clear buttons (X) on filters

---

## 3. Lessons Learned (Weeks 4-6)

### ✅ What Went Well
- **RISK-001 Mitigation:** 2-day buffer for map integration paid off, team prepared for Leaflet SSR issues
- **Velocity Tracking:** Week 4 (67%) → adjusted to 9 SP/week for realistic planning
- **Daily Standups:** BLK-004 (Leaflet SSR) flagged Day 1, immediate pivot prevented multi-day blockage
- **Modular Architecture:** Chart continued working when map broke (isolation of concerns)

### 🔄 What To Improve
- **Earlier Spike Tasks:** Week 3 spike for Leaflet SSR would have caught dynamic import need earlier
- **Story Breakdown:** US-4.1 (8 pts) too large → split stories >5 pts into sub-tasks
- **Test Coverage:** Manual testing time-consuming → add Jest to Week 7 backlog (if time)

### Team Morale (1-5 Scale)
- Workload: 4.0/5 (sustainable) | Communication: 4.5/5 | Timeline Confidence: 4.2/5 | Enjoyment: 4.3/5

---

## 4. Updated Backlog (Post-Low-Fi)

### New/Refined Stories for Weeks 7-8

| ID | Story | Priority | SP | Rationale |
|----|-------|----------|-----|-----------|
| US-3.3 | Clear buttons (X) for filters | Should | 2 | Quick reset UX improvement |
| US-3.4 | Mutual exclusivity logic | Should | 3 | Low-Fi feedback: 4 overlapping lines confusing |
  - Visual feedback indicates which filter type is active
- **Target:** Week 7

**US-4.2 (Refined): Map Click Synchronization**
- **Priority:** Should Have
- **Estimate:** 5 story points → 3 story points remaining (2 completed in Low-Fi)
- **Description:** Complete map click-to-select functionality
- **Low-Fi Status:** Basic click detection working
- **High-Fi Requirements:**
  - Click zone → populate Zone 1 dropdown (if empty)
  - Click second zone → populate Zone 2 dropdown
  - Selected zones highlight with colors (Zone 1 green, Zone 2 red)
  - Clicking selected zone toggles it off (deselects)
- **Target:** Week 7

**US-4.3: Map Hover Tooltips**
- **Priority:** Should Have
- **Estimate:** 3 story points
- **Description:** Show zone names on hover for user guidance
- **Acceptance Criteria:**
  - Tooltip appears below cursor on zone hover
  - Displays zone name (e.g., "1 CBD West End Zone")
  - Tooltip follows cursor smoothly (CSS transform)
- **Target:** Week 7

**US-4.4: Toast Notification for 3-Zone Selection**
- **Priority:** Could Have
- **Estimate:** 2 story points
- **Description:** Warn users when trying to select more than 2 zones
- **Acceptance Criteria:**
  - Toast message appears when clicking 3rd zone: "You can only select up to 2 areas"
  - Auto-dismisses after 3 seconds
  - Fade-out animation
- **Target:** Week 7

**US-5.1 (Refined): Interactive Collapsible Sections**
- **Priority:** Could Have
- **Estimate:** 3 story points → 1 story point remaining (2 completed in Low-Fi)
- **Description:** Make collapsible sections fully interactive
- **Low-Fi Status:** UI structure exists (cards, chevron icons)
- **High-Fi Requirements:**
  - Click to expand/collapse sections (Why, How, SDG, Partners)
  - Chevron icon rotates 180° on open
  - Smooth slide animation (200ms)
- **Target:** Week 8

---

#### Reprioritized Stories:

**US-6.3: Performance Optimization**
- **Original Priority:** Could Have
- **New Priority:** Should Have
- **Rationale:** Low-Fi Lighthouse score was 78/100 (below 85 target)
- **Specific Actions:**
  - Minify JSON data files
  - Implement loading skeletons for perceived performance
  - Code-split Chart.js and Leaflet using React.lazy()
- **Estimate:** 3 story points
- **Target:** Week 10

**US-6.2: Documentation (README)**
- **Original Estimate:** 2 story points
- **New Estimate:** 3 story points
- **Rationale:** More comprehensive than initially planned (troubleshooting section needed)
- **Additional Content:**
  - Troubleshooting common errors (port conflicts, TypeScript types)
  - Project structure explanation
  - Data file documentation
- **Target:** Week 11

---

### Updated Backlog (Post Low-Fi - Week 7+)

| Priority | User Story | Estimate | Target Week | Status |
|----------|-----------|----------|-------------|--------|
| **Must Have** | US-6.1: Netlify Deployment | 3 | Week 11 | 🔄 Planned |
| **Must Have** | US-6.2: README Documentation | 3 | Week 11 | 🔄 Planned |
| **Should Have** | US-3.3: Clear Buttons (X) | 2 | Week 7 | ✅ Done |
| **Should Have** | US-3.4: Mutual Exclusivity Logic | 3 | Week 7 | ✅ Done |
| **Should Have** | US-4.2: Map Click Sync (High-Fi) | 3 | Week 7 | ✅ Done |
| **Should Have** | US-4.3: Map Hover Tooltips | 3 | Week 7 | ✅ Done |
| **Should Have** | US-6.3: Performance Optimization | 3 | Week 10 | 🔄 Planned |
| **Could Have** | US-4.4: Toast Notifications | 2 | Week 7 | ✅ Done |
| **Could Have** | US-5.1: Interactive Collapsibles | 1 | Week 8 | ✅ Done |
| **Could Have** | US-5.2: UI Polish (Hover, Shadows) | 1 | Week 8 | ✅ Done |
| **Could Have** | US-5.3: "Explore Dataset" Button | 1 | Week 8 | ✅ Done |

**Remaining Story Points (Weeks 7-12):** 22 points  
**Available Capacity (6 weeks × 9 pts/week):** 54 points  
**Buffer:** 32 points (59%) ✅ Very healthy buffer for QA, bug fixes, documentation

---

### Stakeholder Feedback from Low-Fi Demo (November 11)

**Attendees:** PM Course Instructor, Design/Dev Instructor, Team Members

**Positive Feedback:**
- ✅ "Map integration is impressive—great visual impact"
- ✅ "Data loading smooth, no noticeable lag"
- ✅ "Chart colors match map colors—nice consistency"
- ✅ "Donut charts (current vs. target) are clear and effective"

**Constructive:**
1. "Demographics + zones both selected = confusing" → US-3.4 to Should-Have (Week 7)
2. "How to reset filters?" → US-3.3 Clear buttons (Week 7)
3. "Clicked map zones, nothing happened" → US-4.2 High-Fi (Week 7)
4. "Collapsibles don't open" → US-5.1 interactive (Week 8)

**Verdict:** ✅ **Positive** - Low-Fi feasible, High-Fi on track Week 8

---

## 5. Risk Updates (Post-Low-Fi)

**RISK-001 (Leaflet):** ✅ **RESOLVED** - Dynamic import stable  
**RISK-005 (Browser Compat):** ✅ **MITIGATED** - Cross-browser testing done, z-index fixed

**RISK-010 (NEW - Performance):** Score 6 (Low) - All filters + chart + map may degrade low-end devices → Lighthouse testing, code-splitting

---

**Document Owner:** Project Management Team  
**Sprint Report Completed:** November 11, 2025  
**Next Sprint Planning:** November 12, 2025 (Week 7 Kickoff)  
**Version:** 1.0
