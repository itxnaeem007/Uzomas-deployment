import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import Link from 'next/link';
import { changeVendor } from '~/store/vendor/action';

const SwitchVendor = () => {
    const [vendor, setVendor] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const result = useSelector((state) => state.vendor);
    const history = useHistory();
    
    console.log('Vendor', result);

    const switchVendor =
        vendor === false
            ? {
                  path: '/vendor/store-list',
                  change: 'Switch to Buyer',
                  cond: true,
              }
            : {
                  path: '/vendor/become-a-vendor',
                  change: 'Switch to Seller',
                  cond: false,
              };

    const handleChangeVendor = async (e, switchVendor) => {
        setLoading(true);
        e.preventDefault();
        vendor === false ? setVendor(true) : setVendor(false);
        await dispatch(changeVendor(switchVendor));
        setLoading(false);
    };

    return (
        <div>
            <Button
                disabled={loading}
                onClick={(e) => handleChangeVendor(e, switchVendor)}>
                {vendor === true ? (
                    <Link href={`${result.Vendor.path}`}>
                        <a>{result.Vendor.change}</a>
                    </Link>
                ) : (
                    <Link href={`${result.Vendor.path}`}>
                        <a>{result.Vendor.change}</a>
                    </Link>
                )}
            </Button>
        </div>
    );
};

export default SwitchVendor;
