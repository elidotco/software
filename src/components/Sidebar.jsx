import React, { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FcMenu } from 'react-icons/fc';
import { FiUser } from 'react-icons/fi';
import { GrAnalytics, GrUserManager } from 'react-icons/gr';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoCubeOutline } from 'react-icons/io5';
import './components.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebar ">
      <div className="sidebar_header">
        <FiUser />
        <h3>Admin</h3>
        <span
          className="menu-icon"
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        >
          {' '}
          <FcMenu />
        </span>
      </div>
      <div className="sidebar-item_container ">
        <div className="form">
          <form action="">
            <label htmlFor="text">
              <BiSearch className="grIcon" />
            </label>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <ul className="sidebar-items ">
          <li className="sidebar-items_item">
            <a href="/dashboard">
              <span className="icon">
                <IoCubeOutline />
              </span>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li className="sidebar-items_item">
            <a href="/clients">
              <span className="icon">
                <HiOutlineUsers />
              </span>
              <span className="text">Clients</span>
            </a>
          </li>
          <li className="sidebar-items_item">
            <a href="/employees">
              <span className="icon">
                <GrUserManager className="grIcon" />
              </span>
              <span className="text">employees</span>
            </a>

            <ul className="inner-menu">
              <li className="sidebar-items_item">
                <a href="/employees">
                  <span className="text">Managers</span>
                </a>
              </li>
              <li className="sidebar-items_item">
                <a href="/employees">
                  <span className="text">Workers</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-items_item">
            <a href="/analytics">
              <span className="icon">
                <GrAnalytics className="grIcon" />
              </span>
              <span className="text">analytics</span>
            </a>
          </li>
        </ul>

        <div className="sidebar-footer">
          <ul>
            <li>
              <a href="/">
                <span className="icon">
                  <AiOutlineSetting />
                </span>
                <span className="text">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
