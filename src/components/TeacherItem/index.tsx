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
  whatsapp: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  name,
  whatsapp, 
  subject,
  description,
  price,
  shortDescription,
  imageSrc,
}) => {
  const numberFormated = useMemo(() => {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }, [price]);



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
        <a type="button" href={`https://wa.me/${whatsapp}`}>
          <img src={whatsappIcon} alt="ícone do whatsapp" />
          Enviar mensagem
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem
