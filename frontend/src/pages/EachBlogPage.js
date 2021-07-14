import React from "react";
import { blogs } from "../dummyData/blogs";
export default function EachBlogPage(props) {
  console.log("each blog page", props);
  return (
    <div>
      <h1>Each Blog Page</h1>
      {blogs[props.match.params.id - 1].title}
      {blogs[props.match.params.id - 1].post}
    </div>
  );
}
