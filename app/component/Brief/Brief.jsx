"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";

export default function Brief() {
  const link = "/about";
  const text = "Learn more";
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="  my-5">
      <h2 className="">Summary of United Esan Organization Houston</h2>
      <div className="bg-white p-5  text-lg m-5" data-aos="fade-up">
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
        <Button link={link} text={text} />
      </div>
    </div>
  );
}
