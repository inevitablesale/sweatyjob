"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  MapPin,
  ArrowRight,
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  Calendar,
  MapPinned,
  Navigation,
  Info,
  Loader2,
  Sparkles,
  Building,
  Home,
} from "lucide-react"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import type React from "react"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import NeighborhoodReviews from "@/components/neighborhood-reviews"
import Link from "next/link"
// Make sure the import statement for NeighborhoodOffer is correct
import { NeighborhoodOffer } from "@/components/neighborhood-offer"

// Define a function to get neighborhood history
function getNeighborhoodHistory(neighborhood: string): string | undefined {
  const neighborhoodHistories: Record<string, string> = {
    "Battery Park":
      "Battery Park was established in the early 20th century and is known for its historic architecture and community feel.",
    Bellevue:
      "Bellevue was developed in the early 20th century and is characterized by its charming homes and vibrant commercial district.",
    "Laburnum Park":
      "Laburnum Park is a residential neighborhood featuring early 20th century homes with distinctive architectural styles.",
    "Ginter Park":
      "Ginter Park is a historic neighborhood with grand homes and wide boulevards, developed by Lewis Ginter in the late 19th century.",
    "Sherwood Park":
      "Sherwood Park is a quiet residential neighborhood with well-maintained homes and convenient access to amenities.",
    Rosedale: "Rosedale is a diverse neighborhood with a mix of housing styles and a strong sense of community.",
    "Bryan Parkway":
      "Bryan Parkway is a picturesque neighborhood with distinctive homes and a strong community spirit.",
    "The Fan":
      "The Fan is one of Richmond's most iconic neighborhoods, known for its distinctive fan-shaped street grid and stunning architecture.",
    "Church Hill": "Church Hill is Richmond's oldest neighborhood, rich in history and architectural significance.",
    "Museum District":
      "The Museum District is a culturally rich neighborhood centered around the Virginia Museum of Fine Arts and the Virginia Museum of History & Culture.",
  }

  return neighborhoodHistories[neighborhood]
}

// Function to get neighborhood-specific service descriptions
function getNeighborhoodServiceDescriptions(neighborhood: string): Record<string, string> {
  const serviceDescriptions: Record<string, Record<string, string>> = {
    "Battery Park": {
      "lawn-mowing":
        "Precision grass lawn mowing tailored for Battery Park's historic properties and mature tree-lined landscapes with our robot lawn mowing technology",
      "window-cleaning": "Restore the charm of Battery Park's historic windows with our streak-free cleaning service",
      "pressure-washing":
        "Gentle yet effective pressure washing for Battery Park's historic brick and siding exteriors",
      "flower-bed-maintenance": "Expert care for Battery Park's established perennial beds and ornamental gardens",
      "deck-staining":
        "Weather-resistant staining for Battery Park decks that preserves wood against Richmond humidity",
      "deck-painting": "Custom deck painting that complements Battery Park's historic home exteriors",
      "deck-sanding": "Careful restoration of Battery Park's weathered deck surfaces to like-new condition",
      "carpet-cleaning": "Deep cleaning that removes allergens common in Battery Park's historic homes",
      "mobile-car-detailing": "Convenient at-home car detailing for busy Battery Park residents",
      "garden-weeding": "Meticulous weeding service that preserves Battery Park's native plantings",
      "pet-waste-removal": "Regular cleanup service for Battery Park's pet-friendly yards and green spaces",
      "grill-steaming": "Professional cleaning for Battery Park's outdoor cooking areas and entertainment spaces",
    },
    Bellevue: {
      "lawn-mowing": "Precision mowing for Bellevue's distinctive Craftsman and Colonial Revival home landscapes",
      "window-cleaning": "Crystal-clear results for Bellevue's charming bungalow and foursquare home windows",
      "pressure-washing": "Gentle restoration for Bellevue's historic porches, walkways, and exterior surfaces",
      "flower-bed-maintenance": "Expert care for Bellevue's established gardens and MacArthur Avenue curb appeal",
      "deck-staining": "Premium staining services that preserve Bellevue's charming outdoor living spaces",
      "deck-painting": "Custom color matching for Bellevue's historic home exterior palettes",
      "deck-sanding": "Careful restoration of Bellevue's classic wooden porches and deck surfaces",
      "carpet-cleaning": "Deep cleaning that preserves Bellevue's vintage home interiors and air quality",
      "mobile-car-detailing": "Convenient auto detailing that comes to your Bellevue home or workplace",
      "garden-weeding": "Meticulous weeding that maintains Bellevue's prized garden landscapes",
      "pet-waste-removal": "Regular cleanup for Bellevue's family-friendly yards and pet spaces",
      "grill-steaming": "Professional cleaning for Bellevue's backyard entertainment areas and grilling stations",
    },
    "Laburnum Park": {
      "lawn-mowing": "Precision cutting for Laburnum Park's generous lots and established lawns",
      "window-cleaning": "Expert cleaning for Laburnum Park's distinctive Tudor and Colonial Revival windows",
      "pressure-washing": "Gentle restoration for Laburnum Park's historic brick, stone, and siding exteriors",
      "flower-bed-maintenance": "Specialized care for Laburnum Park's mature landscape designs and garden beds",
      "deck-staining": "Premium staining that protects Laburnum Park's outdoor living areas from Virginia weather",
      "deck-painting": "Custom color solutions that complement Laburnum Park's architectural styles",
      "deck-sanding": "Meticulous preparation of Laburnum Park's wooden surfaces for lasting protection",
      "carpet-cleaning": "Deep cleaning that preserves Laburnum Park's classic home interiors",
      "mobile-car-detailing": "Convenient auto detailing that comes to your Laburnum Park residence",
      "garden-weeding": "Careful weeding that maintains Laburnum Park's established garden aesthetics",
      "pet-waste-removal": "Regular cleanup for Laburnum Park's family yards and pet areas",
      "grill-steaming": "Professional cleaning for Laburnum Park's outdoor entertainment spaces",
    },
    "Ginter Park": {
      "lawn-mowing": "Premium lawn care for Ginter Park's grand estates and expansive green spaces",
      "window-cleaning": "Expert cleaning for Ginter Park's historic multi-pane and stained glass windows",
      "pressure-washing": "Gentle restoration for Ginter Park's ornate architectural details and surfaces",
      "flower-bed-maintenance": "Specialized care for Ginter Park's showcase gardens and historic plantings",
      "deck-staining": "Premium staining for Ginter Park's elegant outdoor entertaining areas",
      "deck-painting": "Custom color solutions that enhance Ginter Park's stately home exteriors",
      "deck-sanding": "Meticulous restoration of Ginter Park's fine wooden surfaces and structures",
      "carpet-cleaning": "Deep cleaning that preserves Ginter Park's luxury home interiors",
      "mobile-car-detailing": "Premium auto detailing at your Ginter Park residence",
      "garden-weeding": "Careful maintenance of Ginter Park's showcase garden landscapes",
      "pet-waste-removal": "Discreet waste management for Ginter Park's manicured lawns and pet areas",
      "grill-steaming": "Professional cleaning for Ginter Park's outdoor kitchen and entertainment areas",
    },
    "Sherwood Park": {
      "lawn-mowing": "Consistent cutting for Sherwood Park's family-friendly yards and green spaces",
      "window-cleaning": "Streak-free cleaning for Sherwood Park's mid-century and contemporary windows",
      "pressure-washing": "Effective cleaning for Sherwood Park's driveways, siding, and outdoor surfaces",
      "flower-bed-maintenance": "Reliable care for Sherwood Park's family gardens and landscape features",
      "deck-staining": "Durable staining for Sherwood Park's backyard decks and outdoor spaces",
      "deck-painting": "Fresh color options for Sherwood Park's outdoor living areas",
      "deck-sanding": "Thorough preparation of Sherwood Park's deck surfaces for lasting protection",
      "carpet-cleaning": "Deep cleaning for Sherwood Park's family-friendly home interiors",
      "mobile-car-detailing": "Convenient auto detailing that comes to your Sherwood Park home",
      "garden-weeding": "Regular weeding service for Sherwood Park's family gardens and landscapes",
      "pet-waste-removal": "Consistent cleanup for Sherwood Park's pet-friendly yards",
      "grill-steaming": "Professional cleaning for Sherwood Park's family barbecue and entertainment areas",
    },
    Rosedale: {
      "lawn-mowing": "Adaptive lawn care for Rosedale's diverse property styles and yard sizes",
      "window-cleaning": "Customized cleaning for Rosedale's varied architectural window styles",
      "pressure-washing": "Effective restoration for Rosedale's diverse exterior surfaces and materials",
      "flower-bed-maintenance": "Flexible care options for Rosedale's evolving garden landscapes",
      "deck-staining": "Protective staining for Rosedale's outdoor living spaces and wooden structures",
      "deck-painting": "Fresh color applications for Rosedale's varied deck and porch styles",
      "deck-sanding": "Careful preparation of Rosedale's wooden surfaces for lasting protection",
      "carpet-cleaning": "Thorough cleaning for Rosedale's diverse home interiors and floor coverings",
      "mobile-car-detailing": "Convenient auto detailing that comes to your Rosedale residence",
      "garden-weeding": "Attentive weeding for Rosedale's community and private garden spaces",
      "pet-waste-removal": "Regular cleanup for Rosedale's pet-friendly yards and common areas",
      "grill-steaming": "Professional cleaning for Rosedale's outdoor cooking and entertainment areas",
    },
    "Bryan Parkway": {
      "lawn-mowing": "Precision cutting for Bryan Parkway's picturesque yards and landscaped medians",
      "window-cleaning": "Expert cleaning for Bryan Parkway's Tudor and Craftsman-style windows",
      "pressure-washing": "Gentle restoration for Bryan Parkway's distinctive home exteriors and walkways",
      "flower-bed-maintenance": "Specialized care for Bryan Parkway's established gardens and native plantings",
      "deck-staining": "Premium staining for Bryan Parkway's outdoor spaces with park views",
      "deck-painting": "Custom color solutions that complement Bryan Parkway's natural surroundings",
      "deck-sanding": "Meticulous preparation of Bryan Parkway's wooden surfaces for lasting beauty",
      "carpet-cleaning": "Deep cleaning for Bryan Parkway's comfortable home interiors",
      "mobile-car-detailing": "Convenient auto detailing at your Bryan Parkway residence",
      "garden-weeding": "Careful weeding that preserves Bryan Parkway's native plant landscapes",
      "pet-waste-removal": "Regular cleanup for Bryan Parkway's pet-friendly yards near the park",
      "grill-steaming": "Professional cleaning for Bryan Parkway's outdoor entertainment areas",
    },
    "The Fan": {
      "lawn-mowing": "Precision cutting for The Fan's compact urban yards and garden spaces",
      "window-cleaning": "Expert care for The Fan's historic bay windows and Victorian glass",
      "pressure-washing": "Gentle restoration for The Fan's ornate brick facades and iron details",
      "flower-bed-maintenance": "Specialized care for The Fan's urban gardens and container plantings",
      "deck-staining": "Premium staining for The Fan's intimate outdoor spaces and roof decks",
      "deck-painting": "Custom color matching for The Fan's historic exterior palettes",
      "deck-sanding": "Careful restoration of The Fan's urban deck surfaces and wooden features",
      "carpet-cleaning": "Deep cleaning that preserves The Fan's historic home interiors",
      "mobile-car-detailing": "Convenient auto detailing that comes to your Fan District residence",
      "garden-weeding": "Meticulous weeding for The Fan's urban garden spaces and tree wells",
      "pet-waste-removal": "Regular cleanup for The Fan's city yards and pet-friendly spaces",
      "grill-steaming": "Professional cleaning for The Fan's urban outdoor cooking and entertainment areas",
    },
    "Church Hill": {
      "lawn-mowing": "Precision cutting for Church Hill's historic properties and sloped landscapes",
      "window-cleaning": "Expert care for Church Hill's historic multi-pane and original glass windows",
      "pressure-washing": "Gentle restoration for Church Hill's historic brick, cobblestone, and wooden surfaces",
      "flower-bed-maintenance": "Specialized care for Church Hill's period gardens and historic plantings",
      "deck-staining": "Premium staining for Church Hill's decks with river and city views",
      "deck-painting": "Historic color matching for Church Hill's period-appropriate exteriors",
      "deck-sanding": "Careful restoration of Church Hill's historic wooden surfaces and structures",
      "carpet-cleaning": "Deep cleaning that preserves Church Hill's historic home interiors",
      "mobile-car-detailing": "Convenient auto detailing that comes to your Church Hill residence",
      "garden-weeding": "Meticulous weeding for Church Hill's historic garden landscapes",
      "pet-waste-removal": "Regular cleanup for Church Hill's urban yards and pet areas",
      "grill-steaming": "Professional cleaning for Church Hill's outdoor entertainment spaces with city views",
    },
    "Museum District": {
      "lawn-mowing": "Precision cutting for Museum District's elegant lawns and cultural landscapes",
      "window-cleaning": "Expert care for Museum District's distinctive architectural windows",
      "pressure-washing": "Gentle restoration for Museum District's historic facades and walkways",
      "flower-bed-maintenance": "Specialized care for Museum District's refined gardens and landscape designs",
      "deck-staining": "Premium staining for Museum District's sophisticated outdoor living areas",
      "deck-painting": "Custom color solutions that complement Museum District's architectural styles",
      "deck-sanding": "Meticulous preparation of Museum District's wooden surfaces for lasting beauty",
      "carpet-cleaning": "Deep cleaning that preserves Museum District's refined home interiors",
      "mobile-car-detailing": "Convenient auto detailing at your Museum District residence",
      "garden-weeding": "Careful weeding that maintains Museum District's curated garden aesthetics",
      "pet-waste-removal": "Discreet waste management for Museum District's manicured lawns and pet areas",
      "grill-steaming": "Professional cleaning for Museum District's outdoor entertainment spaces",
    },
  }

  // Default descriptions if neighborhood-specific ones aren't available
  const defaultDescriptions = {
    "lawn-mowing": "Professional grass lawn mowing services with robot lawn mowing technology tailored for your yard",
    "window-cleaning": "Crystal clear windows inside and out for your home",
    "pressure-washing": "Revitalize your home's exterior surfaces and curb appeal",
    "flower-bed-maintenance": "Keep your garden beds looking beautiful year-round",
    "deck-staining": "Protect and beautify your deck with professional staining",
    "deck-painting": "Transform your deck with a fresh coat of paint",
    "deck-sanding": "Smooth and prepare your deck for staining or painting",
    "carpet-cleaning": "Deep clean your carpets to remove dirt, stains, and allergens",
    "mobile-car-detailing": "Professional car cleaning and detailing at your home",
    "garden-weeding": "Keep your garden beds free of unwanted weeds",
    "pet-waste-removal": "Regular cleanup of pet waste from your yard",
    "grill-steaming": "Deep clean your grill for healthier, better-tasting food",
    "gutter-cleaning": "Prevent water damage with our thorough gutter cleaning service.",
  }

  return serviceDescriptions[neighborhood] || defaultDescriptions
}

