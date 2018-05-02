@extends('layouts.app')
@section('content')
    <script>window.onload= function () {
            var quiz = {
                title: 'My Quiz',
                questions: [
                    {
                        text: 'Question 1',
                        responses: [
                            {text: 'Wrong, too bad.'},
                            {text: 'Right', correct: true},
                        ]
                    },
                    {
                        text: 'Question 2',
                        responses: [
                            {text: 'Right', correct: true},
                            {text: 'Wrong, too bad.'},
                        ]
                    }
                ],
            }
        };

        const app = new Vue({
            el: '#app',
            data: {
                quiz: quiz,
                questionIndex: 0,
                userResponse: Array(quiz.questions.length).fill(false)
            },
            method: {
                next: function () {
                    this.questionIndex++;
                },
                prev: function () {
                    this.questionIndex--;
                },
                score: function () {
                    return this.userResponse.filter(function (val) {
                        return val;
                    }).length;
                }
            },
        });</script>
    <div id="app">
    <h1>{{ quiz.title }}</h1>
    <div v-for="(question, index) in quiz.questions">
        <div v-show="index === questionIndex">
            <h2>{{question.text }}</h2>
            <ol>
                <li v-for="response in question.responses">
                    <label>
                        <input type="radio"
                               v-bind:value="response.correct"
                               v-bind:name="index"
                               v-model="userResponses[index]"> {{ response.text }}
                    </label>
                </li>
            </ol>
            <button v-if="questionIndex >0 " v-on:click="prev">prev</button>
            <button v-on:click="next">next</button>
        </div>
    </div>
    <div v-show="questionIndex === quiz.questions.length">
        <h2>Quiz Finished</h2>
        <p>
            Total score {{ score() }} / {{ quiz.questions.length }}
        </p>
    </div>
    </div>
@endsection