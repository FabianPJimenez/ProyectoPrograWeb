import React from 'react';
import PropTypes from 'prop-types';
import './registrar.css';
import TextField  from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import axios from 'axios';

const Registrar = () => {

  const [formValues, setFormValues] = React.useState({
    Username: "",
    Password:"",
    Email:"",

  });

  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";

  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const RegistrarUsuario = () => {

    axios
      .post(`${urlDelApi}/users`, {
        Username: formValues.Username,
        Email: formValues.Email,
        Password: formValues.Password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };







  return(
    
  <div className="registrar" data-testid="Registrar">
 
    <TextField
     id="outlined-basic"
      name="Username"
      label="Username"
      // onChange={onChancheInput}
      variant="standard"
      onChange={onChange}
    />
    <TextField
      id="outlined-basic"
      name="Password"
     label="Password"
      // onChange={onChancheInput}
      variant="standard"
      onChange={onChange}
    />
    <TextField
      id="outlined-basic"
      name="Email"
      label="Email"
      // onChange={onChancheInput}
      variant="standard"
      onChange={onChange}
    />

 <Button color="secondary" variant="text" onClick={RegistrarUsuario}>
      Registrar
    </Button>


    
  </div>
)};

Registrar.propTypes = {};

Registrar.defaultProps = {};

export default Registrar;
