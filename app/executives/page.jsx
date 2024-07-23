import Link from "next/link";
import BoardMembers from "../component/BoardMembers/BoardMembers";
import Executives from "../component/Executives/Executives";

export default function executives() {
  return (
    <div>
      <Executives />
      <BoardMembers />
    </div>
  );
}
