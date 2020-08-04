import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/60102071?s=460&u=0ca749fcb9a2c7858c55c6f816cfb2e5c34f78a6&v=4" alt="Felipe Vieira"/>
      <div>
        <strong>Felipe Vieira</strong>
        <span>Física</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      <br/><br/>
      Ipsa minima, ducimus iusto sint eveniet atque iste eius sunt dolor soluta accusantium voluptate cumque nulla, dolore aliquam aperiam non quis quae?
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;
