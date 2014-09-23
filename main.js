$(document).on('ready', function() {
  
	// create these components with DOM Manipulation:
	// Outer Shell (dark gray)
	// Inner Shell (black)
	// Left AM/PM & Auto Labels (white)
	// Clock Screen (dark red)
	// Clock AM/PM indicator (red)
	// Clock Text (red)
	// Bottom AM Label & Frequencies (white)
	// Bottom FM Label & Frequencies (white)
	var outerShell = $('<div class=\'outer-shell\'></div>');
	var innerShell = $('<div class=\'inner-shell\'></div>');
	var amPMLabels = $('<div class=\'amPMLabels\'>PM<br><br><br>AUTO</div>');
	var clockScreen = $('<div class=\'clock-screen\'></div>');
	var clockAMPMIndicator = $('<div class=\'indicator\'>.</div>');
	var clockText = $('<div class=\'clock-text\'></div>');
	var amfmLabel = $('<div class=\'am-fm-label\'>AM &nbsp&nbsp&nbsp&nbsp&nbsp 53 &nbsp 60 &nbsp 70 &nbsp &nbsp 90 &nbsp 110 &nbsp&nbsp 140 &nbsp 170 &nbsp&nbsp&nbsp&nbsp <span>x10</span>KHz<br>FM &nbsp&nbsp&nbsp&nbsp&nbsp 88 &nbsp 92 &nbsp 96 &nbsp&nbsp&nbsp&nbsp 102 &nbsp&nbsp 106 &nbsp&nbsp&nbsp&nbsp 108  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  MHz</div>');


	



	$('.container').append(outerShell);
	$('.outer-shell').append(innerShell);
	$('.inner-shell').append(amPMLabels);

	$('.inner-shell').append(clockScreen);
	$('.inner-shell').append(amfmLabel);
	$('.clock-screen').append(clockAMPMIndicator);
	$('.indicator').attr('ID', 'PM');
	$('.clock-screen').append(clockText);

	var indPosition = function(){
		var timeString = new Date();
		var timeMinutes = timeString.getMinutes();
		var timeHours = timeString.getHours();

		if(timeHours < 10){
			timeHours = '0'+timeHours;
		}

		if(timeMinutes < 10){
			timeMinutes = '0'+timeMinutes;
		}

		armyTime = timeHours+':'+timeMinutes;
		if (armyTime <= "11:59" && $('.indicator').attr('ID') === 'PM'){
			$('.indicator').attr('ID', '');
		} 
	};
	
	var realTime = '';
	var getTime = function(){
		var timeString = new Date();
		var timeMinutes = timeString.getMinutes();
		var timeHours = timeString.getHours();

		if(timeHours > 12){
			timeHours = timeHours-12;
		}
		if(timeHours < 10){
			timeHours = '0'+timeHours;
		}

		if(timeMinutes < 10){
			timeMinutes = '0'+timeMinutes;
		}
	

		realTime = timeHours+':'+timeMinutes;
		$('.clock-text').text(realTime);
	};
	var changeIndicator = function(){
		var timeString = new Date();
		var timeMinutes = timeString.getMinutes();
		var timeHours = timeString.getHours();

		if(timeHours < 10){
			timeHours = '0'+timeHours;
		}

		if(timeMinutes < 10){
			timeMinutes = '0'+timeMinutes;
		}

		indTime = timeHours+':'+timeMinutes;
		if (indTime === "12:00" && $('.indicator').attr('ID') === ''){
			$('.indicator').attr('ID', 'PM');
		}
		if (indTime === "00:00" && $('.indicator').attr('ID') === 'PM'){
			$('.indicator').attr('ID', '');
		} 
	};
	indPosition();
	getTime();
	changeIndicator();

	setInterval(function(){getTime()}, 1000);
	setInterval(function(){changeIndicator()}, 1000);


	

});


