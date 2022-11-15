import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ADDTOCART, REMOVEFROMCART } from './store/action';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state)=> state.cart);
  const total = useSelector((state)=> state.total);

  const purchaseHandler = (e) =>{
    let name = e.target.options[e.target.selectedIndex].text;
    let price = parseInt(e.target.value);
    let itemObj = {name , price};
    dispatch(ADDTOCART(itemObj));
    
  };

  const deleteHandler = (index, price) =>{
    let deleteItem = {
      index,
      price,
    };
    dispatch(REMOVEFROMCART(deleteItem))
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <select onChange={(e) => purchaseHandler(e)}>
        {
          products.map((product, index) => {
            return (
              <option value={product.price} key={index}>
                {product.name} : {product.price}
              </option>
            );
          })
        }
      </select>
      <hr />
      <h1>Cart</h1>
        {
          cart.map((item, index) => {
            return <li key={index} onClick={() => deleteHandler(index, item.price)}>{item.name}</li>;
          })
        }
      <hr />
      <h1>Total</h1>
      <p>{total}</p>
      <hr />
    </div>
  );
}

export default App;
