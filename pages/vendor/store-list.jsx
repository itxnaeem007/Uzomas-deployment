import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreList from '~/components/partials/vendor/StoreList';

const storelist = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Store List',
        },
    ];
    return (
        <ContainerPage title="Store List" boxed={true}>
            <div >
                <BreadCrumb breacrumb={breadCrumb} />
                <StoreList />
            </div>
           
        </ContainerPage>
    );
};

export default storelist;
