@extends('layouts.with-navbar')
@section('content')
    <div class="row">
        <div class="d-none d-sm-block col-sm-2 left-nav bg-light">
            <ul class="nav flex-column"  style="position: fixed">
                <li class="nav-item">
                    <a class="nav-link" href="#section1">Section 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section2">Section 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section3">Section 3</a>
                </li>

            </ul>
        </div>
        <div class="col-sm-10 col-xs-12">
            <div class="container m-2">
                <div class="card card-body">
                   put your contents here
                </div>
            </div>
        </div>
    </div>
@endsection