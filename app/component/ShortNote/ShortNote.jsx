import Image from "next/image";
import React from "react";
import project from "@/public/images/ueo_project3.png";
import esanpeople from "@/public/images/ueo_project4.png";
import "aos/dist/aos.css";

export default function ShortNote() {
  return (
    <div className="flex">
      <div className="image-container p-5 shadow-md" data-aos="fade-up">
        <h2>Our Projects</h2>
        <Image
          src={project}
          alt="our projects"
          layout="responsive"
          data-aos="fade-right"
          className="my-5"
        />
        <div className=" content ">
          <p>
            The United Esan Organization (U.E.O) in Houston, Texas is excited to
            announce the development of the Esan House. This dedicated space
            will serve as the central hub for all Esan activities in Houston,
            fostering cultural preservation, community engagement, and unity
            among our members.
          </p>

          <p className="my-5">
            The Esan House will feature a reception hall with a seating capacity
            of approximately 500, designed to host various events and generate
            revenue for the Esan community in Houston. This facility will
            support our mission of promoting Esan culture and heritage while
            providing a venue for gatherings, celebrations, and other community
            activities.
          </p>

          <p className="mb-5">
            We look forward to the positive impact the Esan House will have on
            our community, providing a place for cultural exchange, education,
            and economic empowerment.
          </p>
          <button className="bg-sharp-red w-full rounded-full p-1 text-white hover:text-light-blue my-2">
            Read more
          </button>
        </div>
      </div>
      <div className="image-container p-5 shadow-md" data-aos="fade-up">
        <h2>Esan People and Culture</h2>
        <Image
          src={esanpeople}
          alt="esan people and culture"
          layout="responsive"
          data-aos="fade-left"
          className="my-5"
        />
        <div className=" content">
          <p>
            The Esan people are an ethnic group from southern Nigeria who speak
            the Esan language. They are traditionally known as agriculturalists,
            trado-medical practitioners, mercenary warriors, and hunters. The
            modern Esan nation is believed to have been organized during the
            15th century.
          </p>

          <p className="my-5">
            This formation occurred when nobles and princesses left the Benin
            Empire to establish communities and kingdoms, known as eguares,
            among the aboriginal peoples they encountered.
          </p>

          <p className="mb-5">
            There are 35 established kingdoms in Esanland, including: Amahor,
            Ebelle, Egoro, Ewohimi, Ekekhenlen, Ekpoma, Ekpon, Emu, Ewu, Ewato,
            Ewosa, Idoa, Ifeku, Igueben, Ilushi, Inyelen, Irrua, Ogwa, Ohordua,
            Okalo, Okhuesan, Onogholo, Opoji, Oria, Orowa, Uromi, Udo, Ugbegun,
            Ugboha, Ubiaja, Urohi, Ugun, Ujiogba, Ukhun, Uzea.
          </p>
          <button className="bg-sharp-red w-full rounded-full p-1 text-white hover:text-light-blue my-2">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
