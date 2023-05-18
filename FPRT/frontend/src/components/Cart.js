import { DataGrid  } from '@mui/x-data-grid';
import React from "react"
import './Category.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function Cart() {
  const [data, setData]=React.useState([]);

  const columns = [
    { field: 'medicineName', headerName: 'Medicine Name', width: 150 },
    { field: 'companyName', headerName: 'Company Name', width: 150 },
    { field: 'selected', headerName: 'Quantity', width: 100 },
    { field: 'price', headerName: 'Price', width: 100 },
  ]

  React.useEffect(() => {

    let total = 0
    let newData = JSON.parse(localStorage.getItem("cart"))
    newData.map((item) => {
      let inner = parseInt(item.selected)*parseInt(item.price)
      total = total + inner
    })
    newData.push({id: data.length+2, medicineName: "Total", price: total})
    setData(newData)
  }, []);

  return(
  <div className="categories">
        <div style={{ height: 400, width: '500px', margin: "50px auto" }}>
        <div className='heading-container'>
          <div className='heading'>
            Cart
          </div>
          <div className='button-container'>
            <button
              className='add-button'>Proceed to Payment</button>
          </div>    
        </div>
        <DataGrid
          rows={data}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default Cart