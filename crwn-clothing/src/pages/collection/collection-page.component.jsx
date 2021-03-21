import React from "react";
import "./collection.styles.scss";

const CollectionPage = ({match}) => {
  console.log(match.params.categoryId);
  return (
    <div className="category">
      <h2>Collection page</h2>
    </div>
  )
}

export default CollectionPage;
