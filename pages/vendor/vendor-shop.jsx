import React, { useState } from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { Steps } from 'antd';
import SellerStep from '~/components/partials/vendor/SellerStep';

const vendorStore = () => {
    const { Step } = Steps;

    let [step, setStep] = useState(0);
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Seller Shop Creating',
        },
    ];

   
    return (
        <ContainerPage title="Seller Shop Create" boxed={true}>
            <div>
                <SellerStep />
            </div>
        </ContainerPage>
    );
};

export default vendorStore;
