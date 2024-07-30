export default function LGATable() {
  const data = [
    {
      lga: "Esan Central",
      headquarter: "Irrua",
      villages: [
        "Irrua",
        "Ewu",
        "Opoji",
        "Usugbenu",
        "Eidenu",
        "Adenu",
        "Ugbalo",
        "Ibore",
        "(Uneah comprises Ibore, Atuagbo and Ugbalo)",
        "Unogbo",
        "Idumoza",
        "Ugbegun",
        "Imokano",
        "Afuogbo",
        "Okharomi",
        "Equare",
        "Atuagbo Ujabhole",
        "Ibhiolulu",
        "Udomi",
        "Afuda",
        "Idumoza",
        "Ohe",
        "Idumoghodor",
        "Ehenwen",
        "Idoa",
        "Uzokholo",
        "Ehanlen",
        "Eko",
        "Ekori",
        "Eko",
        "Iduwele",
        "Ugbokhare",
        "Ekilor",
      ],
    },
    {
      lga: "Esan North East",
      headquarter: "Uromi",
      villages: [
        "Uromi",
        "Egbele",
        "Unuwazi",
        "Utako",
        "Onewa",
        "Awo",
        "Uzea",
        "Eror",
        "Idumoza",
        "Ebhoijie",
        "Arue",
        "Ubierumu-Oke",
        "Ebue",
        "Ewoyi",
        "Odigwele",
        "Eguare",
        "Oyomon",
        "Eko-Ibadin",
        "Efandion",
        "Atani",
        "Ualor-Oke",
        "Amedokhian",
        "Ukoni",
        "Ewoki",
        "Ebun",
      ],
    },
    {
      lga: "Esan South East",
      headquarter: "Ubiaja",
      villages: [
        "Ubiaja",
        "Oria",
        "Onog-Holo",
        "Okhu-Esan",
        "Udo",
        "Feku",
        "Illushi",
        "Emu",
        "Eguare-Ewatto",
        "Ewohimi",
        "Ugboha",
        "Okhodua",
        "Orowa",
        "Uroh",
        "Inyenlen",
      ],
    },
    {
      lga: "Esan West",
      headquarter: "Ekpoma",
      villages: [
        "Ekpoma",
        "Iruekpen",
        "Ujemen",
        "Idumebo",
        "Ihumudumu",
        "Uhiele",
        "Emuhi",
        "Ogwa",
        "Ekhiro",
        "Ukpenu",
        "Ujoelen Eguare",
        "Emaudo",
        "Egoro Amede",
        "Egoro Naoka",
        "Ebhakuala",
        "Ukhun",
        "Idoa",
        "Urohi",
        "Akahio",
        "Illeh",
        "Ekoh-Ine",
        "Ujiogba",
      ],
    },
    {
      lga: "Igueben",
      headquarter: "Igueben",
      villages: [
        "Igueben",
        "Ebele",
        "Amaho",
        "Ebhosa",
        "Udo",
        "Ekpon",
        "Ujorgba",
        "Ugun",
        "Okalo",
      ],
    },
  ];

  data.forEach((item) => {
    item.villages.sort();
  });
  return (
    <div className="container ">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">LGA</th>
            <th className="py-2 px-4 border-b">Headquarter</th>
            <th className="py-2 px-4 border-b">Villages/Towns</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.lga}</td>
              <td className="py-2 px-4 border-b">{item.headquarter}</td>
              <td className="py-2 px-4 border-b">{item.villages.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