// Define services data with dynamic descriptions based on neighborhood
function getNeighborhoodServices(neighborhood: string) {
  const descriptions = getNeighborhoodServiceDescriptions(neighborhood)

  return [
    {
      name: "Robot Lawn Mowing",
      description: descriptions["lawn-mowing"],
      slug: "lawn-mowing",
      image: "https://www.bestmow.com/cdn/shop/files/bestmow_robot_mower_slid_2.webp?v=1737858458",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 3, // days since last rain
      id: "lawn-mowing",
    },
    {
      name: "Window Cleaning",
      description: descriptions["window-cleaning"],
      slug: "window-cleaning",
      image: "/images/services/window-cleaning.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 2, // days of clear weather
      id: "window-cleaning",
    },
    {
      name: "Pressure Washing",
      description: descriptions["pressure-washing"],
      slug: "pressure-washing",
      image: "/images/services/pressure-washing.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 3, // days of clear weather
      id: "pressure-washing",
    },
    {
      name: "Flower Bed Maintenance",
      description: descriptions["flower-bed-maintenance"],
      slug: "flower-bed-maintenance",
      image: "/images/services/flower-bed-maintenance.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy", "light rain"],
      recommendationThreshold: 1, // days after rain
      id: "flower-bed-maintenance",
    },
    {
      name: "Deck Staining",
      description: descriptions["deck-staining"],
      slug: "deck-staining",
      image: "/images/services/deck-staining.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 3, // days of clear weather
      id: "deck-staining",
    },
    {
      name: "Deck Painting",
      description: descriptions["deck-painting"],
      slug: "deck-painting",
      image: "/images/services/deck-painting.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 3, // days of clear weather
      id: "deck-painting",
    },
    {
      name: "Deck Sanding",
      description: descriptions["deck-sanding"],
      slug: "deck-sanding",
      image: "/images/services/deck-sanding.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 3, // days of clear weather
      id: "deck-sanding",
    },
    {
      name: "Carpet Cleaning",
      description: descriptions["carpet-cleaning"],
      slug: "carpet-cleaning",
      image: "/images/services/carpet-cleaning.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 2, // days of clear weather
      id: "carpet-cleaning",
    },
    {
      name: "Mobile Car Detailing",
      description: descriptions["mobile-car-detailing"],
      slug: "mobile-car-detailing",
      image: "/images/services/mobile-car-detailing.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 2, // days of clear weather
      id: "mobile-car-detailing",
    },
    {
      name: "Garden Weeding",
      description: descriptions["garden-weeding"],
      slug: "garden-weeding",
      image: "/images/services/garden-weeding.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy", "light rain"],
      recommendationThreshold: 1, // days after rain
      id: "garden-weeding",
    },
    {
      name: "Pet Waste Removal",
      description: descriptions["pet-waste-removal"],
      slug: "pet-waste-removal",
      image: "/images/services/pet-waste-removal.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy", "light rain"],
      recommendationThreshold: 1, // any weather except heavy rain
      id: "pet-waste-removal",
    },
    {
      name: "Grill Steaming",
      description: descriptions["grill-steaming"],
      slug: "grill-steaming",
      image: "/images/services/grill-steaming.jpg",
      weatherConditions: ["clear", "clouds", "partly cloudy"],
      recommendationThreshold: 2, // days of clear weather
      id: "grill-steaming",
    },
    {
      name: "Gutter Cleaning",
      description: descriptions["gutter-cleaning"],
      slug: "gutter-cleaning",
      image: "/images/services/pressure-washing.jpg", // Using pressure washing image as fallback
      weatherConditions: ["clear", "clouds", "partly cloudy", "light rain"],
      recommendationThreshold: 1, // any weather except heavy rain
      id: "gutter-cleaning",
    },
  ]
}

