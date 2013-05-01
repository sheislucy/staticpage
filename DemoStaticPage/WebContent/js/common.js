function getWeather() {
	$.getJSON("http://www.weather.com.cn/data/cityinfo/101211001.html",
			function(data) {
				var weatherInfo = data.weatherInfo;
				var weatherText = weatherInfo.city + "&nbsp;"
						+ weatherInfo.weather + "&nbsp;" + weatherInfo.temp2
						+ "~" + weatherInfo.temp1;
				$(".weather").html(weatherText);
			});
}