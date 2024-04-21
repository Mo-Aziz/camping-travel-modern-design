import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* logo */}
      <Link href="/" className="flex flex-row gap-2">
        <Image src="/camp.svg" alt="logo" width={74} height={29} />
        <span className="bold-40 text-green-500 mt-6">Camp&Travel</span>
      </Link>
      {/* header links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          variant={"btn_dark_green"}
          icon="/user.svg"
        />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden "
      />
    </nav>
  );
};

export default Navbar;
