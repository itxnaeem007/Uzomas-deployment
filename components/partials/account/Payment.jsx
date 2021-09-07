import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { Radio, Select } from 'antd';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import { contractAbi, contractAddress } from '../../../utilities/data';
import Web3 from 'web3';
import LazyLoad from 'react-lazyload';

const { Option } = Select;

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 2,
        };
    }
    componentDidMount() {
        this.loadWeb3();
    }
    loadWeb3 = async () => {
        let isConnected = false;
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                isConnected = true;
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                isConnected = true;
            } else {
                isConnected = false;
                notification.open({
                    message: 'Metamask is not installed',
                    description:
                        ' please install it on your browser to connect.',
                    duration: 500,
                });
                // "Metamask is not installed, please install it on your browser to connect.",
            }
        } catch (error) {
            console.log(error);
        }
    };
    handlePurchase = () => {
        const web3 = window.web3;

        let _amount = this.props?.amount.toString();
        let contract = new web3.eth.Contract(contractAbi, contractAddress);
        let account = this.props?.account;
        console.log('web=======', web3.utils.toWei(_amount, 'ether'));
        try {
            contract.methods
                .stakeEth()
                .send({
                    from: account,
                    value: web3.utils.toWei(_amount, 'ether'),
                })
                .on('transactionHash', async (hash) => {
                    // message: 'Your transaction is pending',
                })
                .on('receipt', async (receipt) => {
                    // message: 'Your transaction is confirmed',
                })
                .on('error', async (error) => {
                    console.log('error', error);
                });
        } catch (e) {
            console.log('error rejection', e);
        }
    };
    handleChangePaymentMethod = (e) => {
        this.setState({ method: e.target.value });
    };

    render() {
        let month = [],
            year = [];
        for (let i = 1; i <= 12; i++) {
            month.push(i);
        }
        for (let i = 2019; i <= 2050; i++) {
            year.push(i);
        }
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Payment</h1>
                    </div>
                    <div className="ps-section__content">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="ps-block--shipping">
                                    {/* <div className="ps-block__panel">
                                        <figure>
                                            <small>Contact</small>
                                            <p>test@gmail.com</p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                        <figure>
                                            <small>Ship to</small>
                                            <p>
                                                2015 South Street, Midland,
                                                Texas
                                            </p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                    </div> */}
                                    {/* <h4>Shipping Method</h4> */}
                                    {/* <div className="ps-block__panel">
                                        <figure>
                                            <small>
                                                International Shipping
                                            </small>
                                            <strong>$20.00</strong>
                                        </figure>
                                    </div> */}
                                    <h4>Payment Methods</h4>
                                    <div className="ps-block--payment-method">
                                        {/* <div className="ps-block__header">
                                            <Radio.Group
                                                onChange={e =>
                                                    this.handleChangePaymentMethod(
                                                        e
                                                    )
                                                }
                                                value={this.state.method}>
                                                <Radio value={1}>
                                                    Visa / Master Card
                                                </Radio>
                                                <Radio value={2}>Paypal</Radio>
                                            </Radio.Group>
                                        </div> */}
                                        <div className="ps-block__content">
                                            {this.state.method === 1 ? (
                                                <div className="ps-block__tab">
                                                    <div className="form-group">
                                                        <label>
                                                            Card Number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Card Holders
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <div className="form-group">
                                                                <label>
                                                                    Expiration
                                                                    Date
                                                                </label>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <Select
                                                                            defaultValue={
                                                                                1
                                                                            }>
                                                                            {month.map(
                                                                                (
                                                                                    item
                                                                                ) => (
                                                                                    <Option
                                                                                        value={
                                                                                            item
                                                                                        }
                                                                                        key={
                                                                                            item
                                                                                        }>
                                                                                        {
                                                                                            item
                                                                                        }
                                                                                    </Option>
                                                                                )
                                                                            )}
                                                                        </Select>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <Select
                                                                            defaultValue={
                                                                                2020
                                                                            }>
                                                                            {year.map(
                                                                                (
                                                                                    item
                                                                                ) => (
                                                                                    <Option
                                                                                        value={
                                                                                            item
                                                                                        }
                                                                                        key={
                                                                                            item
                                                                                        }>
                                                                                        {
                                                                                            item
                                                                                        }
                                                                                    </Option>
                                                                                )
                                                                            )}
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                                <label>
                                                                    CVV
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="ps-btn ps-btn--fullwidth">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="ps-block__tab">
                                                    <a
                                                        className="ps-btn"
                                                        onClick={
                                                            this.handlePurchase
                                                        }>
                                                        <LazyLoad>
                                                            <img
                                                                src="/static/img/meta-mask.png"
                                                                alt="Luxury Ledger Market"
                                                                style={{
                                                                    paddingRight:
                                                                        '15px',
                                                                }}
                                                            />
                                                        </LazyLoad>
                                                        Pay Now
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="ps-block__footer">
                                        <Link href="/account/shipping">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                Return to shipping
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                                <div className="ps-form__orders">
                                    <ModulePaymentOrderSummary />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return { amount: state?.cart?.amount, account: state?.auth?.account };
};
export default connect(mapStateToProps)(Payment);