// Updated function to get real estate businesses with descriptions instead of web links
function getRealEstateBusinesses(neighborhood: string): {
  name: string
  category: string
  address: string
  phone?: string
  description?: string
  imageUrl?: string
  totalScore?: string
  reviewsCount?: string
}[] {
  // This is a static representation of the CSV data, filtered by neighborhood
  // In a production app, you would fetch this from an API or database
  const realEstateData = [
    {
      name: "Richmond Realty Group",
      category: "Real Estate Agency",
      address: "1004 Fourqurean Ln, Richmond, VA 23222",
      phone: "(804) 270-9440",
      description:
        "Richmond Realty Group specializes in residential properties throughout Richmond's historic neighborhoods, with particular expertise in Northside communities.",
      imageUrl: "/modern-real-estate-interior.png",
      neighborhood: "Laburnum Park",
      totalScore: "4.6",
      reviewsCount: "107",
    },
    {
      name: "Broad Street Property Management",
      category: "Property Management Company",
      address: "3810 W Broad St Suite 200, Richmond, VA 23230",
      phone: "(804) 555-1234",
      description:
        "Full-service property management company serving Richmond's Northside neighborhoods with rental management, maintenance, and tenant placement services.",
      imageUrl: "/welcoming-property-office.png",
      neighborhood: "Laburnum Park",
      totalScore: "3.6",
      reviewsCount: "42",
    },
    {
      name: "Brookland Park Properties",
      category: "Real Estate Agency",
      address: "1221 E Brookland Park Blvd, Richmond, VA 23222",
      phone: "(804) 555-5678",
      description:
        "Boutique real estate agency focused on Northside Richmond neighborhoods with expertise in historic home renovations and investment properties.",
      imageUrl: "/modern-real-estate-office.png",
      neighborhood: "Laburnum Park",
      totalScore: "3.5",
      reviewsCount: "28",
    },
    {
      name: "Bellevue Realty",
      category: "Real Estate Agency",
      address: "4019 MacArthur Ave, Richmond, VA 23227",
      phone: "(804) 555-2345",
      description:
        "Specializing in Bellevue's historic homes and properties, with deep knowledge of the neighborhood's architectural styles and renovation requirements.",
      imageUrl: "/grand-historic-estate.png",
      neighborhood: "Bellevue",
      totalScore: "4.2",
      reviewsCount: "24",
    },
    {
      name: "MacArthur Property Management",
      category: "Property Management Company",
      address: "4000 MacArthur Ave, Richmond, VA 23227",
      phone: "(804) 555-3456",
      description:
        "Local property management company serving Bellevue and surrounding Northside neighborhoods with personalized rental management services.",
      imageUrl: "/building-blocks-management.png",
      neighborhood: "Bellevue",
      totalScore: "3.8",
      reviewsCount: "15",
    },
    {
      name: "Battery Park Homes",
      category: "Real Estate Agency",
      address: "2200 North Ave, Richmond, VA 23222",
      phone: "(804) 555-4567",
      description:
        "Focused on Battery Park's diverse housing market, from historic homes to modern renovations, with expertise in community development.",
      imageUrl: "/suburban-street-view.png",
      neighborhood: "Battery Park",
      totalScore: "4.5",
      reviewsCount: "32",
    },
    {
      name: "Northside Property Management",
      category: "Property Management Company",
      address: "2100 North Ave, Richmond, VA 23222",
      phone: "(804) 555-5678",
      description:
        "Comprehensive property management services for Battery Park and surrounding Northside neighborhoods, specializing in single-family homes and small multi-family properties.",
      imageUrl: "/modern-property-management.png",
      neighborhood: "Battery Park",
      totalScore: "3.9",
      reviewsCount: "18",
    },
    {
      name: "Ginter Park Realty",
      category: "Real Estate Agency",
      address: "3901 Chamberlayne Ave, Richmond, VA 23227",
      phone: "(804) 555-6789",
      description:
        "Luxury real estate specialists serving Ginter Park's historic district, with expertise in grand homes and estate properties.",
      imageUrl: "/modern-villa-infinity-pool.png",
      neighborhood: "Ginter Park",
      totalScore: "4.7",
      reviewsCount: "41",
    },
    {
      name: "Seminary Avenue Properties",
      category: "Property Management Company",
      address: "1200 Seminary Ave, Richmond, VA 23227",
      phone: "(804) 555-7890",
      description:
        "Boutique property management firm specializing in Ginter Park's historic homes and high-end rental properties.",
      imageUrl: "/preservation-planning.png",
      neighborhood: "Ginter Park",
      totalScore: "4.1",
      reviewsCount: "22",
    },
    {
      name: "Sherwood Park Realty",
      category: "Real Estate Agency",
      address: "2900 Griffin Ave, Richmond, VA 23222",
      phone: "(804) 555-8901",
      description:
        "Family-focused real estate agency serving Sherwood Park with expertise in mid-century homes and family-friendly properties.",
      imageUrl: "/suburban-family-home.png",
      neighborhood: "Sherwood Park",
      totalScore: "4.0",
      reviewsCount: "19",
    },
    {
      name: "Rosedale Properties",
      category: "Real Estate Agency",
      address: "1500 Mechanicsville Turnpike, Richmond, VA 23223",
      phone: "(804) 555-9012",
      description:
        "Community-oriented real estate agency specializing in Rosedale's diverse housing market and affordable home options.",
      imageUrl: "/placeholder.svg?key=mlnfo",
      neighborhood: "Rosedale",
      totalScore: "3.7",
      reviewsCount: "12",
    },
    {
      name: "Bryan Park Realty",
      category: "Real Estate Agency",
      address: "1800 Westbrook Ave, Richmond, VA 23227",
      phone: "(804) 555-0123",
      description:
        "Specializing in homes near Bryan Park with expertise in properties with natural settings and park views.",
      imageUrl: "/urban-parkside-living.png",
      neighborhood: "Bryan Parkway",
      totalScore: "4.3",
      reviewsCount: "27",
    },
    {
      name: "Fan District Realty",
      category: "Real Estate Agency",
      address: "2000 W Main St, Richmond, VA 23220",
      phone: "(804) 555-1234",
      description:
        "Historic property specialists serving The Fan with deep knowledge of Victorian, Colonial Revival, and Italianate architecture.",
      imageUrl: "/historic-row-houses.png",
      neighborhood: "The Fan",
      totalScore: "4.8",
      reviewsCount: "56",
    },
    {
      name: "Monument Avenue Properties",
      category: "Property Management Company",
      address: "1800 Monument Ave, Richmond, VA 23220",
      phone: "(804) 555-2345",
      description:
        "Upscale property management company specializing in The Fan's historic homes and luxury apartment conversions.",
      imageUrl: "/elegant-estate-management.png",
      neighborhood: "The Fan",
      totalScore: "4.4",
      reviewsCount: "38",
    },
    {
      name: "Church Hill Realty",
      category: "Real Estate Agency",
      address: "2500 E Broad St, Richmond, VA 23223",
      phone: "(804) 555-3456",
      description:
        "Richmond's oldest neighborhood specialists with expertise in historic preservation and Church Hill's unique property market.",
      imageUrl: "/historic-home-renovation.png",
      neighborhood: "Church Hill",
      totalScore: "4.6",
      reviewsCount: "43",
    },
    {
      name: "Museum District Properties",
      category: "Real Estate Agency",
      address: "3200 Grove Ave, Richmond, VA 23221",
      phone: "(804) 555-4567",
      description:
        "Cultural district specialists serving the Museum District with expertise in early 20th century homes and proximity to Richmond's cultural institutions.",
      imageUrl: "/urban-arts-hub.png",
      neighborhood: "Museum District",
      totalScore: "4.9",
      reviewsCount: "62",
    },
    {
      name: "VMFA Area Management",
      category: "Property Management Company",
      address: "3100 Grove Ave, Richmond, VA 23221",
      phone: "(804) 555-5678",
      description:
        "Specialized property management for Museum District homes and apartments, catering to professionals and art enthusiasts.",
      imageUrl: "/arts-district-management.png",
      neighborhood: "Museum District",
      totalScore: "4.2",
      reviewsCount: "29",
    },
  ]

  // Filter businesses by neighborhood or return nearby ones if none match exactly
  const neighborhoodBusinesses = realEstateData.filter(
    (business) => business.neighborhood.toLowerCase() === neighborhood.toLowerCase(),
  )

  // If no exact matches, return some nearby options
  if (neighborhoodBusinesses.length === 0) {
    // For Richmond neighborhoods, return a mix of agencies
    if (
      [
        "Bellevue",
        "Battery Park",
        "Ginter Park",
        "Laburnum Park",
        "Sherwood Park",
        "Rosedale",
        "Bryan Parkway",
      ].includes(neighborhood)
    ) {
      return realEstateData
        .filter((business) =>
          ["Northside", "Laburnum Park", "Ginter Park", "Battery Park", "Bellevue"].includes(business.neighborhood),
        )
        .slice(0, 3)
    } else if (["The Fan", "Museum District", "Church Hill"].includes(neighborhood)) {
      return realEstateData
        .filter((business) => ["The Fan", "Museum District", "Church Hill"].includes(business.neighborhood))
        .slice(0, 3)
    } else {
      // Return a few random ones as fallback
      return realEstateData.slice(0, 3)
    }
  }

  return neighborhoodBusinesses
}

