import React from 'react';



class ShowContacts extends React.Component {
 
    render() {
        return (
            <div>
            <h2>Here are your contacts:</h2>
                <label>{this.props.name}</label><br />
                <label>{this.props.email}</label><br />
                <label>{this.props.phone}</label><br />
                <label>{this.props.address}</label><br />
                <label>{this.props.city}</label><br />
                <label>{this.props.state}</label><br />
                <label>{this.props.zip}</label><br />
            </div>
        );
    }
}

export default ShowContacts;