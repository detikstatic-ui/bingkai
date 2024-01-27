import Image from "next/image"
import Link from "next/link"
import { Download, Eye } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

type CardBingkaiProps = {
  className?: string
  imgSrc?: string
  titleClass?: string
  btnClass?: string
}
const CardBingkai = ({
  imgSrc = "/images/bingkai-1.png",
  className,
  titleClass,
  btnClass,
}: CardBingkaiProps) => {
  return (
    <div className={cn("flex flex-col items-start gap-2.5", className)}>
      <Image
        src={imgSrc}
        alt="Bingkai template 1"
        width={500}
        height={500}
        className="aspect-square w-full object-cover"
      />
      <h2 className={cn("text-xl font-bold", titleClass)}>
        Hari Kemerdekaan ke-77
      </h2>
      <Button
        asChild
        className={cn(
          "inline-flex items-center gap-2 rounded-none px-2.5 py-1.5 text-sm",
          btnClass
        )}
      >
        <Link href="/bingkai/1">
          <Eye />
          100 Views
        </Link>
      </Button>
      <span className="flex items-center gap-1 font-semibold text-black-light2">
        <Download className="size-3.5 text-black" />
        20 downloads
      </span>
    </div>
  )
}
export default CardBingkai
