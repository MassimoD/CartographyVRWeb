window.cartography = new Object();
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
		'backgroundColor' : '#ffffff',
		'text' : {
			'content' : 'Practice as Research',
			'width' : '24',
		}
	},

    // ------------------------------------------------------------------------ Challenges
    {
        'height' : '2',
        'width' : '9',
        'rotation' : '0 45 0',
        'position' : '-30 0 -15',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Challenges',
            'width' : '16',
        }
    },

    // ------------------------------------------------------------------------ Knowledge
    {
        'height' : '2',
        'width' : '9',
        'rotation' : '0 -45 0',
        'position' : '30 0 -15',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Knowledge',
            'width' : '16',
        }
    },

    // ------------------------------------------------------------------------ Caracteristics
    {
        'height' : '2',
        'width' : '9',
        'rotation' : '0 0 0',
        'position' : '-1 5 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Caracteristics',
            'width' : '16',
        }
    },

	// Les données doivent être rajoutés juste au dessus de cette ligne de commentaire
];