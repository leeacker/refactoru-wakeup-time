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
	
	var realTime = '';
	setInterval(function(){
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
		console.log(timeHours);
		console.log(timeMinutes);

		realTime = timeHours+':'+timeMinutes;
		$('.clock-text').text(realTime);
	
	}, 1000);

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
		console.log(timeHours);
		console.log(timeMinutes);

		realTime = timeHours+':'+timeMinutes;
		$('.clock-text').text(realTime);


	}
	getTime();
	// setInterval(getTime(), 1000);
	

});