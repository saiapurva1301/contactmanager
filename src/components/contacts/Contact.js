import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../layout/Header';
import { contact } from './Contacts';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };
  onShowClick = (name, e) => {};

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem',
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul>
                  <li className="list-group-item">Email : {email}</li>
                  <li className="list-group-item">Phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
