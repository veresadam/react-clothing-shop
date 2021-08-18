import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// CONTAINER PATTERN 
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    componentDidMount() {

        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();

        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');

        // OBSERVER PATTERN
        //
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false })
        // });

        // FETCH PATTERN
        //
        // collectionRef.get().then(snapShot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false })
        // });

    }

    render() {
        const { match } = this.props;

        return (
            <div className = 'shop-page'>
                <Route exact path = {`${match.path}`} component = {CollectionsOverviewContainer} />
                {/* <Route path = {`${match.path}/:collectionId`} render = { (props) =>
                    <CollectionPageWithSpinner isLoading = { !isCollectionsLoaded } {...props} /> }
                /> */}
                <Route path = {`${match.path}/:collectionId`} component = { CollectionPageContainer } />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);