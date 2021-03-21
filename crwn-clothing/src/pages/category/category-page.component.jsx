import React from "react";
import "./collection.styles.scss";

const CategoryPage = ({match}) => {
  console.log(match.params.categoryId);
  return (
    <div className="category">
      <h2>Category page</h2>
    </div>
  )
}

export default CategoryPage;
