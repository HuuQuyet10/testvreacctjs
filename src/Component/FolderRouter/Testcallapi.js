import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';


class About extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.persons && this.state.persons.length && this.state.persons.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{item.id}</th>
                                        <th>{item.name}</th>
                                        <th>{item.username}</th>
                                        <th>{item.email}</th>
                                        <th>
                                            <Button color="danger">Xóa</Button>
                                            <Button color="success">Sửa</Button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}


export default About;