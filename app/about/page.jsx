import "aos/dist/aos.css";
import Link from "next/link";
import Button from "../component/Button/Button";
import { Container } from "@mui/material";
import Executives from "../component/Executives/Executives";
import BoardMembers from "../component/BoardMembers/BoardMembers";

export default function about() {
  const constitutionLink = "/";
  const constitutionText = "Click here to view UEO Constitution";
  const target = "_blank";
  const dueLink = "https://buy.stripe.com/6oEcPNcak5Ffb60cMN";
  const dueText = "Click here to pay UEO monthly due";

  return (
    <Container>
      <div className="my-5 p-5 bg-white">
        <h2>About Us</h2>
        <p>
          The United Esan Organization (UEO) in Houston, Texas has a rich
          history spanning over 20 years. Founded in 1979, it has grown into a
          vibrant and diverse institution, proudly representing Esan culture
          while reaching out to people of all backgrounds. UEO is dedicated to
          promoting and strengthening the overall wellbeing and values of the
          Esan people through a variety of programs and services aimed at
          individuals, groups, and families.
        </p>
        <p className="py-5">
          As the primary agency responsible for informal Esan education, UEO
          offers numerous opportunities for recreation, health and fitness, and
          cultural and communal engagement. Through its diverse activities, the
          organization encourages Esan people to understand and express the
          significance of their heritage and their relationship with the host
          communities.
        </p>
        <p>
          The Esan House, an integral part of UEO, serves as a central meeting
          ground for all Esan people. It is a place where diverse thoughts and
          expressions are not only respected but encouraged. Reflecting its core
          Esan values, UEO is committed to enhancing the general welfare of the
          Esan community as well as the broader community, fostering a sense of
          belonging and unity among its members.
        </p>
      </div>
      <div className="sm:flex justify-center items-center gap-1 my-5 py-5 ">
        <div className="shadow-md rounded-md p-5 bg-white sm:mb-0 mb-2">
          <h2>Our Vision</h2>
          <p>
            The vision of the United Esan Organization (U.E.O) in Houston, Texas
            is to establish a comprehensive community center that serves as a
            vital resource for both members and other groups within the
            community. This center will provide a wide range of essential
            services, including health and wellness information, welfare
            support, and various social and cultural programs. The center will
            also feature a library, fostering learning and development. Through
            these offerings, the U.E.O envisions creating a supportive and
            inclusive environment that meets the diverse needs of the community.
          </p>
        </div>
        <div className="shadow-md rounded-md p-5 bg-white ">
          <h2>Our Mission</h2>
          <p>
            The mission of the United Esan Organization (U.E.O) in Houston,
            Texas is to preserve and promote the rich Esan culture and heritage,
            fostering a sense of unity and harmony among its members. The
            organization is dedicated to providing a platform that empowers its
            members economically, offering educational opportunities and
            resources that enhance their growth and development. Through its
            various programs and initiatives, U.E.O strives to unite its
            community, ensuring that the values and traditions of the Esan
            people are upheld and celebrated.
          </p>
        </div>
      </div>

      <div className="bg-white my-10 p-5">
        <h2>Our Meeting</h2>
        <p>
          We gather in person once every month, specifically on the second
          Sunday of each month. These meetings provide an excellent opportunity
          for members to connect, share ideas, and celebrate our rich Esan
          heritage together. To support our activities and initiatives, we pay a
          monthly due of $30.
        </p>
        <p className="pt-5">
          For the exact meeting location, please visit our{" "}
          <Link href="/contact" className=" hover:text-sharp-red">
            <q>Contact Us</q>
          </Link>{" "}
          page where you will find the address and other relevant details. We
          look forward to seeing you there!
        </p>
        <div className="">
          <Button link={dueLink} text={dueText} target={target} />
        </div>
      </div>

      <div className="bg-white p-5 text-center my-10">
        <h2>Become a member</h2>
        <p>
          We are delighted to welcome you to the United Esan Organization! As a
          large and vibrant community dedicated to promoting Esan culture and
          heritage in Houston and beyond, we take great pride in our shared
          values and traditions.
        </p>
        <ol className="py-5">
          To join us, please:
          <li className="py-5">
            <strong>Download and Fill the Registration Form:</strong> Download
            the form{" "}
            <Link
              href="/files/UEO-REG-FORM.pdf"
              target="_blank"
              className="px-2 py-1 bg-light-blue text-white rounded-md hover:text-sharp-red"
            >
              here
            </Link>{" "}
            and complete it.
          </li>
          <li>
            <strong>Pay the Registration Fee:</strong> A registration fee of
            twenty-five dollars ($25) is required. Click to{" "}
            <Link
              href="https://buy.stripe.com/9AQ8zx0rCaZzb60cMO"
              target="_blank"
              className="px-2 py-1 bg-sharp-red text-white rounded-md hover:text-light-blue"
            >
              pay
            </Link>
          </li>
          <li className="pt-5">
            <strong>Attend Our Meeting:</strong> After completing the form and
            payment, join our next meeting for an in-person introduction and
            recognition.
          </li>
        </ol>
        <p>
          We look forward to your participation and are excited to have you join
          our growing family. Your involvement will help us continue to
          celebrate and preserve the rich Esan culture and heritage.
        </p>
        <div className="">
          <Button
            link={constitutionLink}
            text={constitutionText}
            target={target}
          />
        </div>
      </div>
      <div>
        <Executives />
        <BoardMembers />
      </div>
    </Container>
  );
}
