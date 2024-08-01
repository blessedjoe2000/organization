import president from "@/public/images/executives/ueo_president.jpg";
import Image from "next/image";

export default function BoardMembers() {
  return (
    <div className="p-5 ">
      <h2 className="">UEO Board Members</h2>
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
            <h3 className="  font-aclonica">Mr. Matthew Iyere</h3>
            <p className="text-gray-400">Chairman, Board of Trustee</p>
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
            <h3 className="  font-aclonica">Mr. Kenneth Imoni Oseghale</h3>
            <p className="text-gray-400">Member</p>
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
            <h3 className="  font-aclonica">Dr. Henry Ohen</h3>
            <p className="text-gray-400">Member</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1">
          <Image
            src={president}
            alt="ueo treasurer"
            width={300}
            height={200}
            className="rounded-full"
          />
          <div className="text-center text-lg">
            <h3 className="  font-aclonica">Chief. Christain Ighalo</h3>
            <p className="text-gray-400">Member</p>
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
            <h3 className="  font-aclonica">Mr. Robinson Eronmosele</h3>
            <p className="text-gray-400">Member</p>
          </div>
        </div>
      </div>
    </div>
  );
}
