import { NavLink } from 'react-router-dom';

import items from './navbarMenuItems.json';

import css from './navbar-menu.module.scss';

// const getClassName = ({isActive}) => {
//     return isActive ? `${css.link} ${css.active}` : styles.link;
// }

const NavbarMenu = () => {
  const elements = items.map(({ id, text, link }) => {
    return (
      <li key={id}>
        <NavLink to={link} className={css.link}>
          {text}
        </NavLink>
      </li>
    );
  });

  return <ul className={css.menu}>{elements}</ul>;
};

export default NavbarMenu;
