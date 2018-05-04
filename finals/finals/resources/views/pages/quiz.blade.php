@extends('layouts.app')
@section('content')
        <div class="row">
            @for($y = 0; $y < 5; $y++)
            <div class="col-md-6 col-4 ">
                <a class="card-link" href="{{ route('quiz') }}/{{ 'quiz title' }}">
                    <div class="card">
                        <div class="card card-header">Quiz Title</div>
                        <div class="card card-body">
                            <p><strong>Number of Questions:</strong> number</p>
                            <p>some details</p>
                        </div>
                    </div>
                </a>
            </div>
            @endfor
        </div>
@endsection