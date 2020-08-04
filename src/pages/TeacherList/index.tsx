import React from 'react'

import "./style.css";

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Dia da semana</label>
            <input type="text" id="weekday" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
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
