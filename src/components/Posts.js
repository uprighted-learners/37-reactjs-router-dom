// Posts.js
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    console.log("FETCHED POSTS: ", posts);

    return (
        <div>
            <h2>Posts</h2>
            <Outlet />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
