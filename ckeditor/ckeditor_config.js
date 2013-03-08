var config = CKEDITOR.config

	
	config.skin = 'moono';

	config.toolbarGroups = [ 
		
		{ items: ['Font','FontSize' ] },
		{ name: 'colors' },
		{ items: ['Bold', 'Italic', 'Underline'] },
		{ groups: [ 'align', 'list', 'indent' ] },
		
		'/',
	   
		{ items:['Link', 'Unlink','-','Image', 'Table', 'HorizontalRule'] },
		{ items:['Find', 'Replace', '-',  'Undo', 'Redo']},
		
		{ items: ['Source', '-', 'ShowBlocks'] },

		

		 
		'/',
	  
	 ]

	



	config.language = 'pt-br';
	//config.disableNativeSpellChecker = false;

	//config.stylesheetParser_validSelectors = /\^(p|span)\.\w+/;
	
	


	var editor_data = CKEDITOR.instances;
	console.log(editor_data)

