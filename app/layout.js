import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-offwhite">
      <body className="">
        <Toaster position="top-right" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
