import React, { useState } from 'react';
import { Cascader, Form, Input } from 'antd';
import { relatedProduct } from '../../../../public/static/data/product';
import ProductOffline from '../../../elements/products/ProductOffline';
import styles from '~/styles/sellerProducts.module.css';

const OutOfStock = () => {
    const [listView, setListView] = useState(true);

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
        <div className="ps-shopping vendor-shop">
            <div className={styles.search__product}>
                <span className={styles.span}>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal">
                        <Form.Item className={styles.select_category}>
                            <Cascader
                                options={options}
                                onChange={onChange}
                                placeholder="Category"
                            />
                        </Form.Item>
                    </Form>
                </span>
                <span className={styles.span}>
                    <Input placeholder="Product ID" />
                </span>
                <span className={styles.span}>
                    <Input placeholder="Title" />
                </span>

                <span className={styles.span}>
                    <button
                        className="ps-btn ps-btn--sm"
                        // onClick={() => setShowModel(!showModel)}
                    >
                        Search
                    </button>
                </span>
            </div>

            <div className="ps-block__content">
                <div className="table-responsive">
                    <table className="table w-table ps-table ps-table--vendor">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="#">
                                        Marshall Kilburn Portable Wireless
                                        Bluetooth Spe...
                                    </a>
                                </td>
                                <td>Suspeded</td>

                                <td>$235.35</td>
                                <td>25</td>
                                <td>Nov 4, 2019</td>
                                <td>24.5%</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">
                                        Unero Military Classical Backpack
                                    </a>
                                </td>
                                <td>Suspeded</td>

                                <td>$235.35</td>
                                <td>25</td>
                                <td>Nov 4, 2019</td>
                                <td>24.5%</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">
                                        Sleeve Linen Blend Caro Pana T-Shirt
                                    </a>
                                </td>
                                <td>Suspeded</td>

                                <td>$235.35</td>
                                <td>25</td>
                                <td>Nov 4, 2019</td>
                                <td>24.5%</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">
                                        Harman Kardon Onyx Studio 2.0
                                    </a>
                                </td>
                                <td>Suspeded</td>

                                <td>$235.35</td>
                                <td>25</td>
                                <td>Nov 4, 2019</td>
                                <td>24.5%</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">
                                        Korea Long Sofa Fabric In Blu Navy Color
                                    </a>
                                </td>
                                <td>Suspeded</td>

                                <td>$235.35</td>
                                <td>25</td>
                                <td>Nov 4, 2019</td>
                                <td>24.5%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OutOfStock;
