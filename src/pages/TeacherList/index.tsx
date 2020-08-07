import React from 'react'

import "./style.css";

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import Input from '../../components/Input'

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="weekday" label="Dia da semana" />
          <Input type="time" name="time" label="Horário" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          name="Pedro Gabriel"
          imageSrc="https://avatars1.githubusercontent.com/u/5057307?s=460&u=cd7d26d2d856a1f6dc01e1d6c88aa773ed1a7ae5&v=4"
          price={80.5}
          subject="Quimica"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she"
          shortDescription="Where does it come from?"
        ></TeacherItem>
        <TeacherItem
          name="Pedro Gabriel"
          imageSrc="https://avatars1.githubusercontent.com/u/5057307?s=460&u=cd7d26d2d856a1f6dc01e1d6c88aa773ed1a7ae5&v=4"
          price={80.5}
          subject="Quimica"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she"
          shortDescription="Where does it come from?"
        ></TeacherItem>
        <TeacherItem
          name="Pedro Gabriel"
          imageSrc="https://avatars1.githubusercontent.com/u/5057307?s=460&u=cd7d26d2d856a1f6dc01e1d6c88aa773ed1a7ae5&v=4"
          price={90}
          subject="Quimica"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she"
          shortDescription="Where does it come from?"
        ></TeacherItem>
      </main>
    </div>
  );
}

export default TeacherList
