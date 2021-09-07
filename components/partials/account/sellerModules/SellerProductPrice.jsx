import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
const { Option } = Select;

const PriceInput = ({ value = {}, onChange }) => {
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState('usd');

    const triggerChange = (changedValue) => {
        onChange?.({
            number,
            currency,
            ...value,
            ...changedValue,
        });
    };

    const onNumberChange = (e) => {
        const newNumber = parseInt(e.target.value || '0', 10);

        if (Number.isNaN(number)) {
            return;
        }

        if (!('number' in value)) {
            setNumber(newNumber);
        }

        triggerChange({
            number: newNumber,
        });
    };

    const onCurrencyChange = (newCurrency) => {
        if (!('currency' in value)) {
            setCurrency(newCurrency);
        }

        triggerChange({
            currency: newCurrency,
        });
    };

    return (
        <span>
            <Input
                type="text"
                value={value.number || number}
                onChange={onNumberChange}
                style={{
                    width: 100,
                }}
            />
            <Select
                value={value.currency || currency}
                style={{
                    width: 80,
                    margin: '0 8px',
                }}
                onChange={onCurrencyChange}>
                <Option value="dollar">USD</Option>
                {/* <Option value="euro">Euro</Option>
                <Option value="gbr">GBR</Option> */}
            </Select>
        </span>
    );
};

const SellerProductPrice = () => {
    const onFinish = (values) => {
        console.log('Received values from form: ', values);
    };

    const checkPrice = (_, value) => {
        if (value.number > 0) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Price must be greater than zero!'));
    };

    return (
        <>
            <Form
                name="customized_form_controls"
                layout="inline"
                onFinish={onFinish}
                initialValues={{
                    price: {
                        number: 0,
                        currency: 'USD',
                    },
                }}>
                <Form.Item
                    name="price"
                    label="Product Price"
                    rules={[{ required: true }]}>
                    <PriceInput />
                </Form.Item>
            </Form>
        </>
    );
};

export default SellerProductPrice;
