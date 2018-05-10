@extends('layouts.with-navbar')
@section('content')
    <div class="row">
        <div class="d-none d-sm-block col-sm-2 left-nav bg-light">
            <ul class="nav flex-column"  style="position: fixed">
                <li class="nav-item">
                    <a class="nav-link" href="#section0">Introduction</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section1.1">Fundamentals</a>
                    <ul class="nav flex-column"  style="position: fixed">
                     <li class="nav-item">
                      <a style="padding-left:30px"class="nav-link" href="#section1.1">Basic Syntax</a>
                     </li>
                    <li class="nav-item">
                      <a style="padding-left:30px"class="nav-link" href="#section1.2">Variables</a>
                     </li>
                     <li class="nav-item">
                      <a style="padding-left:30px"class="nav-link" href="#section1.3">Data Types</a>
                     </li>
                     <li class="nav-item">
                      <a style="padding-left:30px"class="nav-link" href="#section1.4">Loops</a>
                     </li>
                     <li class="nav-item">
                      <a style="padding-left:30px"class="nav-link" href="#section1.5">Functions</a>
                     </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section2">Sessions</a>
                </li>
             
            </ul>
        </div>
        <div class="col-sm-10 col-xs-12">
            <div class="container m-2">
                <div class="card card-body" id="section0">
                    <h3>Introduction</h3>
                    <p>PHP(PHP: Hypertext Preprocessor), originally named Personal Homepage, is a general purpose scripting language developed by Rasmus Lerdorf in 1994. PHP is now widely-used as a general-purpose scripting language, however, it is mostly used for back-end web development and can be embedded into HTML. </p>
              
                        
                     <p>It is a server-side web scripting language which means, it runs in a web server. The php script is executed first on the server, generating the HTML and sent to the client.</p>
                
                     <p>PHP is a very popular scripting language, however, it is not a very disciplined language in a way that there’s a lot of inconsistencies in the language such as function names and there’s no central organization governing the development of PHP.</p>
                     <p>In php, there are 2 ways of coding, the Object Oriented and the Procedural Paradigm. </p>
                    

                    
                   
                </div>
            </div>
                <div class="container m-2">
                <div class="card card-body" id="section1.1">
                    <h3>Basic Syntax</h3>
                    <p>PHP Tags
                When PHP parses a file, it looks for opening and closing tags, which are &lt;?php and ?&gt; which tells the parser the beginning and end of a php code. This allows PHP to be embedded anywhere in the HTML. This also allows php to be embedded in different documents aside from HTML.</p>
             
                <br>
                    Example:
                    <pre>
                        &lt;?php 
                        Echo “Hello Webtech People!”;
                        &lt;/php&gt;
                    </pre>
               
                Escaping from HTML
                <p>
                PHP can skip HTML lines in between php scripts using conditions.</p>
                    
                Example:
                    
                    <pre>
                     &lt;php if ($expression == true){ ? &gt;
                    This will be shown if the condition is met.
                     &lt;?php }else{ ?&gt;
                    Otherwise this will be shown.
                     &lt;?php } ?&gt;
                    </pre>


                    
                   
                </div>
            </div>
            
            <div class="container m-2">
                <div class="card card-body" id="section1.2">
                    <h3>Variables</h3>
                    <p>	Variables are represented by dollar sign($) followed by the name of the variable. PHP is a loosely typed language, meaning, that variable types are defined at run time, and can change at any time during execution.
                    </p>
                    <h5>Predefined Variables</h5>
                    <p>Predefined variables are variables that are already defined by php. </p>
	                <p>Superglobals - are built-in variables that are always available in all scopes. Superglobals are named in capital letters and starts with underscore(‘_’) after the dollar sign with the exception of the $GLOBALS variable.</p>
                    <ol>
                        <li>	$GLOBALS - references all the variables that are in global scope.</li>
                        <li>	$_SERVER -  an array containing information such as headers, paths, and script locations.</li>
                        <li>	$_GET - an associative array containing variables passed through the url</li>
                        <li>	$_POST - an associative array containing variables passed via the HTTP POST method.</li>
                        <li>	$_FILES - an associative array of items uploaded via the HTTP POST method.</li>
                        <li>	$_REQUEST - an associative array containing the value of HTTP Request variables ($_GET, $_POST and $_COOKIE).</li>
                        <li>	$_SESSION - an associative array which contains session variables available to the current script.</li>
                        <li>	$_ENV - an associative array containing the variables passed via the environment method. These variables are coming from the environment under which the PHP parser is running.</li>
                        <li>	$_COOKIES - an associative array containing the cookies passed via HTTP Cookies</li>

                    </ol>
                    
                   
                </div>
            </div>
            
            <div class="container m-2">
                <div class="card card-body" id="section1.3">
                    <h3>Data types</h3>
   
                    
                    </div>
                    
               
            </div>
            
            <div class="container m-2">
                <div class="card card-body" id="section1.4">
                    
                        <h3>Loops</h3>
              
                        

                   
                    
                </div>
            </div>
            <div class="container m-2">
                <div class="card card-body" id="section1.5">
                    <div >
                        <h3>Functions</h3>
                     

                    </div>
                    
                </div>
                <a href="JavaNotes.pdf"  class="pdfdownload" download=".pdf">Download topic PDF version</a>
            </div>
            
            
        </div>
    </div>
@endsection