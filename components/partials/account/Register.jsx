import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';

import { Form, Input, Space } from 'antd';
import { connect } from 'react-redux';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(login());
                Router.push('/account/login');
            } else {
            }
        });
    };

    validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    render() {
        return (
            <div className="ps-my-account-2">
                <div className="container">
                    <Form
                        validateMessages={this.validateMessages}
                        className="ps-form--account"
                        onSubmit={this.handleSubmit}>
                        <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/signin">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>Register An Account</h5>
                                <div className="form-group">
                                    {/* <Form.Item
                                        // name="email"
                                        // rules={[
                                        //     {
                                        //         required: true,
                                        //         message:
                                        //             'Please input your email!',
                                        //     },
                                        // ]}
                                        name={['user', 'email']}
                                        // label="Email"
                                        rules={[{ type: 'email' }]}>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
                                        />
                                    </Form.Item> */}

                                    <Form.Item
                                        rules={[
                                            {
                                                type: 'email',
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}
                                        name={['user', 'email']}>
                                        <Input
                                            className="form-control"
                                            placeholder="Email address"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password..."
                                        />
                                    </Form.Item>

                                    {/* <Input.Password placeholder="input password" /> */}
                                    {/* <Input.Password
                                        name="password"
                                        className="form-control"
                                        placeholder="Password..."
                                    /> */}
                                </div>
                                <div className="ps-form__decs">
                                    <p>
                                        Your personal data will be used to
                                        support your experience throughout this
                                        website, to manage access to your
                                        account, and for other purposes
                                        described in our
                                        <a href="#">privacy policy.</a>
                                    </p>
                                </div>

                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
