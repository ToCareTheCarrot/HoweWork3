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
                id : 1,
                name: "Alex",
                telephoneNumber: "+375296445252",
            }
        ],
    };

    render(){
        return(
            <>
                <AddForm/>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>telephone</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </>
        );
    }
}