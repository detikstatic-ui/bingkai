interface EksplorLayoutProps {
  children: React.ReactNode
}
const EksplorLayout = ({ children }: EksplorLayoutProps) => {
  return (
    <div className="flex flex-col gap-11 pt-14">
      <h1 className="text-5xl font-bold">Eksplor</h1>
      {children}
    </div>
  )
}
export default EksplorLayout
