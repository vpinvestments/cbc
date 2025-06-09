"use client"

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isRomanian = pathname.startsWith("/ro")

  const getToggleUrl = () => {
    if (isRomanian) {
      // Remove /ro prefix to go to English
      return pathname.replace("/ro", "") || "/"
    } else {
      // Add /ro prefix to go to Romanian
      return `/ro${pathname}`
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Link href={getToggleUrl()}>
        <Button variant="outline" size="sm" className="h-8 px-2">
          {isRomanian ? (
            <div className="flex items-center space-x-1">
              <span className="text-lg">🇺🇸</span>
              <span className="text-xs font-medium">EN</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <span className="text-lg">🇷🇴</span>
              <span className="text-xs font-medium">RO</span>
            </div>
          )}
        </Button>
      </Link>
    </div>
  )
}
