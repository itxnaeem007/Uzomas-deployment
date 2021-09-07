// import { Upload } from 'antd';
import { Cascader, Form, Input, Select } from 'antd';

import React from 'react';
import styles from '~/styles/sellerProducts.module.css';
import UploadProductPics from '../../account/sellerModules/UploadProductPics';

const ProductStock = () => {
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(
            <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
        );
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const options = [
        {
            value: 'Clothing & Apparel',
            label: 'Clothing & Apparel',
            children: [
                {
                    value: 'Accessories',
                    label: 'Accessories',
                },
                {
                    value: 'Womens',
                    label: 'Womens',
                },
                {
                    value: 'Bags',
                    label: 'Bags',
                },
                {
                    value: "Kid's Fashion",
                    label: "Kid's Fashion",
                },
                {
                    value: 'Mens',
                    label: 'Mens',
                },
            ],
        },
        {
            value: 'Garden & Kitchen',
            label: 'Garden & Kitchen',
            children: [
                {
                    value: 'Cookware',
                    label: 'Cookware',
                },
                {
                    value: 'Decoration',
                    label: 'Decoration',
                },
                {
                    value: 'Home Improvement',
                    label: 'Home Improvement',
                },
                {
                    value: 'Utensil & Gadget',
                    label: 'Utensil & Gadget',
                    // Home Improvement
                },
                {
                    value: 'Home Improvement',
                    label: 'Home Improvement',
                },
                {
                    value: 'Furniture',
                    label: 'Furniture',
                },
                {
                    value: 'Powers And Hand Tools',
                    label: 'Powers And Hand Tools',
                },
            ],
        },
        {
            value: 'Consumer Electrics',
            label: 'Consumer Electrics',
            children: [
                {
                    value: 'Air Conditioners',
                    label: 'Air Conditioners',
                    children: [
                        {
                            value: 'Accessories',
                            label: 'Accessories',
                        },
                        {
                            value: 'Type Hanging Cell',
                            label: 'Type Hanging Cell',
                        },
                        {
                            value: 'Type Hanging Wall',
                            label: 'Type Hanging Wall',
                        },
                    ],
                },
            ],
        },
    ];
    function onChange(value) {
        console.log(value);
    }
    return (
        <>
            <div className="container">
                <div className="text-center mb-xs-1">
                    <h2>Product Listing</h2>
                    <span className="col-group p-xs-0 text-center">
                        <span className="col-centered col-xs-12 col-lg-6 mb-xs-4 mb-md-5">
                            Add as many listings as you can. Five or more would
                            be a great start. More listings means more chances
                            to be discovered!
                        </span>
                    </span>
                </div>
                <div
                    data-region-name="images"
                    data-ui="images"
                    className="seller_shope__container pt-5 mb-xs-2 mb-md-0">
                    <div className="panel p-xs-2 p-md-4 mb-xs-2 mb-md-3 mb-lg-4">
                        <div className="mb-xs-3 mb-md-4">
                            <h2 className="mb-xs-1">Photos</h2>
                            <p className="text-gray-lighter">
                                Add as many as you can so buyers can see every
                                detail.
                            </p>
                        </div>
                        <div className="product__pic__container col-group col-flush">
                            <div className="col-sm-4 col-xl-3 col-tv-2">
                                <label className="strong mb-xs-1">
                                    Photos
                                    <span
                                        className="required"
                                        aria-hidden="true">
                                        &nbsp;*{' '}
                                    </span>
                                </label>
                                <div className="hide-xs hide-sm mb-xs-2">
                                    <p className="text-smaller text-gray-lighter mb-xs-2">
                                        Use up to five photos to show your
                                        item's most important qualities.
                                    </p>
                                    <p className="text-smaller text-gray-lighter mb-xs-2">
                                        Tips:
                                    </p>
                                    <ul className="text-smaller text-gray-lighter">
                                        <li>Use natural light and no flash.</li>
                                        <li>
                                            Include a common object for scale.
                                        </li>
                                        <li>
                                            Show the item being held, worn, or
                                            used.
                                        </li>
                                        <li>
                                            Shoot against a clean, simple
                                            background.
                                        </li>
                                        <li>
                                            Add photos to your variations so
                                            buyers can see all their options.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__pic">
                                <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                    <UploadProductPics />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ************************************************************ */}

            <div className="container">
                <div className="seller_shope__container pt-5 mb-xs-2 mb-md-0">
                    <div className="panel p-xs-2 p-md-4 mb-xs-2 mb-md-3 mb-lg-4">
                        <div className="mb-xs-3 mb-md-4">
                            <h2 className="mb-xs-1">Listing Details</h2>
                            <p className="text-gray-lighter">
                                Tell the world all about your item and why
                                they’ll love it.
                            </p>
                        </div>
                        <div className="product__pic__container col-group col-flush">
                            <div className="col-sm-4 col-xl-3 col-tv-2">
                                <label className="strong mb-xs-1">
                                    Title
                                    <span
                                        className="required"
                                        aria-hidden="true">
                                        &nbsp;*{' '}
                                    </span>
                                </label>
                                <div className="hide-xs hide-sm mb-xs-2">
                                    <p className="text-smaller text-gray-lighter mb-xs-2">
                                        Include keywords that buyers would use
                                        to search for your item.
                                    </p>
                                </div>
                            </div>
                            <div className={`product__pic ${styles.span}`}>
                                <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                    <span className={styles.span}>
                                        <Select
                                            placeholder="Keywords"
                                            mode="tags"
                                            style={{ width: '100%' }}
                                            onChange={handleChange}
                                            tokenSeparators={[',']}>
                                            {/* {children} */}
                                        </Select>

                                        {/* <Input
                                            placeholderTextColor="green"
                                            placeholder="Keywords"
                                        /> */}
                                    </span>
                                    <Form
                                        className="pt-5"
                                        labelCol={{ span: 4 }}
                                        wrapperCol={{ span: 14 }}
                                        layout="horizontal">
                                        <Form.Item
                                            className={styles.select_category}>
                                            <Cascader
                                                options={options}
                                                onChange={onChange}
                                                placeholder="Category"
                                            />
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* **************************************************** */}
            <div className="container">
                <div className="seller_shope__container pt-5 mb-xs-2 mb-md-0">
                    <div className="panel p-xs-2 p-md-4 mb-xs-2 mb-md-3 mb-lg-4">
                        <div className="mb-xs-3 mb-md-4">
                            <h2 className="mb-xs-1">Inventory and pricing</h2>
                        </div>
                        <div className="product__pic__container col-group col-flush">
                            <div className="col-sm-4 col-xl-3 col-tv-2">
                                <label className="strong mb-xs-1">
                                    Price
                                    <span
                                        className="required"
                                        aria-hidden="true">
                                        &nbsp;*{' '}
                                    </span>
                                </label>
                                <div className="hide-xs hide-sm mb-xs-2">
                                    <p className="text-smaller text-gray-lighter mb-xs-2">
                                        Remember to factor in the costs of
                                        materials, labour, and other business
                                        expenses. If you offer free delivery,
                                        make sure to include the cost of postage
                                        so it doesn't eat into your profits.
                                    </p>
                                </div>
                            </div>
                            <div className="product__pic">
                                <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                    <span className={styles.span}>
                                        <Input placeholder="$ 0" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="product__pic__container col-group col-flush">
                            <div className="col-sm-4 col-xl-3 col-tv-2">
                                <label className="strong mb-xs-1">
                                    Quantity
                                    <span
                                        className="required"
                                        aria-hidden="true">
                                        &nbsp;*{' '}
                                    </span>
                                </label>
                                <div className="hide-xs hide-sm mb-xs-2">
                                    <p className="text-smaller text-gray-lighter mb-xs-2">
                                        For quantities greater than one, this
                                        listing will renew automatically until
                                        it sells out. You’ll be charged a USD
                                        0.20 USD listing fee each time.
                                    </p>
                                </div>
                            </div>
                            <div className="product__pic">
                                <div className="col-sm-8 col-xl-9 col-tv-10 pt-5">
                                    <span className={styles.span}>
                                        <Input placeholder="1" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductStock;
