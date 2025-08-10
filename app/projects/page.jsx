import Image from "next/image";
import Button from "../component/Button/Button";
import bulldozer from "@/public/images/projects/ueobulldozer.jpg";
import scholarship from "@/public/images/projects/ueo_scholarship.jpg";
import Link from "next/link";
import { Container } from "@mui/material";

export default function projects() {
  const donationLink = "https://donate.stripe.com/6oE8zx6Q0c3D7TO288";
  const donationText = "Click to Donate to Esan House Project Now";
  const scholarshipText = "Click to Donate to AAU Scholarship project";
  const target = "_blank";
  return (
    <Container>
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

      <h2 className="mt-20">AAU Scholarship Project</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-5">
        <div className="w-full lg:w-1/2 bg-white p-5">
          <p>
            The United Esan Organization (UEO) is proud to announce the
            provision of scholarship grant opportunities for students of Esan
            origin attending Ambrose Alli University (AAU) in Ekpoma.
            Recognizing the financial challenges that many students face, UEO is
            committed to supporting the academic aspirations of Esan students
            who are struggling to meet their educational expenses.
          </p>
          <p className="my-5">
            To alleviate some of these financial burdens, UEO is offering a
            scholarship grant of two hundred thousand naira (#200,000) to
            qualified students. This initiative aims to empower Esan students by
            providing them with the necessary financial assistance to continue
            their education and achieve their academic goals.
          </p>
          <ul>
            To qualify for the scholarship, applicants must meet the following
            criteria:
            <li>
              <strong>Esan Origin: </strong> Applicants must be of Esan origin.
            </li>
            <li>
              <strong>AAU Enrollment: </strong> Applicants must be bona fide
              students of Ambrose Alli University (AAU), Ekpoma.
            </li>
            <li>
              <strong>Application Form: </strong>{" "}
              <Link
                href="/files/UEO-Scholarship-Application-Form.pdf"
                target="_blank"
                className="text-sharp-red hover:text-light-blue"
              >
                Click here
              </Link>{" "}
              to download the scholarship application form. Fill it completely
              and email it to info@unitedesanorganizationhouston.org
            </li>
            <li>
              <strong>Essay Submission: </strong> Applicants must write an essay
              demonstrating their financial struggles with their academic
              expenses.
            </li>
          </ul>

          <p className="mt-5">
            This scholarship grant is part of UEO&apos;s ongoing commitment to
            fostering education and economic empowerment within the Esan
            community.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={scholarship}
            alt="bulldozer in a construction site"
            height={400}
            className="w-full"
          />
        </div>
      </div>
      <div className="mx-5 mb-20">
        <Button link={donationLink} text={scholarshipText} target={target} />
      </div>
    </Container>
  );
}
