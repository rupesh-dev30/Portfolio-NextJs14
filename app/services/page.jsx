"use client";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, esse!",
    href: "",
  },
  {
    num: "02",
    title: "Apk Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, esse!",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, esse!",
    href: "",
  },
];

import { animate, motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
