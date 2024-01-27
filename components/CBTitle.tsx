import Link from "next/link"
import { ArrowRightCircle } from "lucide-react"

import { Button } from "./ui/button"

type CBTitleProps = {
  title?: string
  href?: string
}
const CBTitle = ({ title = "Terbaru", href = "#" }: CBTitleProps) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-4xl font-bold max-sm:text-lg">{title}</h2>
      <Button
        asChild
        className="bg-bingkai inline-flex h-auto items-center gap-2 rounded-none px-2 py-1.5 text-xs font-bold uppercase sm:px-3  sm:text-sm"
      >
        <Link href={href} className="text-sm">
          Lihat Semua <ArrowRightCircle className="size-4 sm:size-6" />
        </Link>
      </Button>
    </div>
  )
}
export default CBTitle
