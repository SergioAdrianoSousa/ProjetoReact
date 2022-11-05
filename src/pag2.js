import './components/ListaAleatorio/ListaAleatorio.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aleatorio from './components/ListaAleatorio/Aleatorio';

function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {

        const interval = setInterval(() => {

            axios.get(`https://jsonplaceholder.typicode.com/users/${Aleatorio(1, 10, 1)}`)
                .then(res => {
                    setUser(res.data);
                });

        }, 1000);

        return () => clearInterval(interval);

    });

    return (
        <div className='lista-aleatoria'>
            <div className="lista">
                <h1 className='h1'>{user.name}</h1>
                <h3 className='h1'>id:{user.id}</h3>
            </div>
            <h3 className='h3'>User name: {user.username}</h3>
            <h3 className='h3'>Email: {user.email}</h3>
            <h3 className='h3'>Telefone: {user.phone}</h3>
            <h3 className='h3'>Site: {user.website}</h3>
        </div>

    );
}

export default User;