import president from "@/public/images/executives/ueo_president.jpg";
import Image from "next/image";

export default function Executives() {
  return (
    <div className="p-5 ">
      <h2>UEO Current Executives</h2>
      <div className="grid sm:grid-cols-3">
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo president"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Patrick Ujadughele</h3>
            <p className="text-gray-400">President</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo vice president"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Jude Daudu</h3>
            <p className="text-gray-400">Vice President</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo genera secretary"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Collins Okosun</h3>
            <p className="text-gray-400">General Secretary</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo treasurer"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Andrew Odia</h3>
            <p className="text-gray-400">Treasurer</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo financial secretary"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Victor Ikhuehi</h3>
            <p className="text-gray-400">Financial Secretary</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo pro"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Scott Okosun</h3>
            <p className="text-gray-400">P.R.O</p>
          </div>
        </div>
      </div>
    </div>
  );
}
