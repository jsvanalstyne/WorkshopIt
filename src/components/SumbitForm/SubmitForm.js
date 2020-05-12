import React, { Component } from 'react';
import "./SubmitForm.css"

class SubmitForm extends Component {
    render() {
      return (
          <div>
        <form className="writingSubmission">
          <h1>Submit your writing sample below:</h1>
          <input className="inputSubmission"
            type="text"
          />
          
        </form>
        <button className="writingSubmit">Submit</button>
        </div>
      );
    }
  }

  export default SubmitForm;