import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';

const Sidebar = () => {
  const menu = [
    {
      name: 'dashoard',
      icon: <TiHomeOutline />,
      extras: '',
    },
    {},
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <ul className="sidebar-items">
          <li className="sidebar-item">
            <a href="#" className="sidebar-item_link">
              Overviews
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-item_link">
              Customer Management
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-item_link">
              Users
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-item_link">
              Transactions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
