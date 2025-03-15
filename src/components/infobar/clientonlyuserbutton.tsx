// src/components/auth/client-only-user-button.tsx
'use client'

import { UserButton } from "@clerk/nextjs"
import { useEffect, useState } from "react"

export function ClientOnlyUserButton() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    // Return an empty div with the same width/height as the button to prevent layout shift
    return <div className="w-8 h-8"></div>
  }
  
  return <UserButton />
}