function getNeighborhoodFAQs(neighborhood: string): any[] {
  // Get landmarks for this neighborhood to reference in FAQs
  const landmarks = getNeighborhoodLandmarks(neighborhood)
  const landmarksList = landmarks.landmarks.length > 0 ? landmarks.landmarks : ["local parks", "community centers"]
  const intersectionsList =
    landmarks.intersections.length > 0 ? landmarks.intersections : ["major streets", "residential areas"]

  return [
    {
      "@type": "Question",
      name: `How does the robot lawn mowing work in ${neighborhood}, Richmond VA near ${landmarksList[0]} and ${landmarksList.length > 1 ? landmarksList[1] : "other local landmarks"}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Our robot lawn mowing in ${neighborhood} uses advanced GPS technology instead of traditional boundary wires. We install a GPS pole, connect the mower to your WiFi, and it works autonomously. The intelligent mapping feature creates virtual boundaries, eliminating the need for unsightly wires around your property. This is especially beneficial for homes near ${intersectionsList[0]} and throughout the ${neighborhood} area, where maintaining curb appeal is important.`,
      },
    },
    {
      "@type": "Question",
      name: `What are the benefits of grass lawn mowing with robots in ${neighborhood}, especially near ${landmarksList[0]}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Robot lawn mowing in ${neighborhood} provides daily cutting for a consistently perfect lawn, zero noise pollution (important for residents near ${landmarksList.length > 1 ? landmarksList[1] : landmarksList[0]} and ${intersectionsList[0]}), no emissions, and eliminates scheduling hassles. Your lawn stays at the ideal height at all times, promoting healthier growth and reducing water needs. Plus, you reclaim hours of your weekend while your lawn looks better than ever. Homeowners throughout ${neighborhood}, particularly those near ${intersectionsList.length > 1 ? intersectionsList[1] : intersectionsList[0]}, appreciate the consistent, manicured appearance.`,
      },
    },
    {
      "@type": "Question",
      name: `How much do lawn mowing services near me cost in ${neighborhood}, including areas around ${landmarksList[0]}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `The SmartYard membership in ${neighborhood} is $30/week ($120/month) with no long-term commitment. This includes your dedicated AI mower, monthly human touch-ups for trimming and edging, complete maintenance, and exclusive member discounts on other home services. There may be a one-time setup fee depending on your lawn size and complexity. This pricing is consistent throughout ${neighborhood}, whether you're near ${intersectionsList[0]} or ${landmarksList.length > 1 ? landmarksList[1] : "other local areas"}.`,
      },
    },
    {
      "@type": "Question",
      name: `Is the SmartYard robot lawn mowing safe for children and pets in ${neighborhood} homes near ${intersectionsList.length > 1 ? intersectionsList[1] : intersectionsList[0]}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes, our robot lawn mowing deployed in ${neighborhood} has multiple safety features including lift sensors, obstacle detection, and blade-stop technology that activates when the mower is lifted or tilted. They're designed to operate safely around children, pets, and obstacles common in ${neighborhood} yards. Families near ${landmarksList[0]} and throughout the ${neighborhood} area appreciate the peace of mind our safety features provide, especially in busy areas near ${intersectionsList[0]}.`,
      },
    },
    {
      "@type": "Question",
      name: `How do I apply for grass lawn mowing services near me in ${neighborhood}, particularly for properties close to ${landmarksList.length > 1 ? landmarksList[1] : landmarksList[0]}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `To apply for SmartYard robot lawn mowing in ${neighborhood}, simply text (804) 573-9825. We'll check availability in your specific area of ${neighborhood}, whether you're near ${intersectionsList[0]}, ${landmarksList[0]}, or anywhere else in the neighborhood, and schedule a property assessment. With only 100 bots available for all of Richmond, we recommend applying early to secure your spot, especially for residents near popular areas like ${landmarksList.length > 1 ? landmarksList[1] : landmarksList[0]}.`,
      },
    },
  ]
}

// Real neighborhood descriptions based on research
function getNeighborhoodDescription(neighborhood: string, description: string): string {
  const neighborhoodDescriptions: Record<string, string> = {
    "Battery Park": `Battery Park is a historic neighborhood in Richmond's Northside known for its beautiful park, tree-lined streets, and mix of historic and modern homes near Hotchkiss Field Community Center and the Northside YMCA. Established in the early 20th century, this vibrant community features distinctive architectural styles including Colonial Revival, Craftsman, and Tudor homes along Overbrook Road and North Avenue. The neighborhood's mature tree canopy creates unique grass lawn mowing challenges that SmartYard's AI mowers are perfectly designed to address. Our robot lawn mowing technology navigates Battery Park's varied terrain with precision, maintaining perfect lawns without the noise and scheduling hassles of traditional lawn mowing services near me. Residents near Chamberlayne Avenue and Ladies Mile Road particularly appreciate our quiet operation.`,

    Bellevue: `Bellevue is one of Richmond's most charming neighborhoods, characterized by its historic homes, tree-lined streets, and vibrant commercial district along MacArthur Avenue near Once Upon a Vine North and Stir Crazy Café. Developed primarily in the 1910s and 1920s, Bellevue features an impressive collection of Arts and Crafts, Colonial Revival, and American Foursquare homes along Pope Avenue and Fauquier Avenue. The neighborhood's distinctive architectural details, established gardens, and mature landscaping create specific grass lawn mowing requirements that SmartYard's robot lawn mowing technology is uniquely equipped to handle. Our autonomous mowers work daily to maintain Bellevue's lawns at the perfect height, enhancing the neighborhood's historic charm while providing homeowners with more free time to enjoy MacArthur Avenue's shops and restaurants. Properties near Newport Drive and Avondale Avenue benefit from our precision cutting.`,

    "Laburnum Park": `Laburnum Park is a residential neighborhood featuring early 20th century homes with distinctive architectural styles and beautiful landscaping near Laburnum Elementary School and Norrell Elementary School. This historic district, developed between 1913 and 1950, is known for its wide streets, generous lots, and impressive collection of Colonial Revival, Tudor, and Craftsman homes along Laburnum Avenue and Hermitage Road. The neighborhood's established gardens, mature trees, and historic properties require specialized grass lawn mowing services that SmartYard's AI mowers deliver with precision. Our robot lawn mowing technology maintains Laburnum Park's lawns at the ideal height daily, preserving the neighborhood's elegant character while eliminating the noise and inconvenience of traditional lawn mowing services near me. Residents near Westwood Avenue and Chatham Road particularly value our consistent service.`,

    "Ginter Park": `Ginter Park is a historic neighborhood with grand homes, wide boulevards, and mature trees near Union Presbyterian Seminary and Ginter Park Library, developed by Lewis Ginter in the late 19th century. This prestigious area features some of Richmond's most impressive residential architecture, including Queen Anne, Colonial Revival, and Neoclassical styles along Chamberlayne Avenue and Seminary Avenue. The neighborhood's expansive lots, historic gardens, and significant tree canopy create unique grass lawn mowing challenges that SmartYard's robot lawn mowing technology is specifically programmed to address. Our autonomous mowers navigate Ginter Park's varied terrain with precision, maintaining these showcase properties with daily attention that traditional lawn mowing services near me simply cannot match. Homeowners near Brook Road and Westwood Avenue appreciate our attention to detail.`,

    "Sherwood Park": `Sherwood Park is a quiet residential neighborhood with well-maintained homes, friendly neighbors, and convenient access to amenities near Ginter Park Presbyterian Church and the Brookland Park Boulevard Commercial District. Developed primarily in the mid-20th century, this established community features a mix of Ranch, Split-Level, and Colonial-style homes on generously sized lots along Sherwood Avenue and Griffin Avenue. The neighborhood's mature landscaping, established gardens, and family-friendly outdoor spaces benefit from the daily attention of SmartYard's robot lawn mowing technology. Our autonomous grass lawn mowing maintains Sherwood Park's lawns at the perfect height consistently, enhancing property values while giving residents more time to enjoy their community. Families near Richmond-Henrico Turnpike and Vale Street particularly value our reliable service.`,

    Rosedale: `Rosedale is a diverse neighborhood with a mix of housing styles, community gardens, and a strong sense of community near Rosedale Park and the Mechanicsville Turnpike Commercial District. This evolving area features an eclectic blend of architectural styles from different eras, creating a unique character that reflects Richmond's changing landscape. The neighborhood's varied property types, from historic homes to newer constructions along Rosedale Avenue and Carlisle Avenue, benefit from the adaptable programming of SmartYard's robot lawn mowing technology. Our autonomous grass lawn mowing learns each lawn's specific needs, providing consistent, perfect cuts regardless of terrain variations or obstacles common in Rosedale's diverse landscape. Residents near Whitcomb Street and Mechanicsville Turnpike appreciate our flexible service options.`,

    "Bryan Parkway": `Bryan Parkway is a picturesque neighborhood with distinctive homes, landscaped medians, and a strong community spirit near Bryan Park and the Joseph Bryan Park Azalea Garden. Named for its proximity to Bryan Park, this charming area features winding streets, mature trees, and a variety of architectural styles including Tudor, Colonial Revival, and Craftsman homes along Bryan Park Avenue and Westbrook Avenue. The neighborhood's proximity to natural areas, combined with its established landscaping, creates specific grass lawn mowing requirements that SmartYard's robot lawn mowing technology is programmed to handle. Our autonomous lawn mowing services near me maintain Bryan Parkway's lawns daily, preserving the neighborhood's connection to nature while eliminating the noise and scheduling hassles of traditional services. Residents near Bellevue Avenue and Wilmington Avenue particularly value our environmentally friendly approach.`,

    "The Fan": `The Fan is one of Richmond's most iconic neighborhoods, known for its distinctive fan-shaped street grid and stunning collection of late 19th and early 20th century architecture near Monument Avenue and Meadow Park. This historic district features an impressive array of Victorian, Colonial Revival, and Italianate homes, many with ornate details and well-maintained gardens along Grove Avenue and Lombardy Street. The neighborhood's dense urban layout, with narrow lots and intricate landscaping, presents unique grass lawn mowing challenges that SmartYard's robot lawn mowing technology is specifically designed to address. Our autonomous lawn mowing services near me navigate The Fan's compact spaces with precision, maintaining these historic properties with daily attention while respecting the neighborhood's architectural heritage. Homeowners near Main Street and Meadow Street appreciate our ability to handle tight spaces.`,

    "Church Hill": `Church Hill is Richmond's oldest neighborhood, rich in history and architectural significance near St. John's Church and Chimborazo Park. Named for St. John's Church where Patrick Henry delivered his famous "Give me liberty or give me death" speech, this area features some of the city's best-preserved 19th century homes along Broad Street and 25th Street. The neighborhood's hilly terrain, historic properties, and established gardens create specific grass lawn mowing requirements that SmartYard's robot lawn mowing technology handles with ease. Our autonomous lawn mowing services near me maintain Church Hill's lawns at the perfect height daily, preserving the neighborhood's historic character while eliminating the noise and scheduling hassles of traditional lawn mowing services. Residents near East Grace Street and North 23rd Street particularly value our ability to handle sloped terrain.`,

    "Museum District": `The Museum District is a culturally rich neighborhood centered around the Virginia Museum of Fine Arts and the Virginia Museum of History & Culture near Carytown Shopping District and Byrd Park. This elegant area features a mix of early 20th century townhomes, apartments, and single-family residences with distinctive architectural details along Grove Avenue and Boulevard. The neighborhood's urban density, mature trees, and established landscaping create unique grass lawn mowing challenges that SmartYard's robot lawn mowing technology is programmed to address. Our autonomous lawn mowing services near me maintain the Museum District's green spaces with precision, enhancing the neighborhood's refined aesthetic while providing residents with more time to enjoy the area's cultural amenities. Homeowners near Kensington Avenue and Nansemond Street appreciate our quiet, unobtrusive service.`,
  }

  return neighborhoodDescriptions[neighborhood] || description
}

function getNeighborhoodSeasonalTips(neighborhood: string): any[] {
  return [
    {
      season: "Spring",
      tips: [
        `Our robot lawn mowing adjusts cutting height automatically as your ${neighborhood} lawn begins its spring growth spurt`,
        `SmartYard's daily grass lawn mowing prevents spring weeds from establishing in your ${neighborhood} lawn`,
        `The AI mower's mulching function returns valuable nutrients to your soil during this critical growth period`,
        `Member-exclusive spring lawn treatments available to enhance your ${neighborhood} property`,
      ],
    },
    {
      season: "Summer",
      tips: [
        `Robot lawn mowing maintains higher summer cutting heights to protect ${neighborhood} lawns during heat stress`,
        `Daily grass lawn mowing creates a more drought-resistant lawn through proper root development`,
        `Zero emissions operation means no added pollution during ${neighborhood}'s air quality alert days`,
        `Your AI mower works early morning or evening to optimize cutting conditions`,
      ],
    },
    {
      season: "Fall",
      tips: [
        `SmartYard's robot lawn mowing helps mulch fallen leaves into your ${neighborhood} lawn for natural fertilization`,
        `Gradual height adjustment prepares your lawn for winter dormancy`,
        `Consistent grass lawn mowing prevents leaf accumulation that can damage ${neighborhood} lawns`,
        `Member-exclusive fall lawn treatments available to strengthen root systems before winter`,
      ],
    },
    {
      season: "Winter",
      tips: [
        `Robot lawn mowing enters winter mode with reduced frequency but maintain ${neighborhood} lawns during warm spells`,
        `SmartYard's winter monitoring ensures your lawn is ready for spring green-up`,
        `System updates and maintenance performed during winter months`,
        `Member-exclusive winter lawn planning services to prepare for next season`,
      ],
    },
  ]
}

