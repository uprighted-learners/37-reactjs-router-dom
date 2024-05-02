import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        console.log("Fetching post details for ID:", id);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Data received:", data);
                setPost(data);
            });
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Post Details</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <Link to="/posts">Back to Posts</Link>
        </div>
    );
}
