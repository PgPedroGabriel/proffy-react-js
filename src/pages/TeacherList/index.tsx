import React, {useState, useCallback, FormEvent, useEffect} from 'react'

import "./style.css";

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api';

interface Teacher{
  name:string,
  image:string,
  price:number,
  subject:string,
  description:string,
  whatsapp: string,
  shortDescription:string,
}

const TeacherList = () => {

  const [teachers, setTeachers] = useState<Array<Teacher>>([]);
  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState("");

  useEffect( () => {

    setTeachers([
      {
        name: "Pedro Gabriel",
        image:
          "https://avatars1.githubusercontent.com/u/5057307?s=460&u=cd7d26d2d856a1f6dc01e1d6c88aa773ed1a7ae5&v=4",
        price: 85.2,
        subject: "Química",
        description: "Descrição longa",
        shortDescription: "Descrição curta",
        whatsapp: '(81) 93803-5252'
      },
    ]);

  }, [setTeachers])

  const handleSubmit = useCallback( async (e:FormEvent) => {
    e.preventDefault();

    try {
      const result = await api.get<Array<Teacher>>("classes", {
        params: {
          subject,
          weekday,
          time,
        },
      });

      setTeachers(result.data);

    } catch(e) {
      console.error(e);
    }
 

  }, [subject, time, weekday]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSubmit}>
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
          <Select
            name="weekday"
            onChange={(e) => setWeekday(e.target.value)}
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
            onChange={(e) => {
              setTime(e.target.value);
            }}
            value={time}
            type="time"
            name="time"
            label="Horário"
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers &&
          teachers.map((teacher, index) => (
            <TeacherItem
              key={index}
              name={teacher.name}
              imageSrc={teacher.image}
              price={teacher.price}
              subject={teacher.subject}
              whatsapp={teacher.whatsapp}
              description={teacher.description}
              shortDescription={teacher.shortDescription}
            ></TeacherItem>
          ))}
      </main>
    </div>
  );
}

export default TeacherList
