"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Animation from "./components/UI/Animation/Animation";

const socialLinks = [
  {
    href: " https://www.instagram.com/dantebandmx",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="20px"
        height="20px"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/dantebandmx",
    label: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="20px"
        height="20px"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@dantebandmx",
    label: "TikTok",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@dantebandmx",
    label: "YouTube",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
      </svg>
    ),
  },
];

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    src: "/img/gallery-.png",
    alt: "Photo 1",
  },
  {
    src: "/img/gallery-1.png",
    alt: "Photo 2",
  },
  {
    src: "/img/gallery-2.png",
    alt: "Photo 3",
  },
  {
    src: "/img/gallery-3.jpg",
    alt: "Photo 4",
  },
  {
    src: "/img/gallery-4.jpg",
    alt: "Photo 5",
  },
  {
    src: "/img/gallery-5.jpg",
    alt: "Photo 6",
  },
  {
    src: "/img/gallery-6.jpg",
    alt: "Photo 8",
  },
  {
    src: "/img/gallery-8.jpg",
    alt: "Photo 6",
  },
];

// const tourDates = [
//   {
//     date: "Ago. 27",
//     venue: "Metropólitan",
//     city: "Ciudad de México",
//     link: "https://www.ticketmaster.com.mx/allison-boletos/artist/1409233?utm_source=TM-google&gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxVU_eemhrcaxdoB05605LspWkLCmsY0juRMl4rEGwzPcqEaPnq9x-xoCA-wQAvD_BwE",
//   },
//   {
//     date: "Ago. 29",
//     venue: "Rock Vibes",
//     city: "Nicaragua",
//     link: "https://ticketerani.com/rockvibes-kudaiyallison/",
//   },
//   {
//     date: "Sep. 19",
//     venue: "Teatro Morelos",
//     city: "Toluca",
//     link: "https://allison-acustico-toluca.boletia.com/",
//   },
//   {
//     date: "Sep. 21",
//     venue: "Auditorio La Isla",
//     city: "Mérida",
//     link: " https://www.tusboletos.mx/evento/allison-acustico-merida",
//   },
//   {
//     date: "Sep. 22",
//     venue: "Showcenter",
//     city: "Monterrey",
//     link: "https://www.superboletos.com/landing-evento/J-caPb_k87kBTk0ZV_nJSg",
//   },
//   {
//     date: "Sep. 28",
//     venue: "Cactus Festival",
//     city: "Saltillo",
//     link: "https://arema.mx/checkout/59489/areas",
//   },
//   {
//     date: "Oct. 04",
//     venue: "Auditorio Explanada",
//     city: "Puebla",
//     link: "https://boletos.blackticket.com.mx/tickets/es/entradas-musica-allison-acustico",
//   },
//   {
//     date: "Oct. 19",
//     venue: "Tecate Península",
//     city: "Tijuana",
//     link: "https://tecatepeninsula.com/boletos",
//   },
//   {
//     date: "Nov. 09",
//     venue: "Cachanilla Fest",
//     city: "Mexicali",
//     link: "https://janto4.mx/gpproducer/public/janto/main.php?Nivel=Evento&idEvento=CACHANILLAMEXI&fbclid=IwY2xjawD76opleHRuA2FlbQIxMAABHfZ6jaQXDZvqqMVj8ysoDJYLrO_hI9FOpvXZGqg6RW8URJzrFcAriTmw8w_aem_R2LO7W0iPXC3-YQvNRXIJg",
//   },
//
// ];

const merchItems = [
  {
    image: "/img/img-1.png",
    link: "https://19cc6e-1c.myshopify.com/products/t-shirt-logo",
  },
  {
    image: "/img/img-2.png",
    link: "https://19cc6e-1c.myshopify.com/products/t-shirt-foto",
  },
  {
    image: "/img/img-3.png",
    link: "https://19cc6e-1c.myshopify.com/products/gorras",
  },
];

