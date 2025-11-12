# Vancouver City Dashboard

Lightweight dashboard for visualizing Vancouver's transportation mode share data (demographics + zone comparisons).

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
- Next.js (React framework)
- Chart.js (for data visualization)
- Tailwind CSS (for styling)
- Radix UI components
- And other necessary libraries

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
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── mode-share-dashboard.tsx  # Main dashboard component
│   ├── (pruned unused components & hooks)
│   └── ui/                  # Reusable UI components
├── public/                  # Static assets
│   ├── logonew.PNG          # Logo image
│   ├── *-data.json          # Data files for charts
│   └── maps/                # Map resources
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── styles/                  # Additional stylesheets
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
```

## Data Files

The dashboard uses JSON data files located in the `public/` directory:

- `gender-data.json` - Gender-based travel mode data
- `18to24-data.json` - Age group 18-24 data
- `25to44-data.json` - Age group 25-44 data
- `45to64-data.json` - Age group 45-64 data
- `65toolder-data.json` - Age group 65+ data
- `zones-data.json` - Geographic zone data

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
- **UI Components:** Slim Radix + custom Tailwind components
- **TypeScript:** Type-safe development

## Features

- **Interactive Dashboard:** Visualize travel mode share data over time
- **Demographic Filters:** View data by age groups and gender
- **Zone Comparison:** Compare up to two geographic zones
- **Responsive Design:** Works on desktop and mobile devices
- **Data Visualization:** Line charts showing trends from 2013-2020

## Support

If you hit issues:
1. Verify Node.js version (>=18)
2. Reinstall deps (delete node_modules, run `npm install`)
3. Check browser console & terminal for errors
4. Ensure JSON data files exist under `public/`
5. Contact: thevinh.luong@student.kpu.ca
## License

This project is for educational and demonstration purposes.

---
