import React from 'react'

import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.svg';
import backicon from "../../assets/images/icons/back.svg";

import './style.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, children}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backicon} alt="Voltar pra home" />
        </Link>
        <img src={logo} alt="proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
}

export default PageHeader
