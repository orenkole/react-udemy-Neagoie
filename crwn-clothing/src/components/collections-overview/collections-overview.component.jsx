import React from "react";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({collections}) => {
  const textStyles = {
    color: "red",
    fontSize: "24px",
  }
  return (
    <div className="collections-overview" style={textStyles}>
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
