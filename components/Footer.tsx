import { FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* logo */}
          <Link href="/" className="-ml-2 mb-10 flex flex-row gap-2">
            <Image src="/camp.svg" alt="logo" width={74} height={29} />
            <span className="bold-40 text-green-500 mt-6">Camp&Travel</span>
          </Link>
          {/* footer columns */}
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn title={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            {/* bottom footer */}
            <div className="flex flex-col gap-6"></div>

            {/* social icons*/}
            <div></div>
          </div>
        </div>
        {/* copy rights */}
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Camp&Travel |All right reserved
        </p>
      </div>
    </footer>
  );
};

// footer columns props
interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
