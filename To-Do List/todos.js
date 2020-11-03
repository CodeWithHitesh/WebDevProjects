/*
	Won't work for new ones; so you have to use on and then add
	that element which will be present always.
*/

// That when you click li it should get line-through if normal and vice-versa.


// $('.card .list-group .list-group-item').on('click',function(){
	
// 	// For checking what does css('color') returns.
// 	// console.log($(this).css('color'))

// 	// Already Grey.
// 	if($(this).css('color') === "rgb(128, 128, 128)"){
// 		$(this).css('color','black')
// 		$(this).css('text-decoration','none')
// 	}
// 	// Normal
// 	else{
// 		$(this).css('color','gray')
// 		$(this).css('text-decoration','line-through')	
// 	}	
// });



// You can also create a class completed that does the same for you.
$('ul').on('click' , '#li' ,function(){

		$(this).toggleClass('completed');
});



// 							Trash Button.

/*
	stopPropagation() is used so as to prevent further propagation
	of bubbling and capturing phases. Bubbling up to parent elements
	or capturing down to child elements.
*/

$('ul').on('mouseleave', '.list-group-item' ,function(e){
	$(this).children().eq(0).removeClass('d-block');
	$(this).children().eq(0).addClass('d-none');
	e.stopPropagation();
});

$('ul').on('mouseenter', '.list-group-item' ,function(e){
	$(this).children().eq(0).removeClass('d-none');
	$(this).children().eq(0).addClass('d-block');
	e.stopPropagation();
});


// Click on trash to delete that TO-DO
$('ul').on('click', '.btn-danger' ,function(){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
});



// 							Add Button
$('#add').on('click' ,function(){
	$('input').toggleClass('d-none');

});

$('input').on('keypress',AddElement);

var itemList = $('ul')[0];
function AddElement(e){

	if(event.which === 13)
	{
		// Get input value.
		var newItem = $("input[type='text'").val();
		$("input[type='text'").val("");
		
		// Create new li element.
		var li = document.createElement('li');

		// Add class.
		li.className = 'list-group-item';
		li.id = 'li';

		// Add text node with input value.
		// li.appendChild(document.createTextNode(newItem));

		// Add del button.
		var deleteBtn = document.createElement('div');

		// Add classes to del button.
		deleteBtn.className = 'btn btn-danger btn-sm float-left d-none mr-2';

		// deleteBtn.appendChild(document.innerHTML('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>'));

		var icon = document.createElement('i');
		icon.className = 'fa fa-trash-o';
		deleteBtn.appendChild(icon);
		

		var text = document.createElement('div');
		text.className = 'ml-3';
		text.appendChild(document.createTextNode(newItem));

		li.appendChild(deleteBtn);
		li.appendChild(text);
		// Append button to li


		itemList.appendChild(li);
		$('input').toggleClass('d-none');
	}
	

}

