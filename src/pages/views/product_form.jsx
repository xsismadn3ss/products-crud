import React, { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

export default function ProductForm() {
    const navigate = useNavigate()
    const api_url = 'http://localhost:80/products/api.php'
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const [name, SetName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const clear = () => {
        SetName('')
        setPrice(0)
        setDescription('')
    }

    const handleSUbmit = async (e) => {
        e.preventDefault()
        const data = {
            name: name,
            price: price,
            description: description
        }
        await axios.post(`${api_url}/productos`, data, config).then(
            response => {
                console.log(response)
                clear()
                navigate('/catalogo')
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    return (
        <form onSubmit={handleSUbmit} className="card bg-base-200 w-96 shadow-xl">
            <div className="card-body">
                <div className="mt-4 flex flex-col space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" id="name" name="name" required placeholder="nombre" value={name} onChange={(e) => SetName(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="number" step={0.01} className="grow" placeholder="precio" name="price" id="price" required value={price} onChange={(e) => setPrice(e.target.value)} />
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="descripcion" name="description" id="description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <div className="card-actions justify-center">
                        <button className="btn btn-md bg-primary text-primary-content transition-all duration-300 ease-in-out hover:text-primary hover:font-bold" type="submit">Guardar</button>
                        <button type="button" className="btn btn-md bg-neutral text-neutral-content transition-all duration-300 ease-in-out hover:text-neutral font-semibold" onClick={() => navigate('/catalogo')}>Cancelar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}