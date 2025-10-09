
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="antialiased">
      
        <Navbar/>
        {children}
        <Footer/>
     
      </body>
    </html>
  );
}
