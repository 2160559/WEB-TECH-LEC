@extends('layouts.with-navbar')
@section('content')
    <div class="row">
        <div class="d-none d-sm-block col-sm-2 left-nav bg-light">
            <ul class="nav flex-column"  style="position: fixed">
                <li class="nav-item">
                    <a class="nav-link" href="#section23">What is Node JS?</a>
                </li>
                   <li class="nav-item">
                    <a class="nav-link" href="#section01">Node JS Introductory Clip</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section1"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section2">Servlet Lifecycle</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section3">HTTP Servlets</a>
                </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#section4">References</a>
                </li>

            </ul>
        </div>
        <div class="col-sm-10 col-xs-12">
            <div class="container m-2">
                <div class="card card-body" >
                    <div id="section23">
                    <h3>What is Node JS?</h3>
                    <p>Node.js is an open-source run-time environment for creating server-side applications using Javascript. It runs single-threaded, non-blocking and asynchronous programming.</p>

                    </div>
                   
                </div>
            </div>
                <div class="container m-2">
                <div class="card card-body" id="section01">
                    <h3>Node JS Introductory Clip</h3>
               
                <video width="90%" height="90%" controls>
                    <source src="../public/img/Async-Nodejs.mp4" type="video/mp4">
                </video>

                    
                   
                </div>
            </div>
            
            <div class="container m-2">
                <div class="card card-body" id="section1">
                    <h3>Java Servlets</h3>
                    <p>
                    A servlet is a Java programming language class that is used to extend the capabilities of servers that host applications accessed by means of a request-response programming model. Although servlets can respond to any type of request, they are commonly used to extend the applications hosted by web servers. For such applications, Java Servlet technology defines HTTP-specific servlet classes. </p>
                    <br/> Some functions of Java Servlets are:
                    <ul>
                    <li>handles client requests by generating responses to such requests.</li>
                    <li> applications implemented on web servers.</li>
                    <li>part of the Java Enterprise Edition (EE), which are used for transaction-based applications.</li>
                    <li>hosted in a servlet container that provides the environment which the servlet runs, as well as controls the 'servlet lifecycle'. </li>         
                    </ul>

                    <p>
                    The javax.servlet and javax.servlet.http packages provide interfaces and classes for writing servlets. All servlets must implement the Servlet interface, which defines life-cycle methods. When implementing a generic service, you can use or extend the GenericServlet class provided with the Java Servlet API. The HttpServlet class provides methods, such as doGet and doPost, for handling HTTP-specific services. </p>
                    
                   
                </div>
            </div>
            
            <div class="container m-2">
                <div class="card card-body" id="section2">
                    <h3>Servlet Lifecycle</h3>
                    <p>
                    Servlets, which are managed by a container, are used as web components to generate dynamic content. One function of containers (a.k.a servlet engines) is to manage the life cycle of a servlet.</p>
                    
                    <p>When a browser sends an HTTP request to the Web Server, the Web Server will send the request to the servlet container. From there, the servlet container will determine which servlet to invoke. When the servlet is done in processing the request, the servlet container ensures that response is properly flushed and then returns the control back to the Web server.
                    </p>
                        
                    <br>The life cycle of a servlet has 4 stages (Java Servlet 3.1 (Java EE 7))
                        <ol>
                        <li>~ instantiation >> constructor call 
                            <br/>
                            the constructor call 
                                -creates an instance of the servlet to service client requests
                                -invoked implicitly by the servlet container when the servlet is called upon to
                        service client request and no instance currently exists. </li><br/>
                        <li> ~ initialization >> init() method 
                            <br/>
                            invoked only once intended for any startup init code</li><br/>
                        <li> ~ request handling >> service() method
                            <br/>
                            invoked for each client request
                            performs whatever logic to serve request and generate response
                            multi-threaded servlet instance; 'thread safe'</li><br/>
                        <li>~ destruction >> destroy() method
                            <br/>
                            invoked before servlet instance is 'unloaded', housekeeping cleanup code.</li><br/>
                            </ol>
                    
                    </div>
                    <comment></comment>
               
            </div>
            
            <div class="container m-2">
                <div class="card card-body">
                    <div id="section3">
                        <h3>HTTP Servlets</h3>
                        <ul>
                            <li>handles HTTP request and generates responses </li>
                            <li>hosted in a web container, that takes cares of HTTP Requests conversion to HTTP Responses</li>
                            <li>service() method call is routed to a doXXX() call</li>
                        </ul>
                        
                        doXXX calls are: doGet,doPost,doPut,doDelete,doTrace,doOptions,doHead
                        <br>
                        the doXXX call requires two arguments
                            <ol>
                            <li>HTTPServletRequest</li> 
                            <li> HTTPServletResponse</li> 
                                </ol>
                        

                    </div>
                    
                </div>
            </div>
            <div class="container m-2">
                <div class="card card-body">
                    <div id="section4">
                        <h3>References</h3>
                        Docs.oracle.com. (2018). Java Servlet Technology - The Java EE 5 Tutorial. [online] Available at: https://docs.oracle.com/javaee/5/tutorial/doc/bnafd.html [Accessed 6 May 2018].<br/>
                        Docs.oracle.com. (2018). What Is a Servlet? - The Java EE 5 Tutorial. [online] Available at: https://docs.oracle.com/javaee/5/tutorial/doc/bnafe.html [Accessed 6 May 2018].<br/>
                        Wai Chan, S. and Burns, E. (2017). Java™ Servlet Specification. [online] Javaee.github.io. Available at: https://javaee.github.io/servlet-spec/downloads/servlet-4.0/servlet-4_0_FINAL.pdf [Accessed 6 May 2018].
                        

                    </div>
                    
                </div>
                <a href="JavaNotes.pdf"  class="pdfdownload" download="JavaNotes.pdf">Downloadss topic PDF version</a>
            </div>
            
            
        </div>
    </div>
@endsection