"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const images = [
  "/images/0.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
];

export default function HeroGeometric({
  title1 = "Excell ",
  title2 = "Electromech",
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center mt-16">
        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {title1}
            </span>
            <br />
            <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300", pacifico.className)}>
              {title2}
            </span>
          </h1>
        </motion.div>

        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
            Committed to Excellence in Control Panels.
          </p>
        </motion.div>
      </div>

      {/* Image Slider */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={10} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} loop className="rounded-lg overflow-hidden shadow-lg">
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image src={src} alt={`Slide ${index + 1}`} width={800} height={400} className="w-full h-auto rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
}
