# Vancouver City Dashboard

Lightweight dashboard for visualizing Vancouver's transportation mode share data (demographics + zone comparisons).

## Online Link:
https://tourmaline-bubblegum-bbc190.netlify.app/#

## Prerequisites

Install first:

- Node.js 18+ (https://nodejs.org/)
- npm (comes with Node.js) – npm is now the default for this project

## Setup Instructions

### 1. Extract the Project

Unzip the project folder to your desired location.

### 2. Open Terminal/Command Prompt

Navigate to the project directory:

```bash
cd path/to/Vancouver City Dashboard
```

### 3. Install Dependencies

Run the following command to install all required packages:

```powershell
npm install
```

This will install all dependencies listed in `package.json`, including:
- Next.js 16.0.0 (React framework)
- Chart.js + react-chartjs-2 (for data visualization)
- Leaflet 1.9.4 + react-leaflet 4.2.1 (interactive maps)
- Tailwind CSS 4.1.9 (for styling)
- Radix UI components (collapsible, select, tooltip, etc.)
- And other necessary libraries (18 packages total)

### 4. Run the Development Server

Start the development server with:

```powershell
npm run dev
```

### 5. Open in Browser

Once the server is running, open your browser and navigate to:

```
http://localhost:3000
```
### Online Link:
https://tourmaline-bubblegum-bbc190.netlify.app/#

You should see the Vancouver City Dashboard running!

## Available Scripts

- **`npm run dev`** – Start dev server with hot reload
- **`npm run build`** – Create production build
- **`npm start`** – Serve production build (after build)
- **`npm run lint`** – Run ESLint

## Project Structure

```
Vancouver City Dashboard/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles + Leaflet customizations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── mode-share-dashboard.tsx  # Main dashboard with filters & charts
│   ├── vancouver-map.tsx    # Interactive Leaflet map component
│   └── ui/                  # Reusable UI components
│       ├── card.tsx         # Card container
│       ├── collapsible.tsx  # Collapsible sections
│       ├── select.tsx       # Dropdown select (z-index 9999)
│       ├── toast.tsx        # Toast notifications (NEW!)
│       └── ...              # Other UI components
├── public/                  # Static assets
│   ├── logonew.PNG          # Logo image
│   ├── gender-data.json     # Gender demographics
│   ├── 18to24-data.json     # Age 18-24 data
│   ├── 25to44-data.json     # Age 25-44 data
│   ├── 45to64-data.json     # Age 45-64 data
│   ├── 65toolder-data.json  # Age 65+ data
│   ├── zones-data.json      # Zone transportation data
│   └── maps/                # GeoJSON map data
│       └── vancouver.geojson # 9 merged zone boundaries
├── lib/                     # Utility functions
│   └── utils.ts             # Helper utilities
├── package.json             # Dependencies (18 packages)
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Data Files

The dashboard uses JSON data files located in the `public/` directory:

- `gender-data.json` - Gender-based travel mode data
- `18to24-data.json` - Age group 18-24 data
- `25to44-data.json` - Age group 25-44 data
- `45to64-data.json` - Age group 45-64 data
- `65toolder-data.json` - Age group 65+ data
- `zones-data.json` - Geographic zone data for 9 zones in Vancouver

### Map Data
- `maps/vancouver.geojson` - GeoJSON boundaries for 9 Vancouver zones:
  1. CBD West End Zone
  2. CBD False Creek Zone
  3. Vancouver Broadway Zone
  4. Vancouver South Zone
  5. Vancouver Kerrisdale Zone
  6. Vancouver Kitsilano Zone
  7. Vancouver Southeast Zone
  8. Vancouver East Zone
  9. Vancouver Port Zone

## Troubleshooting

### Port already in use

Use a different port:
```powershell
npm run dev -- -p 3001
```

### Clean install
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### Cache issues
```powershell
npm cache clean --force
npm install
```

### TypeScript types missing
```powershell
npm install --save-dev typescript @types/react @types/node
```

## Building for Production

To create an optimized production build:

```powershell
npm run build
npm start
```

The production build will be optimized for performance and ready for deployment.

## Technology Stack

- **Framework:** Next.js 16.0.0
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.9
- **Charts:** Chart.js + react-chartjs-2
- **Maps:** Leaflet 1.9.4 + react-leaflet 4.2.1
- **UI Components:** Radix UI (collapsible, label, select, slot, tooltip)
- **TypeScript:** Type-safe development
- **Optimizations:** Dynamic imports for SSR-safe map rendering

## Features

### Data Visualization
- **Interactive Dashboard:** Visualize travel mode share data over time
- **Line Charts:** Trends from 2013-2020 with Chart.js
- **Donut Charts:** Current vs. target statistics using SVG

### Filtering & Comparison
- **Demographic Filters:** View data by age groups (18-24, 25-44, 45-64, 65+) and gender
- **Dual Zone Comparison:** Compare up to two geographic zones side-by-side
- **Clear Buttons:** X buttons to quickly clear filter selections
- **Mutual Exclusivity:** Selecting demographics automatically clears zones and vice versa

### Interactive Map (New!)
- **Leaflet Integration:** Interactive map with 9 Vancouver Zones
- **Click to Select:** Click zones on map to populate filters
- **Color-Coded Highlighting:** 
  - Zone 1: Green (#308820ff)
  - Zone 2: Red (#D32F2F)
  - Unselected: Blue (#0071BC)
- **Hover Tooltips:** Zone names appear below cursor on hover
- **Toggle Selection:** Click again to deselect zones
- **Zoom Controls:** Min zoom 10, max zoom 18 to keep Vancouver in focus
- **Toast Notifications:** Warning message when trying to select more than 2 zones

### Professional UI Components
- **Collapsible Sections:** Rationale, SDG alignment, and key partners info
- **Enhanced Design:** 
  - Shadow effects and smooth transitions
  - Professional spacing and typography
  - Brand-colored bullet points (#0071BC)
  - Hover states on all interactive elements

### User Experience
- **Visual Feedback:** Chart colors match map zone colors for easy identification
- **Full-Width Layout:** Chart and map stacked vertically with equal heights (300px each)
- **Filter Layout:** Two-column grid with demographics on left, zones on right
- **Auto-dismiss Toast:** Notifications disappear after 3 seconds

## Recent Updates since Functional Code (November 2025)

### Interactive Map Features
- ✅ Integrated Leaflet map with 9 transportation survey zones
- ✅ Click-to-select zone functionality with dual selection support
- ✅ Color-coded highlighting (green for Zone 1, red for Zone 2)
- ✅ Hover tooltips with zone names
- ✅ Zoom restrictions (min: 10, max: 18)
- ✅ Dynamic zone selection synchronized with dropdown filters

### UI/UX Improvements
- ✅ Added X buttons to clear filter selections
- ✅ Toast notifications for user feedback (3-zone selection warning)
- ✅ Redesigned collapsible sections with professional styling
- ✅ Enhanced shadows, transitions, and hover effects
- ✅ Equal spacing between all UI sections
- ✅ Full-width layout for chart and map

### Performance Optimizations
- ✅ Dynamic imports for Leaflet (SSR-safe)
- ✅ useRef pattern to prevent re-render loops

### Color Coordination
- ✅ Chart line colors match map zone highlighting
- ✅ Brand color (#0071BC) used consistently throughout
- ✅ Custom colored bullet points in collapsible sections

## Support

If you hit issues:
1. Verify Node.js version (>=18)
2. Reinstall deps (delete node_modules, run `npm install`)
3. Check browser console & terminal for errors
4. Ensure JSON data files exist under `public/`
5. Make sure GeoJSON file exists at `public/maps/vancouver.geojson`
6. Contact: thevinh.luong@student.kpu.ca
## License

This project is for educational and demonstration purposes.

---
