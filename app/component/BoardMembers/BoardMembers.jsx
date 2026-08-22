import Image from "next/image";

export default function BoardMembers() {
  const boardMembersData = [
    {
      name: "Mr. Bright Usifoh",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiwQrhP0ecSAsezopEyCfJx9PbBw25gX7v4Tau",
      office: "Chairman, Board of Trustee",
    },
    {
      name: "Mr. Samson Okosun",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKScgAahmOJql04RBu3PnL9CrFsIx8NzpTMXV",
      office: "Member",
    },
    {
      name: "Mr. Chris Ehizoba",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhix8hXpJQ9GuqUIhDO7KjmY4oB35fZXFHinTaM",
      office: "Member",
    },
    {
      name: "Mr Peter Orukpe",
      photo: "",
      office: "Member",
    },
    {
      name: "Mr. Andrew Odia",
      photo: "",
      office: "Member",
    },
  ];
  return (
    <div className="pt-5 pb-20">
      <h2 className="mb-2">UEO Board Members</h2>
      <div className="flex flex-wrap justify-center items-center">
        {boardMembersData.map((boardmember) => (
          <div
            key={boardmember.name}
            className="bg-white flex flex-col justify-center items-center gap-2 p-5 shadow-md m-1"
          >
            <Image
              src={boardmember.photo}
              alt={`UEO Board of Trustee ${boardmember.office}`}
              width={300}
              height={200}
              className="rounded-full"
              unoptimized
            />
            <div className="text-center text-lg">
              <h3 className="  font-aclonica text-light-blue">
                {boardmember.name}
              </h3>
              <p className="text-sharp-red">{boardmember.office}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
