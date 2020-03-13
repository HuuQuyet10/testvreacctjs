import React from 'react';
import { Table, Button } from 'reactstrap';


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                Id: 0,
                firstname: 'Quyết',
                LastName: 'Phạm',
                Username: 'Quyet1'
            },
            {
                Id: 1,
                firstname: 'Quyết',
                LastName: 'Phạm',
                Username: 'Quyet1'
            },
            {
                Id: 2,
                firstname: 'Quyết',
                LastName: 'Phạm',
                Username: 'Quyet1'
            },
            {
                Id: 3,
                firstname: 'Quyết',
                LastName: 'Phạm',
                Username: 'Quyet1'
            },
            {
                Id: 4,
                firstname: 'Quyết',
                LastName: 'Phạm',
                Username: 'Quyet1'
            },
            {
                Id: 5,
                firstname: 'Quyết',
                LastName: 'Phạm',
                Username: 'Quyet1'
            }
        ]
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row"><h3>{index + 1}</h3></th>
                                    <td><h3>{item.firstname}</h3></td>
                                    <td><h3>{item.LastName}</h3></td>
                                    <td><h3>{item.Username}</h3></td>
                                    <td>
                                        <Button color="danger">Xóa</Button>
                                        <Button color="success">Sửa</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}


export default About;