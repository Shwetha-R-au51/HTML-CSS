//import logo from './logo.svg';
import React from "react"
import Link from "@mui/material/Link";
import axios from "axios"
import './buyer.css';

function Buyer() {
  const [medicines, setMedicines] = React.useState(
    [
    ]
  );
  const [cart, setCart] = React.useState([])
  const [selected, setSelected] = React.useState("");

  React.useEffect(() => {
    getMedicines()
  }, []);

  const getMedicines = () => {
    axios.get("http://localhost:5001/users/medicines").then((response) => {
      let newData = response.data.map((item) => {
        item.id = item._id
        item.selected = 0
        return item
      })
      setMedicines(newData);
    });
  }

        
  const filterBy = (selection) => {
    setSelected(selection)
    let newList = medicines.sort((a,b) => a.price - b.price);
    if(selection === "rating") {
      newList = medicines.sort((a,b) => b.rating - a.rating);
    }
    setMedicines(newList)
  }

  const updateCartHandler = (id, value) => {
    let updatedCart = medicines.map(item => {
      if(item.id === id) {
        item.selected += value
        return item
      }
      else {
        return item
      }
    })
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
 }

  return (
    <div className="App">
      <div className="heading">
        Medicines
        <button className="proceed-to-checkout">
          <Link href="/cart" variant="body2">
            Proceed to Checkout
          </Link>
        </button>
      </div>
      {/* <div>
        Filter By &nbsp;
        <select value={selected} onChange={(e) => filterBy(e.target.value)}>
          <option value="" disabled>
            Select a filter
          </option>
          <option value="price">
            Price
          </option>
          <option value="rating">
            Rating
          </option>
        </select>
      </div> */}
      <div className="product-list">
        {medicines?.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="title">
                {item.medicineName}
                <span className="rating">
                  {item.companyName}
                </span>
              </div>
              <div className="description">
                Quantity Available: {item.quantity}
              </div>
              <div className="price">
                Rs. {item.price}
              </div>

              <div className="description">
                <div>Quantity Selected</div>
                <button onClick={() => updateCartHandler(item.id, +1)}>+</button>
                &nbsp;{item.selected}&nbsp;
                <button
                  onClick={() => updateCartHandler(item.id, -1)}
                  >
                  -
                </button>
              </div>
            </div>  
          )
        })}
      </div>
    </div>
  );
}

export default Buyer;
