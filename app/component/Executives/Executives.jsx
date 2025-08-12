import president from "@/public/images/executives/ueo_president.jpg";
import Image from "next/image";

export default function Executives() {
  return (
    <div className=" ">
      <h2>UEO Current Executives</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo president"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Jude Daudu</h3>
            <p className="text-gray-400">President</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiTKyZVGfwajdVnh5Q9lRvTxDI10EZocMLq7O2"
            alt="ueo vice president"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Chris Ehimen</h3>
            <p className="text-gray-400">Vice President</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijDxf5378vW4p9Paid67Tbchq5xtgQZ1lSFu2"
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
            src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi63m2AzQbuhio0m1HjzdJlpfwCEQYDPa9OyGK"
            alt="ueo treasurer"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Victor Ikhuehi</h3>
            <p className="text-gray-400">Treasurer</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWKQ9NWsuvCF6Nj2b8XySonfKmeBEzwV9p1LQ"
            alt="ueo financial secretary"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Scott Okosun</h3>
            <p className="text-gray-400">Financial Secretary</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPLica8ulmBJ4MDcgf8eYWxwjTrK0hVIyFUOE"
            alt="ueo pro"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Mr. Joseph Ugiagbe</h3>
            <p className="text-gray-400">P.R.O</p>
          </div>
        </div>
      </div>
    </div>
  );
}
