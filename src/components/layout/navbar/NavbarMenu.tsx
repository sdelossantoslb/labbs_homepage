import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import useLocateContext from 'src/hooks/useLocateContext';

interface NavItemProps {
  title: string;
  icon?: any;
  href?: string;
  subItems?: Array<NavItemProps>;
  onClick?: () => void;
}

export const NavbarItem = ({
  title,
  href = '',
  icon,
  subItems = [],
  onClick = () => {}
}: NavItemProps) => {
  const hasSubMenu = subItems.length > 0;
  return (
    <li className="nav-item" onClick={() => onClick()}>
      <Link to={href} className="nav-link">
        {title} {hasSubMenu && icon}
      </Link>
      {hasSubMenu ? (
        <ul className="dropdown-menu">
          {subItems.map((item) => (
            <NavbarItem {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

const NavbarMenu = ({ itemClick = () => {} }: { itemClick?: () => void }) => {
  const lang = useLocateContext();

  const ItemMenu: NavItemProps[] = [
    {
      title: lang.homeMenuText,
      href: '/'
    },
    {
      title: lang.aboutUsMenuText,
      href: '/about'
    },
    {
      title: lang.servicesMenuText,
      href: '/services',
      icon: <AiFillCaretDown />
    },
    {
      title: lang.comunicationsMenuText,
      href: '/comunity'
    },
    {
      title: lang.contactUsMenuText,
      href: '/contact'
    }
  ];

  const items = ItemMenu.map((i, indx) => (
    <NavbarItem key={indx} {...i} onClick={itemClick} />
  ));

  return <ul className="navbar-nav">{items}</ul>;
};
export default NavbarMenu;
