import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';
import Web3 from 'web3';
import LazyLoad from 'react-lazyload';
import { useWeb3React } from '@web3-react/core';
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

const Login = (props) => {

    return (
        <div className="ps-my-account">
            
        </div>
    );
};
// const mapStateToProps = (state) => {
//     return state.auth;
// };
// export default connect(mapStateToProps)(Login);
export default Login;
