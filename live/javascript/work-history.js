$(document).on('click','.jobCircle',function(){
	var summaryToShow = $(this).attr('data-popup');
	popup(summaryToShow.toUpperCase(), $('#' + summaryToShow + '>.jobSummary').html());
});