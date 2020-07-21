import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class QuestionItem extends Component {
    render() {
        return (
            <div>
                <h3 class="text-warning">{this.props.questionitem.question}</h3>
                <ul class="list-group list-group-flush">
                    {this.renderOptions()}
                </ul>
                <hr></hr>
            </div>
        )
    }

    renderOptions() {
        return this.props.questionitem.question_type.options.map((option) => (
            <li class="list-group-item bg-dark text-white">
                <label>
                    <input type="radio" value={option} />
                    &nbsp;{option} 
                </label>
            </li>
        ));
    }
}



QuestionItem.propTypes = {
    questionitem: PropTypes.object.isRequired
}

export default QuestionItem
