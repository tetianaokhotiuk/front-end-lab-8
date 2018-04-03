function trackIp() {
    document.getElementById("resloader").setAttribute("class", "loader");
	var ipAddress = document.getElementById("q").value;
    http.get(`https://ipapi.co/${ipAddress}/json/`)
    .then(
        function (value) {
            document.getElementById('response').innerHTML = value;
            
        responseCreation();

        },
        function (reason) {
            console.error('Something went wrong', reason);
        });
	}

function valid() {
    document.getElementById("loader").setAttribute("class", "loader");	
	var json = document.getElementById("response").innerHTML;
    http.post(`https://shrouded-garden-94580.herokuapp.com/`, json)
    .then(
        function (value) {
            document.getElementById('rez').innerHTML = value;
        },
        function (reason) {
            console.error('Something went wrong', reason);
        });
	}

function responseCreation() {
    var visres = JSON.parse(document.getElementById("response").innerHTML);
    document.getElementById('info').innerHTML = `According IP address you've entered your location is:`;
    document.getElementById('city').innerHTML = `${visres.city} city`;
    document.getElementById('country').innerHTML = `${visres.country_name} country`;
    document.getElementById('latit').innerHTML = `on latitude ${visres.latitude}`;
    document.getElementById('longt').innerHTML = `on longtitude ${visres.longitude}`;
}