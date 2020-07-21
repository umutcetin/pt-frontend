import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class QuestionItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.questionitem.question}</h3>
                {this.renderOptions()}
                <hr></hr>
            </div>
        )
    }

    renderOptions() {
        return this.props.questionitem.question_type.options.map((option) => (
            <label>
                <input type="radio" value={option} />
                {option}
                <br></br>
            </label>
        ));
    }
}



QuestionItem.propTypes = {
    questionitem: PropTypes.object.isRequired
}

export default QuestionItem
