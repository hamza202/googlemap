function initAutocomplete() {
    (function (A) {

        if (!Array.prototype.forEach)
            A.forEach = A.forEach || function (action, that) {
                for (var i = 0, l = this.length; i < l; i++)
                    if (i in this)
                        action.call(that, this[i], i, this);
            };

    })(Array.prototype);

    var
        mapObject,
        markers = [],
        markersData = {
            'Marker': [
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.865633,
                    location_longitude: 2.321236,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'tourism'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.854183,
                    location_longitude: 2.354808,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'tourism'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.863893,
                    location_longitude: 2.342348,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'health'

                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.860642,
                    location_longitude: 2.352245,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'health'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.858370,
                    location_longitude: 2.294481,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'education'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.837273,
                    location_longitude: 2.335387,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'education'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.860819,
                    location_longitude: 2.354507,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'business'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.853798,
                    location_longitude: 2.333328,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'business'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.862880,
                    location_longitude: 2.287205,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    url_point: 'restaurant-detail.html',
                    category: 'business'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.865784,
                    location_longitude: 2.307314,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'health'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.852729,
                    location_longitude: 2.350564,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'health'
                },
                {
                    type_point: 'مأكولات ايطالية',
                    name: 'اسم المطعم',
                    location_latitude: 48.870587,
                    location_longitude: 2.318943,
                    map_image_url: 'images/thumb_map_single_restaurant.jpg',
                    rate: 'تقيم | 8.5',
                    name_point: 'اسم المطعم',
                    get_directions_start_address: '',
                    phone: '+3934245255',
                    url_point: 'restaurant-detail.html',
                    category: 'education'
                }
            ]

        };

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(48.865633, 2.321236),

        mapTypeControl: true,
        mapTypeControlOptions: {
            // style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            // mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP],
            position: google.maps.ControlPosition.LEFT_CENTER
        },

        mapTypeId: google.maps.MapTypeId.HYBRID,
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scrollwheel: false,
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
    };
    var marker;
    mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (var key in markersData)

        filterMarkers = function (category) {
            markersData[key].forEach(function (item) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
                    map: mapObject,
                    // mapTypeId: 'satellite',
                    icon: 'images/pins/' + item.category + '.png',
                    // visible: false
                });



                // var controlUI = document.getElementById('#div');
                //
                // // Setup the click event listeners to geolocate user
                // google.maps.event.addDomListener(controlUI, 'click', geolocate);


                // console.log(item.category);
                console.log(category);
                if (item.category === category || category === 0) {
                    marker.setMap(mapObject);
                }
                // Categories don't match
                else {
                    marker.setMap(null);
                }

                // console.log(item.category);

                // If is same category or category not picked


                if ('undefined' === typeof markers[key])
                    markers[key] = [];
                markers[key].push(marker);
                google.maps.event.addListener(marker, 'click', (function () {
                    closeInfoBox();
                    getInfoBox(item).open(mapObject, this);
                    mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
                }));
                // clearMarkers = function () {
                //     marker.setMap(null);
                //     console.log(item)
                // };

            });

        };
    filterMarkers(0);
    var MyLocation = document.getElementById('myLocation');
    mapObject.controls[google.maps.ControlPosition.TOP_RIGHT].push(MyLocation);
    geolocate = function geolocate() {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                // Create a marker and center map on user location
                marker.setMap(null);
                marker = new google.maps.Marker({
                    position: pos,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    icon: 'images/pins/marker.png',
                    map: mapObject,

                });
                // marker.setMap(mapObject);
                mapObject.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                mapObject.setZoom(16);
            });
        }
    };
    // filterMarkers(0)
    // new MarkerClusterer(mapObject, markers[key]);
    // mapObject.addListener('bounds_changed', function () {
    //     searchBox.setBounds(mapObject.getBounds());
    // });
    hideAllMarkers = function hideAllMarkers() {
        for (var key in markers)
            markers[key].forEach(function (marker) {
                marker.setMap(null);
            });
    };

    function closeInfoBox() {
        $('div.infoBox').remove();
    };
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    mapObject.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    // mapObject.addListener('bounds_changed', function () {
    //     searchBox.setBounds(mapObject.getBounds());
    // });
    var markerss = [];
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear out the old markers.
        markerss.forEach(function (marker) {
            marker.setMap(null);
        });
        markerss = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markerss.push(new google.maps.Marker({
                map: mapObject,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        mapObject.fitBounds(bounds);
    });

    function getInfoBox(item) {
        return new InfoBox({
            content:
                '<div class="marker_info" id="marker_info">' +
                '<a href="' + item.url_point + '"><img src="' + item.map_image_url + '" alt=""/></a>' +
                '<span>' +
                '<span class="infobox_rate">' + item.rate + '</span>' +
                '<h3>' + item.name_point + '</h3>' +
                '<em>' + item.type_point + '</em>' +
                '<strong>' + item.description_point + '</strong>' +
                '<a href="' + item.url_point + '" class="btn_infobox_detail"><i class="far fa-link"></i>	</a>' +
                '<form action="http://maps.google.com/maps" method="get" target="_blank"><input name="saddr" value="' + item.get_directions_start_address + '" type="hidden"><input type="hidden" name="daddr" value="' + item.location_latitude + ',' + item.location_longitude + '"><button type="submit" value="Get directions" class="btn_infobox_get_directions">الموقع على الخرائط <i class="far fa-compass"></i> </button></form>' +
                '<a href="tel://' + item.phone + '" class="btn_infobox_phone">' + item.phone + ' <i class="far fa-phone"></i></a>' +
                '</span>' +
                '</div>',
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(10, 92),
            closeBoxMargin: '',
            closeBoxURL: "images/close_infobox.png",
            isHidden: false,
            alignBottom: true,
            pane: 'floatPane',
            enableEventPropagation: true
        });


    }

}
