import React from 'react';
import styles from '~/styles/vendorStatus.module.css';
import VendorStatusNavbar from './modules/VendorStatusNavbar';

const VendorStatus = () => {
    return (
        <div className="ps-my-account-2 pt-0">
            <div className={styles.container}>
                <div className="ps-section__wrapper">
                    <VendorStatusNavbar />
                </div>
            </div>
        </div>
    );
};

export default VendorStatus;
