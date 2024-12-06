import Image from "next/image";
import VideoHeader from "../component/VideoHeader/VideoHeader";
import esanmap from "@/public/images/projects/esanlgamap.jpg";
import LGATable from "../component/LGATable/LGATable";
import Link from "next/link";

export default function esanheritage() {
  return (
    <div>
      <VideoHeader />
      <div>
        <h2 className="mt-5"> Esan People and Culture</h2>
        <div className=" bg-white p-5">
          <p>
            The Esan people and culture of Esanland are generally homogenous.
            Esanland (Esan: Otọesan), otherwise known as Esan Nation, is a
            cultural region located in Edo State, Nigeria. It is composed of
            five Local Government Areas in Edo State. Esanland lies west of the
            banks of the Niger River. It is bordered by Kogi State, Delta State,
            Edo South Senatorial District, and Edo North Senatorial District.
            Esanland covers about 2,800 square kilometers and is home to over
            half a million people.
          </p>
          <p className="py-5">
            The Esan people are also known for their acrobatic dance known as
            igbabonelimi (English: clap to the spirits), which is a significant
            aspect of their cultural heritage.
          </p>

          <p>
            There are 35 established kingdoms in Esanland, including: Amahor,
            Ebelle, Egoro, Ewohimi, Ekekhenlen, Ekpoma, Ekpon, Emu, Ewu, Ewato,
            Ewosa, Idoa, Ifeku, Igueben, Ilushi, Inyelen, Irrua, Ogwa, Ohordua,
            Okalo, Okhuesan, Onogholo, Opoji, Oria, Orowa, Uromi, Udo, Ugbegun,
            Ugboha, Ubiaja, Urohi, Ugun, Ujiogba, Ukhun, Uzea.
          </p>
          <p className="mb-5">
            They are known to cultivate palm trees, Irvingia gabonensis
            (erhonhiele), Cherry (Otien), bell pepper (akoh) coconut, betel nut,
            kola nut, black pear, avocado pear, yams, cocoyam, cassava, maize,
            rice, beans, groundnut, bananas, oranges, plantains, sugar cane,
            tomato, potato, okra, pineapple, paw paw, and various vegetables.
          </p>
          <p className="mb-5">
            The people of Esan primarily speak the Esan language. The term{" "}
            <q>Esan</q> has been applied to the Esan people for hundreds of
            years, and was used before contact with Europeans. It is believed by
            many historians that the name <q>Esan</q> (originally,{" "}
            <q>E san fia</q> ) owes its origin to Benin (meaning,{" "}
            <q>they have fled</q> or <q> they jumped away </q> ). <q> Ishan</q>{" "}
            is an Anglicized form of <q>Esan</q>, the result of colonial
            Britain&apos;s inability to properly pronounce the name of this
            ethnic group. It is believed that similar corruption has affected
            such Esan names as ubhẹkhẹ (now <q>obeche</q> tree), uloko (now{" "}
            <q>iroko</q> tree), Abhulimẹn (now <q>Aburime</q> ), etc. Efforts
            have however been made to return to status quo ante.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row  justify-center items-center gap-5 bg-white mb-5 px-5 pb-5
      "
      >
        <div className="lg:w-1/2">
          <h2 className="lg:mb-36">Map of Esan Land</h2>
          <Image
            src={esanmap}
            alt="map of esan"
            height={400}
            className="image-full-width"
          />
        </div>
        <div className="lg:w-1/2">
          <h2>LGA and their Towns</h2>
          <LGATable />
        </div>
      </div>
      <div className="m-5">
        <Link
          href="https://en.wikipedia.org/wiki/Esan_people"
          target="_blank"
          className=""
        >
          <button className="text-center bg-sharp-red rounded-full w-full py-2 text-white hover:text-light-blue uppercase">
            Learn more about esan people and culture
          </button>
        </Link>
      </div>
    </div>
  );
}
