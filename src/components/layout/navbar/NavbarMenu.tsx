import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

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
  const ItemMenu: NavItemProps[] = [
    {
      title: 'Home',
      href: '/',
      icon: <FaChevronDown />
    },
    {
      title: 'About Us',
      href: '/about'
    },
    {
      title: 'About Us',
      href: '/about'
    },
    {
      title: 'Services',
      href: '/services'
    },
    {
      title: 'Projects',
      href: '/'
    },
    {
      title: 'Blog',
      href: '/Blog'
    },
    {
      title: 'Blog',
      href: '/Contact'
    }
  ];

  const items = ItemMenu.map((i) => <NavbarItem {...i} />);

  return <ul className="navbar-nav">{items}</ul>;
};
export default NavbarMenu;
