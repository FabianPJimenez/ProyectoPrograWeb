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

  const urlDelApi = "https://2eeb-190-113-115-45.ngrok.io";

  const onChangeInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const ComprobarUsuarioLogin = () =>{
    axios
    .get(`${urlDelApi}/users`, {
      params: {
        Username: user.username
      }
    })
    .then(function (response) {
      const users = response.data.records;
      const usernameToFilter = user.username;
      const filteredUsers = users.filter(user => user.Username === usernameToFilter);
      const filteredUser = filteredUsers;
      setUserAuth(filteredUser);
     
     
      
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
