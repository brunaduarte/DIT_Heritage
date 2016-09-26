/*document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
    //var app;
    //navigator.splashscreen.hide();
    //app = new Application();
    //app.scan();

    if(localStorage.getItem("LocalData") === null) {
        var data = [];
        data = JSON.stringify(data);
        localStorage.setItem("LocalData", data);
    }

}


function scan()
{
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
                if(result.format == "QR_CODE")
                {
                    navigator.notification.prompt("Please enter name of data",  function(input){
                        var name = input.input1;
                        var value = result.text;

                        var data = localStorage.getItem("LocalData");
                        console.log(data);
                        data = JSON.parse(data);
                        data[data.length] = [name, value];

                        localStorage.setItem("LocalData", JSON.stringify(data));

                        alert("Done");
                    });
                }
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
   );
}

$(document).on("pagebeforeshow", "#display", function() {
    $("table#allTable tbody").empty();

    var data = localStorage.getItem("LocalData");
    console.log(data);
    data = JSON.parse(data);

    var html = "";

    for(var count = 0; count < data.length; count++)
    {
        html = html + "<tr><td>" + data[count][0] + "</td><td><a href='javascript:openURL(\"" + data[count][1] + "\")'>" + data[count][1] + "</a></td></tr>";
    }

    $("table#allTable tbody").append(html).closest("table#allTable").table("refresh").trigger("create");

});

function openURL(url)
{
    window.open(url, '_blank', 'location=yes');
}


//BEACONS

// Application object.
//var app = {};

//Beacons = function(){
// Regions that define which page to show for each beacon.
beaconRegions =
[
    {
        //Ice
        id: 'beacon1',
        uuid:'CCC61D40-C2CD-7D1F-1046-1A17CAAD33B4',
        major: 1,
        minor: 1
    },
    {
        //Blueberry
        id: 'beacon2',
        uuid:'5A58F304-3261-9656-002D-BD2C9544167F',
        major: 1,
        minor: 2
    },
    {
        //Mint
        id: 'beacon3',
        uuid:'0DD88F76-32E9-CA0E-34A4-F92798913D08',
        major: 1,
        minor: 3
    },
    {
        //Ice2
        id: 'beacon4',
        uuid:'CCC61D40-C2CD-7D1F-1046-1A17CAAD33B4',
        major: 2,
        minor: 1
    },
    {
        //Blueberry2
        id: 'beacon5',
        uuid:'5A58F304-3261-9656-002D-BD2C9544167F',
        major: 2,
        minor: 2
    },
    {
        //Mint2
        id: 'beacon6',
        uuid:'0DD88F76-32E9-CA0E-34A4-F92798913D08',
        major: 2,
        minor: 3
    }
];

// Currently displayed page.
currentPage = 'generalbeacon';

function initialize()
{
    document.addEventListener('deviceready', onDeviceReady, false);
    gotoPage(currentPage);
}

// Called when Cordova are plugins initialised,
// the iBeacon API is now available.
function onDeviceReady()
{
    // Specify a shortcut for the location manager that
    // has the iBeacon functions.
    window.locationManager = cordova.plugins.locationManager;

    // Start tracking beacons!
    startScanForBeacons();
}

function startScanForBeacons ()
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
}

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
        gotoPage(pageId);
        return;
    }

    // If the beacon represents the current page but is far away,
    // then show the default page.
    if ((beacon.proximity == 'ProximityFar' || beacon.proximity == 'ProximityNear') && currentPage == pageId)
    {
        gotoPage('generalbeacon');
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

//

// Set up the application.

//app.startScanForBeacons();

var treestour = 0;
var eastertour = 0;
/*
function myFunc(){
    var app = {};

    alert('Hellow there!');
    initialize();
    }
document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('mybtn').addEventListener('click', initialize);});
        */
       

//;(function(app)
//{

/*app.initialize = function()
{
    console.log("Hello There");
    document.addEventListener('deviceready', onDeviceReady, false);
    //gotoPage(currentPage);
    console.log("Bye There");
};
// Called when Cordova are plugins initialised,
// the iBeacon API is now available.
function onDeviceReady()
{
    // Specify a shortcut for the location manager that
    // has the iBeacon functions.
    window.locationManager = cordova.plugins.locationManager;

    // Start tracking beacons!
    startScanForBeacons();
}*/


//})(app);