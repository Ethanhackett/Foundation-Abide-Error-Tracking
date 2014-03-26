(function( $ ) {
 
    $.fn.abideevents = function() {
		
		// Get date and convert to HH:MM AM/PM
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		var hours = hours % 12;
		var hours = hours ? hours : 12; // the hour '0' should be '12'
		var minutes = minutes < 10 ? '0'+minutes : minutes;
		var errorTime = ' (' + hours + ':' + minutes + ' ' + ampm + ')';
	
 		// For each error do the following
		$('div.error').each(function() {
		
			// Retrieve the error message
			var errorText = $(this).find('small.error').text();
			// Retrieve the label for the input
			var labelText = $(this).find('label').text();
			// Strip out the Required text that appears
			var labelText = labelText.replace(' required','');
			// Retrieve the input value
			var inputValue = $(this).find('input').val();
			// Combine the values into the error submitted to Google Analytics
			var error = errorText + errorTime + ' : ' + inputValue;
			// Submit the google event
			_gaq.push(['_trackEvent', 'Foundation Abide Error Details', labelText, error]);
			
		});
		
		// Total Number of Errors present on the page
		var errorCount = $('div.error').length + ' Errors'
		// Count the number of error messages
		_gaq.push(['_trackEvent', 'Foundation Abide Error Count', 'Errors On Submit', errorCount]);
 
    };

}( jQuery ));