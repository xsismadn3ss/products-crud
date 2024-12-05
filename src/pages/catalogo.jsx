import Section from "../components/section";
import ProductsGrid from "./views/product_list";
import { CatalogProvider } from "../context/catalogProvider";
import ModalEditProduct from "../components/modalEditProduct";
import ModalDeleteProduct from "../components/modalDeleteProduct";

export default function Catalogo() {

  return (
    <CatalogProvider>
      <div className="mt-10"></div>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold">Nuestros Productos</h1>
        </div>
      <ModalEditProduct/>
      <ModalDeleteProduct/>
      </Section>
      <ProductsGrid />
    </CatalogProvider>
  )
}