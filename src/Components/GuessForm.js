import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";

function GuessForm(props){
  const formStyle = {
    border: "2px solid yellow"
  }

  // function handleGuessFormSubmission(event) {
  //   event.preventDefault();
  //   props.onGuess({letterGuessed: event.target.letter.value, id: event.target.letter.value});
  // }

  return (
    <React.Fragment>
    <div style={formStyle}>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='letter'
          placeholder='Letter' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </div>
    </React.Fragment>
  );
}

GuessForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  onGuess: PropTypes.func
};

export default GuessForm;