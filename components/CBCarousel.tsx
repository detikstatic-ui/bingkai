"use client"

import Link from "next/link"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

const CBCarousel = () => {
  return (
    <div
      className="full-width"
      style={{
        background: "linear-gradient(180deg, #DB4200 0%, #FFB800 100%)",
      }}
    >
      <div className="breakout grid grid-cols-1 gap-7 py-11 sm:flex">
        <div className="flex flex-col items-start gap-4 bg-white px-10 py-16">
          <h2 className="text-bingkai text-4xl font-bold">
            Bingkai Hadir
            <br />
            Untukmu!
          </h2>
          <p className="mb-3 text-xl">Rayakan setiap momen dengan Bingkai</p>
          <Button
            asChild
            className="bg-bingkai-darkorange rounded-none px-5 py-2 text-xl font-bold"
          >
            <Link href="/bingkai">Eksplor Bingkai</Link>
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="-mx-5 sm:mx-0 sm:w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-5 size-12" />
          <CarouselNext className="right-5 size-12" />
        </Carousel>
      </div>
    </div>
  )
}
export default CBCarousel
