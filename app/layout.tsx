import HeaderAuth from "@/components/header/auth/header-auth";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "XhaleGuard basic cybersecurity hygiene",
  description: "XhaleGuard badge cybersecurity awareness training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-between border-b border-b-foreground/10 h-16">
                <div className="w-full flex justify-between items-center text-sm">
                  <div className="flex items-center font-semibold">
                    <img src="./header-logo.png" alt="" className="w-12 mx-3" />{" "}
                    <a className=" text-xl">XhaleGuard</a>
                  </div>
                  <HeaderAuth />
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8 mt-auto">
                <p>XhaleGuard</p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
