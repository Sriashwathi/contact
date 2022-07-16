import React from "react";
class AddContact extends React.Component{
  state = {
    name:"",
    email:"",
  };
  add = (e) =>
  {
    e.preventDefault();
    if(this.state.name === "" || this.state.email===""){
    
      alert("All fiuleds are mandatory");
      return;
    }
    this.props.addContactHandler(this.state); //we can get email adn name in App.js as well
    this.setState({name:"",email:""});    
  }
  render(){
    return(
    <div ClassName ="ui main">
      <h1>Addcontact</h1>
      <h1>Addcontact
      </h1>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name : e.target.value})}/>
        </div>
        <div className="field">
          <label>Name</label>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email : e.target.value})}/>
        </div>
        <div>
          <button className="ui button blue">Add</button>
        </div>
      </form>
    </div>
    );
    }
}
export default AddContact;