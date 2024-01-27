import Image from "next/image"
import Link from "next/link"

import CBTitle from "./CBTitle"

const CBdetikNetwork = () => {
  const datas = [
    {
      title: "Anggota KPU Padangsidimpuan Kena OTT Saber Pungli Polda Sumut",
      img: "https://akcdn.detik.net.id/community/media/visual/2019/10/22/1a62b1c7-d64b-420e-a52d-12320c28b666_169.jpeg?w=428&amp;q=90",
      time: "8 menit yang lalu",
      label:
        "https://cdn.cnnindonesia.com/cnnid/images/logo/logo_Detik.png?v=10.13.7",
      href: "#",
    },
    {
      title: "Video: Soal Insentif EV, Ini Kata Tim Anies, Prabowo & Ganjar",
      img: "https://akcdn.detik.net.id/visual/2024/01/25/soal-insentif-ev-ini-kata-tim-anies-prabowo-ganjar_169.png?w=428&amp;q=90",
      time: "Rabu, 28 Nov 2018 13:14 WIB",
      label:
        "https://cdn.cnnindonesia.com/cnnid/images/logo/logo_CNBC.png?v=10.13.7",
      href: "#",
    },
    {
      title:
        "Arumi Bachsin Bongkar Chat Mesra Emil Dardak yang Salah Kirim, Isinya...",
      img: "https://akcdn.detik.net.id/visual/2023/09/02/arumi-bachsin-dan-emil-dardak_169.jpeg?w=428",
      time: "Rabu, 28 Nov 2018 13:14 WIB",
      label:
        "https://cdn.detik.net.id/libs/detik-vertical/images/logo/logo_Insertlive.png?v=0.0.4",
      href: "#",
    },
    {
      title:
        "5 Pasangan Drakor Terbaru yang Paling Dinantikan di Januari 2024, Siap Bikin Baper Penonton!",
      img: "https://akcdn.detik.net.id/visual/2024/01/12/park-hyung-sik-dan-park-shin-hye-foto-instagramcomjtbcdrama_169.jpeg?w=428",
      time: "Rabu, 28 Nov 2018 13:14 WIB",
      label:
        "https://cdn.detik.net.id/libs/detik-vertical/images/logo/logo_Beautynesia.png?v=0.0.4",
      href: "#",
    },
    {
      title: "4 Dessert Cafe Hits di Surabaya yang Wajib Kamu Kunjungi!",
      img: "https://editorial.femaledaily.com/wp-content/uploads/2024/01/Your-paragraph-text-8-2-800x332.jpg",
      time: "Rabu, 28 Nov 2018 13:14 WIB",
      label:
        "https://cdn.detik.net.id/libs/detik-vertical/images/logo/logo_FemaleDaily.png?v=0.0.4",
      href: "#",
    },
    {
      title: "Berkritik Lewat Karya | Jovial & Andovi Da Lopez - NSS Ep. 146",
      img: "https://akcdn.detik.net.id/visual/2024/01/26/nss_169.png?w=428",
      time: "Rabu, 28 Nov 2018 13:14 WIB",
      label:
        "https://cdn.detik.net.id/libs/detik-vertical/images/logo/logo-cxo.png?v=0.0.4",
      href: "#",
    },
    {
      title: "Arti Eau de Toilette (EDT), Ketahanan, dan Bedanya dengan EDP",
      img: "https://akcdn.detik.net.id/community/media/visual/2024/01/27/minyak-wangi_169.jpeg?w=428",
      time: "Rabu, 28 Nov 2018 13:14 WIB",
      label:
        "https://cdn.detik.net.id/libs/detik-vertical/images/logo/logo_Wolipop.png?v=0.0.4",
      href: "#",
    },

    {
      title:
        "Dewi Yull Nyanyi di Acara Kerajaan Brunei Sejak 1980-an, Terbaru di Pernikahan Pangeran Mateen",
      img: "https://akcdn.detik.net.id/visual/2023/07/25/dewi-yull-10_169.jpeg?w=428&amp;q=90",
      time: "Rabu, 28 Nov 2018 13:14 WIB",
      label:
        "https://cdn.cnnindonesia.com/cnnid/images/logo/logo_HaiBunda.png?v=10.13.7",
      href: "#",
    },
  ]

  return (
    <div className="mt-8">
      <CBTitle title="detikNetwork" href="#" />
      <div className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-5 gap-y-4 sm:grid-cols-[repeat(auto-fill,minmax(245px,1fr))] sm:gap-8">
        {datas.map((data, i) => (
          <div key={i} className="flex flex-col gap-3">
            <Link href={data.href} className="relative">
              <Image
                className="aspect-video w-full object-cover"
                src={data.img}
                alt="image alt"
                width={245}
                height={131}
              />
              <Image
                className="absolute right-2 top-1.5 size-auto max-h-6 max-w-20 object-contain"
                src={data.label}
                alt="image alt"
                width={80}
                height={24}
              />
            </Link>
            <div className="flex flex-col gap-1.5">
              <Link href="#">
                <h3 className="line-clamp-4 text-sm font-semibold leading-tight sm:text-base sm:leading-tight">
                  {data.title}
                </h3>
              </Link>
              <time className="text-bingkai-gray line-clamp-2 text-xs font-medium leading-tight">
                {data.time}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CBdetikNetwork
