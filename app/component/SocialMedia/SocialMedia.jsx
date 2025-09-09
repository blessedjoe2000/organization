import { SocialIcon } from "react-social-icons";
import "react-social-icons/vimeo";
import "react-social-icons/meetup";

export default function SocialMedia() {
  return (
    <div className="my-2 flex gap-2">
      <SocialIcon
        network="youtube"
        url="https://www.youtube.com/@UnitedEsanOrganization"
      />
      <SocialIcon
        network="facebook"
        url="https://www.facebook.com/share/1BEM85nEr1/?mibextid=wwXIfr"
      />
      <SocialIcon
        network="instagram"
        url="https://www.instagram.com/unitedesanhouston"
      />
      <SocialIcon network="x" url="https://x.com/Ueohoustontx" />
    </div>
  );
}
