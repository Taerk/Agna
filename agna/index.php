<!DOCTYPE html>
<html>
	<body>
		<h1>Control</h1>
		<h4><a href="#" id="openAgna">Open in new window</a></h4>
		<iframe src="/panel/web/agnapanel.php" width="600px" height="350px" style="border: 1px solid #888"></iframe>
		<script>
		document.getElementById('openAgna').onclick = function(e) {
			e.preventDefault();
			window.open('/panel/web/agnapanel.php', 'Agna', 'width=500,height=300,menubar=no,status=no,toolbar=no,resizable=no');
		};
		</script>

		<h1>Overlays</h1>
		<div>
<?php foreach (preg_grep("/\.(html?|php)/", array_diff(scandir("./overlay"), [".", ".."])) as $file) if ($file != "index.php") echo "\t\t\t<a href=\"/overlay/$file\">$file</a><br>\n"; ?>
		</div>
	</body>
</html>