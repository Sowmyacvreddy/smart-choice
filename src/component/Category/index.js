import React from 'react';
import spritual from './../../assets/spritual.jpg';
import kitchengarden from './../../assets/kitchengarden.jpg';
import './styles.scss';
const ProductCategory = props => {
    return (
        <div className="productscategory">
            <div className="wrap">
                <div className="item" style={{
                    backgroundImage: `url(${spritual})`
                }}>
                    <a>Shop for spritual Products</a>
                </div>
                <div className="item" style={{
                    backgroundImage: `url(${kitchengarden})`
                }}>
                    <a>Shop for Kitchen Garden Products</a>
                </div>
            </div>
        </div>
    )
}
export default ProductCategory;