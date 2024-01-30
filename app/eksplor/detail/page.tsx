"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CardBingkai from "@/components/CardBingkai"

const EksplorDetail = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <h2 className="text-xl font-semibold">Hari Kemerdekaan</h2>
        <div className="flex items-center gap-3">
          <span className="shrink-0 text-lg font-bold">Urutkan</span>
          <Select>
            <SelectTrigger className="w-52 grow rounded-none bg-transparent px-4 py-2 text-black-light1">
              <SelectValue placeholder="Pilih urutan..." />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectGroup>
                <SelectLabel>Berdasarkan</SelectLabel>
                <SelectItem value="apple">Terpopuler</SelectItem>
                <SelectItem value="banana">Terbaru</SelectItem>
                <SelectItem value="blueberry">Direkomendasikan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="my-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <h3 className="text-lg font-bold">Topik lainnya:</h3>
        <div className="flex flex-wrap gap-3">
          <button className="bg-white px-4 py-1 text-lg font-medium text-blue">
            Hari Kemerdekaan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(245px,1fr))] sm:gap-x-10 sm:gap-y-12">
        {[...Array(16)].map((_, i) => (
          <CardBingkai key={i} />
        ))}
      </div>

      <Pagination className="my-14">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="hidden sm:block">
            <PaginationLink href="#">14</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
export default EksplorDetail
