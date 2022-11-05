import './App.css';
import Sorteador from './components/Sorteador/Sorteador';
import Horario from './components/Horario';
import React from 'react';
import { useNavigate } from 'react-router-dom';



const url = 'https://ouch-cdn2.icons8.com/llmYu0Ej8fl5HOWBIsRfph-9YMX4F-P9q5JOR355uns/rs:fit:256:338/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjc2/L2Q1NDRiYTQxLTk3/M2MtNGMwNi04Yjlh/LWQwZmI3YThjZDg5/NC5wbmc.png'

function Inicial() {

    const navigate = useNavigate()

    return (
        <div className='container'>

            <div className='titulo'>
                <img src={url} alt="robo" />

                <h3>Sorteador de números</h3>
            </div>
            <Horario />
            <br />
            <Sorteador />



            <button className='pag2' onClick={() => navigate("/page2")} >Próxima página</button>

        </div>
    )
}

export default Inicial;
