# Week 3 – Project Foundations
**Project:** Vancouver City Dashboard  
**Date:** October 15, 2025  
**Project Manager:** [Your Name]

---

## 1. Project Brief

### Project Goal
Create an interactive web dashboard visualizing Vancouver's transportation mode share data (walk, bike, transit) across demographics and geographic zones (2013-2020).

### Business Objectives
1. Transform complex data into intuitive visualizations
2. Enable demographic & geographic comparison analysis
3. Track progress: 44% current vs. 50% target
4. Demonstrate modern web development skills

### Success Criteria
- ✅ Deployed to Netlify (public URL)
- ✅ Demographic filtering (4 age groups + gender)
- ✅ Geographic comparison (2 of 9 Vancouver zones)
- ✅ Interactive map with clickable zones
- ✅ Line charts (2013-2020 trends)
- ✅ Lighthouse Performance ≥ 85/100

### Scope

**In Scope:**
- Chart.js line charts with 2013-2020 trends
- Demographic filters: 4 age groups, gender
- 9 Vancouver zones with dual comparison
- Interactive Leaflet map with zone selection
- Donut charts (current 44% vs. target 50%)
- Collapsible info sections
- Desktop/tablet responsive (1024px+)
- Netlify deployment + documentation

**Out of Scope (Phase 2):**
- Mobile optimization (<768px)
- Real-time API integration
- Data export (CSV/PDF)
- User authentication
- Multi-year comparison

### Key Stakeholders
| Stakeholder | Influence | Interest | Strategy |
|-------------|-----------|----------|----------|
| PM Course Instructor | High | High | Manage Closely |
| Dev/Design Instructor | High | High | Manage Closely |
| Development Team | High | High | Manage Closely |
| End Users (Hypothetical) | Low | Medium | Keep Informed |

### Constraints & Assumptions
- **Timeline:** 8 weeks (Oct 1 - Nov 20)
- **Team:** 2-4 members, academic project
- **Tech:** React-based, static JSON data
- **Assumption:** Desktop-first, Netlify free tier adequate

---

## 2. Stakeholder Map

### Stakeholder Communication Plan

| Stakeholder | Influence/Interest | Communication Method | Frequency | Key Content |
|-------------|-------------------|---------------------|-----------|-------------|
| **PM Instructor** | High/High | Written artifacts + presentations | Weekly | Status, risks, PM process |
| **Dev/Design Instructor** | High/High | Live demos + GitHub | Bi-weekly | Technical progress, code quality |
| **Dev Team** | High/High | Slack + GitHub Issues | Daily | Tasks, blockers, decisions |
| **End Users** | Low/Medium | README + deployed URL | One-time | Feature guide, data sources |

---

## 3. Initial Product Backlog (55 Story Points)

### Epic Overview

| Epic | Stories | SP | Priority |
|------|---------|----|----|
| Data Loading | Load 6 JSON files (gender, 4 age groups, zones+GeoJSON) | 8 | Must |
| Charts | Line chart (2013-2020), legend, donut charts | 10 | Must/Should |
| Filtering | Demographic/zone dropdowns, reset, exclusivity | 15 | Must |
| Interactive Map | Leaflet integration, zone clicks, tooltips | 18 | Must/Should |
| UI Polish | Collapsibles, branding, external link | 7 | Could |
| Deployment | Netlify, README, performance | 8 | Must |

### Must-Have Stories (34 SP)

| ID | Story | AC Summary | SP |
|----|-------|-----------|-----|
| US-1.1 | Load gender data | Fetch JSON, error handling, loading state | 2 |
| US-1.2 | Load 4 age datasets | All JSONs load, unified structure | 3 |
| US-1.3 | Load zones + GeoJSON | 9 zones + vancouver.geojson | 3 |
| US-2.1 | Line chart (2013-2020) | Chart.js, X: years, Y: 0-100% | 5 |
| US-3.1 | Demographic filter | Dropdown (4 age groups + gender) | 5 |
| US-3.2 | Zone comparison | 2 dropdowns, green/red lines | 5 |
| US-4.1 | Interactive map | Leaflet, 9 zones, zoom controls | 8 |
| US-6.1 | Netlify deployment | Auto-deploy from GitHub main | 3 |

### Should/Could-Have Stories (21 SP)

| ID | Story | SP | Priority |
|----|-------|----|----------|
| US-2.2 | Chart legend | 2 | Should |
| US-3.3 | Reset buttons | 2 | Should |
| US-3.4 | Filter exclusivity | 3 | Should |
| US-4.2 | Map zone clicks | 5 | Should |
| US-6.2 | README docs | 2 | Should |
| US-2.3 | Donut charts | 3 | Could |
| US-4.3 | Map tooltips | 3 | Could |
| US-5.1 | Collapsible sections | 3 | Could |

**Won't Have (Deferred):** Mobile responsive, data export, real-time API, user auth

---



---

## 4. Initial Risk Register (Week 3)

**Rating Scale:** Probability (1-5) × Impact (1-5) = Risk Score (Max 25)

### Active Risks

| ID | Risk | Category | P | I | Score | Mitigation | Owner |
|----|------|----------|---|---|-------|-----------|-------|
| R-001 | Leaflet SSR integration complexity | Technical | 4 | 4 | **16** | Schedule Week 5, research dynamic imports, 2-day buffer | Dev Team |
| R-006 | Scope creep from stakeholders | PM | 4 | 4 | **16** | MoSCoW prioritization (Week 5), Phase 2 backlog | PM |
| R-004 | Team availability (academic conflicts) | Resource | 3 | 4 | 12 | Frontload Week 5-6, 1-week buffer, cross-training | PM |
| R-003 | Data source availability | Dependency | 2 | 5 | 10 | ✅ Data downloaded locally (mitigated) | Data Team |
| R-002 | State management complexity (filters) | Technical | 3 | 3 | 9 | Design architecture Week 3, unit tests | Dev Team |
| R-005 | Browser compatibility issues | Technical | 3 | 3 | 9 | Weekly testing (Chrome/Firefox/Safari/Edge) | QA Team |
| R-007 | TypeScript type errors | Technical | 3 | 3 | 9 | Install @types packages, weekly builds | Dev Team |
| R-008 | Performance (large JSON files) | Technical | 2 | 3 | 6 | Minify JSONs, loading states, Lighthouse ≥85 | Dev Team |

### Risk Summary

| Risk Level | Count | Status |
|------------|-------|--------|
| **High (13-19)** | 2 | ⚠️ R-001 (Leaflet), R-006 (Scope) |
| **Medium (6-12)** | 5 | ⚠️ Monitoring |
| **Low (1-5)** | 1 | ✅ Acceptable |

**Overall Health:** 🟡 **MODERATE** - Two high-priority risks require active mitigation  
**Week 4 Actions:** Research Leaflet SSR, formalize MoSCoW, monitor team availability

---

**Document Owner:** Project Management Team  
**Last Updated:** October 15, 2025  
**Next Review:** October 22, 2025 (Week 4)  
**Version:** 1.0
