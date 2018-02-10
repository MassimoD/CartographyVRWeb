window.cartography = new Object();
window.cartography.textDefaults = {
	'align' : 'center',
	'width' : '12',
	'font' : 'https://cdn.aframe.io/fonts/Roboto-msdf.json',
	'zOffset' : '0.1',
};

/*
	Pour créer une nouvelle plane, il faut juste ajouter ce qui suit dans la variable planes :
		{
			'height' : '', // nombre (pixel)
			'width' : '', // nombre (pixel)
			'rotation' : '', // 3 nombres représentant l'angle en degré dans l'ordre (x y z)
			'text' : {
				'content' : '', // le texte affiché
				'align' : '', // par défaut c'est centré
				'width' : '', // grandeur du texte, par défaut c'est 12
			}
		},
*/
window.cartography.planes = [
	{
		'height' : '2',
		'width' : '9',
		'rotation' : '0 0 0',
		'position' : '0 0 -10',
		'backgroundColor' : 'black',
		'text' : {
			'content' : 'Artistic Research',
			'width' : '24',
		}
	},
	{
		'height' : '2',
		'width' : '9',
		'rotation' : '0 45 0',
		'position' : '-30 0 -15',
		'backgroundColor' : '#202020',
		'text' : {
			'content' : 'Knowledge',
			'width' : '16',
		}
	},
	{
		'height' : '2',
		'width' : '9',
		'rotation' : '0 -45 0',
		'position' : '30 0 -15',
		'backgroundColor' : '#202020',
		'text' : {
			'content' : 'Epistemology',
			'width' : '16',
		}
	},
	{
		'height' : '5',
		'width' : '12',
		'rotation' : '0 -45 0',
		'position' : '30 -4 -15',
		'backgroundColor' : '#202020',
		'text' : {
			'content' : "Julia Kristeva's account of dialectics  as catastrophe  in order to explain how creative practice engenders material processes that rupture meaning and language to allow the as yet unimagined and unrepresented to be revealed. (BarreW 2014, p. 54)",
			'align' : 'left',
		}
	},
];