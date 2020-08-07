import React,{useState, useCallback, FormEvent} from "react";
import {useHistory} from 'react-router-dom';

import './style.css';

import PageHeader from "../../components/PageHeader";
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from "../../assets/images/icons/warning.svg";
import api from "../../services/api";


const TeacherForm = () => {


  const [schedules, setSchedules] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const handleNovoHorarioClick = useCallback(() => {

    setSchedules([...schedules, { week_day: 0, from: "", to: "" }]);

  }, [schedules]);


  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatasapp, setWhatasapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [coust, setCoust] = useState('');

  const history = useHistory();

  const handleCreateClass = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        await api.post("/classes", {
          name,
          avatar,
          whatasapp,
          bio,
          subject,
          coust,
          schedules,
        });

        alert('done')
      } catch (err) {
        console.error(err);
      } finally {
        history.push('/');
      }
    },
    [name, avatar, whatasapp, bio, subject, coust, schedules, history]
  );
  
  const setScheduleItemValue = (index:number, field:string, value: string) => {
    const newArray = schedules.map((item, i) => {
      if(i === index) {
        return {...item, [field]: value};
      }

      return item;
    });

    setSchedules(newArray);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que legal que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nome completo"
            />
            <Input
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              label="Avatar"
            />
            <Input
              name="whatasapp"
              value={whatasapp}
              onChange={(e) => setWhatasapp(e.target.value)}
              label="Whatasapp"
            />
            <Textarea
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              label="Biografia"
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Ciências", label: "Ciências" },
                { value: "Matemática", label: "Matemática" },
                { value: "Química", label: "Química" },
                { value: "Português", label: "Português" },
              ]}
            />
            <Input
              name="coust"
              value={coust}
              onChange={(e) => setCoust(e.target.value)}
              label="Custo da sua hora por aula"
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={handleNovoHorarioClick}>
                + Novo horário
              </button>
            </legend>
            {schedules.map((schedule, index) => (
              <div className="schedule-item" key={"weekday_" + index}>
                <Select
                  name={"weekday_" + index}
                  onChange={(e) =>
                    setScheduleItemValue(index, "week_day", e.target.value)
                  }
                  label="Dia da semana"
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-feira" },
                    { value: "2", label: "Terça-feira" },
                    { value: "3", label: "Quarta-feira" },
                    { value: "4", label: "Quinta-feira" },
                    { value: "5", label: "Sexta-feira" },
                    { value: "6", label: "Sábado" },
                  ]}
                />
                <Input
                  name={"from_" + index}
                  value={schedule.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, "from", e.target.value)
                  }
                  label="Das"
                  type="time"
                />
                <Input
                  name={"to_" + index}
                  value={schedule.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, "to", e.target.value)
                  }
                  label="Até"
                  type="time"
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="ícone aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
