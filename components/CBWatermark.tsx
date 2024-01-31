import Image from "next/image"
import Link from "next/link"
import imageCover from "@/public/images/watermark.png"

import { Button } from "./ui/button"

const CBWatermark = () => {
  return (
    <div className="flex w-full flex-col bg-bingkai-yellow sm:flex-row">
      <Image
        src={imageCover}
        alt="Bingkai watermark"
        width={500}
        height={500}
        className="aspect-square w-full shrink-0 object-cover sm:aspect-square sm:w-5/12 lg:aspect-[480/428] lg:w-[480px]"
        placeholder="blur"
      />
      <div className="flex flex-col items-center gap-4 px-6 py-8 sm:items-start sm:justify-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
          Proteksi Data Anda dengan Watermark
        </h2>
        <p className="mb-1.5 text-xl sm:text-2xl">
          Jaga privasi Anda dengan pilihan Watermark kami yang mudah dan
          terpercaya
        </p>
        <Button
          asChild
          className="inline-block h-auto rounded-none bg-bingkai-orange px-8 py-3 text-xl font-bold text-white"
        >
          <Link href="/watermark">Pasang Watermark</Link>
        </Button>
      </div>
    </div>
  )
}
export default CBWatermark
