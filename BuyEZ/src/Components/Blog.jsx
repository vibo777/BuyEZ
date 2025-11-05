import React, { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_47c868103ba54235a5e032b93af1bf82&q=lifestyle")
      .then(res => res.json())
      .then(data => 
        setPosts(data)
      )
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div>
      <h2>WordPress Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <img src={post.image_url} alt="posts_img"> </img>

        </div>
      ))}
    </div>
  );
}

