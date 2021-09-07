import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import menuData from '../../../public/static/data/menu';
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';
import SwitchVendor from '~/components/partials/vendor/SwitchVendor';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSellerFormVisible: false,
            vendor: false,
        };
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <MenuCategoriesDropdown />
                        {/* <Button
                            onClick={() =>
                                this.setState({ isSellerFormVisible: true })
                            }>
                            Add Post
                        </Button>
                        <Modal
                            title="Post Seller Product"
                            centered
                            footer={null}
                            width={1024}
                            onCancel={() =>
                                this.setState({ isSellerFormVisible: false })
                            }
                            visible={this.state.isSellerFormVisible}>
                            <h3></h3>
                            <AddSellerPost />
                        </Modal> */}
                    </div>
                    <div className="navigation__right">
                        <Menu
                            source={menuData.menuPrimary.menu_1?.k}
                            className="menu"
                        />
                        <ul className="navigation__extra">
                            <li>
                                <SwitchVendor />
                                {/* <Button
                                    onClick={() =>
                                        this.setState({ vendor: true })
                                    }>
                                    {this.vendor !== false
                                        ? // <Link href="/vendor/become-a-vendor">
                                          //     <a>Switch to Seller</a>
                                          // </Link>
                                          'Switch to Seller'
                                        : //     <Link href="/vendor/vendor-store">
                                          //         <a>Switch to Buyer</a>
                                          //     </Link>
                                          // )
                                          'Switch to Buyer'}
                                </Button> */}

                                {/* <Link href="/vendor/become-a-vendor">
                                    <a>Switch to Seller</a>
                                </Link> */}
                            </li>
                            {/* <li>
                                <Link href="/account/order-tracking">
                                    <a>Tract your order</a>
                                </Link>
                            </li> */}
                            {/* <link href="/vendor/become-a-vendor">

                            </link> */}

                            <li>
                                <CurrencyDropdown />
                            </li>
                            <li>
                                <LanguageSwicher />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationDefault;
