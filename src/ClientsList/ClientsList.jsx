import React from "react";
import { AddForm } from "./AddForm";
import { EditForm } from "./EditForm";

function addClient (
  clients,
  clientToAdd
){
  return [...clients, clientToAdd];
}

function deleteClient (
  clients,
  clientId
){
  const copyClients = [...clients];
  const clientIndex = copyClients.map(client => client.id).indexOf(clientId);
  copyClients.splice(clientIndex,1);
  return copyClients;
}

function updateClient (
  clients,
  id,
  fieldToUpdate,
){
  const clientIndex = clients.findIndex(client => client.id === id);
  const clientToUpdate = clients[clientIndex];
  const clientCopy = {...clientToUpdate, ...fieldToUpdate};//так и не понял почему это работает?почему оно именно заменяет нужные поля?
  //это же оператор spread,он раскладывает объект на отдельные поля и вкопирывает в наш объект в state, а получается, что не добавляет, а именно заменяет

  return [
    ...clients.slice(0, clientIndex),
    clientCopy,
    ...clients.slice(clientIndex + 1)
  ];
}

export class ClientsList extends React.Component {
  state = {
    clients: [],

    clientToEdit: null
  };

  nextId = 1;

  render(){
    if (this.state.clientToEdit){
      return(
        <>
          <EditForm
            clientName = {
              this.state.clients.find(client => client.id === this.state.clientToEdit).name
            }

            clientPhone = {
              this.state.clients.find(client => client.id === this.state.clientToEdit).phone
            }

            onSave = {(name, phone) => {
              const copy = updateClient(this.state.clients, this.state.clientToEdit, {name, phone});

              this.setState({
                clients: copy,
                clientToEdit: null
              });
            }}  

            onCancel = {() =>
              this.setState({
                clientToEdit: null
              })
            }
          />
        </>
      );
    }

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
            {this.state.clients.map((client,index) => (
              <tr key={client.id}>
                <td>{index+1}</td>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <button onClick={() => {
                  this.setState({
                    clients: deleteClient(this.state.clients, client.id)
                  });
                }
                }>
                  Delete
                </button>
                <button
                  onClick={() => 
                    this.setState({
                      clientToEdit: client.id
                    })
                  }
                >
                  Edit
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}