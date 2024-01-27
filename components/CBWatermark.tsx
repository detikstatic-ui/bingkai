import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"

const CBWatermark = () => {
  return (
    <div className="flex w-full flex-col bg-bingkai-yellow sm:flex-row">
      <Image
        src="https://images.unsplash.com/photo-1579846704347-39fcfab0994d?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Bingkai watermark"
        width={500}
        height={500}
        className="aspect-square w-full object-cover sm:aspect-square sm:w-5/12 lg:aspect-[480/428] lg:w-[480px]"
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
          <Link href="#">Pasang Watermark</Link>
        </Button>
      </div>
    </div>
  )
}
export default CBWatermark
