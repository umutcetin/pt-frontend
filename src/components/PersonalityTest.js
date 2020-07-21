import React, { Component } from 'react'
import QuestionList from './QuestionList'

export class PersonalityTest extends Component {
    render() {
        return (
            <div>
                <h1>Personality Test</h1>
                <QuestionList></QuestionList>
                <button title="submit">submit</button>
            </div>
        )
    }
}

export default PersonalityTest
