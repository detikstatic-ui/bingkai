import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import { Icons } from "./icons"

export function SiteHeader() {
  return (
    <header className="full-width sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex items-center space-x-4 py-3 sm:justify-between sm:space-x-0 lg:py-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-4">
            <Link href="#" className="max-lg:hidden">
              <Icons.user className="size-6" />
            </Link>
            <Link href="#">
              <Icons.search className="size-6" />
            </Link>
            <Link href="#" className="lg:hidden">
              <Icons.menu className="size-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
