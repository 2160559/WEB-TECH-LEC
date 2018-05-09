@extends('layouts.with-navbar')
@section('content')
    <div class="row">
        <div class="d-none d-sm-block col-sm-2 left-nav bg-light">
            <ul class="nav flex-column"  style="position: fixed">
                <li class="nav-item">
                    <a class="nav-link" href="#section1">Java Servlets</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section2">Servlet Lifecycle</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section3">Section 3</a>
                </li>

            </ul>
        </div>
        <div class="col-sm-10 col-xs-12">
            
            <div class="container m-2">
                <div class="card card-body" id="section1">
                    <div id="section1">
                    <p>
                    A servlet is a Java programming language class that is used to extend the capabilities of servers that host applications accessed by means of a request-response programming model. Although servlets can respond to any type of request, they are commonly used to extend the applications hosted by web servers. For such applications, Java Servlet technology defines HTTP-specific servlet classes. (https://docs.oracle.com/javaee/5/tutorial/doc/bnafe.html)</p>
                    <p>
                    The javax.servlet and javax.servlet.http packages provide interfaces and classes for writing servlets. All servlets must implement the Servlet interface, which defines life-cycle methods. When implementing a generic service, you can use or extend the GenericServlet class provided with the Java Servlet API. The HttpServlet class provides methods, such as doGet and doPost, for handling HTTP-specific services. (https://docs.oracle.com/javaee/5/tutorial/doc/bnafe.html</p>
                    </div>
                   
                </div>
            </div>
            
            <div class="container m-2">
                <div class="card card-body" id="section2">
                    <div >
                    <p>
                    Servlets, which are managed by a container, are used as web components to generate dynamic content. One function of containers (a.k.a servlet engines) is to manage the life cycle of a servlet.</p>
                        
                    <p>The life cycle of a servlet has 4 stages (Java Servlet 3.1 (Java EE 7))
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
                    </p>
                    </div>
                    <comment></comment>
                </div>
            </div>
            
              <div class="container m-2">
                <div class="card card-body">
                    <div id="section3">
                    Servlets, which are managed by a container, are used as web components to generate dynamic content. One function of containers (a.k.a servlet engines) is to manage the life cycle of a servlet. 
                    </div>
                    <comment>hahaha</comment>
                </div>
            </div>
            
            
        </div>
    </div>
@endsection