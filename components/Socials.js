import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4 text-lg">
      <Link href={"https://t.me/Aa_Asadbek"} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={"https://t.me/Aa_Asadbek"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://t.me/Aa_Asadbek"} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={"https://t.me/Aa_Asadbek"} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
      <Link href={"https://t.me/Aa_Asadbek"} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
