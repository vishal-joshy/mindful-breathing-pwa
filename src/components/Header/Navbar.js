import React from "react"
import { Link } from "gatsby"

function Navbar() {
    return (
        <nav className="flex w-100 justify-around py-2">
            <Link to="/box">Box</Link>
            <Link to="/coherent">Coherent</Link>
            <Link to="/4-7-8">4-7-8</Link>
        </nav>
    )
}

export default Navbar
