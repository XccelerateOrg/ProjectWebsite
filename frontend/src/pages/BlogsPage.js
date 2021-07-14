import React, { useState } from "react";
import { blogs } from "../dummyData/blogs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "../components/BlogCard";

function Card(props) {
  let newPost = props.card.post.slice(0, 100) + "...";

  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-body">
          {/* Link to= "/blogs/:id" */}
          <div className="card-title">
            {props.card.title}
          </div>
          <div className="card-text">
            {/* use slice to just grab the first 100 characters */}
            {newPost}{" "}
            <Link
              to={`/blogs/${props.card.id}`}
              type="button"
              className="btn btn-outline-dark waves-effect"
            >
              ...see more
            </Link>
          </div>

          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
function BlogsPage() {
  const [search, setSearch] = useState("");
  function searchOnChange(event) {
    setSearch(event.target.value);
  }
  const filteredBlogs = (search) => {
    const lowerSearch = search.toLowerCase();
    return blogs.filter((project) => {
      return (
        project.title.toLowerCase().indexOf(lowerSearch) >
          -1 ||
        project.post.toLowerCase().indexOf(lowerSearch) > -1
      );
    });
  };

  const newBlogs = filteredBlogs(search);
  console.log("new blogs", newBlogs);
  return (
    <div className="container-fluid">
      <h1>Blogs Page</h1>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={searchOnChange}
      />
      {/* Render this out based on the specific item we pass in */}
      <br />
      <div className="d-inline-flex">
        {newBlogs.map((blog, index) => {
          return (
            <div className="container">
              <BlogCard
                key={blog.id}
                id={blog.id}
                date={blog.date}
                image={blog.image}
                title={blog.title}
                post={blog.post}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
