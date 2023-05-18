import { DataGrid, GridColDef, GridValueGetterParams  } from '@mui/x-data-grid';
import React from "react"
//import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"
import './Category.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

function Medicine() {
  const [medicine, setMedicines] = React.useState([
    ]);
  const [categories, setCategories] = React.useState([])
  const [companyName, setCompanyName] = React.useState("")
  const [medicineName, setMedicineName] = React.useState("")
  const [quantity, setQuantity] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [add, setAdd] = React.useState(false);
  const [open, setOpen]=React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    let body = {
      companyName: companyName,
      medicineName: medicineName,
      quantity: quantity,
      category: category,
      price: price
    }
    callApi('http://localhost:4000/users/add-medicines', "POST", body)
  }

  const handleDelete = (params) => {
    axios.delete(`http://localhost:4000/users/medicines/${params.row.medicineName}`)  
      .then(res => {  
        getMedicines()
      })
  }

  async function callApi(apiUrl, reqType, body) {
    let token = localStorage.getItem("token")    
    axios.post(apiUrl, body, { headers: {                             
            'Content-Type': 'application/json',
            Authorization: token 
        }
    })
    .then(response => {
        getMedicines()
    })
    .catch((error) => {
        console.log('error ' + error);
    });
  }


  React.useEffect(() => {
    console.log(localStorage.getItem("type"))
    if(localStorage.getItem("type") === "buyer") {
      window.location.href = "/buyers"
    }
    else {
      getMedicines()
      getCategories()  
    }
  }, [])

  const getCategories = () => {
    axios.get("http://localhost:4000/users/categories").then((response) => {
      let newData = response.data.map((item) => {
        item.id = item._id
        return item
      })
      setCategories(newData);
    });
  }

  const getMedicines = () => {
    axios.get("http://localhost:4000/users/medicines").then((response) => {
      let newData = response.data.map((item) => {
        item.id = item._id
        return item
      })
      setMedicines(newData);
    });
  }

  const columns = [{ field: 'companyName', headerName: 'Company Name', width: 150 },
  { field: 'medicineName', headerName: 'Medicine Name', width: 150 },
  { field: 'quantity', headerName: 'Quantity', width: 60 },
  { field: 'actions', headerName: 'Actions', width: 100, renderCell: (params) => {
    return (
      <DeleteIcon
        style={{cursor: "pointer", color: "red"}}
        onClick={(e) => handleDelete(params)}
      />
    );
  } 
}
  ]
  return(
  <div className="medicine">
        <div style={{ height: 400, width: '500px', margin: "50px auto" }}>
        <div className='heading-container'>
          <div className='heading'>
            Medicine
          </div>
          <div className='button-container'>
            <button
              onClick={handleOpen}
              className='add-button'>Add Medicine</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
            <Box sx={style}>
                <div className='addHead'> Add Medicine</div>
                <form className='MedicineName'>
                <div>
                    <div><b>Company Name</b></div>
                    <input onChange={(e) => setCompanyName(e.target.value)} className='nameD'  required type='text'></input>
                </div>
                <div>
                    <div><b>Medicine Name</b></div>
                    <input onChange={(e) => setMedicineName(e.target.value)} className='nameD'  required type='text'></input>
                </div>
                <div>
                    <div><b>Quantity</b></div>
                    <input onChange={(e) => setQuantity(e.target.value)} className='codeD'  required type='text'></input>
                </div>
                <div>
                    <div><b>Price</b></div>
                    <input onChange={(e) => setPrice(e.target.value)} className='codeD'  required type='text'></input>
                </div>
                <div>
                    <div><b>Categories</b></div>
                    <select onChange={(e) => setCategory(e.target.value)} className='selectCat'>
                      {categories.map((item) => {
                        return (
                          <option value={item.code}>{item.code}</option>
                        )
                      })}
                    </select>
                </div>
                <div className='buttonOut'>
                    <button className='buttonD' onClick={() => handleSubmit()}>ADD</button>
                </div>
              </form> 
            </Box>
            </Modal>
          </div>    
        </div>
        <DataGrid
          rows={medicine}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default Medicine;