import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}
