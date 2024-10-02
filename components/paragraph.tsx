import React from "react";
import Image from "next/image";

interface ParagraphProps {
  displayBtn: boolean;
  buttonURL?: string; // Fixed the typo here
  number: string;
  head: string;
  para: string;
  imagesrc?: string;
  altText?: string; // Added alt text prop
}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { displayBtn, buttonURL, number, head, para, imagesrc, altText } =
    props;

  const DisplayLink = () => {
    if (displayBtn && buttonURL) {
      // Check if buttonURL is defined
      return (
        <a
          href={buttonURL}
          className="hover:scale-[1.05] duration-300 w-[160px] md:ml-4 h-auto px-4 py-2 text-base text-center bg-[#ff8d23] text-[#fff5ee] mt-4 rounded-md"
        >
          Илүү ихийг харах
        </a>
      );
    }
    return null; // Explicitly return null if not displaying the button
  };

  return (
    <article className="w-[80%] h-auto flex flex-col md:flex-row justify-center items-center gap-6 py-[16px] border-t-2 border-black">
      <section className="w-full h-auto flex flex-col">
        <div className="h-[140px] relative">
          <h1 className="w-[130px] text-[126px] opacity-35 align-text-top leading-[140px]">
            {number}
          </h1>
          <h3 className="w-auto h-auto text-[32px] bottom-4 absolute font-bold text-[#01093a]">
            {head}
          </h3>
        </div>
        <p className="md:ml-4">{para}</p>
        <DisplayLink />
      </section>
      <Image
        className="w-full md:w-[40%]"
        src={imagesrc || `https://picsum.photos/200?random=${number}`}
        alt={altText || "Image description"}
        width={200}
        height={200}
      />
    </article>
  );
};

export default Paragraph;
