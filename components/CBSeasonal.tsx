import CardBingkai from "./CardBingkai"
import CBTitle from "./CBTitle"

const CBSeasonal = () => {
  return (
    <div className="flex flex-col gap-3 py-12">
      <CBTitle title="Tahun Baru Islam" href="#" />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-12">
        {[...Array(3)].map((_, i) => (
          <CardBingkai
            key={i}
            className="group first:col-span-full sm:first:col-span-1"
            titleClass="group-first:text-2xl"
          />
        ))}
      </div>
    </div>
  )
}
export default CBSeasonal
