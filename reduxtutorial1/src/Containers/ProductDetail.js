import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, removeSelectProduct } from "../Redux/actions/productAction";

function ProductDetail() {
  const product = useSelector((state) => state.product);
//   const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    dispatch(selectProduct(response.data));
    console.log(product);
  };
  useEffect(() => {
    if (productId && productId != "") {
      fetchProductDetails();
    }
    return ()=>{
        dispatch(removeSelectProduct())
    }

    console.log(product);
  }, [productId]);
  return (
    <div className="ui grid container" style={{marginTop: "20px"}}>
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={product.image} alt="" />
            </div>
            <div className="column rp">
              <h1>{product.title}</h1>
              <h2>
                <a className="ui teal tag label">{product.price}</a>
              </h2>
              <h3 className="ui brown block header">{product.category}</h3>
              <p>{product.description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidded content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
