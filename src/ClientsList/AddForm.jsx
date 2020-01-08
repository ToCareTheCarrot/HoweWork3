import React from "react";

export class AddForm extends React.Component {
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
                <table>
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>Вася</th>
                            <th>+375296666666</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </>
        );
    }
}