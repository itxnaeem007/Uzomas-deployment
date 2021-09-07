import React from 'react';
import UploadProductPics from '~/components/partials/account/sellerModules/UploadProductPics';
import SellerProductInfo from './sellerModules/SellerProductInfo';

const AddSellerPost = () => {
    return (
        <>
            <div className="Seller__Container">
                <div className="post__pictures">
                    <span>Post Product Pics</span>
                    <UploadProductPics />
                </div>
                <div className="post__info">
                    <span>Post Product Info</span>
                    <SellerProductInfo />
                </div>
            </div>

            {/* custome style..... */}
            <style jsx>{`
                .Seller__Container {
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    text-align: center;
                }
                .Seller__Container > div > span {
                    margin-bottom: 10px;
                    font-size: 24px;
                    color: #000;
                    font-weight: 400;
                    line-height: 1.2;
                }
                .post__pictures {
                    width: 30%;
                }
                .post__info {
                    width: 70%;
                }
            `}</style>
        </>
    );
};

export default AddSellerPost;
