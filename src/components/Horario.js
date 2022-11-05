import React, { useEffect, useState, } from "react";

const Horario = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        start()
    }, [start])
    function start() {
        setTimeout(() => {
            var date = new Date();
            setHora(date.toLocaleTimeString())

        }, 1000)
    }
    return (
        <div >
            <h2>{hora}</h2>
        </div>
    )
}

export default Horario