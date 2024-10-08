import Image from "next/image";
import Logo from "@/public/wecazoo-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import CryptoCarousel from "./CryptoCarousel";

const Footer = () => {
  return (
    <footer className="bg-[#130D25] mt-12">
      <section className="container bg-[#D9D9D9CC] rounded-[10px] py-4 px-2 overflow-hidden w-[95%] lg:w-full">
        <CryptoCarousel />
      </section>

      <div className="container flex flex-col xl:flex-row justify-between items-normal xl:items-center px-8 md:px-10 lg:px-16 xl:px-24 py-10 gap-y-6">
        {/* Logo */}
        <div className="flex-shrink-0 self-start xl:self-center">
          <a href="#">
            <Image
              priority
              src={Logo}
              alt="Wecazoo Logo"
              className="h-20 md:h-24 xl:h-44 w-auto"
            />
          </a>
        </div>
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
          <div className="flex items-start justify-between py-2 gap-2 sm:gap-6 md:gap-8 lg:gap-20">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-lg">About</h3>
              <ul className="text-muted flex flex-col gap-6 justify-start">
                <li className="hover:text-primary transition-colors">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">Responsible Gaming</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">Affiliates</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-lg">Help</h3>
              <ul className="text-muted flex flex-col gap-6 justify-start">
                <li className="hover:text-primary transition-colors">
                  <a href="#">FAQs</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-lg">Regulations</h3>
              <ul className="text-muted flex flex-col gap-6 justify-end">
                <li className="hover:text-primary transition-colors">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">General Terms and Conditions</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#">AML & KYC Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-accent md:border-none pt-8 md:pt-2 md:pb-2">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-lg hidden md:block">Social</h3>
              <ul className="text-muted flex flex-row md:flex-col gap-8 md:gap-6 justify-evenly md:justify-start">
                <li className="group">
                  <a
                    href="#"
                    className="flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <div className="w-[48px] h-[48px] md:w-[24px] md:h-[24px] rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaFacebookF className="text-2xl md:text-sm text-background group-hover:text-white transition-colors" />
                    </div>
                    <p className="hidden md:block">Facebook</p>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <div className="w-[48px] h-[48px] md:w-[24px] md:h-[24px] rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaXTwitter className="text-2xl md:text-sm text-background group-hover:text-white transition-colors" />
                    </div>
                    <p className="hidden md:block">Twitter</p>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <div className="w-[48px] h-[48px] md:w-[24px] md:h-[24px] rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaInstagram className="text-2xl md:text-sm text-background group-hover:text-white transition-colors" />
                    </div>
                    <p className="hidden md:block">Instagram</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center py-6 bg-[#2A253A]">
        <p className="text-muted text-sm">
          Copyright &copy; {new Date().getFullYear()}, Wecazoo.com. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
