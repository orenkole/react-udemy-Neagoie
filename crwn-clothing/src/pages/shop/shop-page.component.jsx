import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection-page.component";
import {fetchCollectionsStartAsync} from "./shop.actions";
import { selectIsCollectionFetchign } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {match, isCollectionFetching} = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}
          render={
            (props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
          } 
        />
        <Route path={`${match.path}/:collectionId`} 
          render={
            (props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>
          } 
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector( {
  isCollectionFetching: selectIsCollectionFetchign
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
