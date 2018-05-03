@extends('layouts.app')
@section('content')
    <quiz-app url="https://api.myjson.com/bins/ox0fu">

        <div slot="intro" slot-scope="props">
            <h1>@{{props.title}}</h1>
        </div>

        <div slot="results" slot-scope="props">
            <h1>Your Score:</h1><br>
            <strong>Correct Answers: &nbsp;</strong>@{{props.correct}}<br>
            <strong>Total Number of Questions: &nbsp;</strong>@{{props.length}}<br>
            <strong>Percentage: </strong>@{{props.perc}}%<br>
            <button><a href="{{ route('quiz') }}">Finish</a></button>
        </div>
    </quiz-app>

@endsection