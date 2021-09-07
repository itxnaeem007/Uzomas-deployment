import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import VendorStatus from '~/components/partials/vendor/VendorStatus';

const vendorstatus = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Seller Status',
        },
    ];
    
    return (
        <ContainerPage title="Seller Status" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <VendorStatus />
            </div>
        </ContainerPage>
    );
};

export default vendorstatus;