function getNeighborhoodLandmarks(neighborhood: string): {
  landmarks: string[]
  intersections: string[]
  pois: string[]
} {
  // Add additional neighborhoods from GeoSearch
  const additionalNeighborhoods = {
    Madison: {
      landmarks: [
        "Monona Terrace",
        "Concerts on the Square",
        "Art Fair on the Square",
        "State Capitol",
        "University of Wisconsin-Madison",
      ],
      intersections: [
        "State Street & Capitol Square",
        "University Avenue & Park Street",
        "Johnson Street & East Washington Avenue",
        "Regent Street & Monroe Street",
        "Williamson Street & Baldwin Street",
      ],
      pois: [
        "Lake Mendota",
        "Lake Monona",
        "Henry Vilas Zoo",
        "Olbrich Botanical Gardens",
        "Memorial Union Terrace",
        "Chazen Museum of Art",
        "Camp Randall Stadium",
        "Kohl Center",
        "Madison Farmers' Market",
        "Overture Center for the Arts",
      ],
    },
    Rochester: {
      landmarks: [
        "Peabody",
        "Neighborhood of the Arts",
        "Neighborhood Office District",
        "Neighborhood Four",
        "Mayo Clinic",
      ],
      intersections: [
        "East Avenue & University Avenue",
        "Park Avenue & Berkeley Street",
        "Monroe Avenue & Alexander Street",
        "East Main Street & Gibbs Street",
        "Clinton Avenue & Atlantic Avenue",
      ],
      pois: [
        "Strong National Museum of Play",
        "Rochester Museum & Science Center",
        "Highland Park",
        "Seneca Park Zoo",
        "George Eastman Museum",
        "Memorial Art Gallery",
        "Blue Cross Arena",
        "Frontier Field",
        "High Falls",
        "Public Market",
      ],
    },
  }

  // Merge with existing data
  const landmarksData: Record<string, { landmarks: string[]; intersections: string[]; pois: string[] }> = {
    "Battery Park": {
      landmarks: [
        "Battery Park",
        "Battery Park Christian Church",
        "Hotchkiss Field Community Center",
        "Northside YMCA",
        "Richmond Community High School",
      ],
      intersections: [
        "Overbrook Road & North Avenue",
        "Chamberlayne Avenue & Ladies Mile Road",
        "North Avenue & West Lancaster Road",
        "Dupont Circle & Hawthorne Avenue",
        "Fendall Avenue & West Lancaster Road",
      ],
      pois: [
        "Battery Park Playground",
        "North Avenue Library",
        "Hotchkiss Community Garden",
        "Chamberlayne Avenue Shopping Center",
        "Battery Park Pond",
        "Richmond Community High School Athletic Fields",
        "Northside Family YMCA Pool",
        "Battery Park Tennis Courts",
        "Hotchkiss Field Baseball Diamond",
        "Battery Park Christian Church Community Center",
      ],
    },
    Bellevue: {
      landmarks: [
        "MacArthur Avenue Commercial District",
        "Bellevue Elementary School",
        "Holton Elementary School",
        "Once Upon a Vine North",
        "Stir Crazy Café",
      ],
      intersections: [
        "MacArthur Avenue & Bellevue Avenue",
        "Pope Avenue & Fauquier Avenue",
        "Bellevue Avenue & Wilmington Avenue",
        "Newport Drive & Avondale Avenue",
        "Lamont Street & Westminster Avenue",
      ],
      pois: [
        "Bellevue Park",
        "MacArthur Avenue Shops",
        "Bellevue Branch Library",
        "Bellevue Community Center",
        "Bellevue Dog Park",
        "Bellevue Farmers Market",
        "Bellevue Arts District",
        "Bellevue Historic Homes",
        "Bellevue Community Garden",
        "Bellevue Elementary School Playground",
      ],
    },
    "Laburnum Park": {
      landmarks: [
        "Laburnum Park Historic District",
        "Laburnum Avenue United Methodist Church",
        "Laburnum Elementary School",
        "Norrell Elementary School",
        "Hotchkiss Community Center",
      ],
      intersections: [
        "Laburnum Avenue & Hermitage Road",
        "Westwood Avenue & Chatham Road",
        "Gloucester Road & Wilmington Avenue",
        "Laburnum Avenue & Brook Road",
        "Westwood Avenue & Fauquier Avenue",
      ],
      pois: [
        "Laburnum Park Rose Garden",
        "Laburnum Park Community Center",
        "Laburnum Park Playground",
        "Laburnum Park Walking Trails",
        "Laburnum Park Gazebo",
        "Laburnum Park Historic Homes",
        "Laburnum Park Community Garden",
        "Laburnum Park Tennis Courts",
        "Laburnum Park Picnic Area",
        "Laburnum Park Dog Park",
      ],
    },
    "Ginter Park": {
      landmarks: [
        "Union Presbyterian Seminary",
        "Ginter Park Elementary School",
        "Ginter Park Library",
        "Northminster Baptist Church",
        "Lewis Ginter Recreation Association",
      ],
      intersections: [
        "Chamberlayne Avenue & Seminary Avenue",
        "Brook Road & Westwood Avenue",
        "Hawthorne Avenue & Seminary Avenue",
        "Laburnum Avenue & Brook Road",
        "Walton Avenue & Gloucester Road",
      ],
      pois: [
        "Ginter Park Botanical Garden",
        "Ginter Park Golf Course",
        "Ginter Park Community Center",
        "Ginter Park Playground",
        "Ginter Park Walking Trails",
        "Ginter Park Historic Homes",
        "Ginter Park Community Garden",
        "Ginter Park Tennis Courts",
        "Ginter Park Picnic Area",
        "Ginter Park Dog Park",
      ],
    },
    "Sherwood Park": {
      landmarks: [
        "Sherwood Park",
        "Ginter Park Presbyterian Church",
        "Brookland Park Boulevard Commercial District",
        "Richmond-Henrico Turnpike",
        "Hotchkiss Community Center",
      ],
      intersections: [
        "Sherwood Avenue & Griffin Avenue",
        "Brookland Park Boulevard & Griffin Avenue",
        "Richmond-Henrico Turnpike & Vale Street",
        "Walton Avenue & Griffin Avenue",
        "Brookland Park Boulevard & Richmond-Henrico Turnpike",
      ],
      pois: [
        "Sherwood Park Playground",
        "Sherwood Park Community Center",
        "Sherwood Park Walking Trails",
        "Sherwood Park Picnic Area",
        "Sherwood Park Dog Park",
        "Sherwood Park Baseball Field",
        "Sherwood Park Basketball Courts",
        "Sherwood Park Tennis Courts",
        "Sherwood Park Community Garden",
        "Sherwood Park Skate Park",
      ],
    },
    Rosedale: {
      landmarks: [
        "Rosedale Park",
        "Mechanicsville Turnpike Commercial District",
        "Rosedale Avenue",
        "Whitcomb Court",
        "Fairfield Court",
      ],
      intersections: [
        "Rosedale Avenue & Mechanicsville Turnpike",
        "Carlisle Avenue & Mechanicsville Turnpike",
        "Whitcomb Street & Mechanicsville Turnpike",
        "Rosedale Avenue & Carlisle Avenue",
        "Whitcomb Street & Deforrest Street",
      ],
      pois: [
        "Rosedale Community Center",
        "Rosedale Playground",
        "Rosedale Walking Trails",
        "Rosedale Picnic Area",
        "Rosedale Dog Park",
        "Rosedale Baseball Field",
        "Rosedale Basketball Courts",
        "Rosedale Tennis Courts",
        "Rosedale Community Garden",
        "Rosedale Skate Park",
      ],
    },
    "Bryan Parkway": {
      landmarks: [
        "Bryan Park",
        "Joseph Bryan Park Azalea Garden",
        "Bryan Park Soccer Complex",
        "North Avenue Christian Church",
        "Bellevue Avenue Commercial District",
      ],
      intersections: [
        "Bryan Park Avenue & Westbrook Avenue",
        "Bellevue Avenue & Wilmington Avenue",
        "Westbrook Avenue & Hermitage Road",
        "Laburnum Avenue & Hermitage Road",
        "Bellevue Avenue & Bryan Park Avenue",
      ],
      pois: [
        "Bryan Park Lake",
        "Bryan Park Nature Center",
        "Bryan Park Disc Golf Course",
        "Bryan Park Playground",
        "Bryan Park Walking Trails",
        "Bryan Park Picnic Area",
        "Bryan Park Dog Park",
        "Bryan Park Tennis Courts",
        "Bryan Park Community Garden",
        "Bryan Park Soccer Fields",
      ],
    },
    "The Fan": {
      landmarks: [
        "Monument Avenue",
        "Meadow Park",
        "Retreat Hospital",
        "Lombardy Park",
        "Main Street Commercial District",
      ],
      intersections: [
        "Monument Avenue & Boulevard",
        "Grove Avenue & Lombardy Street",
        "Main Street & Meadow Street",
        "Park Avenue & Strawberry Street",
        "Cary Street & Robinson Street",
      ],
      pois: [
        "Virginia Museum of Fine Arts",
        "Science Museum of Virginia",
        "Children's Museum of Richmond",
        "Carytown Shopping District",
        "The National Theater",
        "The Branch Museum of Architecture and Design",
        "Monument Avenue Historic District",
        "The Fan District Arts Scene",
        "The Fan District Restaurants",
        "The Fan District Coffee Shops",
      ],
    },
    "Church Hill": {
      landmarks: [
        "St. John's Church",
        "Chimborazo Park",
        "Libby Hill Park",
        "Patrick Henry Public School",
        "Church Hill North Historic District",
      ],
      intersections: [
        "Broad Street & 25th Street",
        "East Grace Street & North 23rd Street",
        "East Franklin Street & North 27th Street",
        "East Leigh Street & North 30th Street",
        "East Marshall Street & North 24th Street",
      ],
      pois: [
        "St. John's Church Historic Site",
        "Chimborazo Park National Battlefield",
        "Libby Hill Park Overlook",
        "Church Hill Restaurants",
        "Church Hill Coffee Shops",
        "Church Hill Antique Shops",
        "Church Hill Art Galleries",
        "Church Hill Farmers Market",
        "Church Hill Historic Homes",
        "Church Hill Community Events",
      ],
    },
    "Museum District": {
      landmarks: [
        "Virginia Museum of Fine Arts",
        "Virginia Museum of History & Culture",
        "Carytown Shopping District",
        "Byrd Park",
        "Malvern Manor Apartments",
      ],
      intersections: [
        "Grove Avenue & Boulevard",
        "Kensington Avenue & Nansemond Street",
        "Patterson Avenue & Sheppard Street",
        "Stuart Avenue & Roseneath Road",
        "Hanover Avenue & Belmont Avenue",
      ],
      pois: [
        "Virginia Museum of Fine Arts Sculpture Garden",
        "Virginia Museum of History & Culture Exhibits",
        "Carytown Shopping and Dining",
        "Byrd Park Swan Lake",
        "Maymont Park and Mansion",
        "Science Museum of Virginia Exhibits",
        "Children's Museum of Richmond Activities",
        "Museum District Art Galleries",
        "Museum District Restaurants",
        "Museum District Coffee Shops",
      ],
    },
  }

  return landmarksData[neighborhood] || { landmarks: [], intersections: [], pois: [] }
}

