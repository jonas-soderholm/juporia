import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header/Header";

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
    <html
      lang="en"
      className={`${GeistSans.className} overflow-y-scroll`}
      suppressHydrationWarning
    >
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
        <link rel="icon" href="/tower.png" />
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
            <Header />
            {/* Main Content Area */}
            <div className="flex-1">{children}</div>

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
