import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSections } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'


const Directory = ({ sections }) => {
  return (
      <div className = 'directory-menu' >
          {
            sections.map(({ id, ...otherSectionProps }) => {
              return <MenuItem key = {id} {...otherSectionProps} />
            })
          }
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections 
})

export default connect(mapStateToProps)(Directory);