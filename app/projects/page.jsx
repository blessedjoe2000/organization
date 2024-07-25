import React from "react";
import bulldozer from "@/public/images/projects/ueobulldozer.jpg";
import Image from "next/image";
import Button from "../component/Button/Button";

export default function projects() {
  const donationLink = "https://donate.stripe.com/6oE8zx6Q0c3D7TO288";
  const donationText = "Click to Donate to Esan House Project Now";
  const target = "_blank";
  return (
    <div>
      <h2 className="mt-5">Esan House Project</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-5">
        <div className="w-full lg:w-1/2">
          <Image
            src={bulldozer}
            alt="bulldozer in a construction site"
            height={400}
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-white p-5">
          <p>
            We are thrilled to announce the construction of the Esan House in
            Houston, a dedicated space that will accommodate all activities of
            the Esan community in the area. This multi-purpose community
            building will feature a hall of approximately 3,500 square feet,
            providing ample space for gatherings, events, and various community
            activities.
          </p>
          <p className="my-5">
            We have successfully acquired a 2.04-acre plot of land in Rosenberg,
            Texas, for this significant project. The Esan House is designed to
            serve as a versatile venue that can be rented out for events,
            generating revenue to support the Esan community in Houston.
          </p>
          <p>
            The total estimated cost for the entire project is seven hundred
            thousand dollars ($700,000.00). To manage resources efficiently, the
            construction of the Esan House will be carried out in phases. We are
            currently in the first phase of the project, ensuring steady
            progress towards the completion of this important community center.
          </p>
          <p className="mt-5">
            We are excited about the positive impact the Esan House will have on
            our community, providing a central location for cultural, social,
            and economic activities. Your support and participation are
            invaluable as we embark on this journey to enhance the unity and
            strength of the Esan community in Houston.
          </p>
        </div>
      </div>
      <div className="mx-5">
        <Button link={donationLink} text={donationText} target={target} />
      </div>
    </div>
  );
}
