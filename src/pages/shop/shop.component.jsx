import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// CONTAINER PATTERN 
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, match }) => {

    // componentDidMount() {

        useEffect(() => {
            fetchCollectionsStart();
        }, [fetchCollectionsStart]);

        

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

    // }

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

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);