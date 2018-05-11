@extends('layouts.with-navbar') @section('content')
<nav class="navbar navbar-default" role="navigation">
	<div class="container">
		<div id="sidebar-wrapper" class="sidebar-toggle">
			<ul class="sidebar-nav">
				<li><a href="#web-apps" class="left-nav-link">Web Applications</a></li>
				<li><a href="#applets">Applets</a></li>
				<li><a href="#java-servlets">Java Servlets</a></li>
				<li><a href="#servlet-lifecycle">Servlet Lifecycle</a></li>
				<li><a href="#http-servlets">HTTP Servlets</a></li>
				<li><a href="#references">References</a></li>
			</ul>
		</div>
	</div>
</nav>

<div class="container" id="content">
	<div class="card card-body p-5">
		<section id="web-apps">
			<h3>Web Applications</h3>
			{{$_SERVER['REQUEST_URI']}}
			<p>A web application (web app) is an application that users run through their browsers. Common examples of web applications are webmails (e.g. Google Mail, Yahoo Mail), online stores (e.g. Lazada) and social media sites (e.g. Facebook, Instagram, Twitter).</p>
			<p>Users run the web app by entering the domain name (e.g. facebook.com , gmail.com). When this happens, the browser connects to the server that is hosting the application and display whatever information it has received from the server.</p>
			<p>Web application grew in popularity because of the benefits it provides to both customers and service providers. For service providers, web applications allows central management of the application, easier and much cheaper upgrades, hardware independent among others. For customers, they can check out the services and avail it even when they are at their home.
			</p>
			<p>Most web apps, if not all, focuses on a web application that provides the best possible user interaction and user experience which eventually leads to more revenue. To make this happen, service providers thought that web apps must have a dynamic content.</p>
		</section>
		<hr>
		<section id="applets">
			<h3>Applets</h3>
			<p>Applets, one of the earliest attempts toward this goal, focused on using the client platform to deliver dynamic user experiences. At the same time, developers also investigated using the server platform for this purpose. Initially, Common Gateway Interface (CGI) scripts were the main technology used to generate dynamic content. Although widely used, CGI scripting technology has a number of shortcomings, including platform dependence and lack of scalability. To address these limitations, Java Servlet technology was created as a portable way to provide dynamic, user-oriented content. </p>
		</section>
		<hr>
		<section id="java-servlets">
			<h3>Java Servlets</h3>
			<p>
				A servlet is a Java programming language class that is used to extend the capabilities of servers that host applications accessed by means of a request-response programming model. Although servlets can respond to any type of request, they are commonly used to extend the applications hosted by web servers. For such applications, Java Servlet technology defines HTTP-specific servlet classes. </p>
			<br/> Some functions of Java Servlets are:
			<ul>
				<li>handles client requests by generating responses to such requests.</li>
				<li> applications implemented on web servers.</li>
				<li>part of the Java Enterprise Edition (EE), which are used for transaction-based applications.
				</li>
				<li>hosted in a servlet container that provides the environment which the servlet runs, as well as controls the 'servlet lifecycle'.
				</li>
			</ul>
			<p>
				The javax.servlet and javax.servlet.http packages provide interfaces and classes for writing servlets. All servlets must implement the Servlet interface, which defines life-cycle methods. When implementing a generic service, you can use or extend the GenericServlet class provided with the Java Servlet API. The HttpServlet class provides methods, such as doGet and doPost, for handling HTTP-specific services. </p>
		</section>
		<hr>
		<section id="servlet-lifecycle">
			<h3>Servlet Lifecycle</h3>
			<div class="row">
				<p>
					Servlets, which are managed by a container, are used as web components to generate dynamic content. One function of containers (a.k.a servlet engines) is to manage the life cycle of a servlet.
				</p>
				<p>When a browser sends an HTTP request to the Web Server, the Web Server will send the request to the servlet container. From there, the servlet container will determine which servlet to invoke. When the servlet is done in processing the request, the servlet container ensures that response is properly flushed and then returns the control back to the Web server.
				</p>
				<div class="col-md">
					<br>The life cycle of a servlet has 4 stages (Java Servlet 3.1 (Java EE 7))
					<ol>
						<li>~ instantiation >> constructor call
							<br/> the constructor call -creates an instance of the servlet to service client requests -invoked implicitly by the servlet container when the servlet is called upon to service client request and no instance currently exists.
						</li>
						<br/>
						<li> ~ initialization >> init() method
							<br/> invoked only once intended for any startup init code
						</li>
						<br/>
						<li> ~ request handling >> service() method
							<br/> invoked for each client request performs whatever logic to serve request and generate response multi-threaded servlet instance; 'thread safe'
						</li>
						<br/>
						<li>~ destruction >> destroy() method
							<br/> invoked before servlet instance is 'unloaded', housekeeping cleanup code.
						</li>
						<br/>
					</ol>
				</div>
				<div class="col-md">
					<img class="img-fluid" src="{{ asset('storage/img/LifeCycle.png') }}" alt="">
				</div>
			</div>
		</section>
		<hr>
		<section id="http-servlets">
			<h3>HTTP Servlets</h3>
			<ul>
				<li>handles HTTP request and generates responses</li>
				<li>hosted in a web container, that takes cares of HTTP Requests conversion to HTTP Responses</li>
				<li>service() method call is routed to a doXXX() call</li>
			</ul>

			<p>doXXX calls are: doGet,doPost,doPut,doDelete,doTrace,doOptions,doHead</p>
			<p>the doXXX call requires two arguments</p>
			<ol>
				<li>HTTPServletRequest</li>
				<li> HTTPServletResponse</li>
			</ol>
		</section>
		<hr>
		<section id="references">
			<h3>References</h3>
			Docs.oracle.com. (2018). Java Servlet Technology - The Java EE 5 Tutorial. [online] Available at: https://docs.oracle.com/javaee/5/tutorial/doc/bnafd.html [Accessed 6 May 2018].<br/> Docs.oracle.com. (2018). What Is a Servlet? - The Java EE 5 Tutorial. [online] Available at: https://docs.oracle.com/javaee/5/tutorial/doc/bnafe.html [Accessed 6 May 2018].<br/> Wai Chan, S. and Burns, E. (2017). Java™ Servlet Specification. [online] Javaee.github.io. Available at: https://javaee.github.io/servlet-spec/downloads/servlet-4.0/servlet-4_0_FINAL.pdf [Accessed 6 May 2018].
		</section>
		<hr>
		<a href="{{asset('storage/JavaNotes.pdf')}}" class="pdfdownload" download="JavaNotes.pdf">Download as topic
                PDF version</a>
	</div>
</div>
