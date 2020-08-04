import React, {useMemo} from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

interface TeacherItemProps {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  subject: string;
  shortDescription: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({name, subject, description, price, shortDescription, imageSrc}) => {
  
  
  const numberFormated = useMemo( () => {

    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  },[price]);
  
  return (
    <article className="teacher-item">
      <header>
        <img src={imageSrc} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        {shortDescription}
        <br />
        <br />
        {description}
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>{numberFormated}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whataspp" />
          Enviar mensagem
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem
