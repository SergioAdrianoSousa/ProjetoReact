import React, { useState } from "react";
import NumeroSorteado from "../NumeroSorteado/NumeroSorteado";
import './Sorteador.module.css'

const Sorteador = () => {

    const [numerosSorteados, setNumerosSorteados] = useState([]);
    var array = [];

    function sortear() {

        if (array.length > 0) {
            array = [];
        }

        let min = document.getElementById("min").value;
        let max = document.getElementById("max").value;
        let qntd = document.getElementById("qntdNumeros").value;

        min = Math.ceil(min);
        max = Math.floor(max);

        for (let index = 0; index < qntd; index++) {

            // setNumerosSorteados([index])
            array.push(Math.floor(Math.random() * (max - min) + min))
        }

        setNumerosSorteados(array)
    }




    return (
        <div className="container">
            <div style={{ marginBottom: '5px' }}>Sortear <input type="number" id="qntdNumeros" /> números</div>
            <div>entre <input type="number" id="min" /> e <input type="number" id="max" /></div>
            <button className="btn" onClick={sortear} >SORTEAR</button>

            {numerosSorteados.length > 0 ?
                <div style={{ margin: '20px 0', fontWeight: '500' }}>Numeros Sorteados</div>
                : null}
            <div className="numsort">
                <div className="nums">
                    {numerosSorteados.map((key, index) => {
                        return <NumeroSorteado numero={key} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sorteador