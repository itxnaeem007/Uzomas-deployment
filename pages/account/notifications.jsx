import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import Notifications from '~/components/partials/account/Notifications';
import ContainerPage from '~/components/layouts/ContainerPage';

const AccountNotificationsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Seller Dashboard',
            url: '/vendor/vendor-dashboard',
        },
        {
            text: 'Notification',
        },
    ];
    return (
        <ContainerPage title="Notifications" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Notifications />
            </div>
        </ContainerPage>
    );
};

export default AccountNotificationsPage;
