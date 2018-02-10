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
		var textDefaults = window.cartography.textDefaults;
		var data = window.cartography.planes;
		var scene = document.getElementById('scene');
		var elem, text, plane, positions;
		
		for( var i = 0; i < data.length; i++ ) {
			plane = data[i];
		
			elem = document.createElement('a-plane');
			elem.setAttribute('height', plane.height);
			elem.setAttribute('width', plane.width);
			elem.setAttribute('rotation', plane.rotation);
			elem.setAttribute('position', plane.position);
			elem.setAttribute('color', plane.backgroundColor);
			
			text = document.createElement('a-text');
			text.setAttribute('value', plane.text.content);
			text.setAttribute('align', (plane.text.align ? plane.text.align : textDefaults.align));
			text.setAttribute('width', (plane.text.width ? plane.text.width : textDefaults.width));
			text.setAttribute('font', textDefaults.font);
            text.setAttribute('z-offset', textDefaults.zOffset);

			if(plane.text.align == 'left')
            	text.setAttribute('position', '-'+(plane.width/2 - 0.2));

			elem.appendChild(text);
			scene.appendChild(elem);
		}
	}
	
	loadScript("./js/data.js", generatePlanes);
})();