// Real neighborhood events based on research
function getNeighborhoodEvents(neighborhood: string): {
  spring: string[]
  summer: string[]
  fall: string[]
} {
  const eventsData: Record<string, { spring: string[]; summer: string[]; fall: string[] }> = {
    "Battery Park": {
      spring: [
        "Battery Park Spring Clean-Up (April)",
        "Community Garden Planting Day (May)",
        "Battery Park Easter Egg Hunt (April)",
        "Northside Farmers Market Opening (Late May)",
      ],
      summer: [
        "Battery Park Summer Concert Series (June-August)",
        "Fourth of July Community Celebration",
        "National Night Out (August)",
        "Battery Park Pool Party Weekends (July-August)",
      ],
      fall: [
        "Battery Park Fall Festival (October)",
        "Halloween in the Park (October)",
        "Community Thanksgiving Dinner (November)",
        "Fall Foliage Walking Tour (October)",
      ],
    },
    Bellevue: {
      spring: [
        "Bellevue Easter Parade (April)",
        "MacArthur Avenue Spring Fling (May)",
        "Bellevue Garden Tour (May)",
        "Bellevue Elementary School Spring Carnival (April)",
      ],
      summer: [
        "Bellevue 4th of July Parade",
        "Music on MacArthur (June-September)",
        "Bellevue Porch Concerts (July-August)",
        "National Night Out Block Party (August)",
      ],
      fall: [
        "Bellevue Harvest Festival (October)",
        "MacArthur Avenue Halloween Parade (October)",
        "Bellevue Holiday Shopping Event (November)",
        "Bellevue Light Up the Neighborhood (November)",
      ],
    },
    "Laburnum Park": {
      spring: [
        "Laburnum Park Historic Home Tour (April)",
        "Spring Planting Day (May)",
        "Laburnum Park Easter Celebration (April)",
        "Northside Farmers Market (May-June)",
      ],
      summer: [
        "Laburnum Park Fourth of July Celebration",
        "Summer Movie Nights in the Park (June-August)",
        "Laburnum Park Block Party (July)",
        "National Night Out (August)",
      ],
      fall: [
        "Laburnum Park Fall Festival (October)",
        "Historic District Halloween Walk (October)",
        "Thanksgiving Food Drive (November)",
        "Holiday Decoration Contest (November-December)",
      ],
    },
    "Ginter Park": {
      spring: [
        "Ginter Park Historic Garden Week Tour (April)",
        "Seminary Avenue Block Party (May)",
        "Ginter Park Elementary School Spring Fling (May)",
        "Northside Farmers Market (May-June)",
      ],
      summer: [
        "Ginter Park Fourth of July Parade",
        "Summer Concert Series at Lewis Ginter Recreation Association (June-August)",
        "Chamberlayne Avenue Street Festival (July)",
        "National Night Out (August)",
      ],
      fall: [
        "Ginter Park Fall Festival (October)",
        "Seminary Avenue Halloween Parade (October)",
        "Ginter Park Holiday House Tour (December)",
        "Northside Holiday Market (November)",
      ],
    },
    "Sherwood Park": {
      spring: [
        "Sherwood Park Spring Clean-Up (April)",
        "Community Garden Opening Day (May)",
        "Easter Egg Hunt in Sherwood Park (April)",
        "Brookland Park Boulevard Spring Festival (May)",
      ],
      summer: [
        "Sherwood Park Fourth of July Celebration",
        "Summer Movie Nights (June-August)",
        "Sherwood Park Pool Party (July)",
        "National Night Out (August)",
      ],
      fall: [
        "Sherwood Park Fall Festival (October)",
        "Halloween in the Park (October)",
        "Community Thanksgiving Potluck (November)",
        "Holiday Light Display (December)",
      ],
    },
    Rosedale: {
      spring: [
        "Rosedale Community Clean-Up Day (April)",
        "Rosedale Park Spring Festival (May)",
        "Community Garden Planting Day (April)",
        "Mechanicsville Turnpike Spring Market (May)",
      ],
      summer: [
        "Rosedale Fourth of July Block Party",
        "Summer Youth Program at Rosedale Park (June-August)",
        "Rosedale Community Cookout (July)",
        "National Night Out (August)",
      ],
      fall: [
        "Rosedale Harvest Festival (October)",
        "Trunk or Treat at Rosedale Park (October)",
        "Community Thanksgiving Dinner (November)",
        "Holiday Toy Drive (December)",
      ],
    },
    "Bryan Parkway": {
      spring: [
        "Bryan Park Azalea Festival (April)",
        "Spring Bird Walk in Bryan Park (May)",
        "Bryan Parkway Garden Tour (May)",
        "Earth Day Celebration in Bryan Park (April)",
      ],
      summer: [
        "Bryan Park Fourth of July Fireworks",
        "Summer Concert Series in Bryan Park (June-August)",
        "Bryan Parkway Block Party (July)",
        "National Night Out (August)",
      ],
      fall: [
        "Bryan Park Fall Festival (October)",
        "Bryan Parkway Halloween Parade (October)",
        "Fall Foliage Tour in Bryan Park (November)",
        "Bryan Parkway Holiday Decoration Contest (December)",
      ],
    },
    "The Fan": {
      spring: [
        "Fan District Association Spring House Tour (May)",
        "Monument Avenue Easter on Parade (April)",
        "Fan Arts Stroll (May)",
        "Strawberry Street Festival (May)",
      ],
      summer: [
        "Fan Village Farmers Market (June-September)",
        "Shields Lake Concert Series (July-August)",
        "National Night Out Block Parties (August)",
        "Fan District Sidewalk Sale (July)",
      ],
      fall: [
        "Fan Halloween Parade (October)",
        "Fan District Holiday House Tour (December)",
        "Harvest Festival at Meadow Park (October)",
        "Monument Avenue Christmas Lighting (December)",
      ],
    },
    "Church Hill": {
      spring: [
        "Church Hill Irish Festival (March)",
        "Historic Garden Week Tour (April)",
        "St. John's Church Reenactment (March-September)",
        "Church Hill Spring Plant Sale (May)",
      ],
      summer: [
        "Church Hill Music Series (June-August)",
        "Libby Hill Park Yoga (May-September)",
        "National Night Out (August)",
        "Church Hill Farmers Market (April-October)",
      ],
      fall: [
        "Church Hill Halloween Festival (October)",
        "Church Hill House Tour (September)",
        "Chimborazo Park Fall Festival (October)",
        "Church Hill Holiday Festival (December)",
      ],
    },
    "Museum District": {
      spring: [
        "VMFA Garden Fest (April)",
        "Byrd Park Spring Celebration (May)",
        "Museum District Association Garden Tour (May)",
        "VMFA After Hours (Monthly)",
      ],
      summer: [
        "Carytown Watermelon Festival (August)",
        "VMFA Summer Jazz Series (June-September)",
        "Byrd Park Concert Series (July-August)",
        "Museum District Block Party (July)",
      ],
      fall: [
        "Harvest Festival at VMFA (October)",
        "Museum District Halloween Parade (October)",
        "Holiday House Tour (December)",
        "VMFA Craft + Design Show (November)",
      ],
    },
  }

  return eventsData[neighborhood] || { spring: [], summer: [], fall: [] }
}

// Function to recommend services based on weather
function getServiceRecommendations(weather: any, services: any[]): any[] {
  if (!weather || !weather.current) {
    return []
  }

  // Get current weather condition
  const currentCondition = weather.current.weather[0].main.toLowerCase()
  const isCurrentlyRaining =
    currentCondition.includes("rain") || currentCondition.includes("drizzle") || currentCondition.includes("storm")

  // Check forecast conditions
  const forecastConditions = weather ? weather.forecast.map((day: any) => day.weather[0].main.toLowerCase()) : []

  // Check for rain in next 48 hours (first two forecast days)
  const rainInNext48Hours = forecastConditions
    .slice(0, 2)
    .some(
      (condition: string) => condition.includes("rain") || condition.includes("storm") || condition.includes("drizzle"),
    )

  // Count clear days ahead
  const clearDaysAhead = forecastConditions.filter(
    (condition: string) => condition.includes("clear") || condition.includes("clouds"),
  ).length

  // Determine if it's a good time for each service
  return services.filter((service) => {
    // For lawn mowing - don't mow when it's raining or rain expected in next 48 hours
    if (service.slug === "lawn-mowing") {
      return !isCurrentlyRaining && !rainInNext48Hours && clearDaysAhead >= 1
    }

    // For window cleaning - need at least 2 clear days ahead (today and tomorrow)
    // to ensure windows have time to dry properly
    if (service.slug === "window-cleaning") {
      return !isCurrentlyRaining && clearDaysAhead >= 2
    }

    // For pressure washing - need dry conditions and no rain expected for at least 2-3 days
    if (service.slug === "pressure-washing") {
      return !isCurrentlyRaining && clearDaysAhead >= 3
    }

    // For flower bed maintenance - can be done unless it's actively storming
    if (service.slug === "flower-bed-maintenance") {
      return !currentCondition.includes("storm") && !currentCondition.includes("heavy rain")
    }

    return false
  })
}

// Weather icon mapping
function getWeatherIcon(condition: string) {
  const conditionLower = condition.toLowerCase()
  if (conditionLower.includes("clear")) return <Sun className="h-8 w-8 text-yellow-400" />
  if (conditionLower.includes("cloud")) return <Cloud className="h-8 w-8 text-gray-400" />
  if (conditionLower.includes("rain") || conditionLower.includes("drizzle"))
    return <CloudRain className="h-8 w-8 text-blue-400" />
  if (conditionLower.includes("wind")) return <Wind className="h-8 w-8 text-gray-500" />
  return <Cloud className="h-8 w-8 text-gray-400" />
}

