document.write('<h1 id=\'main\'>Game Invertory</h1> <ol> <li>Sorry</li> <li>Poker</li> <li>Chess</li> </ol>'); 
                          
var list_items = document.getElementsByTagName('li');
var ordered_list = document.getElementsByTagName('ol');
var set_add_game_to_main = document.getElementById('main').addEventListener('click',function(){
	add_game();
	update_list_items();
});


function add_game(){
	var game_name = prompt('what is the name of the game');
	var new_list_item = document.createElement('li');
	new_list_item.innerText = game_name;
	ordered_list[0].appendChild(new_list_item);
};

function update_list_items(){
			var last_list_item = list_items[list_items.length - 1];
			last_list_item.addEventListener('click',function(event){
			last_list_item.style.backgroundColor = 'lightgrey';
		})
}

