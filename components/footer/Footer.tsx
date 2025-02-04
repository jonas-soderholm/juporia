import { LogoName } from "@/constants/logo-name";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 mt-28">
      <div className="flex w-full flex-col">
        <div className="divider h-[2px] bg-gray-600"></div>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">FAQ</a>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          {LogoName.AppName}
        </p>
      </aside>
    </footer>
  );
}
