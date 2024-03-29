import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Login() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);    
      const body = JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      })
      const response = await callApi('http://localhost:4000/users/login', 'POST', body)
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
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            <Grid item xs>
              {false && <Link href="#" variant="body2">
                Forgot password?
              </Link>}
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}