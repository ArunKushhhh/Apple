import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline text-blue cursor-pointer">
              Other retailers
            </span>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1966{" "}
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All Rights Reserved
          </p>
          <p className="flex">
            {footerLinks.map((link, i) => (
              <li key={link} className="font-semibold text-gray text-xs cursor-pointer list-none">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </li>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
