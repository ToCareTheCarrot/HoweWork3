import React from "react";

export class EditForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.clientName,
      phone: this.props.clientPhone
    }
  }

  render() {
    return (
      <>
        <form onSubmit = {e => e.preventDefault()}>
          <input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => 
              this.setState({
                name: e.target.value
              })
            }
          />
          <input 
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={e => 
              this.setState({
                phone: e.target.value
              })
            }
          />
          <button
            onClick={() => {
              if (this.state.name && this.state.name.trim() && this.state.phone && this.state.phone.trim()){
                this.props.onSave(this.state.name, this.state.phone);
                this.setState({ name: "" });
                this.setState({ phone: "" });
              }
            }}
          >
            Save
          </button>
          <button onClick={() => this.props.onCancel()}>Cancel</button>
        </form>
      </>
    );
  }
}