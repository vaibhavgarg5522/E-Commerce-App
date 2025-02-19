import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import BreadCrum from "../components/breadcrum/BreadCrum";
import ProductDisplay from "../components/productdisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionbox/DescriptionBox";
import RelatedProducts from "../components/relatedproducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product =all_product.find((e)=>e.id===Number(productId));
  // const product = all_product.map(item => {
  //   // console.log(item.image)
  //   return (item.id===Number(productId))
  // })

  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox></DescriptionBox>
      <RelatedProducts></RelatedProducts>
    </div>
  );
};

export default Product;
