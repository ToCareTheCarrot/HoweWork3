import React from "react";
import { AddForm } from "./AddForm";

function addClient (
  clients,
  clientToAdd
){
  return [...clients, clientToAdd];
}

export class ClientsList extends React.Component {
  state = {
    clients: [
      {
        id : "",
        name: "",
        phone: "",
      }
    ],
  };

  nextId = 1;

  render(){
    return(
      <>
        <AddForm
          onSave={(name,phone) => {
            const client={
              id: this.nextId,
              name: name,
              phone: phone,
            };
            this.setState({
              clients: addClient(this.state.clients, client)
            });
            this.nextId++;
          }
        }/>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map(client => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}