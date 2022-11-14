import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const products = useSelector((state) => state.products);

  const purchaseHandler = (e) =>{
    let name = e.target.options[e.target.selectedIndex].text;
    let price = parseInt(e.target.value);
    let itemObj = {name , price};
    
  }
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
      
      <hr />
      <h1>Total</h1>
      <hr />
    </div>
  );
}

export default App;
