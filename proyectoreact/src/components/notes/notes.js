import React from 'react';
import PropTypes from 'prop-types';
import './notes.css';
import TextField  from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import axios from 'axios';

const Notes = (props) => {
  const [note, setNote] = React.useState(props.note);
  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";


  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setNote({ ...note, [name]: value });

    console.log(note);
  };
  const ActualizarNote = () =>{
    axios
    .put(`${urlDelApi}/notes/${note.NoteID}`, {
      
        Title: note.Title,
        Content: note.Content,
      
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {

      
    });
  };
  const elimminarNote = () =>{
    console.log(note.UserID);
    props.refrescar();
    axios
    .delete(`${urlDelApi}/notes/${note.NoteID}`, {
    })
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
   
  <div className="notes" data-testid="Notes">
    <TextField
     id="outlined-basic"
      name="Title"
      // label="Outlined"
      defaultValue={props.note.Title}
      // onChange={onChancheInput}
      variant="standard"
      onChange={onChange}
    />
    <TextField
      id="outlined-basic"
      name="Content"
      // label="Outlined"
      defaultValue={props.note.Content}
      // onChange={onChancheInput}
      variant="standard"
      onChange={onChange}
    />
    <br />
    <Button color="secondary" variant="text" onClick={ActualizarNote}>
      editar
    </Button>
    <Button color="secondary" variant="text" onClick={elimminarNote}>
      BORRAR
    </Button>
   
  </div>
)};

Notes.propTypes = {};

Notes.defaultProps = {};

export default Notes;
