import HeaderAuth from "@/components/header/auth/header-auth";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>XhaleGuard - Basic Cybersecurity training</title>
        <meta
          name="description"
          content="XhaleGuard cybersecurity awareness training to enhance your security infrastructure."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            {/* Header/Nav Section */}
            <nav className="w-full flex justify-between border-b border-b-foreground/10 h-16">
              <div className="w-full flex justify-between items-center text-sm">
                <Link href="/">
                  <div className="flex items-center font-semibold">
                    <img src="/logo.svg" alt="" className="w-6 md:w-8 mx-3" />
                    <span className="text-[15px] md:text-xl font-bold">
                      ExhaleGuard
                    </span>
                  </div>
                </Link>
                <HeaderAuth />
              </div>
            </nav>

            {/* Main Content Area */}
            <div className="flex-1 p-5">{children}</div>

            {/* Footer Section */}
            <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8 mt-28">
              <p>XhaleGuard</p>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
