import React from 'react';
class TestState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: 'đây là màn hình top',
            footer: 'đây là màn hình footer',
            textfield: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing '
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.top}</h1>
                <h2>{this.state.footer}</h2>
                <p>{this.state.textfield}</p>
            </div>
        );
    }
}
export default TestState;
