window.cartography = new Object();
window.cartography.textDefaults = {
	'align' : 'center',
	'width' : '12',
	'font' : 'https://cdn.aframe.io/fonts/Roboto-msdf.json',
	'zOffset' : '0.1',
};

/*
	Pour créer une nouvelle plane, il faut juste ajouter ce qui suit dans la variable planes (il y a un commentaire en bas pour vous dire où les ajouter) :
		{
			'height' : '', // hauteur de la surface de couleur
			'width' : '', // longueur de la surface de couleur
			'rotation' : '', // 3 nombres représentant l'angle en degré dans l'ordre (x y z)
			'position' : '0 0 0', // position (x y z)
			'backgroundColor' : 'black', // couleur de fond
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
            'content' : 'Epistemology',
            'width' : '16',
        }
    },
    {
        'height' : '5',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-30 -4 -15',
        'backgroundColor' : '#202020',
        'text' : {
            'content' : "Julia Kristeva's account of dialectics  as catastrophe  in order to explain how creative practice engenders material processes that rupture meaning and language to allow the as yet unimagined and unrepresented to be revealed. (Barrett 2014, p. 54)",
            'align' : 'left',
        }
    },
	{
		'height' : '2',
		'width' : '9',
		'rotation' : '0 -45 0',
		'position' : '30 0 -15',
		'backgroundColor' : '#202020',
		'text' : {
			'content' : 'Knowledge',
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
            'content' : 'The juxtaposing of disparate objects and ideas has, after all,  often been viewed as an intrinsic aspect of creativity. The interplay of ideas from disparate areas of knowledge in creative arts research creates conditions for the emergence of new analogies, metaphors and models for understanding objects of enquiry.( Barrett 2007b, p.7)',
        }
    },

	// Les données doivent être rajoutés juste au dessus de cette ligne de commentaire
];