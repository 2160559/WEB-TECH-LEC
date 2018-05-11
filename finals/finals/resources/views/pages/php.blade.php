@extends('layouts.with-navbar') @section('content')
<div class="row">
	<div class="d-none d-sm-block col-sm-2 left-nav bg-light">
		<ul class="nav flex-column" style="position: fixed">
			<li class="nav-item">
				<a class="nav-link" href="#section0">Introduction</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#section1.1">Fundamentals</a> </li>

			<li class="nav-item">
				<a style="padding-left:30px" class="nav-link" href="#section1.1">Basic Syntax</a>
			</li>
			<li class="nav-item">
				<a style="padding-left:30px" class="nav-link" href="#section1.2">Variables</a>
			</li>
			<li class="nav-item">
				<a style="padding-left:30px" class="nav-link" href="#section1.3">Data Types</a>
			</li>
			<li class="nav-item">
				<a style="padding-left:30px" class="nav-link" href="#section1.4">Loops</a>
			</li>
			<li class="nav-item">
				<a style="padding-left:30px" class="nav-link" href="#section1.5">Functions</a>
			</li>


			<li class="nav-item">
				<a class="nav-link" href="#section2">Sessions</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#section3">Handling Data Submissions</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#section4">References</a>
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
				<p>PHP Tags When PHP parses a file, it looks for opening and closing tags, which are &lt;?php and ?&gt; which tells the parser the beginning and end of a php code. This allows PHP to be embedded anywhere in the HTML. This also allows php to be embedded in different documents aside from HTML.</p>

				<br> Example:
				<pre>
                        &lt;?php 
                        Echo “Hello Webtech People!”;
                        &lt;/php&gt;
                    </pre> Escaping from HTML
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
				<p> Variables are represented by dollar sign($) followed by the name of the variable. PHP is a loosely typed language, meaning, that variable types are defined at run time, and can change at any time during execution.
				</p>
				<h5>Predefined Variables</h5>
				<p>Predefined variables are variables that are already defined by php. </p>
				<p>Superglobals - are built-in variables that are always available in all scopes. Superglobals are named in capital letters and starts with underscore(‘_’) after the dollar sign with the exception of the $GLOBALS variable.</p>
				<ol>
					<li> $GLOBALS - references all the variables that are in global scope.</li>
					<li> $_SERVER - an array containing information such as headers, paths, and script locations.</li>
					<li> $_GET - an associative array containing variables passed through the url</li>
					<li> $_POST - an associative array containing variables passed via the HTTP POST method.</li>
					<li> $_FILES - an associative array of items uploaded via the HTTP POST method.</li>
					<li> $_REQUEST - an associative array containing the value of HTTP Request variables ($_GET, $_POST and $_COOKIE).</li>
					<li> $_SESSION - an associative array which contains session variables available to the current script.</li>
					<li> $_ENV - an associative array containing the variables passed via the environment method. These variables are coming from the environment under which the PHP parser is running.</li>
					<li> $_COOKIES - an associative array containing the cookies passed via HTTP Cookies</li>

				</ol>


			</div>
		</div>

		<div class="container m-2">
			<div class="card card-body" id="section1.3">
				<h3>Data types</h3>
				PHP has eight primitive data types namely: integers, floating point numbers, strings, Boolean, arrays, objects, resources and NULL.
				<table class="table">
					<tr>
						<th>Data Type</th>

						<th>Example</th>
					</tr>
					<tr>
						<td>Integers</td>

						<td>
							<pre>
&lt;?php
$x = 8; // decimal
$y = -8; // negative
$z = 0144; // octal
$a = 0x3E8; // hexadecimal
?&gt;
</pre>
						</td>
					</tr>
					<tr>
						<td>Floating Point Numbers </td>
						<td>
							<pre>
&lt;?php
$x = 1.5;
$y = 1.5e5;
$z = 1.5E-10;
?&gt;
</pre>

						</td>

					</tr>
					<tr>
						<td>Strings </td>
						<td>
							<pre>
&lt;?php
$hi = ‘Hello world!’;
$hi2 = “Hello World!”;
?&gt;

</pre>


						</td>




					</tr>
					<tr>
						<td>Boolean</td>
						<td>
							<pre>
&lt;?php
$isValid = true;
?&gt;

</pre>
						</td>


					</tr>
					<tr>
						<td>Arrays </td>
						<td>
							<pre>
&lt;?php
$members = array(“Juan”, “Maria”, “Pedro”);
?&gt;
</pre>
						</td>


					</tr>
					<tr>
						<td>Objects</td>
						<td>
							<pre>
&lt;?php
Class dog{
    public $dialogue = “Woof!”;

    function bark(){
        return $this-&gt;str;
    }
}
?&gt;
</pre>
						</td>


					</tr>
					<tr>
						<td>Resources</td>
						<td>
							<pre>
&lt;?php
$file = fopen(“data.txt”, “r”);

$db = mysql_connect(“localhost”, “root”, “”);
?&gt;
</pre>
						</td>


					</tr>
					<tr>
						<td>NULL</td>
						<td>
							<pre>
&lt;?php
$empty = NULL;
?&gt;
</pre>
						</td>


					</tr>




				</table>
			</div>


		</div>

		<div class="container m-2">
			<div class="card card-body" id="section1.4">

				<h3>Loops</h3>
				<p>
					Loops in PHP are closely similar to loops in other programming/scripting languages such as Java and JavaScript and it has almost the same syntax as the aforementioned languages.</p>
				<table class="table">
					<tr>
						<th>Construct</th>
						<th>Basic Syntax</th>
						<th>Sample Code</th>
					</tr>
					<tr>
						<td>While</td>
						<td>
							<pre>
