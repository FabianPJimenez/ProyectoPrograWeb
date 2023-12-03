import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.css';
import Notes from '../notes/notes';
import Grid from '@mui/material/Grid';
import  Card from '@mui/material/Card';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Home = () => {


  const [note, setNote] = React.useState();
  const [addNote, setAddNote] = React.useState();

  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";

  useEffect(() =>{
    getNotes();
     }, []);
   
  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setAddNote({ ...addNote, [name]: value });
    console.log(addNote);
  };
  const getNotes = (event) => {
    axios
      .get(`${urlDelApi}/notes`)
      .then(function (response) {
        // handle success
        setNote(response.data.records);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  const AgregarNote = (event) => {
console.log("puto el que lo lea");
    axios
      .post(`${urlDelApi}/notes`,{
        UserID: 2,
        Title: addNote.Title,
        Content: addNote.Content,
      })
      .then(function (response) {
        console.log(response);
        // handle success
        getNotes();
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

      
  return (
  <div className="home" data-testid="Home">
 <TextField
     id="outlined-basic"
      name="Title"
      // label="Outlined"
      // onChange={onChancheInput}
      variant="standard"
      onChange={onChange}
    />
     <TextField
     id="outlined-basic"
      name="Content"
      // label="Outlined"
      // onChange={onChancheInput}
      variant="standard"
      onChange={onChange}
    />
   <br></br>
   <Button color="secondary" variant="text" onClick={AgregarNote}>
      Agregar
    </Button>
    <Card id="card-home" /*className={styles["card-home"]}*/>
        

        <Grid container spacing={2}>
          {note?.map((nota, index) => {
            return (
              <Grid item xs={4}>
                {" "}
                
                <Notes titulo="titulo" note={nota} refrescar={getNotes} ></Notes>
              </Grid>
            );
          })}
        </Grid>
      </Card>
  </div>
)};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
