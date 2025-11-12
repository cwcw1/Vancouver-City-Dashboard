// ============================================
// 📊 DATA LOADER - PUT YOUR JSON DATA HERE
// ============================================

export interface TransportationData {
  zone: string
  demographic: string
  years: number[]
  values: number[]
}

// ============================================
// 🔧 INSTRUCTIONS FOR ADDING YOUR JSON DATA:
// ============================================
//
// Option 1: Import from a JSON file
// ----------------------------------
// 1. Create a file called 'transportation-data.json' in the /public folder
// 2. Uncomment the line below and use fetch:
//
// export async function loadTransportationData(): Promise<TransportationData[]> {
//   const response = await fetch('/transportation-data.json')
//   return response.json()
// }
//
// Option 2: Paste JSON directly here
// -----------------------------------
// Replace the sampleData array below with your actual data
//
// Option 3: Fetch from an API
// ----------------------------
// export async function loadTransportationData(): Promise<TransportationData[]> {
//   const response = await fetch('https://your-api.com/data')
//   return response.json()
// }
//
// ============================================

// Sample data - REPLACE THIS WITH YOUR ACTUAL DATA
const sampleData: TransportationData[] = [
  {
    zone: "CBD West End Zone",
    demographic: "18 to 24 years old",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [47, 65, 48, 68, 95, 45, 68, 48],
  },
  {
    zone: "CBD West End Zone",
    demographic: "25 to 44 years old",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [52, 70, 53, 73, 98, 50, 73, 53],
  },
  {
    zone: "CBD West End Zone",
    demographic: "45 to 64 years old",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [45, 62, 46, 66, 92, 43, 65, 50],
  },
  {
    zone: "CBD False Creek Zone",
    demographic: "18 to 24 years old",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [25, 30, 35, 25, 70, 50, 15, 65],
  },
  {
    zone: "CBD False Creek Zone",
    demographic: "25 to 44 years old",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [30, 35, 40, 30, 75, 55, 20, 70],
  },
  {
    zone: "Vancouver Broadway Zone",
    demographic: "45 to 64 years old",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [40, 55, 42, 62, 85, 38, 60, 45],
  },
  {
    zone: "Vancouver South Zone",
    demographic: "65 years old and older",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [35, 45, 38, 52, 75, 33, 50, 40],
  },
  {
    zone: "Vancouver Kerrisdale Zone",
    demographic: "Gender",
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    values: [42, 58, 44, 64, 88, 40, 62, 47],
  },
  // Add more data for all zone and demographic combinations
]

export function loadTransportationData(): TransportationData[] {
  // TODO: Replace with your actual data loading logic
  return sampleData
}