while(condition){ 	 
// code}
</pre>
						</td>
						<td>
							<pre>
&lt; ?php 
$i = 1; 
while($i &lt;= 3){ 
$i++; 
echo $i . "&lt;br&gt;"; 
}
? &gt;
</pre>
						</td>
					</tr>
					<tr>
						<td>For</td>
						<td>
							<pre>
for(initialization; condition; increment){
	 // code
}
</pre>

						</td>
						<td>
							<pre>
&lt;?php
for($i=1; $i&lt;=3; $i++){
    echo $i . "&lt;br&gt;";
    }
?&gt;



</pre>
						</td>
					</tr>
					<tr>
						<td>Foreach</td>
						<td>
							<pre>
foreach($array as $var){
// code
}
</pre>


						</td>
						<td>
							<pre>
&lt;?php
$numbers = array(1, 2, 3);
 
foreach($numbers as $value){
    echo $value . "&lt;br&gt;";
}
?&gt;
</pre>


						</td>



					</tr>
					<tr>
						<td>Do-while</td>
						<td>
							<pre>
do{
           // code
}while(condition);
</pre>
						</td>
						<td>
							<pre>
&lt;?php
$i = 1;
do{
    $i++;
    echo $i . "&lt;br&gt;";
}
while($i &lt;= 3);
?&gt;


</pre>

						</td>

					</tr>






				</table>



			</div>
		</div>
		<div class="container m-2">
			<div class="card card-body" id="section1.5">
				<div>
					<h3>Functions</h3>
					<p>
						Functions, also called as methods in the context of other programming/scripting languages, are blocks of code that perform specific tasks. Although PHP has its own collection of libraries that can call directly in your PHP scripts, you can also create user-defined functions for your specific needs.</p>
					<b>NOTE:</b> Function names are case-sensitive thus it must start with either a letter or an underscore.
					<table>
						<tr>
							<th>Basic Syntax</th>
							<th style="padding-left:30px">Sample Code</th>
						</tr>
						<tr>
							<td>
								<pre>
function funcName(){
//code to be executed
}
</pre>

							</td>
							<td>
								<pre>
    function sayHello(){
        echo "Hello dear user!";
    }
</pre>
							</td>
						</tr>
					</table>
					<p>You can also specify parameters to pass on to a function to be used as arguments for your block of code during run-time. </p>
					<table>
						<tr>
							<th>Basic Syntax</th>
							<th style="padding-left:30px">Sample Code</th>
						</tr>
						<tr>
							<td>
								<pre>
function funcName($param1, $param2){
	// code to be executed
}
</pre>
							</td>

							<td>
								<pre>
    function multiply($factor1, $factor2){
    $product = $factor1 * $factor2;
    return $sum;
    }

</pre>
							</td>
						</tr>
					</table>
					<p>You can also pass optional parameters with default values into a function. This way, a parameter may or may not be specified when calling its associated function.</p>
					<table>
						<tr>
							<th>Basic Syntax</th>
							<th style="padding-left:30px">Sample Code</th>
						</tr>
						<tr>
							<td>
								<pre>
function funcName($param1, $param2){
	// code to be executed
}
</pre>

							</td>
							<td>
								<pre>
    function incrementBy($num1, $incrementNum2=1){
    $result = $num1 + $num22;
    return $result;
    }

</pre>
							</td>
						</tr>
					</table>
				</div>

			</div>

		</div>
		<div class="container m-2">
			<div class="card card-body" id="section2">
				<div>
					<h3>Sessions</h3>
					<p>
						Normally, accessing a website causes data to be stored using cookies which, in turn, are stored in the user’s computer. Cookies are basically small pieces of data sent by the server to be stored in a user’s browser which may send it back with the next request to the same server. It is typically used to tell if two requests came from the same browser (MDN Webdocs). Since cookies are susceptible to web attacks and can negatively affect a website’s performance, PHP sessions solve these issues since it stores data in the server instead. In a session based environment, every user is identified through a unique number called session identifier or SID which is used to link each user with their own information in the server like emails and the like (TutorialRepublic). </p>
					<p>
						One example of the use of sessions is in login forms. The basic idea of this is that after a user submits a login form and the password is verified by the server, the server creates a session variable for the user. For every page load that the user does within the website, the server will keep checking the session variable. Once the user logs out of the website, the session is destroyed (Morris, J., 2017).</p>

					Data are stored in between requests in the $_SESSION superglobal array.
					<br/> Sample code:
					<pre>
                                &lt;?php
                        // Starting session
                        session_start();

                        // Storing session data
                        $_SESSION["username"] = "user1";
                        ?&gt;

                    </pre>
					<p>
						When a site with session support is accessed, PHP will check automatically or on request whether a specific session ID has been sent with the request if session.auto_start is set to 1 or explicitly through session_start() respectively (php.net).</p>
					<p>
						To remove certain session data, you can simply use the unset function with the corresponding key of the $_SESSION array.
					</p>
					Sample Code:
					<pre>
                                &lt;?php
                        // Starting session
                        session_start();

                        // Removing session data
                        if(isset($_SESSION["username"])){
                            unset($_SESSION["username"]);
                        }
                        ?&gt;</pre>
					<p>
						However, if you want to completely remove the session data for a user, simply call the session_destroy()function to destroy the session. </p>
					Sample Code:
					<pre>
                                &lt;?php
                        // Starting session
                        session_start();

                        // Storing session data
                        $_SESSION["username"] = "user1";

                        // Removing session data
                        if(isset($_SESSION["username"])){
                            unset($_SESSION["username"]);
                        }

                        // Destroying session
                        session_destroy();
                        ?&gt;</pre>

				</div>

			</div>
			<a href="JavaNotes.pdf" class="pdfdownload" download=".pdf">Download topic PDF version</a>
		</div>


	</div>
</div>
@endsection