// Weather code mapping for Open-Meteo API
function getWeatherDescription(code: number): { description: string; icon: string } {
  const weatherCodes: Record<number, { description: string; icon: string }> = {
    0: { description: "Clear sky", icon: "☀️" },
    1: { description: "Mainly clear", icon: "🌤️" },
    2: { description: "Partly cloudy", icon: "⛅" },
    3: { description: "Overcast", icon: "☁️" },
    45: { description: "Fog", icon: "🌫️" },
    48: { description: "Depositing rime fog", icon: "🌫️" },
    51: { description: "Light drizzle", icon: "🌦️" },
    53: { description: "Moderate drizzle", icon: "🌦️" },
    55: { description: "Dense drizzle", icon: "🌧️" },
    56: { description: "Light freezing drizzle", icon: "🌨️" },
    57: { description: "Dense freezing drizzle", icon: "🌨️" },
    61: { description: "Slight rain", icon: "🌦️" },
    63: { description: "Moderate rain", icon: "🌧️" },
    65: { description: "Heavy rain", icon: "🌧️" },
    66: { description: "Light freezing rain", icon: "🌨️" },
    67: { description: "Heavy freezing rain", icon: "🌨️" },
    71: { description: "Slight snow fall", icon: "🌨️" },
    73: { description: "Moderate snow fall", icon: "🌨️" },
    75: { description: "Heavy snow fall", icon: "❄️" },
    77: { description: "Snow grains", icon: "❄️" },
    80: { description: "Slight rain showers", icon: "🌦️" },
    81: { description: "Moderate rain showers", icon: "🌧️" },
    82: { description: "Violent rain showers", icon: "🌧️" },
    85: { description: "Slight snow showers", icon: "🌨️" },
    86: { description: "Heavy snow showers", icon: "❄️" },
    95: { description: "Thunderstorm", icon: "⛈️" },
    96: { description: "Thunderstorm with slight hail", icon: "⛈️" },
    99: { description: "Thunderstorm with heavy hail", icon: "⛈️" },
  }

  return weatherCodes[code] || { description: "Unknown", icon: "❓" }
}

// Define a function to get neighborhood history
// Removing duplicate function definition
// function getNeighborhoodHistory(neighborhood: string): string | undefined {
//   const neighborhoodHistories: Record<string, string> = {
//     "Battery Park":
//       "Battery Park was established in the early 20th century and is known for its historic architecture and community feel.",
//     Bellevue:
//       "Bellevue was developed in the early 20th century and is characterized by its charming homes and vibrant commercial district.",
//     "Laburnum Park":
//       "Laburnum Park is a residential neighborhood featuring early 20th century homes with distinctive architectural styles.",
//     "Ginter Park":
//       "Ginter Park is a historic neighborhood with grand homes and wide boulevards, developed by Lewis Ginter in the late 19th century.",
//     "Sherwood Park":
//       "Sherwood Park is a quiet residential neighborhood with well-maintained homes and convenient access to amenities.",
//     Rosedale: "Rosedale is a diverse neighborhood with a mix of housing styles and a strong sense of community.",
//     "Bryan Parkway":
//       "Bryan Parkway is a picturesque neighborhood with distinctive homes and a strong community spirit.",
//     "The Fan":
//       "The Fan is one of Richmond's most iconic neighborhoods, known for its distinctive fan-shaped street grid and stunning architecture.",
//     "Church Hill": "Church Hill is Richmond's oldest neighborhood, rich in history and architectural significance.",
//     "Museum District":
//       "The Museum District is a culturally rich neighborhood centered around the Virginia Museum of Fine Arts and the Virginia Museum of History & Culture.",
//   }

//   return neighborhoodHistories[neighborhood]
// }

