import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProduct } from "../Redux/actions/productAction";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(products);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err );
      });
      console.log(response.data);
      dispatch(setProduct(response.data));
  };
  useEffect(()=>{
    fetchProducts();
    console.log(products)
  },[])
  return (
    <div className="ui grid container" style={{marginTop: "20px"}}>
      <Product />
    </div>
  );
}

export default ProductListing;
