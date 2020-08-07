import React from "react";

import './style.css';

import PageHeader from "../../components/PageHeader";
import Input from '../../components/Input'

import warningIcon from "../../assets/images/icons/warning.svg";


const TeacherForm = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que legal que você quer dar aulas." 
      description="O primeiro passo é preencher esse formulário de inscrição"/>

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatasapp" label="Whatasapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="coust" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            
          </legend>
        </fieldset>


        <footer>
          <p>
            <img src={warningIcon} alt="ícone aviso importante" />
          Importante! <br />
          Preencha todos os dados
        </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>

  );
};

export default TeacherForm;
