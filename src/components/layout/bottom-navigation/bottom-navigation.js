import React, { useRef } from "react";
import styles from "./bottom-navigation.styles.module.scss";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlinePlusCircle,
  HiPlusCircle,
  HiOutlineCollection,
  HiCollection,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi";

import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function BottomNavigation() {
  const { pathname } = useLocation();
  const style = {
    fontSize: "22px",
    fontWeight: "900",
  };

  const navRef = useRef();
  let lastScrollTop = 0;

  const onScrollHide1 = (e) => {
    let st = window.pageYOffset;
    if (navRef.current) {
      if (st < lastScrollTop) {
        navRef.current.style.transform = "translateY(0)";
      } else {
        navRef.current.style.transform = "translateY(100%)";
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }
  };

  window.addEventListener("scroll", onScrollHide1, false);

  return (
    <nav className={styles.bottomNavigation} ref={navRef}>
      <ul className={styles.navigation}>
        <li>
          <Link to="/">
            {pathname === "/" ? (
              <RiHome2Fill style={style} />
            ) : (
              <RiHome2Line style={style} />
            )}
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            {pathname.startsWith("/favorites") ? (
              <HiHeart style={style} />
            ) : (
              <HiOutlineHeart style={style} />
            )}
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/post-new-add">
            {pathname.startsWith("/post-new-add") ? (
              <HiPlusCircle style={style} />
            ) : (
              <HiOutlinePlusCircle style={style} />
            )}
            Add
          </Link>
        </li>
        <li>
          <Link to="/categorys">
            {pathname.startsWith("/categorys") ? (
              <HiCollection style={style} />
            ) : (
              <HiOutlineCollection style={style} />
            )}
            Categorys
          </Link>
        </li>
        <li>
          <Link to="/profil">
            {pathname.startsWith("/profil") ? (
              <HiUser style={style} />
            ) : (
              <HiOutlineUser style={style} />
            )}
            Profil
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavigation;
