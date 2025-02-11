import { LogoName } from "@/constants/logo-name";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 mt-28">
      <div className="flex w-full flex-col">
        <div className="divider h-[2px] bg-gray-600"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <nav className="grid grid-flow-col gap-2">
          <a href="/faq" className="link link-hover">
            FAQ
          </a>
          <p>|</p>
          <a href="/legal" className="link link-hover">
            Terms & Privacy Policy
          </a>
        </nav>
        <div>
          <p>support@plexibit.com</p>
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
