import { LogoName } from "@/constants/logo-name";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 mt-14">
      <div className="flex w-full flex-col">
        <div className="divider h-[1px] bg-gray-600"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <nav className="grid grid-flow-col gap-2">
          <a href="/faq" className="link link-hover">
            FAQ
          </a>
          <p>|</p>
          <a href="/legal" className="link link-hover">
            Terms
          </a>
          <p>|</p>
          <a href="/privacy-policy" className="link link-hover">
            Privacy Policy
          </a>
        </nav>
        <div>
          <p>{LogoName.supportMail}</p>
        </div>

        <aside>
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            {LogoName.AppName}
          </p>
        </aside>
      </div>
    </footer>
  );
}
