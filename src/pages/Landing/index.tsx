import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import logo from "../../assets/images/logo.svg";
import landingimg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from '../../services/api';

import './styles.css';

interface TotalRequest {
  total:number
}

const Landing = () => {

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {

    const runApi = async () => {

      try {

        const response = await api.get<TotalRequest>('/totals'); 
        const {total} = response.data;

        setTotalConnections(total);

      } catch (e) {
        console.error(e);
      }
    }

    runApi();

    return () => {};

  }, [setTotalConnections]); 

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={landingimg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Conexões" />
        </span>
      </div>
    </div>
  );
}

export default Landing
