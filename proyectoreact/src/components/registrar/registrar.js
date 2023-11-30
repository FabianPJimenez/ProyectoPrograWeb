import React from 'react';
import PropTypes from 'prop-types';
import './registrar.css';
import axios from 'axios';

const Registrar = () => {

  const [formValues, setFormValues] = React.useState({
    Username: "",
    Password:"",

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
        Password: formValues.Password1
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




    
  </div>
)};

Registrar.propTypes = {};

Registrar.defaultProps = {};

export default Registrar;
