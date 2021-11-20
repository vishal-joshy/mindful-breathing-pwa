import React from "react"
import Header from "./Header/Header"

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout
