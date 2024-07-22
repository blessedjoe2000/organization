import { SocialIcon } from "react-social-icons";
import "react-social-icons/vimeo";
import "react-social-icons/meetup";

export default function SocialMedia() {
  return (
    <div className="my-2 flex gap-2 ">
      <SocialIcon network="youtube" url="#" />
      <SocialIcon network="facebook" url="#" />
      <SocialIcon network="instagram" url="#" />
      <SocialIcon network="x" url="#" />
    </div>
  );
}
