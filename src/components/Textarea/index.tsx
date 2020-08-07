import React, { TextareaHTMLAttributes } from 'react'

import './style.css';

interface TextareaPros extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaPros> = ({label, name, value, ...rest}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}></textarea>
    </div>
  )
}

export default Textarea
