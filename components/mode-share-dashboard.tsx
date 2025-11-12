"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ThumbsUp } from "lucide-react"
import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ModeShareDashboard() {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [selectedZone1, setSelectedZone1] = useState<string>("")
  const [selectedZone2, setSelectedZone2] = useState<string>("")
  const [selectedDemographic, setSelectedDemographic] = useState<string>("")
  const [selectedGender, setSelectedGender] = useState<string>("")
  const [selected18to24, setSelected18to24] = useState<string>("")
  const [selected25to44, setSelected25to44] = useState<string>("")
  const [selected45to64, setSelected45to64] = useState<string>("")
  const [selected65toolder, setSelected65toolder] = useState<string>("")
  const [chartData, setChartData] = useState<any>(null)
  const [genderData, setGenderData] = useState<any>(null)
  const [age18to24Data, setAge18to24Data] = useState<any>(null)
  const [age25to44Data, setAge25to44Data] = useState<any>(null)
  const [age45to64Data, setAge45to64Data] = useState<any>(null)
  const [age65toolderData, setAge65toolderData] = useState<any>(null)
  const [zonesData, setZonesData] = useState<any>(null)

  // Load gender data on component mount
  useEffect(() => {
    const fetchGenderData = async () => {
      try {
        const response = await fetch('/gender-data.json')
        const data = await response.json()
        setGenderData(data)
      } catch (error) {
        console.error('Error loading gender data:', error)
      }
    }
    fetchGenderData()
  }, [])

  // Load 18 to 24 age group data on component mount
  useEffect(() => {
    const fetch18to24Data = async () => {
      try {
        const response = await fetch('/18to24-data.json')
        const data = await response.json()
        setAge18to24Data(data)
      } catch (error) {
        console.error('Error loading 18 to 24 age group data:', error)
      }
    }
    fetch18to24Data()
  }, [])

  // Load 25 to 44 age group data on component mount
  useEffect(() => {
    const fetch25to44Data = async () => {
      try {
        const response = await fetch('/25to44-data.json')
        const data = await response.json()
        setAge25to44Data(data)
      } catch (error) {
        console.error('Error loading 25 to 44 age group data:', error)
      }
    }
    fetch25to44Data()
  }, [])

  // Load 45 to 64 age group data on component mount
  useEffect(() => {
    const fetch45to64Data = async () => {
      try {
        const response = await fetch('/45to64-data.json')
        const data = await response.json()
        setAge45to64Data(data)
      } catch (error) {
        console.error('Error loading 45 to 64 age group data:', error)
      }
    }
    fetch45to64Data()
  }, [])

  // Load 65 years old and older age group data on component mount
  useEffect(() => {
    const fetch65toolderData = async () => {
      try {
        const response = await fetch('/65toolder-data.json')
        const data = await response.json()
        setAge65toolderData(data)
      } catch (error) {
        console.error('Error loading 65 years old and older age group data:', error)
      }
    }
    fetch65toolderData()
  }, [])

  // Load zones data on component mount
  useEffect(() => {
    const fetchZonesData = async () => {
      try {
        const response = await fetch('/zones-data.json')
        const data = await response.json()
        setZonesData(data)
      } catch (error) {
        console.error('Error loading zones data:', error)
      }
    }
    fetchZonesData()
  }, [])

  // Update chart when filters change
  useEffect(() => {
    const datasets: any[] = []
    let labels: string[] = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]

    // Check if Gender filter is selected
    if (selectedGender === "Gender" && genderData && genderData.maleData && genderData.femaleData) {
      // Extract years from the data
      labels = genderData.maleData.map((d: any) => d.year)

      // Process Male data (blue)
      const maleValues = genderData.maleData.map((d: any) => d.value)
      
      // Process Female data (pink)
      const femaleValues = genderData.femaleData.map((d: any) => d.value)

      datasets.push({
        label: "Male (%)",
        data: maleValues,
        borderColor: "#0071BC",
        backgroundColor: "#0071BC",
        tension: 0.1,
      })

      datasets.push({
        label: "Female (%)",
        data: femaleValues,
        borderColor: "#c986d8ff",
        backgroundColor: "#c986d8ff",
        tension: 0.1,
      })
    } else if (selected18to24 === "18 to 24 years old" && age18to24Data && age18to24Data.data) {
      // Extract years from the data
      labels = age18to24Data.data.map((d: any) => d.year)

      // Process 18 to 24 years old data (green)
      const ageValues = age18to24Data.data.map((d: any) => d.value)

      datasets.push({
        label: "18 to 24 years old (%)",
        data: ageValues,
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        tension: 0.1,
      })
    } else if (selected25to44 === "25 to 44 years old" && age25to44Data && age25to44Data.data) {
      // Extract years from the data
      labels = age25to44Data.data.map((d: any) => d.year)

      // Process 25 to 44 years old data (orange)
      const ageValues = age25to44Data.data.map((d: any) => d.value)

      datasets.push({
        label: "25 to 44 years old (%)",
        data: ageValues,
        borderColor: "#fed394ff",
        backgroundColor: "#fed394ff",
        tension: 0.1,
      })
    } else if (selected45to64 === "45 to 64 years old" && age45to64Data && age45to64Data.data) {
      // Extract years from the data
      labels = age45to64Data.data.map((d: any) => d.year)

      // Process 45 to 64 years old data (light red)
      const ageValues = age45to64Data.data.map((d: any) => d.value)

      datasets.push({
        label: "45 to 64 years old (%)",
        data: ageValues,
        borderColor: "#b08f65ff",
        backgroundColor: "#b08f65ff",
        tension: 0.1,
      })
    } else if (selected65toolder === "65 years old and older" && age65toolderData && age65toolderData.data) {
      // Extract years from the data
      labels = age65toolderData.data.map((d: any) => d.year)

      // Process 65 years old and older data (red)
      const ageValues = age65toolderData.data.map((d: any) => d.value)

      datasets.push({
        label: "65 years old and older (%)",
        data: ageValues,
        borderColor: "#D32F2F",
        backgroundColor: "#D32F2F",
        tension: 0.1,
      })
    } else if (zonesData && zonesData.zones) {
      // Handle zone selections with new zones data
      // Add first zone data if selected
      if (selectedZone1 && zonesData.zones[selectedZone1]) {
        const zone1Data = zonesData.zones[selectedZone1]
        labels = zone1Data.data.map((d: any) => d.year)
        const zone1Values = zone1Data.data.map((d: any) => d.value)

        datasets.push({
          label: `${zone1Data.name} (%)`,
          data: zone1Values,
          borderColor: "#0071BC",
          backgroundColor: "#0071BC",
          tension: 0.1,
        })
      }

      // Add second zone data if selected
      if (selectedZone2 && zonesData.zones[selectedZone2]) {
        const zone2Data = zonesData.zones[selectedZone2]
        if (!selectedZone1) {
          labels = zone2Data.data.map((d: any) => d.year)
        }
        const zone2Values = zone2Data.data.map((d: any) => d.value)

        datasets.push({
          label: `${zone2Data.name} (%)`,
          data: zone2Values,
          borderColor: "#D32F2F",
          backgroundColor: "#D32F2F",
          tension: 0.1,
        })
      }
    }

    // Set default data if no filters selected
    if (datasets.length === 0) {
      datasets.push({
        label: "Data 1 (%)",
        data: [47, 65, 48, 68, 95, 45, 68, 48],
        borderColor: "#0071BC",
        backgroundColor: "#0071BC",
        tension: 0.1,
      })
      datasets.push({
        label: "Data 2 (%)",
        data: [25, 30, 35, 25, 70, 50, 15, 65],
        borderColor: "#D32F2F",
        backgroundColor: "#D32F2F",
        tension: 0.1,
      })
    }

    setChartData({
      labels,
      datasets,
    })
  }, [selectedZone1, selectedZone2, selectedDemographic, selectedGender, selected18to24, selected25to44, selected45to64, selected65toolder, genderData, age18to24Data, age25to44Data, age45to64Data, age65toolderData, zonesData])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  // Chart.js options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#E5E7EB",
        },
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0071BC] text-white py-3 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div> <img src="logonew.PNG" alt="Logo" className="w-40 h-15" /></div>
              <span className="font-semibold">Open Data Portal</span>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:underline">
              Catalogue
            </a>
            <a href="#" className="hover:underline">
              Dashboards
            </a>
            <a href="#" className="hover:underline">
              Chatbuilder
            </a>
            <a href="#" className="hover:underline">
              Map Builder
            </a>
            <a href="#" className="hover:underline">
              Help & API
            </a>
            <a href="#" className="hover:underline">
              Contact & About
            </a>
            <a href="#" className="hover:underline">
              Vancouver.ca
            </a>
            <div className="flex items-center gap-2">
              <button className="bg-white text-[#0071BC] px-4 py-1 rounded font-medium hover:underline">Sign up</button>
              <button className="bg-white text-[#0071BC] px-4 py-1 rounded font-medium hover:underline">Login</button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto p-6 max-w-6xl">
        <div className="mb-6">
          <a href="#" className="text-[#0071BC] hover:underline text-sm flex items-center gap-1">
            <span>←</span> Health City Dashboard
          </a>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Travel mode (walk, bike, transit)</h1>
{/* Donut chart created by using svg circle */}
        <Card className="mb-6 border border-gray-300">
          <CardContent className="p-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-900 mb-6">2020</h2>
                <div className="relative w-48 h-48 mb-4">
                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#B8D4E8"
                      strokeWidth="20"
                      strokeDasharray="4 2"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#0071BC"
                      strokeWidth="20"
                      strokeDasharray={`${44 * 5.03} ${100 * 5.03}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">44%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  44% of all trips were made by
                  <br />
                  walking, biking, or transit
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-gray-900 mb-6">DESIRED TREND</h2>
                <div className="flex flex-col items-center gap-2">
                  <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
                    {/* Bars */}
                    <rect x="10" y="50" width="15" height="30" fill="#000" />
                    <rect x="35" y="35" width="15" height="45" fill="#000" />
                    <rect x="60" y="20" width="15" height="60" fill="#000" />
                    <rect x="85" y="5" width="15" height="75" fill="#000" />
                    {/* Upward arrow representing increase trend */}
                    <line x1="105" y1="70" x2="105" y2="10" stroke="#000" strokeWidth="4" />
                    <polygon points="105,5 95,18 115,18" fill="#000" />
                  </svg>
                </div>
              </div>
              {/* Donut chart created by using svg circle */}
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Target</h2>
                <div className="relative w-48 h-48 mb-4">
                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#F5C6CB"
                      strokeWidth="20"
                      strokeDasharray="4 2"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#DC3545"
                      strokeWidth="20"
                      strokeDasharray={`${50 * 5.03} ${100 * 5.03}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">50%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">Increase sustainable trips to 50%</p>
              </div>
            </div>
            {/* Card Content*/}
          </CardContent>
        </Card>

        <Card className="mb-6 border border-gray-300">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Travel mode (walk, bike, transit)
</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Select your filter</h3>
                </div>

                {/* Chart.js Line Chart */}
                <div className="h-[300px]">{chartData && <Line data={chartData} options={chartOptions} />}</div>

                {/* Legend */}
                <div className="flex items-center gap-4 mt-4 text-sm">
                  {chartData?.datasets.map((dataset: any, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dataset.borderColor }} />
                      <span className="text-gray-700">{dataset.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-700 mb-3">Choose from age group to gender.</p>
                  <Select value={selectedGender || selected18to24 || selected25to44 || selected45to64 || selected65toolder || selectedDemographic} onValueChange={(value) => {
                    if (value === "Gender") {
                      setSelectedGender(value)
                      setSelectedDemographic("")
                      setSelected18to24("")
                      setSelected25to44("")
                      setSelected45to64("")
                      setSelected65toolder("")
                      // Clear zones when demographic is selected
                      setSelectedZone1("")
                      setSelectedZone2("")
                    } else if (value === "18 to 24 years old") {
                      setSelected18to24(value)
                      setSelectedDemographic("")
                      setSelectedGender("")
                      setSelected25to44("")
                      setSelected45to64("")
                      setSelected65toolder("")
                      // Clear zones when demographic is selected
                      setSelectedZone1("")
                      setSelectedZone2("")
                    } else if (value === "25 to 44 years old") {
                      setSelected25to44(value)
                      setSelectedDemographic("")
                      setSelectedGender("")
                      setSelected18to24("")
                      setSelected45to64("")
                      setSelected65toolder("")
                      // Clear zones when demographic is selected
                      setSelectedZone1("")
                      setSelectedZone2("")
                    } else if (value === "45 to 64 years old") {
                      setSelected45to64(value)
                      setSelectedDemographic("")
                      setSelectedGender("")
                      setSelected18to24("")
                      setSelected25to44("")
                      setSelected65toolder("")
                      // Clear zones when demographic is selected
                      setSelectedZone1("")
                      setSelectedZone2("")
                    } else if (value === "65 years old and older") {
                      setSelected65toolder(value)
                      setSelectedDemographic("")
                      setSelectedGender("")
                      setSelected18to24("")
                      setSelected25to44("")
                      setSelected45to64("")
                      // Clear zones when demographic is selected
                      setSelectedZone1("")
                      setSelectedZone2("")
                    } else {
                      setSelectedDemographic(value)
                      setSelectedGender("")
                      setSelected18to24("")
                      setSelected25to44("")
                      setSelected45to64("")
                      setSelected65toolder("")
                      // Clear zones when demographic is selected
                      setSelectedZone1("")
                      setSelectedZone2("")
                    }
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18 to 24 years old">18 to 24 years old</SelectItem>
                      <SelectItem value="25 to 44 years old">25 to 44 years old</SelectItem>
                      <SelectItem value="45 to 64 years old">45 to 64 years old</SelectItem>
                      <SelectItem value="65 years old and older">65 years old and older</SelectItem>
                      <SelectItem value="Gender">Gender</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className="text-sm text-gray-700 mb-3">
                    Compare up to two zones by using the dropdowns.
                  </p>
                  <Select value={selectedZone1} onValueChange={(value) => {
                    setSelectedZone1(value)
                    // Clear all demographic filters when zone is selected
                    setSelectedGender("")
                    setSelected18to24("")
                    setSelected25to44("")
                    setSelected45to64("")
                    setSelected65toolder("")
                    setSelectedDemographic("")
                  }}>
                    <SelectTrigger className="w-full mb-2">
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CBD West End Zone">1 CBD West End Zone</SelectItem>
                      <SelectItem value="CBD False Creek Zone">2 CBD False Creek Zone</SelectItem>
                      <SelectItem value="Vancouver Broadway Zone">3 Vancouver Broadway Zone</SelectItem>
                      <SelectItem value="Vancouver South Zone">4 Vancouver South Zone</SelectItem>
                      <SelectItem value="Vancouver Kerrisdale Zone">5 Vancouver Kerrisdale Zone</SelectItem>
                      <SelectItem value="Vancouver Kitsilano Zone">6 Vancouver Kitsilano Zone</SelectItem>
                      <SelectItem value="Vancouver Southeast Zone">7 Vancouver Southeast Zone</SelectItem>
                      <SelectItem value="Vancouver East Zone">8 Vancouver East Zone</SelectItem>
                      <SelectItem value="Vancouver Port Zone">9 Vancouver Port Zone</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedZone2} onValueChange={(value) => {
                    setSelectedZone2(value)
                    // Clear all demographic filters when zone is selected
                    setSelectedGender("")
                    setSelected18to24("")
                    setSelected25to44("")
                    setSelected45to64("")
                    setSelected65toolder("")
                    setSelectedDemographic("")
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select another area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CBD West End Zone">1 CBD West End Zone</SelectItem>
                      <SelectItem value="CBD False Creek Zone">2 CBD False Creek Zone</SelectItem>
                      <SelectItem value="Vancouver Broadway Zone">3 Vancouver Broadway Zone</SelectItem>
                      <SelectItem value="Vancouver South Zone">4 Vancouver South Zone</SelectItem>
                      <SelectItem value="Vancouver Kerrisdale Zone">5 Vancouver Kerrisdale Zone</SelectItem>
                      <SelectItem value="Vancouver Kitsilano Zone">6 Vancouver Kitsilano Zone</SelectItem>
                      <SelectItem value="Vancouver Southeast Zone">7 Vancouver Southeast Zone</SelectItem>
                      <SelectItem value="Vancouver East Zone">8 Vancouver East Zone</SelectItem>
                      <SelectItem value="Vancouver Port Zone">9 Vancouver Port Zone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative h-48 bg-[#A8D5E2] rounded border border-gray-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-gray-400 bg-white/50" />
                  </div>
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-lg font-bold hover:bg-gray-50">
                      +
                    </button>
                    <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-lg font-bold hover:bg-gray-50">
                      −
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">
                    Leaflet | Powered by Esri
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rationale</h2>

          <div className="space-y-3">
            <Collapsible open={openSections.includes("why")} onOpenChange={() => toggleSection("why")}>
              <Card className="border border-gray-300">
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                    <span className="font-semibold text-gray-900">Why we measure it</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${openSections.includes("why") ? "rotate-180" : ""}`}
                    />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-4 pb-4 pt-0 text-sm text-gray-700">
                    The Climate Emergency Action Plan​ and Transportation 2040 Plan set targets around our 
                    mode split to reduce our GHG emissions and ensure our transportation 
                    network plays a key role in shaping Vancouver's future growth. We measure mode share to track the effectiveness of:
                      <ul>
                      <li className="mt-2">- Walking, cycling, and public transit are more sustainable modes of transportation that produce significantly fewer emissions per trip compared to single-occupancy vehicles.</li>
                      <li className="mt-2">- Increasing the share of trips made by sustainable modes helps reduce traffic congestion, improve air quality, and enhance public health through increased physical activity.</li>
                      <li className="mt-2">- Tracking mode share allows the city to assess the effectiveness of policies and investments aimed at promoting sustainable transportation options.</li>
                      </ul>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={openSections.includes("how")} onOpenChange={() => toggleSection("how")}>
              <Card className="border border-gray-300">
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                    <span className="font-semibold text-gray-900">How we measure it</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${openSections.includes("how") ? "rotate-180" : ""}`}
                    />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-4 pb-4 pt-0 text-sm text-gray-700">
                    Our Engineering Services department conducts an annual 
                    Transportation Panel Survey recording the trips that respondents make 
                    using any mode of transportation. This indicator is based on all trips 
                    between two points, whether for work, school, shopping, socializing, or 
                    another purpose. It reports the percentage of these trips that are made by walking, 
                    cycling, or public transit on a typical weekday.​
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Collapsible open={openSections.includes("sdg")} onOpenChange={() => toggleSection("sdg")}>
            <Card className="border border-gray-300">
              <CollapsibleTrigger className="w-full">
                <CardContent className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                  <span className="font-semibold text-gray-900">Sustainable Development Goals</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${openSections.includes("sdg") ? "rotate-180" : ""}`}
                  />
                </CardContent>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="px-4 pb-4 pt-0 text-sm text-gray-700">
                  This indicator aligns with: 
                  <ul>
                    <li>- Industry, innovation and infrastructure</li>
                    <li>- Sustainable cities and communities</li>
                  </ul>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          <Collapsible open={openSections.includes("partners")} onOpenChange={() => toggleSection("partners")}>
            <Card className="border border-gray-300">
              <CollapsibleTrigger className="w-full">
                <CardContent className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                  <span className="font-semibold text-gray-900">Key Partners</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${openSections.includes("partners") ? "rotate-180" : ""}`}
                  />
                </CardContent>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="px-4 pb-4 pt-0 text-sm text-gray-700">
                  Meeting our target requires support from:
                  <ul>- Regional government and services</ul>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>

        <Card className="mt-6 border border-gray-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our comment</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                We met our 2020 sustainable mode share goal in 2015/16, and we're working hard to meet our previous 2040
                goal by 2030.
              </p>
              <p>
                Because of Covid-19, the sustainable mode share for all trips in 2020 is 44%, down from 54% in 2019 and
                below the 50% mode share target. This is because there were a significant number of trips that were not
                made, particularly with increased online learning and working remotely from home.
              </p>
              <p>
                In 2021 and beyond, we will continue creating strategies and prioritizing action to meet targets from
                our Climate Emergency Response.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <span className="text-xs text-gray-500">Aug 18, 2021</span>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ThumbsUp className="h-4 w-4" />
                <span className="text-sm">5</span>
              </button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 mb-6 grid grid-cols-2 gap-6">
          <a href="#" className="text-[#0071BC] hover:underline">
            <div className="flex items-center gap-2">
              <span className="text-lg">←</span>
              <div>
                <div className="text-sm font-semibold">Previous indicator</div>
                <div className="text-sm">Walking and cycling trips on a typical weekday</div>
              </div>
            </div>
          </a>
          <a href="#" className="text-[#0071BC] hover:underline text-right ml-auto">
            <div className="flex items-center gap-2 justify-end">
              <div>
                <div className="text-sm font-semibold">Next indicator</div>
                <div className="text-sm">Traffic-related fatalities</div>
              </div>
              <span className="text-lg">→</span>
            </div>
          </a>
        </div>
      </div>

      <footer className="bg-[#0071BC] text-white py-3 px-6 mt-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src="logonew.PNG" alt="Logo" className="w-40 h-15" />
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Website Accessibility
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
