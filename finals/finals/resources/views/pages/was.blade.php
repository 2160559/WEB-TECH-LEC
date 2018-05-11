@extends('layouts.with-navbar') @section('content')
<nav class="navbar navbar-default" role="navigation">
	<div class="container">
		<div id="sidebar-wrapper" class="sidebar-toggle">
			<ul class="sidebar-nav">
				<li><a href="#section1" class="left-nav-link">What is WAS?</a></li>
				<li><a href="#section2">Sample Case</a></li>
				<li><a href="#section3">Top 10 OWASP 2k17</a></li>
				<li><a href="#section6">References</a></li>
			</ul>
		</div>
	</div>
</nav>
<div class="container" id="content">
	<div class="card card-body p-5">
		<section id="section1">

				<h3>What is Web Application Security (WAS)?</h3>
				<p>WAS is a security on websites, applications and web services. WAS was basically based on 
                applications but was later then applied to the internet and its web systems.</p>

        </section>
        <hr>
		<section id="section2">
				<h3>Sample Case</h3>

				<p>If you frequently order food from jollibeedelivery.com which the official website of Jollibee you’re probably disappointed to have seen the picture below when you opened their website to order food.</p>
                <img src="../public/img/jolli.jpg">
                <br>
                <i>Image by: ABS-CBN</i>
                <br>
                <p>The reason behind this is the order given by the National Privacy Commission which ordered Jollibee to suspend its delivery website due to its vulnerabilities. The vulnerability issues are the unupdated database protection of the website and unencrypted information like personal customer information. In addition, the website is also vulnerable to unauthorized access. (ABS-CBN News, 2018).  </p>
                <p>
                Since the website is vulnerable to various kinds of malicious attacks, hackers may directly victimize customers of the Jollibee delivery website. Hackers may look into personal information  of the customers, commit identity theft and use it as means to conduct other fraudulent attacks. This vulnerability also affects the business owners since it might leave a bad image for the business, making customers not to patronize Jollibee. </p>
                <p>
                Because of the possible negative impact an unsecure application , or website might cause to both business and consumer/customer, the national privacy commission promulgated the “Data Privacy Act of 2010”. </p>

           
        </section>
        	<hr>
        <section id="section3">
				<h3>Top 10 Open Web Application Security Project (OWASP) 2k17</h3>
			     <ul>
                
                <li>    A1 - Injection</li>
               <li> A2 – Broken Authentication and Session Management</li>
                <li>A3 – 2017-Sensitive Data Exposure </li>
                <li>A4 – XML External Entities (XXE)</li> 
                <li>A5 – Broken Access Control </li>
               <li> A6 – Security Misconfiguration</li>
                <li>A7 – Cross-Site Scripting (XSS)</li>
                <li>A8 – Insecure Deserialization </li>
                <li>A9 – Using Components with Known Vulnerabilities</li>
               <li> A10 –Insufficient Logging & Monitoring</li>
                </ul>
                For in depth explanation please follow this link : <a href="https://www.owasp.org/index.php/Top_10-2017_Top_10">https://www.owasp.org/index.php/Top_10-2017_Top_10</a>
        </section>
  
            <hr>
        <section id="section6">
					<h3>References</h3>
					News, A. (2018). Jollibee takes down delivery website after gov't raises privacy concern. [online] ABS-CBN News. Available at: http://news.abs-cbn.com/business/05/09/18/jollibee-takes-down-delivery-website-after-govt-raises-privacy-concern [Accessed 11 May 2018].<br>
                    Owasp.org. (2018). Top 10-2017 Top 10 - OWASP. [online] Available at: https://www.owasp.org/index.php/Top_10-2017_Top_10 [Accessed 11 May 2018].<br>


				
		</section>
		<hr>
		<a href="{{asset('storage/JavaNotes.pdf')}}" class="pdfdownload" download="JavaNotes.pdf">Download as topic
                PDF version</a>
	</div>
</div>
@endsection