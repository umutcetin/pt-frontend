import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class QuestionItem extends Component {
    render() {
        return (
            <div class="text-left">
                <h3 class="text-warning px-3">{this.props.questionitem.question}</h3>
                <div class="btn-group-toggle px-5" data-toggle="buttons">
                    <ul class="list-group list-group-flush">
                        {this.renderOptions()}
                    </ul>
                </div>
                <hr></hr>
            </div>
        )
    }

    renderOptions() {
        return this.props.questionitem.question_type.options.map((option) => (
            <li class="list-group-item bg-dark text-white btn-group">
                <label class="h4">
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
