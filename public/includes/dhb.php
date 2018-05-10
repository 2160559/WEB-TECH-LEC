<?php

$conn = mysqli_connect('localhost','root','','webtech');

if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}