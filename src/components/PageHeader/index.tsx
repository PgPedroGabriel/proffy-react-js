import React from 'react'

import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.svg';
import backicon from "../../assets/images/icons/back.svg";

import './style.css';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description, children}) => {
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
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
}

export default PageHeader
