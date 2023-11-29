import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-10 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col   lg:flex-row justify-between items-center gap-y-6 py-5">
          <Link href={"/"}>
            <h1 className="text-white font-medium text-3xl">
              Asad
              <span className="text-red-800 text-3xl font-medium">bek .</span>
            </h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
