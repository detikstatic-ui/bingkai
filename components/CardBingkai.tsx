import Image from "next/image"
import Link from "next/link"
import { Download, Eye } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

type CardBingkaiProps = {
  className?: string
  titleClass?: string
  btnClass?: string
  imgSrc?: string
  href?: string
  views?: number
  downloads?: number
  title?: string
}
const CardBingkai = ({
  imgSrc = "/images/bingkai-1.png",
  href = "#",
  views = 100,
  downloads = 20,
  className,
  titleClass,
  btnClass,
  title = "Hari Kemerdekaan ke-77",
}: CardBingkaiProps) => {
  return (
    <div className={cn("flex flex-col items-start gap-2.5", className)}>
      <Link href={href}>
        <Image
          src={imgSrc}
          alt="Bingkai template 1"
          width={500}
          height={500}
          className="aspect-square w-full object-cover"
        />
      </Link>
      <h2
        className={cn(
          "line-clamp-2 text-balance text-xl font-bold",
          titleClass
        )}
      >
        {title}
      </h2>
      <Button
        asChild
        className={cn(
          "inline-flex items-center gap-2 rounded-none px-2.5 py-1.5 text-sm",
          btnClass
        )}
      >
        <Link href={href}>
          <Eye />
          {views} Views
        </Link>
      </Button>
      <span className="flex items-center gap-1 font-semibold text-black-light2">
        <Download className="size-3.5 text-black" />
        {downloads} downloads
      </span>
    </div>
  )
}
export default CardBingkai
