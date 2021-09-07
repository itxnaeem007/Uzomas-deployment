import React from 'react';
import { Divider } from 'antd';

const ShopPreferences = () => {
    return (
        <div className="container">
            <div className="text-center mb-xs-1">
                <h2>Shop Preferences</h2>
                <span>Let's get started! Tell us about you and your shop.</span>
            </div>
            <div className="seller_shope__container pt-5 mb-xs-2 mb-md-0">
                <form className="seller_shope__form">
                    <div className="form-group shop_name">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Your Shop ID"
                            rules={[
                                {
                                    type: 'text',
                                    message:
                                        'Shop names must have 4–20 characters',
                                },
                                {
                                    required: true,
                                    message: 'Please input your Shop ID',
                                },
                            ]}
                        />
                        <div className="shop_name_recomedation pt-2">
                            Your shop name will appear in your shop and next to
                            each of your listings throughout uzomas. After you
                            open your shop, you can change your name once.
                        </div>
                    </div>
                    <Divider />
                    <fieldset className="seller_openion col-group col-flush">
                        <div>
                            <legend className="col-md-3 col-lg-7 mb-xs-1">
                                <span className="strong">
                                    Which of these best describes you?
                                </span>
                                <span className="required" aria-hidden="true">
                                    &nbsp;*{' '}
                                </span>
                            </legend>
                        </div>
                        <div className="radio_container col-md-4">
                            <radiogroup data-field="seller-type" required>
                                <label className="custom__radio mb-xs-1">
                                    <input
                                        className="radio__input"
                                        type="radio"
                                        value="1"
                                        name="intention"
                                    />
                                    <div className="radio__label"></div>
                                    <span>Selling is my full-time job</span>
                                </label>

                                <label className="custom__radio mb-xs-1">
                                    <input
                                        className="radio__input"
                                        type="radio"
                                        value="2"
                                        name="intention"
                                    />
                                    <div className="radio__label"></div>
                                    <span>
                                        I sell part-time but hope to sell
                                        full-time
                                    </span>
                                </label>

                                <label className="custom__radio mb-xs-1">
                                    <input
                                        className="radio__input"
                                        type="radio"
                                        value="3"
                                        name="intention"
                                    />
                                    <div className="radio__label"></div>
                                    <span>
                                        I sell part-time and that’s how I like
                                        it
                                    </span>
                                </label>

                                <label className="custom__radio mb-xs-1">
                                    <input
                                        className="radio__input"
                                        type="radio"
                                        value="4"
                                        name="intention"
                                    />
                                    <div className="radio__label"></div>
                                    <span className="mr-5">Other</span>
                                </label>
                            </radiogroup>
                        </div>
                        <div className="col-md-4 col-offset-md-1 col-offset-lg-2 hide-xs hide-sm text-smaller text-gray-lighter">
                            This is just an FYI for us and won’t affect the
                            opening of your shop.
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ShopPreferences;
