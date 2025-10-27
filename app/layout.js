import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Toaster } from "react-hot-toast";
import FlashAlert from "./component/FlashAlert/FlashAlert";
import { ThemeProvider } from "@mui/system";

export const metadata = {
  title: "United Esan Organization App",
  description:
    "A community that promotes the heritage and culture of Esan tradition in Houston",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-offwhite">
      <body className="flex flex-col min-h-screen">
        <Toaster position="top-right" />
        <ThemeProvider />
        <Header />
        <main className="flex-grow">
          <FlashAlert />
        </main>
        {children}
        <Footer />
      </body>
    </html>
  );
}
