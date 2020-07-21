import React, { Component } from 'react'
import QuestionList from './QuestionList'

export class PersonalityTest extends Component {
    render() {
        return (
            <div class="container-fluid bg-dark text-white">
                <br></br>
                <p class="h1 display-2 bg-warning text-dark p-5 rounded">Personality Test</p>
                <br></br>
                <QuestionList></QuestionList>
                <button title="submit" class="btn btn-warning btn-lg btn-block">Submit</button>
            </div>
        )
    }
}

export default PersonalityTest
