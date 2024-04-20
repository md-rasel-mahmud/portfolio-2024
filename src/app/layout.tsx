import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import Hero from "@/components/header/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Rasel Mahmud",
  description:
    "Hello! Myself MD. Rasel Mahmud, Iam a Web developer, MERN stack developer. Explore my innovative projects and skills. Visit https://mdraselmahmud.vercel.app to witness the fusion of technology and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <main
          style={{
            background:
              "url('https://media.licdn.com/dms/image/D5616AQGmOgLpWeJ7fg/profile-displaybackgroundimage-shrink_350_1400/0/1685732508963?e=1718236800&v=beta&t=h_d5NbicVNjR6783MRyC9BLzzPouXqXHQM91zLx0aiw')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <BackgroundWrapper leftContents={<Hero />}>
            <Navbar />
            <div className="bg-base-100 rounded-lg my-2 p-3">{children}</div>
          </BackgroundWrapper>
        </main>
      </body>
    </html>
  );
}
