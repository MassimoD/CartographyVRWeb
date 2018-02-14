window.cartography = new Object();
window.cartography.textDefaults = {
	'align' : 'center',
	'width' : '12',
	'font' : 'https://cdn.aframe.io/fonts/Roboto-msdf.json',
	'zOffset' : '0.1',
	'color': '#000000',
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
		'backgroundColor' : '#ffffff',
		'text' : {
			'content' : 'Artistic Research',
			'width' : '24',
		}
	},

    // ------------------------------------------------------------------------ Epistemology
    {
        'height' : '2',
        'width' : '9',
        'rotation' : '0 45 0',
        'position' : '-30 0 -15',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Epistemology',
            'width' : '16',
        }
    },
    {
        'height' : '5',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-22 -0 -22',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : "Julia Kristeva's account of dialectics  as catastrophe  in order to explain how creative practice engenders material processes that rupture meaning and language to allow the as yet unimagined and unrepresented to be revealed. (Barrett 2014, p. 54)",
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-22 -7 -22',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'the logic that underpins aesthetic practice is not solely the logic of rational thought, but involves dimensions of a tacit and intuitive knowing that is derived from the senses and is made possible through an alteration of language that occurs in the making of the artwork. This places the aesthetic paradigm outside of the positivist paradigm, which seeks to verify findings and generalisations,  as well as the postpositivist paradigm, which seeks to falsify generalisations. Both of these are founded on the assumptions that a fixed reality exists to be observed and that only rational thought is at work in research. (Barrett 2014, p. 53)',
            'align' : 'left',
        }
    },
    {
        'height' : '20',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-32 -12 -14',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'In their book The New Production of Knowledge from 1994, Michael Gibbons and his colleagues [...] proposed amendment to this standard model. They described how ‘Mode 1 science’ must now make increasing room for	‘Mode ti knowledge production’. \nMode 1 refers to traditional, discipline-bound research that takes place in academic contexts (mostly universities); it is characterised by organisational homogeneity, uniformity, and stability. The quality of Mode 1 research - which is primarily focused on the finding of truths or the justification of beliefs - is assessed and controlled within each discipline by a peer review system, in which largely individual contributions are assessed by colleagues who are considered competent to judge quality by virtue of their own previous individual contributions. \nMode 2 research, in contrast, is said to take place in the ‘context of application’. It is interdisciplinary or transdisciplinary, involving both academics and other parties. Research is not conducted exclusively in homogeneous, uniformly structured universities, but is more localised  in heterogeneous, diversified, often transitory configurations, made up of universities, governmental agencies, industrial research centres, non-governmental organisations, and other actors that assemble around a particular set of problems. (Borgdorff 2012, p. 89) [...] artistic research is not primarily an academic (university) matter, but is carried out  in what Gibbons et al., in their description of Mode 2, call the ‘context of application’. (Borgdorff 2012, p. 91)',
            'align' : 'left',
        }
    },
    {
        'height' : '10',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-32 6 -14',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Interaction and intra-action in the aesthetic paradigm not only pertain to flows of communication and knowledge between human actors and systems of knowledge but also flows between thought, feeling and the material world. In artistic research, the artist as human actor is both subject and object of the research process and, in this paradigm, the movement of illumination always ﬂows ﬁrst through interaction (and intra-action) with matter and the materials of making, then subsequently from the particular to the general through the audience\'s interaction with the art object or outcome of the research process. (Barrett 2014, p. 54)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-42 -6 -5',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Artistic research - as embedded in artistic and academic contexts - is the articulation of the unreflective, non-conceptual content enclosed in aesthetic experiences, enacted in creative practices, and embodied in artistic products. The theme of unreflective action, non-conceptual content, and embodied knowledge is explored in phenomenology, which, starting with Husserl and continuing via Heidegger and Merleau-Ponty, has focused attention on the nature of perception and the constitution of intentionality and normativity, beyond an ontology in which the world was thought to be independent of our situatedness. (Borgdorff 2012, p. 168)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-42 2 -5',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Is it possible to achieve a linguistic-conceptual articulation of the embedded, enacted, and embodied content of artistic research? The significance of the current discussion at the intersection of phenomenology, cognitive sciences, and philosophy of mind lies in the prospects it may open for liberating the content of research in and through artistic practices from the explicit, explanatory, descriptive, or interpretive approaches that are so common in other research in the arts. (Borgdorff 2012, p. 170)',
            'align' : 'left',
        }
    },
    {
        'height' : '14',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-51 13 4',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Barad (2003, 2007) provides us with further scaffolding for grasping how material-discursive practices emerge from corporeal responses and are translated into language and thought. In experience-in-practice there is a constant movement between the material world, the biological/material self (the self as \'other\') and the social self. This movement gives rise to a performative production of knowledge or onto-epistemology. Crucial to this perspective is an acknowledgement of the agency of materials and matter. Matter is found to be as active as thought, language and form; and matter does not exist in separation from thought; because they are co-existent, they intra-act as material-semiotic process. Barad\'s new materialist perspective on practice and her notion of "agential realism", the attribution of agency not only to tools and instruments of research but to brute matter itself (Barad 2003, 2007) permits us to articulate more clearly what separates creative arts research from other paradigms. What we see at work in artistic research, then, are assumptions that go beyond naturalistic approaches and naive realism as well as the humanist and social focus of qualitative research approaches. (Barrett 2014, p. 55)',
            'align' : 'left',
        }
    },
    {
        'height' : '10',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-51 -1 4',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'The constructivist perspective holds that objects and events actually become constituted in and through artworks and artistic actions. Only in and through art do we see what landscapes, soundworlds, histories, emotions, relations, interests, or movements really are or could be. Here lies the performative and critical power of art. It does not represent things; it presents them, thereby making the world into what it is or could be. The hermeneutic perspective assumes that artistic practices and artworks disclose the world to us. The world-revealing power of art lies in its ability to offer us those new vistas, experiences, and insights that affect our relationship with the world and with ourselves. Artistic research addresses this world-constituting and world-revealing power of art - the ways in which we constitute and understand the world in and through art. (Borgdorff 2012, p. 171-2)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 45 0',
        'position' : '-51 -10 4',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'If some form of mimesis does exist  in art, it is here: in the force, at once perspectivist andperformative , by which art offers us new experiences, outlooks, and insights that bear on our relationship to the world and to ourselves. This articulation of the world we live in is what we may call the radical realism of artistic research. (Borgdorff 2012, p. 72)',
            'align' : 'left',
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
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '30 -5 -15',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'The juxtaposing of disparate objects and ideas has, after all,  often been viewed as an intrinsic aspect of creativity. The interplay of ideas from disparate areas of knowledge in creative arts research creates conditions for the emergence of new analogies, metaphors and models for understanding objects of enquiry. (Barrett 2007b, p.7)',
            'align' : 'left',
		}
    },
    {
        'height' : '6',
        'width' : '13',
        'rotation' : '0 -45 0',
        'position' : '19 0 -22',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Subjective approaches  in artistic research are implicated in and give rise to a second feature of practice as research: its emergent methodologies. Martin Heidegger\'s notion of "praxical knowledge" or what he theorised as the material basis of knowl provides a philosophical framework for understanding the acquisition of human knowledge as emergent. His work also provides a rationale for applying emergent approaches in research. Praxical knowledge implies that ideas and theory are ultimately the result of practice rather than vice versa. (Barrett 2007b,  p. 6)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '19 6 -22',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'An often vexed issue  in creative arts research is related to establishing the work in an identifiable location within the broader arena made up of more clearly defined disciplines or domains of knowledge. (Barrett 2007b, p. 7)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '19 11 -22',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'In artistic research, movement is therefore from the particular/private to the general/ public domain. Knowledge transfer and testing against what is already known occurs first through interaction  in the making and subsequently through interaction engendered by the viewing or experiencing of the artwork itself. […] cycles of interaction and reflection are shown to underpin the emergence of new insights and knowledge. (Barrett 2014, p. 58)',
            'align' : 'left',
        }
    },
    {
        'height' : '7',
        'width' : '14',
        'rotation' : '0 -45 0',
        'position' : '19 18 -22',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'In his monograph, Material Thinking, Paul Carter (2004) helps to extend understandings of the subjective and relational dimensions of the artistic process. He describes this process  as one that involves a decontexualisa2on from established or universal discourse to instances of particular In staging itself  as an artwork, the particularity of experience is then returned to the universal. Carter suggests that "material thinking" speciﬁc to artistic research creates a record of the studio process as a means of creating new relations of knowledge subsequent to production. (Barrett 2007b, p. 5)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '38 0 -6',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Artistic research is the deliberate articulation of this unfinished material thinking. This reinforces the contingent perspectives and world disclosures it imparts. In the debate on the epistemology of artistic research, an antithesis repeatedly surfaces: between explicit, manifest knowledge and implicit or tacit knowledge, and between knowing that something is the case and knowing how to do or make something. I propose to add a third side to this: not knowing. (Borgdorﬀ 2012, p. 71)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '39 7 -5',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Thus artistic research differs from empirical research,  which tries to find general laws. Nevanlinnna suggests, in line with Sören Kjorup’s argument,  that << Perhaps only artistic research will realise the program of ‘aesthetic research’ proposed by the inventor of the term Alexander Baumgarten in the 18th century: it produces knowledge of the singular. This kind of knowledge concerns the singular and the unique and cannot be generalised into laws, but it is nevertheless knowledge. >> (Arlander 2013, p. 157)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '39 15 -5',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'artistic research reconfigures our understandings of how knowledge is produced, practitioner-researchers need to go beyond this view of language and knowledge production. I have previously drawn on Michael Polanyi (1958) and the work of Ian Sutherland and Sophia Krys Acord (2007) to discuss the way in which art gives rise to experiential knowledge. Praxical knowledge is not a priori there to be discovered, but is knowledge as action or \'knowing\' that emerges from both thought and biological or sensory interaction -that is, from aesthetic experience (Barrett 2014, p. 57).',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '10',
        'rotation' : '0 -45 0',
        'position' : '30 6 -15',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : '[...] the knowledge embodied in art, which has been variously analysed as tacit, practical knowledge, as ‘knowing­how’, and as sensory knowledge, is cognitive, though non-conceptual; and it is rational, though non-discursive. The distinctive nature of the knowledge content has been analysed in depth in phenomenology, hermeneutics, and cognitive psychology. (Borgdorff 2012, p. 49)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '10',
        'rotation' : '0 -45 0',
        'position' : '30 11 -15',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'The research process has the potential not only to open the field of artistic knowledge production to other disciplines and to other fields of interest, but also to open up the artistic practice under scrutiny to new and unexpected areas which will guide the development of the artistic work. (Frisk 2013, p. 45)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '30 16 -14',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : '[...] art knowledge is always also embodied in form and maWer. Creative processes, artistic practices, and artworks all incorporate knowledge which simultaneously shapes and expands the horizons of the existing world – not discursively, but in auditory, visual, and tactile ways, aesthetically, expressively, and emotively. (Borgdorff 2012, p. 21)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 -45 0',
        'position' : '30 23 -14',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'In the history of epistemology, the distinction is made between knowing that something is the case – theoretical knowledge, propositional knowledge, explicit knowledge, focal knowledge – and knowing how to do something, to make something – practical knowledge, embodied knowledge, implicit knowledge, tacit knowledge. Artistic research operates mainly in the laWer sphere. [...] artistic research could be described as first and foremost an articulation of the non-propositional forms of knowledge and experience in and through the creation of art. (Borgdorff 2012, p. 122)',
            'align' : 'left',
        }
    },

    // ------------------------------------------------------------------------
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
    {
        'height' : '12',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-1 -3 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'In addition to the	<< approach of artistic research... the tacit and intuitive processes, the experiential and emergent nature of its methodologies and the intrinsically interdisciplinary dimension of this mode of research that is derived from it material and social relationality. >> (Barrett 2007, p. 7) Barrett also identified a number of other attributes that qualify creative arts research as a new paradigm. These include processes that allow: << new objects of thought to emerge through cycles of making and reflection; a recognition of the generative potential of the ambiguity and the indeterminacy of the aesthetic object and the necessity for ongoing decoding, analysis and translation and, finally, the acknowledgement that instruments and objects of research are not passive, but emerge as co-producers in collaborative and, in the case of audiences, participatory approaches that may not be pre-determined at the outset of the research. >> (Barrett 2014, p. 3 cited by Bolt 2016, p. 131-2)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '12 4 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : ' [...] art research focuses on art objects and creative processes. This can involve aesthetic, hermeneutic, performative, expressive, and emotive points of view. If the focus of investigation is on the creative process, one should not lose sight of the result of that process - the work of art itself. Both the material content and the immaterial, non-conceptual, and nondiscursive contents of creative processes and artistic products may be articulated and communicated in the research study. In all cases, art research should examine the embeddedness and situatedness of its object of investigation. (Borgdorff 2012, p. 46-7)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '12 -4 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Wherein lies the specific nature of artistic research? Is that  in the research object - the uniqueness of artistic practice, of the work of art, of the creative process? Or does it lie in the research process - in the course it follows, the working procedures, the methods? Or, from a third point of view, does artistic research seek to reveal a special form of knowledge - tacit, practical, nonconceptual, non-discursive, sensory knowledge, as embodied in artistic products and processes? (Borgdorff 2012, p. 79)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-14 -8 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : '[...] rather than being a non-academic and independent research discipline, artistic research is situated in a multi-layered and multidimensional space principally defined by four non-conformal fields of gravitation: the subjective, the academic, the experimental, and the field of the art world.(Frisk 2013, p. 42)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-14 -4 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Not only experimentation in practice, but also reflection on practice and interpretation of practice, may be part of research in the arts as defined here. (Borgdorff 2012, p. 23)',
            'align' : 'left',
        }
    },
    {
        'height' : '6',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-14 0 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'just as the material basis of artistic research results in approaches that are necessarily emergent, the subjective and personally situated aspect of artistic research-its relationality or what Carter refers to as its capacity to reinvent social relations (Carter 2004:1O)-results in research that is ultimately interdisciplinary. ( Barrett 2007b, p. 7)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-14 6 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Art practice qualifies as research when its purpose is to broaden our knowledge and understanding through an original investigation. It begins with questions that are pertinent to the research context and the art world, and employs methods that are appropriate to the study. The process and outcomes of the research are appropriately documented and disseminated to the research community and to the wider public. (Borgdorff 2012, p. 43)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-14 13 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : '[...] a characteristic of art - and perhaps of artistic research - is the sense in which it is necessarily openended. The uses to which art is put and how it operates are many and various and I would assert that “ provisionality” is an important aspect of what art can contribute to other disciplines? it is fundamentally incomplete and requires a spectator’s input  in order to exist or function. In this sense, spectatorship is a process of constructing a meaning, a world or a story from a fragment and is an activity that is essentially private. (O’Riley 2011, p. 1)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-14 20 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'The basic idea here is to see artistic research as a practice. An engaged practice, which in each context is imbued with the necessary qualities and substance to make it what it is, and also to apply its own internal logic to deciding between what makes sense and what is invalid. A practice with a defined direction, but with an open-ended, undetermined procedural trajectory. A practice that is particular, content-driven, self-critical, self-reflective and contextualized . (Hannula 2008: 112 cited by Sullivan 2011, p. 117)',
            'align' : 'left',
        }
    },
    {
        'height' : '2',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-1 7 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'intrinsically interdisciplinary and transversal (Barrett 2014, p. 53)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-1 12 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'Art practice qualifies as research if its purpose is to expand our knowledge and understanding by conducting an original investigation in and through art objects and creative processes. Art research begins by addressing questions that are pertinent in the research context and in the art world. Researchers employ experimental and hermeneutic methods that reveal and articulate the tacit knowledge that is situated and embodied in specific artworks and artistic processes. Research processes and outcomes are documented and disseminated in an appropriate manner to the research community and the wider public. (Borgdorff 2012, p. 53)',
            'align' : 'left',
        }
    },
    {
        'height' : '10',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '-1 21 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : '(1) Artistic research concerns and affects the foundations of our perception, our understanding, and our relationship to the world and other people. I would call this the realism of artistic research. (2) Artistic research is ‘material thinking’: the articulation of non-propositional knowledge and experience, embodied  in artworks and creative processes. This is the non-conceptualism of artistic research. (3) Artistic research is not about theory, but about thought. It is not primarily directed at	‘knowing that ...’ or ‘knowing how ...’. It is directed more at a not-knowing, or a notyet-knowing. It creates room for that which is unthought, that which is unexpected - the idea that all things could be different. This is the contingency of artistic research. ( Borgdorff 2012, p. 124)',
            'align' : 'left',
        }
    },
    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '12 12 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : 'In the medium itself - in the creative process, the artwork, and its effects - perspectives are revealed and constituted, horizons are shifted, and new distinctions are articulated. The specific nature of artistic research can be pinpointed in the way that it both cognitively and artistically articulates this revealment and constitution of the world, an articulation which is normative, affective, and expressive all at once - and which also, as it were, sets our moral, psychological, and social life into motion. (Borgdorf  2012, p. 24)',
            'align' : 'left',
        }
    },

    {
        'height' : '8',
        'width' : '12',
        'rotation' : '0 0 0',
        'position' : '0 -3 -35',
        'backgroundColor' : '#ffffff',
        'text' : {
            'content' : '',
            'align' : 'left',
        }
    },
	// Les données doivent être rajoutés juste au dessus de cette ligne de commentaire
];