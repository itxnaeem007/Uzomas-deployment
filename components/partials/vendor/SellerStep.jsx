import React, { useState } from 'react';
import { Steps, Divider } from 'antd';
import Link from 'next/link';

import ShopPreferences from './modules/ShopPreferences';
import ProductStock from './modules/ProductStock';
import SellerGetPaid from './modules/SellerGetPaid';

const SellerStep = () => {
    const { Step } = Steps;

    const [current, setCurrent] = useState(0);

    const onChange = (current) => {
        console.log('onChange:', current);
        setCurrent(current);
    };

    const handleCarouselNext = (current) => {
        console.log(current);
        setCurrent(current++);
    };

    return (
        <div className="container pt-5">
            <span>
                <Steps current={current} onChange={onChange}>
                    <Step title="Shop Preferences" />

                    <Step title="Stock Your Shop" />
                    <Step title="Set Up Billing" />
                </Steps>

                <Divider />
            </span>
            <div>
                {current === 0 ? (
                    <ShopPreferences />
                ) : current === 1 ? (
                    <ProductStock />
                ) : (
                    <SellerGetPaid />
                )}
            </div>
            {current === 2 ? (
                <div className="seller_save_btn">
                    <div className=" ps-btn ps-btn--sm">
                        <Link href="/vendor/vendor-dashboard">
                            Save and Continue
                        </Link>
                    </div>
                </div>
            ) : (
                ''
            )}

            {/* <div>
                {current === 0 ? (
                    <button
                        current={current}
                        onChange={onChange}
                        onClick={(current) => setCurrent(current)}>
                        Next
                    </button>
                ) : current === 1 ? (
                    <button
                        current={current}
                        onChange={onChange}
                        onClick={(current) => setCurrent(current)}>
                        Next
                    </button>
                ) : (
                    <Link href="/vendor/vendor-dashboard">Submit</Link>
                )}
            </div> */}
        </div>
    );
};

export default SellerStep;
