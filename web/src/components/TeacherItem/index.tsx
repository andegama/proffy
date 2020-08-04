import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG3WQ--9Wh5mw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=_YVZU-xZuS3X6c6-bNza_rbu9vQULI3tzZzfsqSdGxQ" alt="Anderson Gama"/>
                <div>
                    <strong>Anderson Gama</strong>
                    <span>Programacao</span>
                </div>
            </header>

            <p>
                ajsd kjsflk ahdsfljk dsahfjksaf klsadjfl as dsahfjksaf
                <br/><br/>
                diasoiduasoiudosiaudoiasudioasd
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;