import axios from "axios"
import { useModalContext, useProductContext, useProductListContext } from "../context/catalogProvider"

export default function ModalEditProduct() {
  const api_url = 'http://localhost:80/products/api.php'
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  // importar contextos
  const { toggleEditModal, isEditOpen } = useModalContext()
  const { handleChange, product } = useProductContext()
  const { fetchProducts } = useProductListContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${api_url}/productos/${product.id}`, product, config)
      .then(response => {
        console.log(response);
        toggleEditModal()
        fetchProducts()
      })
      .catch(err => {
        console.error(err);
      });
  }



  return (
    <>
      {isEditOpen && <div id="modalEditProduct" className="card bg-neutral/40 w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-2/5 fixed z-50 glass">
        <div className="card-body">
          <div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleEditModal}>✕</button>
          </div>
          <h3 className="font-bold text-xl text-center">Editar producto</h3>
          <form onSubmit={handleSubmit} method="post">
            <div className="mt-4 flex flex-col space-y-4">
              <label className="input input-bordered flex items-center gap-2 bg-white/50">
                <input type="text" className="grow bg-inherit" id="nombre" name="nombre" required placeholder={product.nombre} value={product.nombre} onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-white/50 shadow-inner">
                <input type="number" step={0.01} className="grow bg-inherit" placeholder={product.precio} name="precio" id="precio" required value={product.precio} onChange={handleChange} />
              </label>
              <textarea className="textarea textarea-bordered bg-white/50" placeholder={product.descripcion} name="descripcion" id="descripcion" required value={product.descripcion} onChange={handleChange}></textarea>
              <div className="card-actions justify-center">
                <button className="btn btn-md bg-primary text-primary-content transition-all duration-300 ease-in-out hover:text-primary hover:font-bold" type="submit">Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      }
    </>
  )
}