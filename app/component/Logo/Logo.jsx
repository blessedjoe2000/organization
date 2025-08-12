import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiElKzBkXCQVona9mTg4uqZ51lfNJdBkhRFSMH"
          alt="UEO logo"
          width={70}
          height={60}
        />
      </Link>
    </div>
  );
}
