import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.png"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"

const MenuSheet = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0">
          <Icons.menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle asChild>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                className="h-8 w-auto lg:h-12"
                alt={siteConfig.name}
                width={200}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="my-5 grid gap-2.5">
          {siteConfig.mainNav.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="w-full text-lg font-semibold"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SheetFooter className="flex-col">
          <div
            className="-mx-6 mb-5 h-0.5 bg-gradient-to-r from-[#ffb54c] via-[#ed131b] to-[#ffb54c]"
            role="presentation"
            aria-hidden="true"
          ></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-xs">Connect With Us</h3>
            {siteConfig.links?.length ? (
              <div className="flex justify-center gap-1.5">
                {siteConfig.links?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "flex size-8 overflow-hidden rounded-full"
                        )}
                      >
                        <Image
                          src={item.image}
                          width={32}
                          height={32}
                          alt={item.title}
                          className="size-full object-contain"
                        />
                      </Link>
                    )
                )}
              </div>
            ) : null}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default MenuSheet
