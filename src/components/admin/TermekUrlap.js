import React from 'react'
import { TermekContext } from '../../contexts/TermekContext'
import { useState , useContext } from 'react'


export default function TermekUrlap() {

    const {postTermek} = useContext(TermekContext)

    const [termek, setTermek] = useState({
        id:500,
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
})

    function mezovalt(event) {
        setTermek({...termek, [event.target.name]:event.target.value})
    }

    function kuldes(event){
        event.preventDefault()
        postTermek(termek)
    }

  return (
    <div style={{width: "50%",margin:"auto"}}>
            <form onSubmit={kuldes}>
                <div className="mb-3">
                    <label>Termék neve</label>
                    <input className="form-control" type="text" name="title" value={termek.title} required onChange={mezovalt}/>
                </div>
                <div className="mb-3">
                    <label>Termék ára</label>
                    <input className="form-control" type="number"name="price" value={termek.price} required onChange={mezovalt}/>
                </div>
                <div className="mb-3">
                    <label>Termék leírása</label>
                    <textarea className="form-control" name="description" rows="4" value={termek.description} required onChange={mezovalt}/>
                </div>
                <div className="mb-3">
                    <select className="form-control" name="category" value={termek.category} required onChange={mezovalt}>
                        <option value="">Válassz kategóriát</option>
                        <option value="tech">Tech</option>
                        <option value="ruha">Ruha</option>
                        <option value="jatek">Játék</option>
                        <option value="egyeb">Egyéb</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Hozzáadás</button>
            </form>
    </div>
  )
}
