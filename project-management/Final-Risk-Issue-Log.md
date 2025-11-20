# Final Risk & Issue Log
**Project:** Vancouver City Dashboard  
**Date:** November 20, 2025  
**Milestone:** Week 12 - Integrated Code Milestone  
**Project Manager:** [Your Name]

---

## Executive Summary
This document tracks all risks and issues identified throughout the Vancouver City Dashboard project lifecycle. As of the integrated code milestone, all critical issues have been resolved, and remaining risks are actively managed with mitigation strategies in place.

---

## Risk Register

### Risk Rating Scale
- **Probability:** Low (1-3) | Medium (4-6) | High (7-9) | Very High (10)
- **Impact:** Low (1-3) | Medium (4-6) | High (7-9) | Critical (10)
- **Risk Score:** Probability × Impact

---

### ACTIVE RISKS

#### RISK-001: Browser Compatibility Issues
- **Category:** Technical
- **Probability:** Medium (5)
- **Impact:** Medium (5)
- **Risk Score:** 25
- **Status:** Active - Mitigated
- **Description:** Map visualization (Leaflet) and Chart.js may render inconsistently across different browsers (Safari, Firefox, Edge, Chrome)
- **Mitigation Strategy:** 
  - Implemented dynamic imports for SSR-safe rendering
  - Extensive cross-browser testing completed
  - Documented browser requirements in README (Chrome/Edge recommended)
- **Owner:** Development Team
- **Review Date:** November 20, 2025

#### RISK-002: Data File Loading Performance
- **Category:** Performance
- **Probability:** Low (3)
- **Impact:** Medium (6)
- **Risk Score:** 18
- **Status:** Active - Monitored
- **Description:** Multiple JSON data files (6 demographic + 1 zones + 1 GeoJSON) loaded on component mount could slow initial page load
- **Mitigation Strategy:**
  - Files optimized and minimized (total <500KB)
  - Implemented loading states in useEffect hooks
  - Considered CDN deployment for production (Netlify)
- **Owner:** Development Team
- **Review Date:** November 20, 2025

#### RISK-003: Third-Party Dependency Updates
- **Category:** Technical/Maintenance
- **Probability:** Medium (6)
- **Impact:** Medium (5)
- **Risk Score:** 30
- **Status:** Active - Monitored
- **Description:** Project relies on 18+ npm packages (Next.js, React, Leaflet, Chart.js, Radix UI) that may introduce breaking changes
- **Mitigation Strategy:**
  - Version pinning in package.json
  - Regular dependency audits (`npm audit`)
  - Documented setup instructions for reproducible builds
- **Owner:** Development Team
- **Review Date:** Weekly

#### RISK-004: User Experience on Mobile Devices
- **Category:** Usability
- **Probability:** Medium (4)
- **Impact:** Medium (6)
- **Risk Score:** 24
- **Status:** Active - Partially Mitigated
- **Description:** Complex dashboard with charts and maps may not be fully responsive on mobile/tablet devices
- **Mitigation Strategy:**
  - Tailwind CSS responsive utilities implemented
  - Desktop-first design prioritized (primary use case)
  - Future enhancement: mobile-specific layout
- **Owner:** UI/UX Team
- **Review Date:** Post-launch

---

### RESOLVED RISKS

#### RISK-005: Map Zone Selection Conflicts ✅
- **Category:** Technical
- **Probability:** High (8)
- **Impact:** High (7)
- **Risk Score:** 56
- **Status:** RESOLVED - November 15, 2025
- **Description:** Selecting zones from map and dropdowns could create conflicting states
- **Resolution:**
  - Implemented synchronized state management between map and dropdown filters
  - Added toast notification system for user feedback (max 2 zones)
  - Toggle selection logic prevents overselection
- **Owner:** Development Team

#### RISK-006: Data Source Availability ✅
- **Category:** External Dependency
- **Probability:** Low (2)
- **Impact:** Critical (9)
- **Risk Score:** 18
- **Status:** RESOLVED - November 1, 2025
- **Description:** Reliance on Vancouver Open Data Portal for source data
- **Resolution:**
  - All data downloaded and stored locally in `/public` directory
  - Static JSON files ensure data persistence
  - Project independent of external API availability
- **Owner:** Data Team

---

## Issue Log

### CLOSED ISSUES

#### ISSUE-001: Z-Index Conflict with Dropdown Menus ✅
- **Severity:** High
- **Reported:** October 28, 2025
- **Resolved:** October 29, 2025
- **Description:** Dropdown select menus appearing behind map component
- **Root Cause:** Leaflet map default z-index conflicts with Radix UI Select component
- **Resolution:** 
  - Set Select component z-index to 9999 in `select.tsx`
  - Custom CSS in `globals.css` for Leaflet z-index management
