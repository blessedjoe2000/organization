import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "United Esan Organization App",
  description:
    "A community that promotes the heritage and culture of Esan tradition in Houston",
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
