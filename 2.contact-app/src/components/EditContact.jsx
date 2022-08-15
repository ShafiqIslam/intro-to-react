import React from 'react';
import withRouter from '../helper/withRouter';

class EditContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.location.state.contact;
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({ name: "", email: "" });
        this.props.navigate('/');
    }

    render() {
        return (
            <div className="ui main">
                <h2>Edit Contact</h2>

                <form className='ui form' onSubmit={this.update}>
                    <div className='ui field'>
                        <label>Name</label>
                        <input
                            type="text" placeholder="Enter Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>

                    <div className='ui field'>
                        <label>Email</label>
                        <input
                            type="text" placeholder="Enter email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>

                    <button className='ui button blue'>Update</button>
                </form>
            </div>
        );
    }
}

export default withRouter(EditContact);