"use client"

import { useState } from "react"
import Image from "next/image"

interface FacultyImageProps {
  src: string | null
  alt: string
  className?: string
  width?: number
  height?: number
  fallbackSrc?: string
}

export default function FacultyImage({ 
  src, 
  alt, 
  className = "", 
  width = 96, 
  height = 96,
  fallbackSrc = "/placeholder.svg"
}: FacultyImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(
    src && src !== "null" ? src : fallbackSrc
  )
  const [errorCount, setErrorCount] = useState(0)
  
  const handleError = () => {
    // Track how many fallbacks we've tried
    setErrorCount(prev => prev + 1)
    
    const currentSrc = imgSrc;
    let newSrc = fallbackSrc;
    
    // If original URL was from old.iiitdm.ac.in, try mis.iiitdm.ac.in
    if (errorCount === 0 && currentSrc.includes('old.iiitdm.ac.in')) {
      const filename = currentSrc.split('/').pop();
      if (filename) {
        newSrc = `https://mis.iiitdm.ac.in/img/faculty/${filename}`;
      }
    } 
    // If we've already tried one fallback, go to final placeholder
    else if (errorCount === 1 && !currentSrc.includes(fallbackSrc)) {
      newSrc = fallbackSrc;
    }
    
    setImgSrc(newSrc)
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ width, height }}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="object-cover w-full h-full"
        onError={handleError}
        loading="lazy"
      />
    </div>
  )
}