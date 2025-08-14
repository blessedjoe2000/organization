import Image from "next/image";
import MarkunreadIcon from "@mui/icons-material/Markunread";

export default function Executives() {
  const executivesData = [
    {
      name: "Mr. Jude Daudu",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPwykVjYulmBJ4MDcgf8eYWxwjTrK0hVIyFUO",
      office: "President",
      email: "president@ueohouston.org",
    },
    {
      name: "Mr. Chris Ehimen",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiTKyZVGfwajdVnh5Q9lRvTxDI10EZocMLq7O2",
      office: "Vice President",
      email: "vp@ueohouston.org",
    },
    {
      name: "Mr. Collins Okosun",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijDxf5378vW4p9Paid67Tbchq5xtgQZ1lSFu2",
      office: "General Secretary",
      email: "secretary@ueohouston.org",
    },
    {
      name: "Mr. Victor Ikhuehi",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZ2l5aqoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
      office: "Treasurer",
      email: "treasurer@ueohouston.org",
    },
    {
      name: "Mr. Scott Okosun",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWKQ9NWsuvCF6Nj2b8XySonfKmeBEzwV9p1LQ",
      office: "Financial Secretary",
      email: "financialsec@ueohouston.org",
    },
    {
      name: "Mr. Joseph Ugiagbe",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPLica8ulmBJ4MDcgf8eYWxwjTrK0hVIyFUOE",
      office: "P. R. O.",
      email: "pro@ueohouston.org",
    },
  ];
  return (
    <div className="my-10 ">
      <h2 className="mb-2">UEO Current Executives</h2>
      <div className="flex flex-wrap justify-center items-center">
        {executivesData.map((executive) => (
          <div
            key={executive.office}
            className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1"
          >
            <Image
              src={executive.photo}
              alt={`UEO ${executive.office}`}
              width={300}
              height={200}
              className="rounded-full"
            />
            <div className="text-center text-lg">
              <h3 className="  font-aclonica text-light-blue">
                {executive.name}
              </h3>
              <p className="text-sharp-red">{executive.office}</p>
              <div className="flex justify-center items-center gap-1">
                <MarkunreadIcon fontSize="small" />
                <p className="">{executive.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
