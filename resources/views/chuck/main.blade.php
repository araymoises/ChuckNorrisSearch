<!DOCTYPE HTML>
<html>
	
<head>
	<meta charset="utf-8">
	<title>Chuck Norris Search</title>
	<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.css') }}">
	<link rel="stylesheet" href="{{ asset('css/main.css')                }}">
	
	<script src="{{ asset('bootstrap/js/bootstrap.js') }}"></script>
</head>
	
<body>
	
<div id="first" style="left: 10px;">
	<div id="espacio" class="row">
		<center class="col-md-12">
			<img src="{{ asset('img/logo.png') }}">
		</center>
	</div>
	<div id="centrado" class="row">
		<center class="col-md-12" style="margin-left:30px">
			<form id="search" class="search">
				<div class="col-md-11">
					<input type="text" class="form-control" id="valor" aria-describedby="inputSuccess3Status" autofocus required>
				</div>
				<div class="col-md-1" style="margin-left:-30px;margin-top:5px">
					<span class="google-img" aria-hidden="true"></span>
				</div>
				<button class="btn btn-default" type="submit" style="margin-left:-60px; margin-top: 20px;">Buscar con Chuck</button>
			</form>
		</center>
	</div>

	<div id="wait" class="row">
		<center class="col-md-12">
			<img src="{{ asset('img/wait.gif') }}" style="width:100px">
		</center>
	</div>
</div>
	
<!-------------------------------------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------------------------------------->
<!-------------------------------------------------------------------------------------------------------------------->

<div id="last">
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
		<div class="navbar-header">
		  <a class="navbar-brand" href=""><img src="{{ asset('img/logo1.png') }}" style="width:150px;margin-top:-11px"></a>
		</div>
		<ul class="nav navbar-nav">
			<li class="active" style="margin-top:10px; width: 220%;">
				<fieldset disabled>
					<input type="text" id="disabledTextInput" class="form-control" placeholder="Chuck Norris es capaz de desahilitar este input.">
				</fieldset>
			</li>
			<li class="active" style="margin-top:10px;margin-left:15px">
				<a class="navbar-brand" href="">All</a>
			</li>
		</ul>
	  </div>
	</nav>
	<div id="found" class="container" style="max-width:45%;margin-left:170px;">
	</div>
</div>
	
<script src="{{ asset('jquery/js/jquery-3.1.1.js') }}"></script>
<script src="{{ asset('jquery/js/main.js')         }}"></script>
<script>
	$('#wait').hide();
	$('#last').hide();
</script>
	
</body>
</html>