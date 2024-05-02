import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './components/Posts'
import PostDetails from './components/PostDetails'

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Posts />}>
                        <Route path=":id" element={<PostDetails />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}