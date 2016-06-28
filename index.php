<!DOCTYPE html>
<html>
  <head>
		<meta charset="utf-8" />
		<title>Dias úteis</title>
		<script src="workingdays.min.js"></script>
		<script>
		  document.addEventListener('DOMContentLoaded', function () {
			var days = new WorkingDays();
			document.getElementById('end-date').textContent = days.week(7); /*Return only Working Days */

		  });
		</script>
	</head>
	<body>
		<strong>Date: </strong><div id="end-date"></div> 
	</body>
</html>
