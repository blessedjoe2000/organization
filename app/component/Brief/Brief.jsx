"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Brief() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="  my-5">
      <h2 className="font-bebasNeue text-sharp-red text-3xl p-2 text-center">
        Summary of United Esan Organization Houston
      </h2>
      <div
        className="bg-light-blue text-white px-5 pt-5 text-lg "
        data-aos="fade-up"
      >
        <p>
          The United Esan Organization (U.E.O) in Houston, Texas is committed to
          the preservation and promotion of Esan culture and heritage. The
          organization strives to foster unity and harmony among its members
          while also working towards their economic empowerment and educational
          advancement. U.E.O plays a significant role in supporting indigenous
          people in Esan land by providing scholarships and various humanitarian
          services, aiming to uplift and improve the quality of life for the
          Esan community.
        </p>
        <br />
        <p>
          The vision of U.E.O is to establish a comprehensive community center
          that will serve as a hub for various services and activities. This
          center will provide essential health and wellness information, welfare
          support, and a range of social and cultural services. It will also
          offer after-school activities for children, ensuring they have access
          to educational and recreational resources. Additionally, the community
          center will feature a library, creating a space for learning and
          cultural enrichment.
        </p>
        <br />
        <p>
          Through these initiatives, U.E.O seeks to create a cohesive and
          empowered community, both in Houston and in Esan land, fostering a
          strong sense of identity, support, and shared purpose among its
          members.
        </p>
        <button className="text-center bg-sharp-red rounded-full w-full py-2 outline-2 my-2">
          Learn more
        </button>
      </div>
    </div>
  );
}
