import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="navi">
            <Link to="/">Home</Link>
            <img style={{width:'100px'}} src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-white_new.png" />
            <Link to="/about">About</Link>
        </nav>
    )
}

// React.createElement("div")

export default Navigation