<!DOCTYPE html>
<html>

<head>
	<title>Home</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/uikit.min.css" />
	<link rel="stylesheet" href="css/style.css" />
	<script src="js/uikit.min.js"></script>
	<script src="js/uikit-icons.min.js"></script>
</head>

<body>
	<nav class="uk-panel uk-background-muted" uk-navbar uk-sticky>
		<div class="uk-navbar-left uk-margin-large-left">
			<a class="uk-navbar-item uk-logo" href="/">WebTech 2018</a>
		</div>
        <div class="uk-navbar-right uk-margin-large-right">
            <ul class="uk-navbar-nav uk-navbar">
                <li><a href="/quiz" class="uk-button uk-button-text">Quiz</a></li>
                <li><a href="/login" class="uk-button uk-button-text"><span uk-icon="sign-in"></span>Sign In</a></li>
            </ul>
        </div>
	</nav>
	<div uk-height-viewport="offset-top: true; offset-bottom: true">
	@yield('content')
	</div>
	<div class="uk-background-muted uk-text-center uk-margin-remove uk-padding-small uk-flex uk-flex-center">
		9325A 1-2 TF Group 1
		<br> &copy; May 2018
	</div>
</body>

</html>
