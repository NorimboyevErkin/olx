import { useRef } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import Container from "../../container/container";
import Logo from "../../logo/logo";
import MyButton from "../../button/button";
import MyDropdown from "../../dropdown/dropdown";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";

const menu = [
  {
    label: "3rd menu item",
    title: true,
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
  },

  {
    label: "3rd menu item",
  },
];
function Header() {
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
            <MyButton to="/favorites">
              <HiOutlineHeart style={{ fontSize: "22px" }} />
            </MyButton>
            <MyDropdown menu={menu}>
              <MyButton>
                <HiOutlineUser
                  style={{ fontSize: "22px", marginRight: "10px" }}
                />
                Hisobingiz
              </MyButton>
            </MyDropdown>
            <MyButton type="primary">E'lon Berish</MyButton>
          </div>
        </nav>
      </Container>
    </header>
  );
}
export default Header;
