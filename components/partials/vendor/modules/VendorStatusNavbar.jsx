import React, { useState } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import styles from '~/styles/vendorStatus.module.css';
import VendorProducts from './VendorProducts';
import { Modal } from 'antd';
import AddSellerPost from '../../account/AddSellerPost';
import OutOfStock from './OutOfStock';
import ProductStock from './ProductStock';

const vendorStatusNavbar = () => {
    const [showModel, setShowModel] = useState(false);

    return (
        <div className="ps-block--vendor-dashboard">
            <div className="ps-block__header">
                <button
                    className="ps-btn ps-btn--sm"
                    onClick={() => setShowModel(!showModel)}>
                    Add Product
                </button>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                <Modal
                    title="Post Seller Product"
                    centered
                    footer={null}
                    width={1324}
                    onCancel={() => setShowModel(false)}
                    visible={showModel}>
                    <h3></h3>
                    <ProductStock />
                </Modal>
            </div>

            {/* Seller Products Management NavBar */}
            <Tabs className="" defaultActiveKey="1" centered>
                <TabPane tab="Active Products" key="1">
                    <div className="container">
                        <div className="ps-section__wrapper">
                            <VendorProducts />
                        </div>
                    </div>
                </TabPane>

                <TabPane tab="Out of Stock" key="2">
                    <div className="container">
                        <div className="ps-section__wrapper">
                            <OutOfStock />
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="Deleted" key="3">
                    <div className="container">
                        <div className="ps-section__wrapper">
                            <OutOfStock />
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default vendorStatusNavbar;
