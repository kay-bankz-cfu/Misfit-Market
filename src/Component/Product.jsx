import { useParams } from "react-router-dom";

const Product = () => {
    const { productId } = useParams();
    
  return (
    <div>
      <h1>Product</h1>

      <p>We are displaying {productId}</p>
    </div>
  );
};

export default Product;
