import Image from "next/image"
import Link from "next/link"
import heroImage from "@/public/images/hero-image.webp"

const Headline = async () => {
  return (
    <section className="full-width bg-hlmobilegradient py-9 sm:bg-hldesktopgradient">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <Image
          className="w-full object-contain sm:order-2 sm:w-1/2 lg:w-3/5"
          src={heroImage}
          alt="Bingkai.id"
          width={626}
          height={475}
          priority
        />

        <div className="flex flex-col items-start justify-start gap-3 sm:max-w-96 sm:justify-center">
          <h1 className="text-4xl font-black text-black sm:text-5xl">
            Bingkai 17-an
          </h1>
          <div className="text-2xl tracking-tight">
            <p>
              Rayakan hari kemerdekaan bersama{" "}
              <strong className="font-black">Bingkai.id</strong>
            </p>
          </div>

          <Link
            href="#"
            className="mt-3 flex rounded-none bg-bingkai-darkorange px-9 py-3.5 text-2xl font-extrabold text-white transition-all duration-300 ease-in-out hover:bg-bingkai"
          >
            Eksplor Bingkai
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Headline
