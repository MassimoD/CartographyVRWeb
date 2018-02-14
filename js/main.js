var document = document;
var window = window;
(function() {
	function loadScript(url, callback)
	{
		// Adding the script tag to the head as suggested before
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;

		// Then bind the event to the callback function.
		// There are several events for cross browser compatibility.
		script.onreadystatechange = callback;
		script.onload = callback;

		// Fire the loading
		head.appendChild(script);
	}

	var generatePlanes = function() 
	{
		var textDefaults = window.textDefaults;
		var data = window.cartography.planes;
		var scene = document.getElementById('scene');
		var elem, text, plane;
		
		for( var i = 0; i < data.length; i++ ) {
			plane = data[i];
		
			elem = document.createElement('a-plane');
			elem.setAttribute('height', plane.height);
			elem.setAttribute('width', plane.width);
			elem.setAttribute('rotation', plane.rotation);
			elem.setAttribute('position', plane.position);
			elem.setAttribute('color', plane.backgroundColor);
			elem.setAttribute('class','link');

			// Temporary
            elem.setAttribute('opacity', 0);
			
			text = document.createElement('a-text');
			text.setAttribute('value', plane.text.content);
			text.setAttribute('align', (plane.text.align ? plane.text.align : textDefaults.align));
			text.setAttribute('width', (plane.text.width ? plane.text.width : textDefaults.width));
			text.setAttribute('font', textDefaults.font);
            text.setAttribute('z-offset', textDefaults.zOffset);
            text.setAttribute('color', (plane.text.color ? plane.text.color : textDefaults.color));

			if(plane.text.align == 'left')
            	text.setAttribute('position', '-'+(plane.width/2 - 0.2));

			elem.appendChild(text);
			scene.appendChild(elem);
		}
	};

    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    };

    Math.degrees = function(radians) {
        return radians * 180 / Math.PI;
    };

    function deepEquals(o1, o2) {
        var k1 = Object.keys(o1).sort();
        var k2 = Object.keys(o2).sort();
        if (k1.length != k2.length) return false;
        return k1.zip(k2, function(keyPair) {
            if(typeof o1[keyPair[0]] == typeof o2[keyPair[1]] == "object"){
                return deepEquals(o1[keyPair[0]], o2[keyPair[1]])
            } else {
                return o1[keyPair[0]] == o2[keyPair[1]];
            }
        }).all();
    }

    function jsonEqual(a,b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    function animateCameraToNewPositionWithKeyboard(e)
    {
        var keycode = event.keyCode || e.which;
        if(keycode == '13') {
            animateCameraToNewPosition();
        }
    }

    function animateCameraToNewPosition() {
        var raycaster = AFRAME.scenes[0].querySelector('[raycaster]').components.raycaster;

        if(!raycaster.intersectedEls[0]) return;

        var target = raycaster.intersectedEls[0];

        var positions = {
            x : target.getAttribute('position').x,
            y : target.getAttribute('position').y,
            z : target.getAttribute('position').z + 10,
        };

        var rotations = {
            x : target.getAttribute('rotation').x,
            y : target.getAttribute('rotation').y,
            z : target.getAttribute('rotation').z,
        };

        if(positions.x > 0)
            positions.x -= Math.tan(Math.radians(rotations.y)) * -10;
        else if(positions.x < 0)
            positions.x -= Math.tan(Math.radians(rotations.y)) * -10;
        else
            positions.x -= Math.tan(Math.radians(rotations.y));

        var camera = document.getElementById('camera');

        camera.setAttribute('animation__moveCamera', {from : camera.getAttribute('position').x + ' ' + camera.getAttribute('position').y + ' ' + camera.getAttribute('position').z});
        camera.setAttribute('animation__rotateCamera', {from : camera.getAttribute('rotation').x + ' ' + camera.getAttribute('rotation').y + ' ' + camera.getAttribute('rotation').z});

        camera.setAttribute('animation__rotateCamera', {to : rotations});
        camera.setAttribute('animation__moveCamera', {to : positions});

        if(!jsonEqual(positions, camera.getAttribute('position')) && !jsonEqual(rotations, camera.getAttribute('rotation'))) {
            camera.emit('rotateCamera');
            camera.emit('moveCamera');
            camera.addEventListener('animationcomplete', setCameraNewValues);
        }
	}

    function setCameraNewValues(e)
    {
        var camera = document.getElementById('camera');
        camera.removeEventListener('animationcomplete', setCameraNewValues);
        camera.setAttribute('position', camera.getAttribute('animation__moveCamera').to);
        camera.setAttribute('rotation', camera.getAttribute('animation__rotateCamera').to);
    }

	document.addEventListener('keyup', animateCameraToNewPositionWithKeyboard);
    AFRAME.scenes[0].addEventListener('buttonup', animateCameraToNewPosition);

	loadScript("./js/data.js", null);

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if(page == 'index.html'){
        loadScript("./js/artistic-research-data.js", generatePlanes);
    }
    else {
        loadScript("./js/practice-as-research-data.js", generatePlanes);
    }


})();