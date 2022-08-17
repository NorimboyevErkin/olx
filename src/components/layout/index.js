import BackTopBox from "../back-top/back-top";
import BottomNavigation from "./bottom-navigation/bottom-navigation";
import Footer from "./footer/footer";
import Header from "./header/header";
import { useMediaQuery } from "react-responsive";
function Layout({ children }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <div>
      <Header />
      <BottomNavigation />
      {children}
      <BackTopBox />
      <Footer />
    </div>
  );
}

export default Layout;
