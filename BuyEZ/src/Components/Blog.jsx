import React, { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=100")
      .then(res => res.json())
      .then(data => 
        setPosts(data.posts)
      )
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const totalPages = Math.ceil(posts.length/postPerPage);

  // useEffect(() => {
  //   if (currentPage > totalPages) {
  //     setCurrentPage(totalPages);
  //   }
  // }, [currentPage,totalPages]);


  const lastIndex = currentPage * postPerPage; 
  const firstIndex = lastIndex - postPerPage;
  
  const pages = []; 

  for(let i=1;i<=totalPages;i++){
    pages.push(i);
  }
  // console.log(pages);
  

  // console.log(firstIndex, lastIndex);

  const changeDropdown = (e) => {
    setPostPerPage(Number(e.target.value));
    setCurrentPage(1);
  }

  return (
    <>
    <h2>{currentPage}</h2>
    <div className="blog-container">
      
      {posts.slice(firstIndex,lastIndex).map(post => (
        <div className="blog-card" key={post.id}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qcfDI8z36AkniszDbj8wWMyS4nmkBB66PA&s" alt="posts_img"/> 
          <div className="blog-content">
            <h1 className="blog-title">{post.title}</h1>
            <h2 className="blog-description">{post.body}</h2>
          </div>  
        </div>
      ))}
    </div>
    <div className="pagination-wrapper">
      {
        pages.map((page,index) =>{
          return (
            <button className={(currentPage == page) ? "pg-btn active" : "pg-btn"} key={index} onClick={()=>{
              setCurrentPage(page);
            }}>{page}</button>
          )
        })
      }
    </div>
    <div className="prev-next-btn">
      <button disabled={currentPage == 1} onClick={()=>{
        setCurrentPage(currentPage-1);
      }}>Prev</button>
      <button disabled={currentPage == totalPages} onClick={()=>{
         setCurrentPage(currentPage+1);
      }}>Next</button>
    </div>

    <div className="post-per-page-container">
      <label>Select Posts Per Page : </label>
      <select onChange={(e)=>changeDropdown(e)} id='post-dropdown'>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </div>
  </>
  );
}

