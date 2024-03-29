import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';


export default function Signup() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = JSON.stringify({
      type: tabIndex === 0 ? "buyer" : "seller",
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
    })
    const response = await callApi('http://localhost:5001/users', 'POST', body)

  };

  async function callApi(apiUrl,method,body) {
    try {
    
      // Define the API request options
      const requestOptions = {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      if(body){
          requestOptions.body= body
      }
    
      const response = await fetch(apiUrl, requestOptions);
        // Handle the API response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      localStorage.setItem("token", data.token)
      localStorage.setItem("type", data.type)
      setTimeout(() => {
        window.location.href="/medicines"        
      }, 100);
      // return data;
    } catch (error) {
        // Handle errors that occur during the API request
        console.error('There was a problem with the API request:', error);
        return false;
    }
  }

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 1,
          py: 3,
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
    <Box >
        <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="Buyers" />
            <Tab label="Sellers" />
        </Tabs>
    </Box>
        <Typography component="h1" variant="h5">
          Create account
        </Typography>


        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Name"
            name="name"
            autoComplete="text"
            placeholder="First and Last name"
            autoFocus
          /> 
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}