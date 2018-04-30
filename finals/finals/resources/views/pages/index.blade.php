@extends('layouts.app')
@section('content')
    <div class="row justify-content-center">
        <div class="col-sm align-middle">
            <a class="card-link" href="">
            <img class="card-img-top" src="{{asset('img/javaee.png')}}" alt="Card image">
            <div class="card-body text-center">
                <h1 class="card-title">Java</h1>
                <p class="card-text">Some example text.</p>
            </div>
            </a>
        </div>
        <div class="col-sm">
            <a class="card-link" href="">
                <img class="card-img-top" src="{{asset('img/php7.png')}}" alt="Card image">
                <div class="card-body text-center">
                    <h1 class="card-title">PHP</h1>
                    <p class="card-text">Some example text.</p>
                </div>
            </a>
        </div>
        <div class="col-sm">
            <a class="card-link" href="">
            <img class="card-img-top" src="{{asset('img/nodejs.png')}}" alt="Card image">
            <div class="card-body text-center">
                <h1 class="card-title">NodeJS</h1>
                <p class="card-text">Some example text.</p>
            </div>
            </a>
        </div>
    </div>
@endsection