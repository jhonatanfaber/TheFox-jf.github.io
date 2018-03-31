initMap();


function initMap() {
  $(".dropdown p").hide();
  $(".wrapper__image img").hide();
  var uluru = { lat: 40.416775, lng: -3.70379 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}



function dropdown(id) {
  $(".dropdown p").hide();
  $(".wrapper__image img").hide();
  if ($(id).is("#CreativeService")) {
    $(".wrapper__image img").show();
  }
  $(id).show();
}

