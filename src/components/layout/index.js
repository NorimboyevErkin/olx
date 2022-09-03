import BackTopBox from "../back-top/back-top";
import BottomNavigation from "./bottom-navigation/bottom-navigation";
import Footer from "./footer/footer";
import Header from "./header/header";
function Layout({ children }) {
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
