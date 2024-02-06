import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import MenuPopup from "./MenuPopup"
import MenuSheet from "./MenuSheet"
import SearchPopup from "./SearchPopup"
import UserLogin from "./UserLogin"

export function SiteHeader() {
  return (
    <header className="full-width sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex items-center space-x-4 py-3 sm:justify-between sm:space-x-0 lg:py-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-4">
            <div className="max-lg:hidden">
              <UserLogin />
            </div>
            <SearchPopup />
            <div className="lg:hidden">
              {/* <MenuPopup /> */}
              <MenuSheet />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
