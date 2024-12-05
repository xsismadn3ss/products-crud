import Section from "../components/section"
import ProductForm from "./views/product_form"

export default function Products() {
    return (
        <>
            <Section><h1 className="text-3xl">Products</h1></Section>
            <Section>
                <ProductForm />
            </Section>
        </>
    )
}