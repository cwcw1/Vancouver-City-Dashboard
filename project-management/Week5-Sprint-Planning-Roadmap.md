# Week 5 – Sprint Planning & Roadmap
**Project:** Vancouver City Dashboard  
**Date:** October 29, 2025  
**Phase:** Planning & Execution

---

## 1. Project Roadmap (12 Weeks, 4 Phases)

### Phase Timeline & Milestones

| Phase | Weeks | Focus | Milestones |
|-------|-------|-------|-----------|
| **Phase 1: Initiation** | 1-3 | Setup, requirements, planning | M1: Project Setup ✅ |
| **Phase 2: Development** | 4-6 | Data loading, charts, map | M2: Data ✅, M3: Filters ✅, M4: Low-Fi ✅ |
| **Phase 3: Integration** | 7-9 | UI polish, cross-browser QA | M5: Feature Complete ✅ |
| **Phase 4: Finalization** | 10-12 | Bug fixes, deployment, docs | M6: QA 🔄, M7: Deploy 🔄, M8: Presentation 🔄 |

### Critical Path (Cannot Delay)
Week 1-2 Setup → Week 4 Data → Week 5 Filters → **Week 6 Map (HIGH RISK)** → Week 7-8 Polish → Week 10-11 QA/Deploy → Week 12 Final

### Non-Critical (Flexible Timing)
- Collapsible sections (Week 8)
- Donut charts (Week 8)
- Toast notifications (Week 7)

---

## 2. Work Breakdown Structure (Low-Fi Prototype Week 6)

**Low-Fi Week 6 Components:**
- 1.1 Data: Load 7 JSONs, error handling, state management
- 1.2 UI: Header, donut charts, filter dropdowns, Chart.js line chart, Leaflet map, collapsibles, footer
- 1.3 Logic: Filter handlers (demographic, 2 zones), chart data updates, basic map clicks
- 1.4 Styling: Tailwind, #0071BC brand, responsive layout
- 1.5 Testing: Smoke tests, Chrome/Firefox, Lighthouse

**Must Work:** ✅ Data loads, chart + filters functional, map displays 9 zones, no console errors  
**Can Be Incomplete:** ⚠️ Map click-to-select, mutual exclusivity, X buttons, toast notifications, interactive collapsibles

---

## 3. MoSCoW Prioritization (74 Story Points)

| Category | SP | % | Key Features | Status |
|----------|-----|---|-------------|---------|
| **Must Have** | 40 | 54% | Data loading (7 files), line chart, demographic/zone filtering, interactive map, deployment | ✅ 100% |
| **Should Have** | 22 | 30% | Chart legend, X buttons, exclusivity logic, map clicks, tooltips, toasts, collapsibles | ✅ 95% |
| **Could Have** | 12 | 16% | Donut charts, UI polish, explore button, accessibility | ✅ 83% |
| **Won't Have** | 45+ | — | Mobile responsive, data export, real-time API, auth, dark mode (Phase 2) | 📋 Deferred |

---

## 4. RACI Matrix (R=Responsible, A=Accountable, C=Consulted, I=Informed)

**Team Roles:** PM (timeline/risks), Dev Lead (technical), Design Lead (UI/UX), QA Lead (testing)

### Key Deliverables

| Activity | PM | Dev | Design | QA | Stakeholders |
|----------|----|----|--------|-----|--------------|
| **Project Planning & Management** |
| Project Brief Creation | **A/R** | C | C | I | I |
| Roadmap Development | **A/R** | C | C | I | I |
| Sprint Planning (Weekly) | **A/R** | C | C | C | I |
| Risk Register Updates | **A/R** | C | C | C | I |
| Stakeholder Communication | **A/R** | I | I | I | C |
| Budget/Resource Tracking | **A** | R | I | I | I |
| **Design & UX** |
| Low-Fi Wireframes | I | C | **A/R** | I | C |
| High-Fi Mockups | I | C | **A/R** | I | C |
| Brand/Color Selection | C | I | **A/R** | I | C |
| Accessibility Compliance | C | R | **A** | R | I |
| Responsive Design Decisions | C | R | **A** | I | I |
| **Development** |
| Technology Stack Selection | C | **A/R** | I | I | I |
| Data Loading Implementation | I | **A/R** | I | C | I |
| Chart.js Integration | I | **A/R** | C | C | I |
| Leaflet Map Integration | I | **A/R** | C | C | I |
| Filter Logic Development | I | **A/R** | C | C | I |
| State Management Architecture | C | **A/R** | I | I | I |
| UI Component Development | C | **A/R** | R | I | I |
| Code Reviews | C | **A** | I | I | I |
| Performance Optimization | C | **A/R** | I | C | I |
| Deployment to Netlify | C | **A/R** | I | I | I |
| **Quality Assurance** |
| Test Plan Creation | C | C | I | **A/R** | I |
| Functional Testing | I | C | I | **A/R** | I |
| Cross-Browser Testing | I | C | C | **A/R** | I |
| Accessibility Testing | C | C | C | **A/R** | I |
| Performance Testing (Lighthouse) | I | C | I | **A/R** | I |
| Bug Reporting & Tracking | C | C | I | **A/R** | I |
| Regression Testing | I | C | I | **A/R** | I |
| **Documentation** |
| README.md Creation | C | **A/R** | I | I | I |
| Code Documentation | I | **A/R** | I | I | I |
| User Guide (if needed) | C | C | **A/R** | I | C |
| PM Artifacts (Risk Log, QA Report) | **A/R** | I | I | C | I |
| **Milestones & Deliverables** |
| Project Planning | **A/R** | C | C | C | I |
| Data Loading | I | **A/R** | C | C | I |
| Chart.js / Map | I | **A/R** | C | C | I |
| UI Components | C | **A/R** | R | I | I |
| Testing & QA | C | C | I | **A/R** | I |
| Deployment | C | **A/R** | I | I | I |
| Documentation | C | **A/R** | I | I | I |
| Low-Fi (Week 6) | C | **A** | R | R | I |
| Final (Week 12) | **A/R** | C | C | C | C |

**Decision Authority:** Feature Priority (PM), Tech Choices (Dev Lead), UI/UX (Design Lead), Scope Changes (PM + All)

---

## 5. Sprint Velocity & Risk Updates

**Velocity (Weeks 4-5):** 8.5 SP/week → **Planning:** 9 SP/week

### Remaining Work (Weeks 6-12)

| Week | Focus | SP |
|------|-------|-----|
| 6 | Map (RISK-001 - high complexity) | 12 |
| 7 | Exclusivity + X buttons | 8 |
| 8 | UI polish + collapsibles | 9 |
| 9-12 | Testing + deployment + docs | 19 |
| **Total** | | **48** |

**Capacity:** 7 weeks × 9 SP = 63 points | **Buffer:** 15 points (24%) ✅

### Risk Status Updates
- **RISK-003 (Data):** Closed (local storage mitigates)
- **RISK-006 (Scope):** Mitigated (MoSCoW set)
- **RISK-009 (Low-Fi Pressure):** New Medium (Score 9) - Map may not be fully functional Week 6, define Low-Fi acceptance criteria early

---

**Document Owner:** Project Management Team  
**Last Updated:** October 29, 2025  
**Next Review:** November 5, 2025 (Week 6 - Post Low-Fi)  
**Version:** 1.0
