import React from 'react';

import { gameSVGS } from '../public/svgs/GameSVGProvider';
import NavItem from './NavItem';

interface NavbarProps {
  handleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleClick }) => {
  return (
    <div className="absolute flex flex-row top-0 inset-x-0 m-auto justify-center z-10">
      {gameSVGS.map((gameSVG, index) => (
        <NavItem index={index} item={gameSVG} handleItemClick={handleClick} />
      ))}
    </div>
  );
};

export default Navbar;
