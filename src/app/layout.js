import { Playfair_Display } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import "./globals.css";

const dancingScript = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Homepage",
  description: "Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dancingScript.className}>
        <div className={`wrapper flex-grow `}>
          <Header />
          <div className="content flex-grow"> {children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
