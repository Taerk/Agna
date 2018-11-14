<!DOCTYPE>
<html>
	<head>
		<title>AgnaPanel WEB</title>
		
		<!-- Font -->
		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
		
		<!-- jQuery -->
		<script type="text/javascript" src="/panel/web/jquery-3.3.1/jquery-3.3.1.min.js"></script>
		
		<!-- FontAwesome -->
		<link rel="stylesheet" href="/panel/web/fontawesome-5.5.0/css/solid.css">
		<link rel="stylesheet" href="/panel/web/fontawesome-5.5.0/css/fontawesome.css">
		
		<!-- SimpleBar -->
		<link rel="stylesheet" href="/panel/web/simplebar-2.6.1/dist/simplebar.css">
		<script type="text/javascript" src="/panel/web/simplebar-2.6.1/dist/simplebar.js"></script>
		
		<!-- Panel -->
		<link rel="stylesheet" type="text/css" href="panel.css">
	</head>
	<body>
		<div id="panel">
		
			<!-- Tournament Information -->
			<div class="ui-section">
				<div class="ui-header"><i class="fas fa-minus-square"></i> Tournament Information</div>
				<div class="ui-content">
					<div class="settings-row">
						<div class="setting">
							<label>Tournament</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Event</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Match</label>
							<input type="text">
						</div>
					</div>
				</div>
			</div>
			
			<!-- Players -->
			<div class="ui-section" id="players">
				<div class="ui-header"><i class="fas fa-minus-square"></i> Players</div>
				<div class="ui-content">
					<div id="player_controls">
						<div class="settings-row sm">
							<span>Player Count:&nbsp;</span>
							<div class="setting btn">2</div>
							<div class="setting btn">4</div>
							<div class="setting btn">8</div>
						</div>
						<div class="settings-row sm">
							<div class="setting btn">Reset</div>
						</div>
					</div>
					<div class="settings-row" style="flex-wrap: wrap">
						<?php for ($i = 1; $i <= 8; $i++) { ?>
						<div class="setting pb p<?= $i ?>" player="<?= $i ?>">
							<div class="player-label">
								<div class="player-place">Player <?= $i ?></div>
								<div>
									<i class="move-player move-left fas fa-arrow-left"></i>
									<i class="move-player move-right fas fa-arrow-right"></i>
								</div>
							</div>
							<input type="text">
							<div class="char-select">
								<div class="option change">
									<input type="hidden" name="c<?= $i ?>" value="/overlay/images/portraits/melee/fox-taunt.png">
									<i class="fas fa-user"></i>
									<span class="player-char"></span>
								</div>
								<div class="option reset">
									<i class="fas fa-times"></i>
								</div>
							</div>
						</div>
						<?php } ?>
					</div>
				</div>
			</div>
			
			<!-- Cameras -->
			<div class="ui-section" id="players">
				<div class="ui-header"><i class="fas fa-minus-square"></i> Cameras</div>
				<div class="ui-content">
					<div class="settings-row">
						<div class="setting">
							<label>Camera 1</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Camera 2</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Camera 3</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Camera 4</label>
							<input type="text">
						</div>
					</div>
					<div class="settings-row">
						<div class="setting">
							<label>Commentator 1</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Twitter 1</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Commentator 2</label>
							<input type="text">
						</div>
						<div class="setting">
							<label>Twitter 2</label>
							<input type="text">
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="overlay">
			<div class="overlay-header">
				<div class="overlay-title">Change Character</div>
				<div class="overlay-close"><i class="fas fa-times"></i>&nbsp;Close</div>
			</div>
			<div class="overlay-content">
				<div class="image-folders"></div>
				<div class="image-display"></div>
				<div class="image-alts"></div>
			</div>
		</div>
		<div id="tooltip"></div>
		<script type="text/javascript" src="panel.js"></script>
	</body>
</html>