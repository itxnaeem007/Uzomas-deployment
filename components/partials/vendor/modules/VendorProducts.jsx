import React, { useState } from 'react';
import { relatedProduct } from '../../../../public/static/data/product';
import ProductOffline from '../../../elements/products/ProductOffline';
import ProductWide from '../../../elements/products/ProductWide';


const VendorProducts = () => {
    const [listView, setListView] = useState(true);

    console.log('Related Product', relatedProduct);
    const handleChangeViewMode = (event) => {
        event.preventDefault();
        setListView({ listView: !listView });
    };
    
    return (
        <div className="ps-shopping vendor-shop">
            <div className="ps-shopping__header">
                <p>
                    <strong>
                        {relatedProduct ? relatedProduct.length : 0}
                    </strong>
                    Products found
                </p>
                {/* <div className="ps-shopping__actions">
                    <select className="ps-select" data-placeholder="Sort Items">
                        <option>Sort by latest</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                    </select>
                    <div className="ps-shopping__view">
                        <p>View</p>
                        <ul className="ps-tab-list">
                            <li className={listView === true ? 'active' : ''}>
                                <a href="#" onClick={handleChangeViewMode}>
                                    <i className="icon-grid"></i>
                                </a>
                            </li>
                            <li className={listView !== true ? 'active' : ''}>
                                <a href="#" onClick={handleChangeViewMode}>
                                    <i className="icon-list4"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
            <div className="ps-shopping__content">
                {listView === true ? (
                    <div className="ps-shopping-product">
                        <div className="row">
                            {relatedProduct && relatedProduct.length > 0
                                ? relatedProduct.map((product) => (
                                      <div
                                          className="col-lg-3 col-md-4 col-sm-6 col-6 "
                                          key={product.id}>
                                          <ProductOffline product={product} />
                                      </div>
                                  ))
                                : ''}
                        </div>
                    </div>
                ) : (
                    <div className="ps-shopping-product">
                        {relatedProduct && relatedProduct.length > 0
                            ? relatedProduct.map((product) => (
                                  <ProductWide
                                      product={product}
                                      key={product.id}
                                  />
                              ))
                            : ''}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VendorProducts;
