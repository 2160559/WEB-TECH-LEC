<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function setComments($conn){
        if(isset($_POST['commentSubmit'])){
            $uid = $_POST['uid'];
            $date = $_POST['date'];
            $message = $_POST['message']; 
    
            $sql = "INSERT INTO comments (uid,date,message) 
                    VALUES ('$uid', '$date', '$message')";
    
            #$result = mysqli_query($conn, $sql);
            $result = $conn->query($sql);
    
        }
    }
    
    public function getComments($conn){
        $sql="SELECT * FROM comments";
        #$result = $conn->query ($sql);
        $result = mysqli_query($conn, $sql);
        while($row = $result->fetch_assoc()){
            echo $row['ui']."<br>";
            echo $row['date']."<br>";
            echo $row['message']."<br><br>";
        }
    
    }
}
