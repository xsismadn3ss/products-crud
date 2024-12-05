import axios from "axios"
import { useModalContext, useProductContext, useProductListContext } from "../context/catalogProvider"

export default function ModalDeleteProduct() {
  const api_url = 'http://localhost:80/products/api.php'
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  const { toggleDeleteModal, isDeleteOpen } = useModalContext()
  const { product } = useProductContext()
  const { fetchProducts } = useProductListContext()

  const handleSubmit = async () => {
    await axios.delete(`${api_url}/productos/${product.id}`, config)
      .then(response => {
        console.log(response)
        fetchProducts()
        toggleDeleteModal()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      {isDeleteOpen && <div className="card bg-neutral/40 w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-2/5 fixed z-50 glass">
        <div className="card-body">
          <div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleDeleteModal}>✕</button>
          </div>
          <h3 className="font-bold text-2xl text-center text-red-700">¿Esta seguro de eliminar este produto?</h3>
          <p className="text-lg text-center">{product.nombre}</p>
          <form onSubmit={handleSubmit} method="dialog" className="card-actions justify-center">
            <button className="btn btn-md bg-primary text-primary-content transition-all duration-300 ease-in-out hover:text-primary hover:font-bold" type="submit">Confirmar</button>
            <button className="btn btn-md bg-neutral text-neutral-content transition-all duration-300 ease-in-out hover:text-primary hover:font-bold" type="button" onClick={toggleDeleteModal}>Cancelar</button>
          </form>
        </div>
      </div>}
    </>
  )
}