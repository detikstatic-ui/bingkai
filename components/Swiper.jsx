"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import Image from "next/image"
import Link from "next/link"

// import "swiper/css/pagination"

const Swiper = () => {
  return (
    <SwiperContainer
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoplay={false}
      speed={600}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1.8}
      spaceBetween={20}
      breakpoints={{ 640: { slidesPerView: 3, spaceBetween: 30 } }}
    >
      {[...Array(10)].map((_, i) => (
        <SwiperSlide key={i} style={{ height: "auto" }}>
          <div className="flex h-full max-w-64 flex-col items-center gap-4 border bg-white p-5 text-center">
            <Image
              src="/images/bingkai-1.png"
              className="aspect-square size-full object-cover"
              width={300}
              height={300}
              alt="bingkai"
            />
            <h2 className="font-medium">HUT Transmedia {i + 1}</h2>
            <Link
              href="#"
              className="inline-block bg-bingkai-darkorange px-5 py-1.5 text-lg font-bold text-white"
            >
              Pakai
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}
export default Swiper
