"use client"

import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import type { FeatureCollection } from "geojson"
import type L from "leaflet"

// Dynamic import to avoid SSR issues with Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
)

interface VancouverMapProps {
  className?: string
  onZoneSelect?: (zoneName: string) => void
  selectedZone1?: string
  selectedZone2?: string
}

export default function VancouverMap({ className, onZoneSelect, selectedZone1, selectedZone2 }: VancouverMapProps) {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null)
  const [isClient, setIsClient] = useState(false)
  const layerMapRef = useRef<Map<string, L.Layer>>(new Map())

  useEffect(() => {
    setIsClient(true)
    // Load the GeoJSON data
    fetch("/maps/vancouver.geojson")
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error("Error loading GeoJSON:", error))
  }, [])

  // Update layer styles when selected zones change
  useEffect(() => {
    layerMapRef.current.forEach((layer, zoneName) => {
      const cleanZoneName = zoneName.replace(/^\d+\s+/, '')
      const isSelected = cleanZoneName === selectedZone1 || cleanZoneName === selectedZone2
      
      if (isSelected) {
        // Style selected zones with green
        (layer as any).setStyle({
          fillColor: "#22c55e", // Green color
          fillOpacity: 0.6,
          weight: 3,
          color: "#16a34a", // Darker green border
        })
      } else {
        // Reset to default style
        (layer as any).setStyle({
          fillColor: "#0071BC",
          fillOpacity: 0.3,
          weight: 2,
          color: "#ffffff",
        })
      }
    })
  }, [selectedZone1, selectedZone2])

  if (!isClient || !geoData) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <p className="text-gray-500 text-sm">Loading map...</p>
      </div>
    )
  }

  return (
    <MapContainer
      center={[49.2497, -123.1193]} // Vancouver center
      zoom={11}
      minZoom={11}
      maxZoom={18}
      className={className}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData && (
        <GeoJSON
          key={`geojson-${selectedZone1}-${selectedZone2}`}
          data={geoData}
          style={(feature) => {
            if (feature && feature.properties && feature.properties.area) {
              const areaName = feature.properties.area
              const cleanZoneName = areaName.replace(/^\d+\s+/, '')
              
              // Check if this is Zone 1 (green)
              if (cleanZoneName === selectedZone1) {
                return {
                  fillColor: "#308820ff", // Green for first zone
                  weight: 3,
                  opacity: 1,
                  color: "#308820ff", // Green border
                  fillOpacity: 0.5,
                }
              }
              
              // Check if this is Zone 2 (red)
              if (cleanZoneName === selectedZone2) {
                return {
                  fillColor: "#D32F2F", // Red for second zone
                  weight: 3,
                  opacity: 1,
                  color: "#D32F2F", // Red border
                  fillOpacity: 0.5,
                }
              }
            }
            
            return {
              fillColor: "#0071BC",
              weight: 2,
              opacity: 1,
              color: "#ffffff",
              fillOpacity: 0.3,
            }
          }}
          onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.area) {
              const areaName = feature.properties.area
              
              // Store layer in map for later style updates
              layerMapRef.current.set(areaName, layer)
              
              // Bind tooltip that shows on hover with custom styling
              layer.bindTooltip(areaName, {
                permanent: false,
                direction: "bottom",
                className: "custom-tooltip",
                opacity: 0.95,
                offset: [0, 10],
              })
              
              // Add hover and click effects
              layer.on({
                mouseover: (e: L.LeafletMouseEvent) => {
                  const target = e.target
                  const cleanZoneName = areaName.replace(/^\d+\s+/, '')
                  const isSelected = cleanZoneName === selectedZone1 || cleanZoneName === selectedZone2
                  
                  if (!isSelected) {
                    target.setStyle({
                      fillOpacity: 0.6,
                      weight: 3,
                    })
                  }
                },
                mouseout: (e: L.LeafletMouseEvent) => {
                  const target = e.target
                  const cleanZoneName = areaName.replace(/^\d+\s+/, '')
                  const isSelected = cleanZoneName === selectedZone1 || cleanZoneName === selectedZone2
                  
                  if (!isSelected) {
                    target.setStyle({
                      fillOpacity: 0.3,
                      weight: 2,
                    })
                  }
                },
                click: (e: L.LeafletMouseEvent) => {
                  // Call the callback to update the zone filter in the dashboard
                  if (onZoneSelect && areaName) {
                    onZoneSelect(areaName)
                  }
                },
              })
            }
          }}
        />
      )}
    </MapContainer>
  )
}