export default function Home() {
  const [enlargedPhoto, setEnlargedPhoto] = useState<Photo | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio("/bg-music.mp3");
    setAudio(audioElement);
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const togglePhotoSize = (photo: Photo) => {
    if (enlargedPhoto?.src === photo.src) {
      setEnlargedPhoto(null);
    } else {
      setEnlargedPhoto(photo);
    }
  };

  const toggleMobileMenu = () => {
    console.log("Toggling mobile menu"); // Para depuración
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <main className="">
      <header className="relative md:min-h-[100vh]">
        <link rel="icon" href="/favicon.ico" />
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block">
            <Image
              src="/img/banner.jpg"
              alt="hero"
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              className="md:block"
            />
          </div>
        </div>
        <div className="block md:hidden">
          <Image
            src="/img/banda-mobile.jpg"
            alt="Allison"
            width={1300}
            height={1920}
          />
        </div>
        <div className="absolute inset-0 z-10 from-white via-white/5 to-transparent"></div>
        <div className="absolute top-4 right-4 z-20 flex space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="absolute top-4 left-4 z-20 flex md:hidden">
          <button onClick={toggleMobileMenu} className="text-3xl">
            &#9776;
          </button>
        </div>
        <div
          className={`absolute top-16 left-4 z-30 bg-white border border-black text-black ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <div className="flex flex-col">
            <button
              onClick={() => scrollTo("tour")}
              className="w-full border-b py-2 px-4 hover:bg-gray-200 text-center text-black"
            >
              TOUR
            </button>
            <button
              onClick={() => scrollTo("musica")}
              className="w-full border-b py-2 px-4 hover:bg-gray-200 text-center text-black"
            >
              MÚSICA
            </button>
            <button
              onClick={() => scrollTo("merch")}
              className="w-full border-b py-2 px-4 hover:bg-gray-200 text-center text-black"
            >
              MERCH
            </button>
            <Link
              href="https://www.youtube.com/@dantebandmx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-b py-2 px-4 hover:bg-gray-200 text-center text-black"
            >
              VIDEOS
            </Link>
            <button
              onClick={() => scrollTo("galeria")}
              className="w-full border-b py-2 px-4 hover:bg-gray-200 text-center text-black"
            >
              GALERÍA
            </button>
          </div>
        </div>
        <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div className="md:flex justify-center space-x-16 mt-4 text-3xl font-bold">
              <button
                onClick={() => scrollTo("tour")}
                className="border-2 border-transparent py-1 px-4 hover:border-red-700"
              >
                TOUR
              </button>
              <button
                onClick={() => scrollTo("musica")}
                className="border-2 border-transparent py-1 px-4 hover:border-red-700"
              >
                MÚSICA
              </button>
              <button
                onClick={() => scrollTo("merch")}
                className="border-2 border-transparent py-1 px-4 hover:border-red-700"
              >
                MERCH
              </button>
              <Link
                href="https://www.youtube.com/@dantebandmx"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-transparent py-1 px-4 hover:border-red-700"
              >
                VIDEOS
              </Link>
              <button
                onClick={() => scrollTo("galeria")}
                className="border-2 border-transparent py-1 px-4 hover:border-red-700"
              >
                GALERÍA
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-30">
          <button
            onClick={toggleMusic}
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>
      </header>

      <section
        id="musica"
        className="py-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/img-5.png')" }}
      >
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8 text-black">
            MÚSICA
          </h2>
        </Animation>
        <Animation
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <iframe
              style={{
                borderRadius: "8px",
              }}
              src="https://open.spotify.com/embed/artist/1ylO45I7lTQGjYuKJntHrx?utm_source=generator"
              width="60%"
              height="382"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </Animation>
      </section>
      <section
        id="merch"
        className="relative w-screen h-screen overflow-hidden"
      >
        <Link
          href="https://19cc6e-1c.myshopify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/img/video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </Link>
      </section>
      <section id="galeria" className="bg-black pt-24 pb-12 text-white">
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8">
            GALERÍA
          </h2>
        </Animation>
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-transform duration-300 ${
                  enlargedPhoto?.src === photo.src ? "transform scale-150" : ""
                }`}
                onClick={() => togglePhotoSize(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Animation>
      </section>

      <section
        id="tour"
        className="py-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/img-10.png')" }}
      >
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold text-center mb-8 text-white">
            TOUR
          </h2>
        </Animation>
        <Animation
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container text-center mx-auto my-32">
            <h1 className="neonText">Próximamente</h1>
          </div>
        </Animation>
      </section>
      <footer className="bg-black text-white">
        <div className=" mx-auto px-4">
          <div className="py-20 max-w-screen-xl mx-auto">
            <div className="flex justify-between">
              <div className="flex columns-2 gap-4 justify-center">
                <Link
                  href="https://www.instagram.com/dantebandmx"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      width="20px"
                      height="20px"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.facebook.com/dantebandmx"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      width="20px"
                      height="20px"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.tiktok.com/@dantebandmx"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://youtube.com/@dantebandmx"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="text-right">
                <h1 className="font-bold">2024 ®DANTE</h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
