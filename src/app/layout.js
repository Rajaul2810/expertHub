import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import BottomNav from "./Components/BottomNav";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"]
});

export const metadata = {
  title: "ExpertHub",
  description: "An Appoinment booking system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
