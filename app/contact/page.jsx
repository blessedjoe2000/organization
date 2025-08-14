import ContactForm from "../component/ContactForm/ContactForm";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";

export default function Contact() {
  return (
    <div>
      <h2 className="mt-5">Contact Us</h2>
      <ContactForm />
      <div className="sm:flex justify-around items-center gap-5 py-5 bg-white m-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3>Meeting Address</h3>
          <div className="flex gap-2 items-center">
            <PhoneIphoneOutlinedIcon />
            <p className="text-lg">281-568-7577</p>
          </div>

          <div className="flex gap-2 items-center">
            <RoomOutlinedIcon />
            <div className="flex flex-col">
              <p className="text-lg">11923 Bissonnet Street,</p>
              <p className="text-lg ">Houston, TX 77099</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 sm:mt-0 mt-5">
          <h3>Mailing Address</h3>
          <div className="flex gap-2 items-center">
            <MoveToInboxOutlinedIcon />
            <div className="flex flex-col">
              <p className="text-lg">P. O. Box 1464, Alief,</p>
              <p className="text-lg "> TX 77411-1464</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <MarkunreadIcon />
            <p className="text-lg">info@ueohouston.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
