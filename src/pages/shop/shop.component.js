  
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { searchItem } from "../../redux/search/search.action";

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match, searchItem, selectItem }) => (
  <div className='shop-page'>
    <div>

        <label>
        <input onChange={(val) => searchItem(val.target.value)} id="searchBox" placeholder="Search product..." type="text" style={{ borderTop: 0, borderRight: 0, borderLeft: 0 }} />
      </label>
    </div>
    <div>
      <select onChange={(val) => selectItem(val.target.value)}>
        <option value="0">Price Range</option>
        <option value="10">MAX 10</option>
        <option value="20">MAX 20</option>
        <option value="30">MAX 30</option>
        <option value="40">MAX 40</option>
        <option value="50">MAX 50</option>
        <option value="60">MAX 60</option>
        <option value="70">MAX 70</option>
        <option value="80">MAX 80</option>
        <option value="90">MAX 90</option>
      </select>
    </div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

const mapDispatchProps = dispatch => ({
  searchItem: item => dispatch(searchItem(item))
})

export default connect(null, mapDispatchProps)(ShopPage);
