import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import BottomNav from "./Components/BottomNav";
import Footer from "./Components/Footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = {
  title: "ExpertHub",
  description: "An Appoinment booking system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <div className=" mb-10 md:mb-0">
          <Navbar />
          {children}
          <BottomNav />
          <Footer/>
        </div>
      </body>
    </html>
  );
}
