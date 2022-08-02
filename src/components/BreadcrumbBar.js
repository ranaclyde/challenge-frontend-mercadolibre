import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { connect } from 'react-redux/es/exports';

const BreadcrumbBar = ({ globalCategories, itemCategory = "" }) => {

  return (
    <Breadcrumb mb={4} color="gray.500">
      <BreadcrumbItem>
        <span>Inicio</span>
      </BreadcrumbItem>
      {globalCategories && (
        <BreadcrumbItem>
          <span>{globalCategories[0]}</span>
        </BreadcrumbItem>
      )}
      {itemCategory && (
        <BreadcrumbItem>
          <span>{itemCategory}</span>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

const mapStateToProps = (state) => ({
  globalCategories: state.itemReducer.getItems.categories,
});

export default connect(mapStateToProps)(BreadcrumbBar);
