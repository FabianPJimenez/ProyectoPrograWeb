import React from 'react';
import PropTypes from 'prop-types';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';


const Login = () => {
  const [user, setUser] = React.useState({
    Nombre_Usuario: "",
    ConstraseNa: "",
 });
  const [userAuth, setUserAuth] = React.useState();
  const navigate = useNavigate();

  const urlDelApi = "http://localhost:8080/inicio";

  const onChangeInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const ComprobarUsuarioLogin = () =>{
    
    axios
    .post(`${urlDelApi}?username=${user.Nombre_Usuario}&password=${user.ConstraseNa}`,null,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    }
    )
    .then(function (response) {
    console.log(response);
     
     
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {

      
    });
  };



  return(
  <div className="login" data-testid="Login">
    
   <TextField id="outlined-basic" label="usuario" variant="outlined" name="Nombre_Usuario" value={user.Nombre_Usuario} onChange={onChangeInput}/>
   <br></br>
   <TextField id="outlined-basic" label="password" variant="outlined"  name="ContraseNa"  value={user.ConstraseNa} onChange={onChangeInput}/>
   <br></br>
   <button onClick={ComprobarUsuarioLogin}> prueba </button>

  </div>
)};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