- **Impact:** None - resolved before major testing
- **Closed By:** Development Team

#### ISSUE-002: Chart Legend Not Displaying Correctly ✅
- **Severity:** Medium
- **Reported:** November 5, 2025
- **Resolved:** November 6, 2025
- **Description:** Chart.js legend overlapped with chart area on smaller viewports
- **Root Cause:** Default Chart.js legend positioning
- **Resolution:**
  - Disabled built-in Chart.js legend
  - Created custom legend component below chart with proper spacing
  - Color coordination between legend and chart lines
- **Impact:** Improved UX consistency
- **Closed By:** Development Team

#### ISSUE-003: TypeScript Type Errors in Build ✅
- **Severity:** High
- **Reported:** November 8, 2025
- **Resolved:** November 9, 2025
- **Description:** Production build failing due to missing type definitions for Leaflet
- **Root Cause:** @types/leaflet not installed as dependency
- **Resolution:**
  - Added `@types/leaflet` to package.json dependencies
  - Configured `tsconfig.json` with proper type checking
  - Verified clean build with `npm run build`
- **Impact:** None - caught before deployment
- **Closed By:** Development Team

#### ISSUE-004: Mutual Exclusivity Logic Not Working ✅
- **Severity:** High
- **Reported:** November 12, 2025
- **Resolved:** November 13, 2025
- **Description:** Users could select both demographics AND zones simultaneously, creating confusing chart data
- **Root Cause:** Independent state management for demographic and zone filters
- **Resolution:**
  - Implemented cross-clearing logic in onValueChange handlers
  - Demographics selection clears zone filters and vice versa
  - Added visual feedback (X buttons) for active filters
- **Impact:** Significant UX improvement
- **Closed By:** Development Team

#### ISSUE-005: GeoJSON Zone Boundaries Not Rendering ✅
- **Severity:** Critical
- **Reported:** November 10, 2025
- **Resolved:** November 11, 2025
- **Description:** Map showing blank after integration, no zone boundaries visible
- **Root Cause:** 
  - Incorrect file path to `vancouver.geojson`
  - SSR rendering issue with Leaflet (client-side only library)
- **Resolution:**
  - Corrected path to `/maps/vancouver.geojson` in public directory
  - Implemented dynamic import with `ssr: false` in `vancouver-map.tsx`
  - Added useRef pattern to prevent re-render loops
- **Impact:** Core feature enabled
- **Closed By:** Development Team

#### ISSUE-006: Toast Notification Not Auto-Dismissing ✅
- **Severity:** Low
- **Reported:** November 14, 2025
- **Resolved:** November 14, 2025
- **Description:** Toast warning message for 3-zone selection stayed visible indefinitely
- **Root Cause:** Missing setTimeout logic in Toast component
- **Resolution:**
  - Added 3-second auto-dismiss timer in `toast.tsx`
  - Implemented fade-out animation
- **Impact:** Minor UX polish
- **Closed By:** Development Team

---

## Lessons Learned

### What Went Well ✅
1. **Early Dependency Management:** Version pinning prevented breaking changes during development
2. **Modular Component Structure:** UI components folder made debugging and testing efficient
3. **Documentation:** Comprehensive README reduced setup issues for team members
4. **Cross-Browser Testing:** Early testing caught z-index and rendering issues before integration

### What Could Be Improved 🔄
1. **Mobile Responsiveness:** Should have been considered earlier in design phase
2. **Type Safety:** TypeScript types should be verified before integration milestone
3. **Testing Automation:** Manual testing was time-consuming; unit tests would help
4. **Performance Monitoring:** Should implement analytics for actual user load times

---

## Risk Mitigation Status Summary

| Risk Level | Count | Status |
|------------|-------|--------|
| Critical (80-100) | 0 | ✅ None Active |
| High (50-79) | 0 | ✅ All Resolved |
| Medium (20-49) | 4 | ⚠️ Monitored |
| Low (1-19) | 0 | ✅ None Active |

**Overall Risk Health:** 🟢 **LOW** - Project is stable for final presentation

---

## Next Steps for Risk Management
1. ✅ Complete final QA testing on production build
2. ✅ Deploy to Netlify and monitor performance metrics
3. ⏳ Create mobile-responsive enhancement backlog for future iterations
4. ⏳ Document deployment process for maintenance handoff
5. ⏳ Conduct final retrospective with team

---

**Document Owner:** Project Management Team  
**Last Updated:** November 20, 2025  
**Next Review:** Post-Final Presentation
