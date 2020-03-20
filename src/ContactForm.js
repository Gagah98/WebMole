import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';





class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        telephone:'',
        societe: '',
      }
    }

    handleSubmit(e) {
      e.preventDefault();
  
      fetch('http://localhost:3002/send',{
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(
        (response) => (response.json())
         ).then((response)=>{
        if (response.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }


    resetForm(){
    
      this.setState({name: '', email: '', message: '', telephone:'', societe: ''})
   }
  
  render() {
   return(
     <main>
       <h2>Contactez-nous</h2>
       <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
       <Grid container spacing={3}>
       <Grid item xs={6}>
        <TextField
          required
          id="outlined-required"
          label="Nom"
          variant="outlined"
          margin="dense"
          fullWidth
          value={this.state.name} 
          onChange={this.onNameChange.bind(this)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={this.state.email} 
          onChange={this.onEmailChange.bind(this)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          id="outlined"
          label="Telephone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={this.state.telephone} 
          onChange={this.onTelChange.bind(this)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          id="outlined"
          label="Société"
          variant="outlined"
          margin="dense"
          fullWidth
          value={this.state.societe} 
          onChange={this.onSocieteChange.bind(this)}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Message"
          margin="dense"
          variant="outlined"
          multiline
          rows="4"
          fullWidth
          value={this.state.message} 
          onChange={this.onMessageChange.bind(this)}
        />
        </Grid>
        <Grid item xs={12} >
        <Button type="submit" variant="outlined">Envoyer</Button>
        </Grid>
        </Grid>
        </form>
      </main>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
    onTelChange(event) {
      this.setState({telephone: event.target.value})
    }
    onSocieteChange(event) {
      this.setState({societe: event.target.value})
    }
  
   
  }
  
  export default ContactForm;