function initMarker() { 

//Point 1: Bolton Street Technical School
var myMarker1 = {lat: 53.351525, lng: -6.269582}; 

//Point 2: Henrietta Street
var myMarker2 = {lat: 53.352466, lng: -6.269931};

//Point 3: Broadstone Station
var myMarker3 = {lat: 53.354340, lng: -6.274769};

//Point 4: Clocktower Building Grangegorman
var myMarker4 = {lat: 53.355185, lng: -6.278288};

//Point 5: North King Street Junction
var myMarker5 = {lat: 53.350145, lng: -6.274523};

//Point 6: Father Matthew Hall
var myMarker6 = {lat: 53.349473, lng: -6.274833}; 

//Point 7: The Four Courts (Church Street)
var myMarker7 = {lat: 53.346275, lng: -6.275404}; 

//Point 8: The Four Courts on the Quays
var myMarker8 = {lat: 53.345566, lng: -6.273535}; 

//Point 9: The Four Courts at Chancery Place
var myMarker9 = {lat: 53.346037, lng: -6.272312}; 

//Point 10: The Four Courts (Chancery Street)
var myMarker10 = {lat: 53.346855, lng: -6.271907}; 

//Point 11: Beresford Street
var myMarker11 = {lat: 53.348972, lng: -6.273446}; 

//Point 12: North King Street
var myMarker12 = {lat: 53.350166, lng: -6.273612}; 

//Point 13: The Linen Hall
var myMarker13 = {lat: 53.350548, lng: -6.272513}; 

//Point 14: Bolton Street College
var myMarker14 = {lat: 53.351573, lng:  -6.269604};


var marker1 = new google.maps.Marker({
    map: map,
    position: myMarker1,
    title: 'Point 1: Bolton Street Technical School',
    label:'1'
 });

var marker2 = new google.maps.Marker({
    map: map,
    position: myMarker2,
    title: 'Point 2: Henrietta Street',
    label:'2'
 });

var marker3 = new google.maps.Marker({
    map: map,
    position: myMarker3,
    title: 'Point 3: Broadstone Station',
    label:'3'
 });

var marker4= new google.maps.Marker({
    map: map,
    position: myMarker4,
    title: 'Point 4: Clocktower Building Grangegorman',
    label:'4'
 });

var marker5 = new google.maps.Marker({
    map: map,
    position: myMarker5,
    title: 'Point 5: North King Street Junction',
    label:'5'
 });

var marker6 = new google.maps.Marker({
    map: map,
    position: myMarker6,
    title: 'Point 6: Father Matthew Hall',
    label:'6'
 });

var marker7 = new google.maps.Marker({
    map: map,
    position: myMarker7,
    title: 'Point 7: The Four Courts (Church Street)',
    label:'7'
 });

var marker8 = new google.maps.Marker({
    map: map,
    position: myMarker8,
    title: 'Point 8: The Four Courts on the Quays',
    label:'8'
 });

var marker9 = new google.maps.Marker({
    map: map,
    position: myMarker9,
    title: 'Point 9: The Four Courts at Chancery Place',
    label:'9'
 });

var marker10 = new google.maps.Marker({
    map: map,
    position: myMarker10,
    title: 'Point 10: The Four Courts (Chancery Street)',
    label:'10'
 });

var marker11 = new google.maps.Marker({
    map: map,
    position: myMarker11,
    title: 'Point 11: Beresford Street',
    label:'11'
 });

var marker12 = new google.maps.Marker({
    map: map,
    position: myMarker12,
    title: 'Point 12: North King Street',
    label:'12'
 });

var marker13 = new google.maps.Marker({
    map: map,
    position: myMarker13,
    title: 'Point 13: The Linen Hall',
    label:'13'
 });

var marker14 = new google.maps.Marker({
    map: map,
    position: myMarker14,
    title: 'Point 14: Bolton Street College',
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + "14" + '|FF0000|000000'
   
 });

var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Bolton Street Technical School</h1>'+
      '<div id="bodyContent">'+
      '<p>Bolton Street College is the first building in the country specifically		'+
      'designed and built for technical and technological education. Completed in 1911, '+
      'the building was opened for classes in the autumn of that year with courses in 	'+
      'construction and civil and mechanical engineering.</p>							'+
      '</div>'+
      '</div>';

var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Henrietta Street</h1>'+
      '<div id="bodyContent">'+
      '<p>The decay of Dublin was epitomised by Henrietta Street, which had once been 	 '+
      'home to generations of the elite, but was, by 1911, overflowing with poverty. An  '+
      'astonishing 835 people lived in 15 houses.</p>									 '+
      '</div>'+
      '</div>';

var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Broadstone Station</h1>'+
      '<div id="bodyContent">'+
      '<p>In the 19th century Broadstone was one of the most well-known areas of Dublin. '+
      'From 1817 this area was home to one of the major transport hubs in Dublin, 		 '+
      'containing a major rail station and a canal harbor.</p>							 '+
      '</div>'+
      '</div>';

var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Clocktower Building Grangegorman</h1>'+
      '<div id="bodyContent">'+
      '<p>The Grangegorman Urban Quarter is a proposed education, health and community 	 '+
      'development by the Grangegorman Development Agency for Dublin Institute of 		 '+
      'Technology and the Health Service Executive on the old Richmond Lunatic Asylum    '+
      'site.</p>																		 '+
      '</div>'+
      '</div>';

var contentString5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">North King Street Junction</h1>'+
      '<div id="bodyContent">'+
      '<p>Barricades were set up across North Brunswick Street and many of the 			 '+
      'surrounding buildings were occupied. This was overseen by Nicholas Laffan of G'+
      'Company and tunnels were constructed to allow safe communication between 		 '+
      'buildings.</p>																	                               '+
      '</div>'+
      '</div>';

var contentString6 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Father Matthew Hall</h1>'+
      '<div id="bodyContent">'+
      '<p>The Hall was regularly frequented by those interested in promoting the Gaelic  '+
      'cultural revival, including Pádraig Pearse who urged ‘closer co-operation between '+
      'the Gaelic League and the Temperance movement in the cause that is common to both…'+
      'the regeneration of Ireland.</p>                                                  '+                                  
      '</div>'+
      '</div>';

var contentString7 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Four Courts (Church Street)</h1>'+
      '<div id="bodyContent">'+
      '<p>The Four Courts were taken when about 25 Volunteers stormed the Chancery Place '+ 
      'entrance while one of their number, Thomas Smart, held the guard at pistol point. '+
      'Once the building had been secured it was fortified using any suitable materials  '+
      'available.</p>                                                                    '+
      '</div>'+
      '</div>';

var contentString8 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Four Courts on the Quays</h1>'+
      '<div id="bodyContent">'+
      '<p>The Four Courts was built between 1786 and 1796, while the finishing touches to'+ 
      'the arcades and wings were completed in 1802. The renowned architect James Gandon '+
      'played a role in the design and building.</p>                                     '+
      '</div>'+
      '</div>';

var contentString9 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Four Courts at Chancery Place</h1>'+
      '<div id="bodyContent">'+
      '<p>The taking of the Mendicity Institute allowed the British Forces to move up their '+
      'quays, eastward, and to take up positions opposite the Four Courts. One of the       '+
      'volunteers in the Four Courts spotted an ambulance and some activity on the opposite '+
      'side of the river.</p>                                                               '+
      '</div>'+
      '</div>';

var contentString10 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Four Courts (Chancery Street)</h1>'+
      '<div id="bodyContent">'+
      '<p>In 1891, Dublin Medical Mission was established, and moved to the present '+
      'buildings in 1893, at No. 6 Chancery Place. The building is an interesting   '+
      'combination of red brick, sandstone and terracotta detailing. </p>           '+
      '</div>'+
      '</div>';

var contentString11 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Beresford Street</h1>'+
      '<div id="bodyContent">'+
      '<p>Walking north from the medical mission, away from the river we cross into'+
      'Beresford street. This building was known as the Malthouse. This street was '+
      'known as Phrapper Street and was once in the heart of the linen district of '+
      'Dublin.</p>                                                                 '+
      '</div>'+
      '</div>';

var contentString12 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">North King Street</h1>'+
      '<div id="bodyContent">'+
      '<p>We make our way to the junction of Beresford Street and North King Street. '+
      'Here we can see the Tap Pub, site of Reilly’s pub, Bolton Street Technical    '+
      'Schools, the Linen Hall and the site of Langans pub. Across the street is a   '+
      'plaque, and to our left is a green area.</p>                                  '+
      '</div>'+
      '</div>';

var contentString13 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Linen Hall</h1>'+
      '<div id="bodyContent">'+
      '<p>In 1722 a centralised Linen Hall was proposed by the Linen Board and they  '+
      'eventually decided in favour of a three-acre site at the top of Capel Street. '+
      'Over the next six years, the Linen Hall gradually took shape and it opened for'+
      'trade on November 14th, 1728.</p>                                             '+
      '</div>'+
      '</div>';

var contentString14 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Bolton Street College</h1>'+
      '<div id="bodyContent">'+
      '<p>Leaving the Linen Hall through the main gate we cross Bolton Street and at  '+
      'the car park look down North King Street. The north inner city was in flames at'+
      'this stage, on Friday evening.</p>                                             '+
      '</div>'+
      '</div>';


var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });

