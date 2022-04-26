import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import useLocateContext from 'src/hooks/useLocateContext';

interface NavItemProps {
  title: string;
  icon?: any;
  href?: string;
  subItems?: Array<NavItemProps>;
}

export const NavbarItem = ({
  title,
  href = '',
  icon,
  subItems = []
}: NavItemProps) => {
  const hasSubMenu = subItems.length > 0;
  return (
    <li className="nav-item">
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
const NavbarMenu = () => {
  const lang = useLocateContext();

  const ItemMenu: NavItemProps[] = [
    {
      title: lang.homeMenuText,
      href: '/'
    },
    {
      title: lang.buttonAbouttUs,
      href: '/about'
    },
    {
      title: lang.servicesMenuText,
      href: '/services'
    },
    {
      title: lang.comunicationsMenuText,
      href: '/blogs'
    },
    {
      title: lang.contactUsMenuText,
      href: '/contact'
    }
  ];

  const items = ItemMenu.map((i) => <NavbarItem {...i} />);

  return <ul className="navbar-nav">{items}</ul>;
};
export default NavbarMenu;