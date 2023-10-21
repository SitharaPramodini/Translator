import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Phasebook.css';

class AddPhase extends Component {
  state = {
    description: "",
    note: "",
  };

  showAlert = (message, type) => {
    const alertBox = document.createElement('div');
    alertBox.classList.add('custom-alert1', `custom-alert1-${type}`);
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, note } = this.state;

    if (description.trim() === "") {
      this.showAlert("Please enter a note heading", "error");
      return;
    }

    const data = {
      description,
      note,
    };

    axios.post("http://localhost:8070/post/save", data)
      .then((res) => {
        if (res.data.success) {
          this.showAlert('Note saved successfully', 'success');
          this.setState({
            description: "",
            note: "",
          });
        }
      })
      .catch(error => {
        console.error("Please enter a note", error);
        this.showAlert("Please enter a note", "error");
      });
  };

  render() {
    return (
      <div className="notepad-container">
        <h1 className="notepad-title">NOTEPAD</h1>
        <form className="notepad-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>NOTE HEADING</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Note Heading"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>NOTE</label>
            <textarea
              className="form-control"
              name="note"
              placeholder=""
              value={this.state.note}
              onChange={this.handleInputChange}
              style={{ width: "100%", height: "180px" }}
            />
          </div><br></br>
          <div className="text-center">
          &nbsp;&nbsp;      
            <button className="btn btn-success" type="submit">
              <i className="far fa-check-square"></i>
              Save Note
            </button>
            <br></br>
            
            <Link to="/viewphase" className="btn btn-primary ml-2">
              View Notes
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPhase;
