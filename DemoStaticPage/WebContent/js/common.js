function getWeather() {

	var iframe = document.getElementById("weatherFrame");
	if (iframe.attachEvent) {
		iframe.attachEvent("onload", function() {
			// 以下操作必须在iframe加载完后才可进行
			output();
		});
	} else {
		iframe.onload = function() {
			// 以下操作必须在iframe加载完后才可进行
			output();
		};
	}
}

function output() {
	//var text = $(window.frames["weatherFrame"].document).find("body").html();
	var text = $("#weatherFrame").find("body").html();
	var weatherInfo = $.parseJSON(text);
	var weatherText = weatherInfo.city + "&nbsp;" + weatherInfo.weather
			+ "&nbsp;" + weatherInfo.temp2 + "~" + weatherInfo.temp1;
	$(".weather").html(weatherText);
}