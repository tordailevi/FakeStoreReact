import React from 'react'
import TermekSorAdmin from './TermekSorAdmin'
import { TermekContext } from '../../contexts/TermekContext'
import { useContext } from 'react';


export default function TermekekAdmin() {
    const {termekLista} = useContext(TermekContext)
    console.log(termekLista)

  return (
    <div className="table-rsponsive">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Név</th>
                    <th>Ár</th>
                    <th>Leírás</th>
                    <th>Kategória</th>
                    <th>Kép</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    termekLista.map((termek) => {
                        return <TermekSorAdmin termek={termek} key={termek.id}/>
                    }
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
