import { useEffect } from "react";
import { Link } from "react-router";
import { useProductListContext, useModalContext, useProductContext } from "../../context/catalogProvider";


export default function ProductsGrid() {
  const { toggleEditModal, toggleDeleteModal } = useModalContext()
  const { selectEditProduct, selectDeleteProduct } = useProductContext()
  const { products, fetchProducts } = useProductListContext()


  const handleEditClick = (props) => {
    toggleEditModal()
    selectEditProduct(props)
  }
  const handleDeleteClick = (id, nombre) => {
    toggleDeleteModal()
    selectDeleteProduct(id, nombre)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <div className="flex justify-end mx-20">
        <button className="rounded-lg p-2 bg-primary text-primary-content"><Link to={'products/'}>Agregar producto</Link></button>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 mx-20 xl:grid-cols-3">
        {products.map((item, key) => {
          return <div className="card bg-base-200 shadow-2xl" key={key}>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.nombre}</h2>
              <p>{item.descripcion}</p>
              <div className="badge md:badge-md lg:badge-lg xl:badge-xl badge-success text-success-content">${item.precio}</div>
              <div className="card-actions justify-start">
                <button className="bg-red-700 text-neutral-content btn btn-xs sm:btn-sm hover:text-red-800 lg:btn-md" onClick={() => handleDeleteClick({ id: item.id, nombre: item.nombre })}>Eliminar</button>
                <button className="bg-primary text-primary-content btn btn-xs sm:btn-sm hover:text-primary lg:btn-md" onClick={() => handleEditClick({ id: item.id, nombre: item.nombre, precio: item.precio, descripcion: item.descripcion })}>Editar producto</button>
                <button className="bg-success text-success-content btn btn-xs sm:btn-sm lg:btn-md hover:text-neutral">Compra ahora</button>
              </div>
            </div>
          </div>
        })}
      </div>
    </>
  )
}