import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=100") 
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.posts);
      })
      .catch((err) => console.log("Error fetching blogs:", err));
  }, []);

  return (
    <section className="blog-section">
        <div className="container pt-5 container my-5">
            <h1 className="pt-5 pb-5">Latest Blog Posts</h1>
            <div className="row">
                {blogs.slice(0, 3).map((blog) => (
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm" key={blog.id}>
                    <img
                        src="https://img.freepik.com/free-psd/3d-rendering-still-life-bag-content_23-2151662503.jpg" 
                        className="card-img-top"
                        alt={blog.title}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column text-start">
                        <h5 className="blog-card-title">{blog.title}</h5>
                        <p className="blog-card-body">
                        {blog.body?.slice(0, 90)}...
                        </p>

                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

      {/* Read All Blogs Button */}
      <div className="text-center mt-4">
        <Link to="/blog" className="about-us-button"> 
          Read All Blogs
        </Link>
      </div>
    </section>
  );
}