export default function NeighborhoodPageClient({
  neighborhood,
  params,
}: {
  neighborhood: any
  params: { neighborhood: string }
}) {
  const [showPhoneForm, setShowPhoneForm] = useState(false)
  const [imageLoadFailed, setImageLoadFailed] = useState(false)
  const [weather, setWeather] = useState<any>(null)
  const [weatherLoading, setWeatherLoading] = useState(true)
  const [weatherError, setWeatherError] = useState(false)
  const [recommendedServices, setRecommendedServices] = useState<any[]>([])
  const [showRealtorForm, setShowRealtorForm] = useState(false)

  useEffect(() => {
    async function fetchWeather() {
      try {
        setWeatherLoading(true)

        // Using Open-Meteo API which doesn't require an API key
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=37.5407&longitude=-77.4360&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York",
        )

        if (!response.ok) {
          throw new Error(`Weather API responded with status: ${response.status}`)
        }

        const data = await response.json()

        // Transform the data to match our expected format
        const weatherInfo = getWeatherDescription(data.current.weather_code)

        const transformedData = {
          current: {
            temp: Math.round(data.current.temperature_2m),
            feels_like: Math.round(data.current.apparent_temperature),
            humidity: data.current.relative_humidity_2m,
            wind_speed: data.current.wind_speed_10m,
            weather: [
              {
                main: weatherInfo.description.includes("rain")
                  ? "Rain"
                  : weatherInfo.description.includes("cloud")
                    ? "Clouds"
                    : weatherInfo.description.includes("clear")
                      ? "Clear"
                      : "Clouds",
                description: weatherInfo.description,
              },
            ],
          },
          forecast: data.daily.time.slice(1, 6).map((time: string, index: number) => ({
            dt: new Date(time).getTime(),
            temp: {
              day: Math.round(
                (data.daily.temperature_2m_max[index + 1] + data.daily.temperature_2m_min[index + 1]) / 2,
              ),
              min: Math.round(data.daily.temperature_2m_min[index + 1]),
              max: Math.round(data.daily.temperature_2m_max[index + 1]),
            },
            weather: [
              {
                main: getWeatherDescription(data.daily.weather_code[index + 1]).description.includes("rain")
                  ? "Rain"
                  : getWeatherDescription(data.daily.weather_code[index + 1]).description.includes("cloud")
                    ? "Clouds"
                    : getWeatherDescription(data.daily.weather_code[index + 1]).description.includes("clear")
                      ? "Clear"
                      : "Clouds",
                description: getWeatherDescription(data.daily.weather_code[index + 1]).description,
              },
            ],
            pop: data.daily.precipitation_probability_max[index + 1] / 100,
          })),
          rain: {
            // Estimate last rain date based on current conditions
            lastRainDate: weatherInfo.description.includes("rain")
              ? new Date().toISOString()
              : new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago if not raining
          },
        }

        setWeather(transformedData)
        setRecommendedServices(getServiceRecommendations(transformedData, getNeighborhoodServices(neighborhood.name)))
      } catch (error) {
        console.error("Error fetching weather:", error)
        setWeatherError(true)
      } finally {
        setWeatherLoading(false)
      }
    }

    fetchWeather()
  }, [neighborhood.name])

  if (!neighborhood) {
    notFound()
  }

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      neighborhood.fallbackImage ||
      "https://www.bestmow.com/cdn/shop/files/bestmow_robot_mower_slid_2.webp?v=1737858458"
    setImageLoadFailed(true)
  }

  const neighborhoodSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Robot Lawn Mowing Service in ${neighborhood.name}, Richmond VA`,
    description: getNeighborhoodDescription(neighborhood.name, neighborhood.description),
    provider: {
      "@type": "LocalBusiness",
      name: "SmartYard by Sweaty Job",
      telephone: "+18045739825",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Richmond",
        addressRegion: "VA",
        addressCountry: "US",
      },
      image: "https://www.sweatyjob.com/images/logo.jpg",
      priceRange: "$",
      sameAs: ["https://www.facebook.com/sweatyjob", "https://www.instagram.com/sweatyjob"],
    },
    areaServed: {
      "@type": "City",
      name: `${neighborhood.name}, Richmond, VA`,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.5561,
        longitude: -77.4408,
      },
      geoRadius: "2000",
    },
  }

  // Add LocalBusiness schema specific to this neighborhood
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `SmartYard Robot Lawn Mowing - ${neighborhood.name}`,
    image: neighborhood.image,
    url: `https://www.sweatyjob.com/neighborhoods/${neighborhood.slug}`,
    telephone: "+18045739825",
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Richmond",
      addressRegion: "VA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.5561,
      longitude: -77.4408,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    areaServed: `${neighborhood.name}, Richmond, VA`,
    description: getNeighborhoodDescription(neighborhood.name, neighborhood.description),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${neighborhood.name} Grass Lawn Mowing Service`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Robot Lawn Mowing Membership in ${neighborhood.name}, Richmond VA`,
            description: `Exclusive grass lawn mowing service tailored specifically for ${neighborhood.name} homes and properties.`,
          },
        },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getNeighborhoodFAQs(neighborhood.name),
  }

  const schemaMarkup = {
    __html: JSON.stringify([neighborhoodSchema, localBusinessSchema, faqSchema]),
  }

  const landmarks = getNeighborhoodLandmarks(neighborhood.name)
  const events = getNeighborhoodEvents(neighborhood.name)
  const neighborhoodHistory = getNeighborhoodHistory(neighborhood.name)
  const seasonalTips = getNeighborhoodSeasonalTips(neighborhood.name)
  const services = getNeighborhoodServices(neighborhood.name)
  const realEstateBusinesses = getRealEstateBusinesses(neighborhood.name)

  // Format date for weather display
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  return (
    <div className="bg-slate-900 pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={schemaMarkup} />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <Button className="mb-6 bg-green-500 hover:bg-green-500 text-black font-medium" asChild>
            <Link href="/neighborhoods">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Neighborhoods
            </Link>
          </Button>
          <NeighborhoodOffer neighborhood={neighborhood.name} />

          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={neighborhood.image || "/placeholder.svg?height=400&width=800&query=neighborhood"}
              alt={neighborhood.name}
              fill
              className="object-cover"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="flex items-center text-blue-300 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">Richmond, VA</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">{neighborhood.name}</h1>
            </div>
          </div>

          {/* Weather and Service Recommendations Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Current Weather & Service Recommendations
            </h2>

            {weatherLoading ? (
              <div className="flex items-center justify-center p-12 bg-slate-800 rounded-lg">
                <Loader2 className="h-8 w-8 text-blue-400 animate-spin mr-2" />
                <span className="text-white text-lg">Loading weather data...</span>
              </div>
            ) : weatherError ? (
              <div className="p-8 bg-slate-800 rounded-lg text-center">
                <p className="text-white text-lg">Weather data is temporarily unavailable. Please check back later.</p>
              </div>
            ) : weather ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Current Weather Card */}
                <Card className="bg-slate-800 border-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Current Weather</span>
                      {getWeatherIcon(weather.current.weather[0].main)}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Updated as of {new Date().toLocaleTimeString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-4xl font-bold">{Math.round(weather.current.temp)}°F</span>
                        <span className="text-slate-300">{weather.current.weather[0].description}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center">
                          <Thermometer className="h-5 w-5 mr-2 text-blue-400" />
                          <span>Feels like: {Math.round(weather.current.feels_like)}°F</span>
                        </div>
                        <div className="flex items-center">
                          <Droplets className="h-5 w-5 mr-2 text-blue-400" />
                          <span>Humidity: {weather.current.humidity}%</span>
                        </div>
                        <div className="flex items-center">
                          <Wind className="h-5 w-5 mr-2 text-blue-400" />
                          <span>Wind: {Math.round(weather.current.wind_speed)} mph</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 5-Day Forecast Card */}
                <Card className="bg-slate-800 border-slate-700 text-white lg:col-span-2">
                  <CardHeader>
                    <CardTitle>5-Day Forecast</CardTitle>
                    <CardDescription className="text-slate-300">
                      Plan your services based on upcoming weather
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {weather.forecast.map((day: any, index: number) => (
                        <div key={index} className="flex flex-col items-center p-2 rounded-lg bg-slate-700">
                          <span className="text-sm font-medium mb-1">{formatDate(day.dt)}</span>
                          {getWeatherIcon(day.weather[0].main)}
                          <span className="mt-1 text-lg font-bold">{day.temp.day}°F</span>
                          <span className="text-xs text-slate-300">{day.weather[0].description}</span>
                          {day.pop > 0 && (
                            <Badge variant="outline" className="mt-1 bg-blue-900/30 text-blue-300 border-blue-700">
                              {Math.round(day.pop * 100)}% rain
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : null}

            {/* Service Recommendations */}
            {recommendedServices.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Recommended Services for {neighborhood.name} Homes Near{" "}
                  {landmarks.landmarks.slice(0, 2).join(" and ")} and {landmarks.intersections.slice(0, 1)}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedServices.map((service, index) => (
                    <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                      <CardHeader className="pb-2">
                        <CardTitle>{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 mb-4">
                          {service.description} Perfect for properties near{" "}
                          {landmarks.landmarks[index % landmarks.landmarks.length]}
                          and {landmarks.intersections[index % landmarks.intersections.length]}.
                        </p>
                        <Button asChild>
                          <Link href={`/neighborhoods/${neighborhood.slug}/${service.slug}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Neighborhood Information Tabs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About {neighborhood.name}</h2>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="landmarks">Landmarks</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="bg-slate-800 p-6 rounded-lg">
                <div className="prose prose-invert max-w-none">
                  {getNeighborhoodDescription(neighborhood.name, neighborhood.description) ? (
                    <p className="text-lg">
                      {getNeighborhoodDescription(neighborhood.name, neighborhood.description)}
                      Our robot lawn mowing services are available throughout {neighborhood.name}, including near local
                      landmarks like {landmarks.landmarks.slice(0, 3).join(", ")}, popular intersections such as{" "}
                      {landmarks.intersections.slice(0, 2).join(" and ")}, and points of interest including{" "}
                      {landmarks.pois && landmarks.pois.length > 0
                        ? landmarks.pois.slice(0, 3).join(", ")
                        : "local attractions"}
                      .
                    </p>
                  ) : (
                    <p className="text-lg">
                      {neighborhood.description || "Information about this neighborhood is coming soon."}
                    </p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="landmarks" className="bg-slate-800 p-6 rounded-lg">
                {landmarks.landmarks.length > 0 || landmarks.intersections.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <MapPinned className="h-5 w-5 mr-2 text-blue-400" />
                        Notable Landmarks
                      </h3>
                      {landmarks.landmarks.length > 0 ? (
                        <ul className="space-y-2">
                          {landmarks.landmarks.map((landmark, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span>{landmark}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-300">Landmark information coming soon.</p>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Navigation className="h-5 w-5 mr-2 text-blue-400" />
                        Key Intersections
                      </h3>
                      {landmarks.intersections.length > 0 ? (
                        <ul className="space-y-2">
                          {landmarks.intersections.map((intersection, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span>{intersection}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-300">Intersection information coming soon.</p>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                        Points of Interest
                      </h3>
                      {landmarks.pois && landmarks.pois.length > 0 ? (
                        <ul className="space-y-2">
                          {landmarks.pois.map((poi, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span>{poi}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-300">POI information coming soon.</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-lg text-slate-300">
                      Landmark information for {neighborhood.name} is coming soon.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="events" className="bg-slate-800 p-6 rounded-lg">
                {events.spring.length > 0 || events.summer.length > 0 || events.fall.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-slate-700 border-slate-600">
                      <CardHeader className="pb-2 bg-green-900/20">
                        <CardTitle className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2 text-green-400" />
                          Spring Events
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        {events.spring.length > 0 ? (
                          <ul className="space-y-2">
                            {events.spring.map((event, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                <span>{event}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-slate-300">Spring events coming soon.</p>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700 border-slate-600">
                      <CardHeader className="pb-2 bg-yellow-900/20">
                        <CardTitle className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2 text-yellow-400" />
                          Summer Events
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        {events.summer.length > 0 ? (
                          <ul className="space-y-2">
                            {events.summer.map((event, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-yellow-400 mr-2">•</span>
                                <span>{event}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-slate-300">Summer events coming soon.</p>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700 border-slate-600">
                      <CardHeader className="pb-2 bg-orange-900/20">
                        <CardTitle className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2 text-orange-400" />
                          Fall Events
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        {events.fall.length > 0 ? (
                          <ul className="space-y-2">
                            {events.fall.map((event, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-orange-400 mr-2">•</span>
                                <span>{event}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-slate-300">Fall events coming soon.</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-lg text-slate-300">Event information for {neighborhood.name} is coming soon.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="history" className="bg-slate-800 p-6 rounded-lg">
                <div className="prose prose-invert max-w-none">
                  {neighborhoodHistory ? (
                    <div className="flex items-start mb-4">
                      <Info className="h-5 w-5 mr-2 text-blue-400 mt-1 flex-shrink-0" />
                      <p className="text-lg">{neighborhoodHistory}</p>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-lg text-slate-300">
                        Historical information for {neighborhood.name} is coming soon.
                      </p>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mt-6 mb-4">
                    Seasonal Lawn Care Tips for {neighborhood.name} Properties Near{" "}
                    {landmarks.landmarks.slice(0, 2).join(", ")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {seasonalTips.map((season, index) => (
                      <div key={index} className="bg-slate-700 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {season.season} in {neighborhood.name}
                        </h4>
                        <ul className="space-y-2">
                          {season.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Robot Lawn Mowing & Services in {neighborhood.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Button asChild>
                    <Link href={`/neighborhoods/${neighborhood.slug}/${service.slug}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Smart Grass Lawn Mowing Technology for {neighborhood.name} Properties Near{" "}
            {landmarks.landmarks.slice(0, 3).join(", ")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://www.bestmow.com/cdn/shop/files/30.png?v=1744042530&width=3600"
                  alt="Robot Lawn Mower in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-5 w-5 text-green-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">AI-Powered Lawn Mowing</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our advanced robot mowers use GPS and AI to navigate the unique landscapes of {neighborhood.name},
                  particularly around {landmarks.landmarks.slice(0, 2).join(" and ")}. They adapt to the specific
                  terrain challenges near {landmarks.intersections.slice(0, 2).join(" and ")}, ensuring a perfect cut
                  every time without human intervention.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <Link href="/smart-yard">Learn More</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-400 hover:bg-green-500/5"
                    onClick={() => setShowPhoneForm(true)}
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://www.bestmow.com/cdn/shop/files/30.png?v=1744042530&width=3600"
                  alt="SweatyJob Robot Mower Demo - Better Than PALEX services LLC in Madison"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Droplets className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Smart Lawn Maintenance</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our comprehensive lawn care system is tailored for {neighborhood.name}'s unique environment,
                  especially properties near {landmarks.landmarks.slice(0, 2).join(" and ")}. The system adapts to local
                  conditions around {landmarks.intersections.slice(0, 2).join(" and ")}, ensuring your lawn stays
                  healthy year-round with minimal water usage and environmental impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <Link href="/blog/smart-lawn-care">Learn More</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500/5"
                    onClick={() => setShowPhoneForm(true)}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <NeighborhoodReviews neighborhood={neighborhood.name} />
          {showPhoneForm ? (
            <div className="bg-slate-800 p-8 rounded-lg mb-16">
              <h3 className="text-2xl font-bold text-white mb-4">
                Request Service in {neighborhood.name} Near {landmarks.landmarks.slice(0, 2).join(" and ")}
              </h3>
              <PhoneCaptureForm
                source={`neighborhood-${neighborhood.slug}`}
                buttonText="Submit Request"
                onSuccess={() => setShowPhoneForm(false)}
              />
            </div>
          ) : (
            <div className="text-center bg-slate-800 p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready for robot lawn mowing services in {neighborhood.name}?
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact us today to schedule your grass lawn mowing service in {neighborhood.name}, whether you're near{" "}
                {landmarks.landmarks.slice(0, 2).join(", ")},{landmarks.intersections.slice(0, 2).join(", ")}, or
                anywhere else in the neighborhood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setShowPhoneForm(true)}>
                  Request Service
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/5"
                  asChild
                >
                  <Link href="/saturday-club">
                    Learn About Saturday Club <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Real Estate & Property Management Section */}
          {realEstateBusinesses.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Real Estate & Property Management in {neighborhood.name} and Surrounding Areas like{" "}
                {landmarks.landmarks.slice(0, 2).join(", ")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realEstateBusinesses.map((business, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        {business.category.includes("Property") ? (
                          <Building className="h-5 w-5 mr-2 text-blue-400" />
                        ) : (
                          <Home className="h-5 w-5 mr-2 text-blue-400" />
                        )}
                        {business.name}
                      </CardTitle>
                      <CardDescription className="text-slate-300">{business.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-300 mb-3">
                        <span className="font-semibold">Address:</span> {business.address}
                      </p>
                      {business.phone && (
                        <p className="text-sm text-slate-300 mb-3">
                          <span className="font-semibold">Phone:</span> {business.phone}
                        </p>
                      )}
                      {business.totalScore && (
                        <p className="text-sm text-slate-300 mb-3">
                          <span className="font-semibold">Rating:</span> {business.totalScore}/5 (
                          {business.reviewsCount} reviews)
                        </p>
                      )}
                      {business.description && <p className="text-sm text-slate-300 mb-4">{business.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
