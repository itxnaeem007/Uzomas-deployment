import React from 'react';

const SellerDashBoardOrder = () => {
    return (
        <>
            <div className="ps-block--vendor-dashboard">
                <div className="ps-block__header">
                    {/* <i className="icon-alarm-ringing"></i> */}
                    <h3>Order</h3>
                </div>
                <div className="ps-block--vendor-dashboard">
                    <div className="ps-block__content">
                        <div className="table-responsive">
                            <table className="table ps-table ps-table--vendor">
                                <thead>
                                    <tr>
                                        <th>Order Type</th>
                                        <th>Order Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="#">Total Order</a>
                                        </td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">Completed Order</a>
                                        </td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <a href="#">Pending Order</a>
                                        </td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <a href="#">Processsing Order</a>
                                        </td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <a href="#">Cancelled Order</a>
                                        </td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <a href="#">Refunded Order</a>
                                        </td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <a href="#">On Hold Order</a>
                                        </td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellerDashBoardOrder;
