import React, { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_47c868103ba54235a5e032b93af1bf82&q=online shopping")
      .then(res => res.json())
      .then(data => setPosts(data.results))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="blog-container">
      {posts.map(post => (
        <div className="blog-card" key={post.id}>
          <img src={post.image_url} alt="posts_img"/> 
          <div className="blog-content">
            <h1 className="blog-title">{post.title}</h1>
            <h2 className="blog-description">{post.description}</h2>
          </div>  
        </div>
      ))}
    </div>
  );
}

