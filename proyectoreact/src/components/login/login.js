import React from 'react';
import PropTypes from 'prop-types';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const [userAuth, setUserAuth] = React.useState();
  const navigate = useNavigate();

  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";

  const onChangeInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const getUsers = () =>{
    axios
    .get(`${urlDelApi}/users`, {
      params: {
        Username: user.username
      }
    })
    .then(function (response) {
      
      console.log(response.data.records[0]);
      setUserAuth(response.data.records[0]);
     
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {

      
    });
  };



  return(
  <div className="login" data-testid="Login">
   
   

  </div>
)};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
