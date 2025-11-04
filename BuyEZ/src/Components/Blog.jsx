import React, { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://loxam.re/wp-json/wp/v2/posts")
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
          <h2>{post.title.rendered}</h2>
          <h3>{post.excerpt.rendered}</h3>
        </div>
      ))}
    </div>
  );
}

