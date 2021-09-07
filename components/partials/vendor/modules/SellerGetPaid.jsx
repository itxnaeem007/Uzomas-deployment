import React from 'react';
import { Input, Select } from 'antd';
import styles from '~/styles/sellerProducts.module.css';

const SellerGetPaid = () => {
    const { Option } = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        <div className="container">
            <div className="text-center mb-xs-1">
                <h2>Seller Payment</h2>
                <span className="col-group p-xs-0 text-center">
                    <span className="col-centered col-xs-12 col-lg-6 mb-xs-4 mb-md-5">
                        Set Up Payment Method, So Purchaser can pay you easily.
                    </span>
                </span>
            </div>
            <div className="seller_shope__container pt-5 mb-xs-2 mb-md-0">
                <div className="panel p-xs-2 p-md-4 mb-xs-2 mb-md-3 mb-lg-4">
                    <div className="mb-xs-3 mb-md-4">
                        <h2 className="mb-xs-1">Bank Account Details</h2>
                        <p className="text-gray-lighter">
                            Tell the Purchaser about your Payment method.
                        </p>
                    </div>
                    <div className="product__pic__container col-group col-flush">
                        <div className="col-sm-4 col-xl-3 col-tv-2 pt-5">
                            <label className="strong mb-xs-1">
                                Account Title
                                <span className="required" aria-hidden="true">
                                    &nbsp;*{' '}
                                </span>
                            </label>
                        </div>
                        <div className={`product__pic ${styles.span}`}>
                            <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                <span className={styles.span}>
                                    <Input placeholder="Account Title" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="product__pic__container col-group col-flush">
                        <div className="col-sm-4 col-xl-3 col-tv-2 pt-5">
                            <label className="strong mb-xs-1">
                                Bank Name
                                <span className="required" aria-hidden="true">
                                    &nbsp;*{' '}
                                </span>
                            </label>
                        </div>
                        <div className={`product__pic ${styles.span}`}>
                            <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                <span className={styles.span}>
                                    <Select
                                        className="w-100"
                                        placeholder="Bank Name"
                                        showSearch
                                        style={{ width: 200 }}
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }>
                                        <Option value="jack">
                                            Bank of America
                                        </Option>
                                        <Option value="lucy">Citigroup</Option>
                                        <Option value="tom">Wells Fargo</Option>
                                    </Select>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="product__pic__container col-group col-flush">
                        <div className="col-sm-4 col-xl-3 col-tv-2 pt-5">
                            <label className="strong mb-xs-1">
                                Account Number
                                <span className="required" aria-hidden="true">
                                    &nbsp;*{' '}
                                </span>
                            </label>
                        </div>
                        <div className={`product__pic ${styles.span}`}>
                            <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                <span className={styles.span}>
                                    <Input placeholder="Account Number" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="product__pic__container col-group col-flush">
                        <div className="col-sm-4 col-xl-3 col-tv-2 pt-5">
                            <label className="strong mb-xs-1">
                                Branch Code
                                <span className="required" aria-hidden="true">
                                    &nbsp;*{' '}
                                </span>
                            </label>
                        </div>
                        <div className={`product__pic ${styles.span}`}>
                            <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                <span className={styles.span}>
                                    <Input placeholder="Branch Code" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="product__pic__container col-group col-flush">
                        <div className="col-sm-4 col-xl-3 col-tv-2 pt-5">
                            <label className="strong mb-xs-1">
                                IBAN (e.g US0000000000000000)
                                <span className="required" aria-hidden="true">
                                    &nbsp;*{' '}
                                </span>
                            </label>
                        </div>
                        <div className={`product__pic ${styles.span}`}>
                            <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                <span className={styles.span}>
                                    <Input placeholder="IBAN" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerGetPaid;
