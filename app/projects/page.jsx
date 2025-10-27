import Image from "next/image";
import Button from "../component/Button/Button";
import Link from "next/link";
import { Container } from "@mui/material";

export default function projects() {
  const donationLink =
    "https://www.zeffy.com/en-US/donation-form/donate-to-esan-house";
  const donationText = "Click to Donate to Esan House Project Now";
  const scholarshipLink =
    "https://www.zeffy.com/en-US/donation-form/donate-to-our-education-scholarship";
  const scholarshipText = "Click to Donate to AAU Scholarship project";
  const target = "_blank";
  return (
    <Container>
      <h2 className="mt-5 text-5xl">Esan House Project</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-5">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhifPRnXfVNKuU6kVloF3csy5dmLE4xj8TDahXg"
            alt="esan house front view"
            height={800}
            width={1500}
            className="w-full"
            layout="responsive"
            unoptimized
          />
        </div>
        <div className="w-full lg:w-1/2 bg-white p-5">
          <p>
            We are thrilled to announce the construction of the Esan House in
            Houston, a dedicated space that will accommodate all activities of
            the Esan community in the area. This multi-purpose community
            building will feature a hall of approximately 200 seating capacity
            in it&apos;s first phase, providing ample space for gatherings,
            events, and various community activities.
          </p>
          <p className="my-5">
            We have successfully acquired a 2.145 acre plot of land in
            Rosenberg, Texas, for this significant project. The Esan House is
            designed to serve as a versatile venue that can be rented out for
            events, generating revenue to support the Esan community in Houston.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-5">
        <div className="w-full lg:w-1/2 bg-white p-5">
          <p>
            The construction of Esan House is planned in phases. We are
            presently in the first phase, which covers site grading, drainage
            works, foundation construction, and the fabrication and installation
            of structural steel. Each step marks steady progress toward bringing
            this important community center to life.
          </p>
          <p className="mt-5">
            We are excited about the positive impact the Esan House will have on
            our community, providing a central location for cultural, social,
            and economic activities. Your support and participation are
            invaluable as we embark on this journey to enhance the unity and
            strength of the Esan community in Houston.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNXgTesOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGDT"
            alt="esan house side view"
            height={800}
            width={1500}
            className="w-full"
            layout="responsive"
            unoptimized
          />
        </div>
      </div>
      <div className="mx-5">
        <Button link={donationLink} text={donationText} target={target} />
      </div>

      <div className="my-20">
        <h2 className=" text-5xl">Educational Projects</h2>
        <div className="bg-white p-5 ">
          <h2 className="">AAU Scholarship Project</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-5">
            <div className="w-full lg:w-1/2 p-5">
              <p>
                The United Esan Organization (UEO) is proud to announce the
                provision of scholarship grant opportunities for students of
                Esan origin attending Ambrose Alli University (AAU) in Ekpoma.
                Recognizing the financial challenges that many students face,
                UEO is committed to supporting the academic aspirations of Esan
                students from low-income families, enabling them to pursue a
                college education.
              </p>
              <p className="">
                Our ultimate goal is not just academic achievement. We aim to
                inspire recipients to give back to their communities once they
                have completed their studies. This scholarship represents an
                investment in both individual futures and the broader community,
                fostering a cycle of empowerment and service.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiiWsLv2xI1SejoxMtDPpRuy5EWGO7s64vqbcT"
                alt="aau"
                height={800}
                width={1500}
                className="w-full"
                layout="responsive"
                unoptimized
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-5">
            <div className="w-full lg:w-1/2">
              <Image
                src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiqk7P3It9EFZPXhoLKgTytDNCr5SVb1vQiHAz"
                alt="graduating students"
                height={800}
                width={1500}
                className="w-full"
                layout="responsive"
                unoptimized
              />
            </div>
            <div className="w-full lg:w-1/2 p-5">
              <ul>
                To qualify for the scholarship, applicants must meet the
                following criteria:
                <li>
                  <strong>Esan Origin: </strong> Applicants must be of Esan
                  origin.
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
                    className=" text-light-blue hover:text-dark-blue "
                  >
                    Click here
                  </Link>{" "}
                  to download the scholarship application form. Fill it
                  completely and email it to{" "}
                  <p className="text-light-blue">info@ueohouston.org</p>
                </li>
                <li>
                  <strong>Essay Submission: </strong> Applicants must write an
                  essay demonstrating their financial struggles with their
                  academic expenses.
                </li>
              </ul>

              <p className="mt-5">
                This scholarship grant is part of UEO&apos;s ongoing commitment
                to fostering education and economic empowerment within the Esan
                community.
              </p>
            </div>
          </div>
          <div className="mx-5">
            <Button
              link={scholarshipLink}
              text={scholarshipText}
              target={target}
            />
          </div>

          <div className="mt-10">
            <h2 className="">Educational Supplies</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-2">
              <div className="w-full lg:w-1/2 p-5">
                <p>
                  As part of our commitment to empowering the next generation,
                  the United Esan Organization (UEO) proudly organizes an annual
                  School Supplies Drive. This charitable initiative provides
                  essential learning materials — including notebooks, pencils,
                  pens, erasers, backpacks, and other school supplies — to
                  children from Pre-K through 12th grade within our community.
                </p>
                <p className="">
                  This program reflects our collective dedication to education
                  and community upliftment. UEO helps to relieve financial
                  burdens on families and fosters a spirit of unity, generosity,
                  and hope. UEO reaffirms its mission to support our children,
                  strengthen our community, and invest in a brighter future for
                  all.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi6KU528Qbuhio0m1HjzdJlpfwCEQYDPa9OyGK"
                  alt="educational supplies"
                  height={800}
                  width={1500}
                  className="w-full"
                  layout="responsive"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="">High School Scholarship</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mb-2">
              <div className="w-full lg:w-1/2 p-5">
                <p>
                  The United Esan Organization (UEO) proudly supports academic
                  excellence through its High School Scholarship Program, which
                  awards $250 to every qualified member`&apos;`s child upon
                  graduation from high school. This scholarship, fully funded by
                  the UEO account, is designed to recognize and reward hard
                  work, dedication, and achievement among our youth.
                </p>
                <p className="">
                  Beyond financial assistance, this initiative serves as a
                  powerful message to our children — that education and
                  perseverance are valued and celebrated within our community.
                  By investing in their success, UEO continues to nurture future
                  leaders and inspire the next generation to pursue excellence,
                  both in academics and in life.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJV2HQG8dhJZqCmEIknoyjt30u2MHBKYw4Dvx"
                  alt="high school scholarship"
                  height={800}
                  width={1500}
                  className="w-full"
                  layout="responsive"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex ">
              <Link
                href="/files/HIGH-SCHOOL-SCHOLARSHIP-FORM.pdf"
                target="_blank"
                className="px-3 py-2 bg-light-blue text-white rounded-full hover:bg-[#3a86ff] w-full text-center mx-5"
              >
                Download High School Scholarship Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
