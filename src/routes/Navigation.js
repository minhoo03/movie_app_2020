import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="navi">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

// React.createElement("div")

export default Navigation