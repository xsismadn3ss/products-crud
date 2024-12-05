import { createContext, useContext, useState } from "react";
import axios from "axios";

const productContext = createContext({
  product: {},
  selectEditProduct: () => { },
  selectDeleteProduct: () => { },
  handleChange: (e) => { }
})
const productListContext = createContext({
  products: [],
  fetchProducts: () => { }
})
const modalContext = createContext({
  isEditOpen: false,
  isDeleteOpen: false,
  toggleEditModal: () => { },
  toggleDeleteModal: () => { }
})
const modalToggleContext = createContext()


// Hook para formulario de editar producto
export function useProductContext() {
  return useContext(productContext)
}
// Hook para modal
export function useModalContext() {
  return useContext(modalContext)
}
// Hook para grid de productos
export function useProductListContext() {
  return useContext(productListContext)
}

export function CatalogProvider({ children }) {
  const api_url = 'http://localhost:80/products/api.php'
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  const [product, setProduct] = useState({
    id: 0,
    nombre: '',
    precio: 0.00,
    descripcion: ''
  })
  const selectEditProduct = (props) => {
    setProduct({
      id: props.id,
      nombre: props.nombre,
      precio: props.precio,
      descripcion: props.descripcion
    })
    toggleEditModal()
  }
  const selectDeleteProduct = (props) => {
    setProduct({
      id: props.id,
      nombre: props.nombre,
      precio: props.precio,
      descripcion: props.descripcion
    })
    toggleDeleteModal()
  }
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${api_url}/productos`, config)
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [isEditOpen, setEditIsOpen] = useState(false)
  const toggleEditModal = () => {
    if (isEditOpen) {
      setEditIsOpen(false)
    } else {
      setEditIsOpen(true)
    }
  }

  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const toggleDeleteModal = () => {
    if (isDeleteOpen) {
      setIsDeleteOpen(false)
    } else {
      setIsDeleteOpen(true)
    }
  }

  return (
    <productListContext.Provider value={{ products, fetchProducts }}>
      <productContext.Provider value={{ product, selectEditProduct, selectDeleteProduct, handleChange }}>
        <modalContext.Provider value={{ isEditOpen, toggleEditModal, isDeleteOpen, toggleDeleteModal }}>
          {children}
        </modalContext.Provider>
      </productContext.Provider>
    </productListContext.Provider>
  )
}