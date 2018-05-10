<?php
    date_default_timezone_set('Asia/Manila');
    $relativePath = $_SERVER['DOCUMENT_ROOT'];
    include $relativePath.'/includes/dhb.php';
    include $relativePath.'/includes/comments.php';  #include double check
    session_start();
   
?>
@extends('layouts.with-navbar')
@section('content')
<!--relink css file: insude puvlic folder-->
<link rel="stylesheet" type="text/css" href="{{ asset('css/comment.css') }}">
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
            <!--Comment Section-->
            <div class="container m-2">
                <div class="card card-body">
                <p>Comment Section</p>
                <?php 
                   echo "
                   <form method='POST' action='".setComments($conn)."'>
                        <input type='hidden' name='uid' value='Anonymous'>
                        <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
                        <textarea name='message'></textarea><br>
                        <button type='submit' name='commentSubmit'>Comment</button>
                    </form>";

                    getComments($conn);
                ?>
                </div>
            </div>
        </div>
    </div>
@endsection