var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });

var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });

var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });

var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  });

var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
  });

var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
  });

var infowindow8 = new google.maps.InfoWindow({
    content: contentString8
  });

var infowindow9 = new google.maps.InfoWindow({
    content: contentString9
  });

var infowindow10 = new google.maps.InfoWindow({
    content: contentString10
  });

var infowindow11 = new google.maps.InfoWindow({
    content: contentString11
  });

var infowindow12 = new google.maps.InfoWindow({
    content: contentString12
  });

var infowindow13 = new google.maps.InfoWindow({
    content: contentString13
  });

var infowindow14 = new google.maps.InfoWindow({
    content: contentString14
  });


marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });

marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });

marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });

marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });

marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });

marker6.addListener('click', function() {
    infowindow6.open(map, marker6);
  });

marker7.addListener('click', function() {
    infowindow7.open(map, marker7);
  });

marker8.addListener('click', function() {
    infowindow8.open(map, marker8);
  });

marker9.addListener('click', function() {
    infowindow9.open(map, marker9);
  });

marker10.addListener('click', function() {
    infowindow10.open(map, marker10);
  });

marker11.addListener('click', function() {
    infowindow11.open(map, marker11);
  });

marker12.addListener('click', function() {
    infowindow12.open(map, marker12);
  });

marker13.addListener('click', function() {
    infowindow13.open(map, marker13);
  });

marker14.addListener('click', function() {
    infowindow14.open(map, marker14);
  });

}


/*
 var image = 'images/beachflag.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -33.890, lng: 151.274},
    map: map,
    icon: image
 */