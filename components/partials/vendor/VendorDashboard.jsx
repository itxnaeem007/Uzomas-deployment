import React, { useState } from 'react';
import VendorStatus from './VendorStatus';
import UserInformation from '~/components/partials/account/UserInformation';
import SellerDashBoard from './modules/SellerDashBoard';
import SellerDashBoardOrder from './modules/SellerDashBoardOrder';

const VendorDashboard = () => {
    const [status, setStatus] = useState('Profile');

    return (
        <div className="ps-vendor-dashboard">
            <div className="container">
                <div className="ps-section__header p-1">
                    <h3>Seller Dasboard</h3>
                </div>
                <div className="ps-section__content">
                    <ul className="ps-section__links">
                        {/* className={'' + (status === 'Dashboard'? 'active' : '')} */}

                        <li
                            onClick={() => setStatus('Profile')}
                            className={
                                'pointer ' +
                                (status === 'Profile' ? 'active' : '')
                            }>
                            Profile
                        </li>
                        <li
                            onClick={() => setStatus('Dashboard')}
                            className={
                                'pointer ' +
                                (status === 'Dashboard' ? 'active' : '')
                            }>
                            Dashboard
                        </li>
                        <li
                            onClick={() => setStatus('Products')}
                            className={
                                'pointer ' +
                                (status === 'Products' ? 'active' : '')
                            }>
                            Products
                        </li>
                        <li
                            onClick={() => setStatus('Order')}
                            className={
                                'pointer ' +
                                (status === 'Order' ? 'active' : '')
                            }>
                            Order
                        </li>
                        {/* <li>
                            <a href="#">Setting</a>
                        </li>
                        <li>
                            <a href="#">View Store</a>
                        </li> */}
                    </ul>
                    {status === 'Profile' ? (
                        <UserInformation />
                    ) : status === 'Dashboard' ? (
                        <SellerDashBoard />
                    ) : status === 'Products' ? (
                        <VendorStatus />
                    ) : status === 'Order' ? (
                        <SellerDashBoardOrder />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};
export default VendorDashboard;
