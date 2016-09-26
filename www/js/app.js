// Define application object and common functions.
var app = (function()
{
	// Application object.
	var app = {};

	
// Currently displayed page.
currentPage = 'generalbeacon';

app.initialize = function()
{
	
    document.addEventListener('deviceready', onDeviceReady, false);
    gotoPage(currentPage);
	
};

// Called when Cordova are plugins initialised,
// the iBeacon API is now available.
function onDeviceReady()
{
    // Specify a shortcut for the location manager that
    // has the iBeacon functions.
    window.locationManager = cordova.plugins.locationManager;

    // Start tracking beacons!
    app.startScanForBeacons();
}

app.startScanForBeacons = function()
{
    console.log('startScanForBeacons');

    // The delegate object contains iBeacon callback functions.
    var delegate = new cordova.plugins.locationManager.Delegate();

    delegate.didDetermineStateForRegion = function(pluginResult)
    {
        console.log('didDetermineStateForRegion: ' + JSON.stringify(pluginResult));
    };

    delegate.didStartMonitoringForRegion = function(pluginResult)
    {
        console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
    };

    delegate.didRangeBeaconsInRegion = function(pluginResult)
    {
        console.log('didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
        didRangeBeaconsInRegion(pluginResult);
    };

    // Set the delegate object to use.
    locationManager.setDelegate(delegate);

    // Start monitoring and ranging our beacons.
    for (var r in beaconRegions)
    {
        var region = beaconRegions[r];

        var beaconRegion = new locationManager.BeaconRegion(
            region.id, region.uuid, region.major, region.minor);
        //window.open
        
        // Start monitoring.
        // Monitoring only generater events when a region is entered or exited.
        // And works both when the app is in the foreground and in the background.
        locationManager.startMonitoringForRegion(beaconRegion)
            .fail(console.error)
            .done();

        // Start ranging.
        // Ranging continuosly displays all beacons found and it is active when.
        // an app is in the foreground, buto not in thebackground.
        locationManager.startRangingBeaconsInRegion(beaconRegion)
            .fail(console.error)
            .done();
    }
};

// Display pages depending of which beacon is close.
function didRangeBeaconsInRegion(pluginResult)
{
    //console.log('numbeacons in region: ' + pluginResult.beacons.length)

    // There must be a beacon within range.
    if (0 === pluginResult.beacons.length)
    {
        return;
    }

    // Our regions are defined so that there is one beacon per region.
    // Get the first (and only) beacon in range in the region.
    var beacon = pluginResult.beacons[0];

    // The region identifier is the page id.
    var pageId = pluginResult.region.identifier;


    //console.log('ranged beacon: ' + pageId + ' ' + beacon.proximity)

    // If the beacon is close and represents a new page, then show the page.
    if ((beacon.proximity == 'ProximityImmediate') && currentPage == 'generalbeacon')
    {
        var openPage = window.open(pageId);
        //gotoPage(pageId);
    	app.stop(pluginResult);

    	$('#generalbeacon').hide();
        $('#easterhome').show();
    	
    //while (1) {
		//checkWindow(openPage);
        //return;
   	//}
    }

    // If the beacon represents the current page but is far away,
    // then show the default page.
    if ((beacon.proximity == 'ProximityFar' || beacon.proximity == 'ProximityNear') && currentPage == pageId)
    {
        gotoPage('generalbeacon');
        //app.stop(pluginResult);
        return;
    }
}

function gotoPage(pageId)
{
    hidePage(currentPage);
    showPage(pageId);
    currentPage = pageId;
    
}

function showPage(pageId)
{
    console.log(pageId);
    $('#'+pageId).show();
}

function hidePage(pageId)
{
    console.log(pageId);
    $('#'+pageId).hide();
}

function checkWindow(openPage){

    if (openPage.closed)
    {
    	console.log('bye');
        //break;
    }
    else
    {
        //console.log('hi');
        //return;
    }
}

app.stop = function(pluginResult)

{
	window.locationManager = cordova.plugins.locationManager;
	
	var delegate = new cordova.plugins.locationManager.Delegate();
	// Set the delegate object to use.
    locationManager.setDelegate(delegate);

    // Start monitoring and ranging our beacons.
    for (var r in beaconRegions)
    {
        var region = beaconRegions[r];

        var beaconRegion = new locationManager.BeaconRegion(
            region.id, region.uuid, region.major, region.minor);
        
        locationManager.stopRangingBeaconsInRegion(beaconRegion)
            .fail(console.error)
            .done();
    }
		console.log('No');
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ QR SCANNER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

app.qrscan = function() 
{
    cordova.plugins.barcodeScanner.scan(
        
        function (result) {
          	
          	if(!result.cancelled)
            {
                if(result.format == "QR_CODE")
                {
                                
          		var value = result.text;

          		console.log(value);

          		window.open('http://'+ value);
            	
            	}
          	}

        },

        function (error) 
        {
            alert("Scanning failed: " + error);
        }
   );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

$(document).on("touchend", "#refresh", function(e) {
    e.preventDefault();
    $("refreshMap").hide();
    /* Retrieve Google Maps location when pressed */

    app.initMap();
});

/* GeoID used by watch position */
var geoID;

/* Array to hold geolocation objects */
var positions = [];
//var totalDistanceCovered = 0;

/* Array to hold google maps coords */
var pathTaken = [];
var lat;
var long;
var currentLat;
var currentLong;

app.getStartingPoint = function(){ 
    /* Get current position based on single callback */
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

    function geoSuccess(position) {
        /* Assign starting coords based on current position */
        lat = position.coords.latitude;
        long = position.coords.longitude;
        positions.push(position);
        console.log(position);
        app.startTrackingGPS();
    }

    function geoError(error) {
        navigator.notification.alert('code: ' + error.code + '\n');
    }
};

app.startTrackingGPS = function() {

    geoID = navigator.geolocation.watchPosition(geoSuccess, geoError, options);

    var options = {
        /* High accuracy assumes only satellite coords are valid */
        enableHighAccuracy: true,
        maximumAge: 3000
    };

    function geoSuccess(position) {

        positions.push(position);
        currentLat = position.coords.latitude;
        currentLong = position.coords.longitude;
        console.log(position);
    }

    function geoError(error) {
        navigator.notification.alert('code: ' + error.code + '\n');
    }

};

app.stopTrackingGPS = function () {
    navigator.geolocation.clearWatch(geoID);
};


app.initMap = function() {
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        animation: google.maps.Animation.DROP,
        title:'You are Here!'
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var latLong = new google.maps.LatLng(lat, long);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());

    initMarker();
                          
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ OPACITY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 



	return app;

})();