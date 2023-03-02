import NavbarMenu from './NavBarMenu/NavbarMenu';

import css from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className="container">
      <div className={css.navbarRow}>
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
