import { useRef } from "react";
import "./header.styles.scss";
import Container from "../../container/container";
import Logo from "../../logo/logo";
import MyButton from "../../button/button";
import MyDropdown from "../../dropdown/dropdown";
import { HiOutlineHeart, HiOutlineUser, HiChevronDown } from "react-icons/hi";
import Typography from "../../typography/typography";
import AvatarSvg from "../../../assets/svg/avatar-svg";
import TranslationNav from "../../translation/translation";
import { logOut, useAuth } from "../../../firebase/config";

const handleLogOut = async () => {
  try {
    await logOut();
  } catch (error) {
    alert("Error !");
  }
};

function Header() {
  const currentUser = useAuth();
  const menu = [
    {
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <AvatarSvg weight="36" height="36"/>
          <Typography
            size="13px"
            type="title"
            weight={700}
            style={{ width: "100%" }}
          >
            {currentUser?.email ? currentUser?.email : "Kimdir"}
          </Typography>
        </div>
      ),
      title: true,
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Elonlar
        </a>
      ),
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Xabarlar
        </a>
      ),
    },
    {
      label: "Favorites",
    },
    {
      type: "divider",
    },
    {
      label: <span onClick={() => handleLogOut()}>Chiqish</span>,
    },
  ];

  const headerRef = useRef();
  let lastScrollTop = 0;

  const onScrollHide = (e) => {
    let st = window.pageYOffset;
    if (headerRef.current) {
      if (st < lastScrollTop) {
        headerRef.current.style.transform = "translateY(0)";
      } else {
        headerRef.current.style.transform = "translateY(-100%)";
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }
  };

  window.addEventListener("scroll", onScrollHide, false);

  return (
    <header className="header-box" ref={headerRef}>
      <Container>
        <nav className="navbar">
          <Logo width="71" height="41" />
          <div className="navbar-right">
            <TranslationNav />
            <MyButton to="/favorites">
              <HiOutlineHeart style={{ fontSize: "24px" }} />
            </MyButton>
            <MyDropdown menu={menu}>
              <MyButton to="/account">
                <HiOutlineUser
                  style={{ fontSize: "24px", marginRight: "10px" }}
                />
                Hisobingiz
                <HiChevronDown
                  style={{ fontSize: "24px", marginLeft: "10px" }}
                />
              </MyButton>
            </MyDropdown>
            <MyButton type="primary" to="/post-new-add">
              E'lon Berish
            </MyButton>
          </div>
        </nav>
      </Container>
    </header>
  );
}
export default Header;
