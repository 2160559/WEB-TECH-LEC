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
            <!--Comment Section-->
            <div class="container m-2">
                <div class="card card-body">
                <p>Comment Section</p>
                <?php 
                    $uid = $_POST['Cid'];
                    $uid = $_POST['uid'];
                    $date = $_POST['date'];
                    $message = $_POST['message']; 

                   echo "
                   <form method='POST' action='".editComments($conn)."'>
                        <input type='hidden' name='uid' value='".$cid."'>
                        <input type='hidden' name='uid' value='".$uid."'>
                        <input type='hidden' name='date' value='".$date."'>
                        <textarea name='message'>.$message.</textarea><br>
                        <button type='submit' name='commentSubmit'>Edit</button>
                    </form>";
                    ?>
                </div>
            </div>
        </div>
    </div>
@endsection