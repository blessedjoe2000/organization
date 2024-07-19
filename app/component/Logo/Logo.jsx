import Image from "next/image";
import logo from "@/public/images/logo/UEOLogo.jpg";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="UEO logo" width={70} height={50} />
      </Link>
    </div>
  );
}
