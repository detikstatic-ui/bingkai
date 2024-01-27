import CardBingkai from "./CardBingkai"
import CBTitle from "./CBTitle"

const CBTerbaru = () => {
  return (
    <div className="flex flex-col gap-3 py-12">
      <CBTitle title="Terbaru" href="#" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(245px,1fr))] sm:gap-x-10 sm:gap-y-12">
        {[...Array(8)].map((_, i) => (
          <CardBingkai key={i} />
        ))}
      </div>
    </div>
  )
}
export default CBTerbaru
