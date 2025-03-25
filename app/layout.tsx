import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";

const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title:
    "Juporia - Cybersecurity & Privacy Training for Small & Medium Businesses",
  description:
    "Beginner-friendly cybersecurity and privacy courses for teams, business owners, and individuals. Protect data, reduce risks, and respond to threats. Try free lessons today!",
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

        <title>{metadata.title}</title>

        <meta name="description" content={metadata.description} />

        <link
          rel="icon"
          href="https://juporia.com/images/logos/juporia-rounded-logo-opt.png"
          type="image/png"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Juporia - Cybersecurity & Privacy Training"
        />
        <meta property="og:description" content={metadata.description} />

        <meta
          property="og:image"
          content="https://juporia.com/images/logos/juporia-rounded-logo-opt.png"
        />
        <meta property="og:image:alt" content="Juporia Rounded Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://juporia.com" />
        <meta property="og:type" content="website" />
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
            <BreadCrumbs />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
