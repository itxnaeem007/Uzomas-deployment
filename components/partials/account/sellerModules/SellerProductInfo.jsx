import React from 'react';
import { Cascader, Form, Input } from 'antd';
import SellerProductPrice from './SellerProductPrice';

const SellerProductInfo = () => {
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
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal">
                <Form.Item label="Select Product">
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="Please select"
                    />
                </Form.Item>
            </Form>
            <Form>
                <Form.Item
                    name={['Product Name']}
                    label="Product Name"
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>

            <div className="product__price">
                <SellerProductPrice />
            </div>
            <Form>
                <Form.Item
                    name={['Product Disciption']}
                    label="Disciption"
                    rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
            </Form>
            <style jsx>{`
                .product__price {
                    margin-left: 10px;
                }
            `}</style>
        </>
    );
};

export default SellerProductInfo;
