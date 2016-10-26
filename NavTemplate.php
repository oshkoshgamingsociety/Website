<?php
	function setIfActive($pageName){
		if (basename($_SERVER['PHP_SELF']) == $pageName){
			echo "class=\"active\"";
		}
	}
?>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
	<div class="navbar-header">
	  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	  </button>
	  <a class="navbar-brand" href="#"></a>
	</div>
	<div class="collapse navbar-collapse navbar-right" id="navbar-collapse-1">
		<ul class="nav navbar-nav">
			<li <?php setIfActive("hello.php") ?> ><a href="hello.php">Home</a></li>
			<li><a href="#">About</a></li>
			<li <?php setIfActive("schedule.php") ?> ><a href="schedule.php">Schedule</a></li>
			<li><a href="#">History</a></li>
			<li><a href="#">Games</a></li>
			<li><a href="#">Links</a></li>
		</ul>
	</div>
  </div>
</nav>
