import React from "react";
  

export class AddForm extends React.Component {
  state = {
    name: "",
    phone: "",
  };

  onChange = e => 
    this.setState({
      [e.target.name]: e.target.value
    });

  render(){
    return(
      <>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}/>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}/>
          <button
            onClick={() => {
              if(this.state.name && this.state.phone &&
              this.state.name.trim() && this.state.phone.trim()){
                this.props.onSave(this.state.name,this.state.phone);
                this.setState({ name: "" });
                this.setState({ phone: "" });
              }
            }
          }>
          Add
          </button>
        </form>
      </>
    );
  }
}
