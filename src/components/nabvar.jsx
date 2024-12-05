import { Link } from "react-router"

export default function NavBar() {

    return (
        <div className="navbar bg-base-200 shadow-xl sticky top-0 z-40 glass bg-transparent">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl">DaisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 gap-4">
                    <li className="font-semibold hover:text-primary"><Link to={'/'}>Inicio</Link></li>
                    <li className="font-semibold hover:text-primary"><Link to={'/catalogo'}>Catalogo</Link></li>
                    <li className="bg-transparent">
                        <details>
                            <summary>Opciones</summary>
                            <ul className="bg-transparent glass z-50 rounded-t-none p-2">
                                <li><Link to={'#'}>Sign In</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}