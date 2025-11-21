import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const TermekContext = createContext("")
export const TermekProvider = ({ children }) => {
    const [termekLista, setTermekLista]=useState([])

    function deleteTermek(adat) {
        axios.delete('https://fakestoreapi.com/products'+"/"+adat.id) 
        .then(function (response) {
            console.log(response);

            setTermekLista(prevLista => prevLista.filter(termek => termek.id !== adat.id))
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function postTermek(adat) {
        axios.post('https://fakestoreapi.com/products', adat)
        .then(res => {
        console.log(res);
        setTermekLista(prev => [...prev, res.data]);
        })
        .catch(err => console.log(err));
    }

    function getTermekek() {
        axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
            console.log(response);
            setTermekLista(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    
    useEffect( ()=> {
        getTermekek()
    },[]

    )
    

    return <TermekContext.Provider value={{termekLista, deleteTermek, postTermek}}>
        {children}
    </TermekContext.Provider>
}