import Image from "next/image";

export default function BoardMembers() {
  const boardMembersData = [
    {
      name: "Mr. Matthew Iyere",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijF1HzQ78vW4p9Paid67Tbchq5xtgQZ1lSFu2",
      office: "Chairman, Board of Trustee",
    },
    {
      name: "Dr. Henry Ohen",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJ1VEui8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
      office: "Member",
    },
    {
      name: "High Chief Christain Ighalo",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixFAjh49GuqUIhDO7KjmY4oB35fZXFHinTaMp",
      office: "Member",
    },
    {
      name: "Mr. Robinson Eronmosele",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZxOQRzzoxdhKlTEWtMzO4eUb08VR3CnagoLF",
      office: "Member",
    },
    {
      name: "Mr. Chris Ehizoba",
      photo:
        "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPwbVhzdulmBJ4MDcgf8eYWxwjTrK0hVIyFUO",
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
