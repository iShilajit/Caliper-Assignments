import "./Shop.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/Cart/action";
const Shop = () => {

  const hproducts = useSelector((store) => store.products.productsData);
  console.log("hproducts",hproducts);
  const dispatch = useDispatch();

  return (
    <div className="productWrapper">
      {hproducts?.map((el) => (
     
        <div className="card" key={el.id}>
          <img src={el.img} alt={el.title} />
          <h4>{el.title}</h4>
          <h5>₹{el.price}/-</h5>
          <button
            onClick={() => {
              dispatch(addItemToCart(el));
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
