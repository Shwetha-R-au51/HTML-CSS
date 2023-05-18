import { DataGrid, GridColDef, GridValueGetterParams  } from '@mui/x-data-grid';
import React from "react"
//import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
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

function Categories() {
  const [categories, setCategories] = React.useState([
  ]);
  const [add, setAdd] = React.useState(false);
  const [open, setOpen]=React.useState("");
  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    let body = {
      code: code,
      name: name
    }
    callApi('http://localhost:5001/users/add-category', "POST", body)
  }

  async function callApi(apiUrl, reqType, body) {
    let token = localStorage.getItem("token")    
    axios.post(apiUrl, body, { headers: {                             
            'Content-Type': 'application/json',
            Authorization: token 
        }
    })
    .then(response => {
        getCategories()
    })
    .catch((error) => {
        console.log('error ' + error);
    });
  }

  const getCategories = () => {
    axios.get("http://localhost:5001/users/categories").then((response) => {
      console.log(response)
      let newData = response.data.map((item) => {
        item.id = item._id
        return item
      })
      setCategories(newData);
    });
  }

  React.useEffect(() => {
    if(localStorage.getItem("type") === "buyer") {
      window.location.href = "/buyers"
    }
    else {
      getCategories()
    }
  }, [])

  const handleDelete = (params) => {
    console.log(params)
    axios.delete(`http://localhost:5001/users/categories/${params.row.code}`)  
      .then(res => {  
        getCategories()
      })  

  }

  const columns = [{ field: 'name', headerName: 'Name', width: 150 },
  { field: 'code', headerName: 'Code', width: 60 },
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
  <div className="categories">
        <div style={{ height: 400, width: '500px', margin: "50px auto" }}>
        <div className='heading-container'>
          <div className='heading'>
            Categories
          </div>
          <div className='button-container'>
            <button
              onClick={handleOpen}
              className='add-button'>Add Categories</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
            <Box sx={style}>
                <div className='addHead'> Add Categories</div>
                <form className='CategoryName'>
                <div>
                    <div><b>Name</b></div>
                    <input onChange={(e) => setName(e.target.value)} className='nameD'  required type='text'></input>
                </div>
                <div>
                    <div><b>Code</b></div>
                    <input onChange={(e) => setCode(e.target.value)} className='codeD'  required type='text'></input>
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
          rows={categories}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default Categories