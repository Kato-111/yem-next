import React from "react";
import Paragraph from "@/components/paragraph";
import Image from "next/image";
import WhiteLogo from "/assets/logo-white transparent.png";

export default function HomePage() {
  const paragraphContexts = [
    {
      number: "01",
      head: "ҮЕМ гэж юу вэ?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
      btnDisplay: false,
    },
    {
      number: "02",
      head: "Төслүүд",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
      btnDisplay: true,
      buttonURL: "/Projects",
    },
    {
      number: "03",
      head: "Блог",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
      btnDisplay: true,
      buttonURL: "/Blogs",
    },
  ];

  return (
    <main className="relative flex flex-col items-center text-black pt-16">
      {/* <div className="absolute inset-0 w-full h-screen bg-[#1A1D24] z-[-3]"></div> */}

      <header className="relative z-10 flex sm:pt-30 flex-col items-center max-w-full pr-4">
        <div className="">
          <Image
            src={WhiteLogo}
            width={500}
            height={500}
            className="w-[40%]"
            alt="Logo"
          />
          <section className="w-full text-white flex flex-col justify-center items-center gap-3 my-4 mb-32">
            <h1 className="text-4xl text-center md:text-5xl font-roboto font-bold">
              Young Engineers Mongolia
            </h1>
            <h3 className="w-full md:w-[90%] text-base md:text-lg text-balance text-center font-roboto">
              Young Engineers Mongolia нь 2024 онд байгуулагдсан. Ирээдүйн
              Монголын инженерүүдийг бэлтгэх зорилготой төрийн бус байгууллага юм
            </h3>
            <button className="w-auto h-auto px-6 py-3 text-base bg-[#ff8d23] text-black mt-6 rounded-md hover:scale-105 transition-transform duration-300 font-semibold">
              Илүү ихийг харах
            </button>
          </section>
        </div>
      </header>
      <article
        id="article"
        className="w-full max-w-6xl px-4 py-12 flex flex-col items-center justify-center gap-12"
      >
        {paragraphContexts.map((context, index) => (
          <Paragraph
            key={index}
            number={context.number}
            head={context.head}
            para={context.para}
            displayBtn={context.btnDisplay}
            buttonURL={context.btnDisplay ? context.buttonURL : undefined}
          />
        ))}
      </article>
    </main>
  );
}