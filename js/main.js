var template =0;
var reason='default';
hide_specific_sections();
var e = document.getElementById("gameSelection");
var strGame =  e.options[e.selectedIndex].value;
change_game('gameSelection')

function generateRandomTemplate(){

var num=NumRandom();
while(template==num){
num=NumRandom()

}
template=num;
var e = document.getElementById("gameSelection");
var strGame =  e.options[e.selectedIndex].value;
show_specific_sections(strGame+'_'+reason+'_'+template);

}
function NumRandom(){
var number = Math.floor((Math.random() * 5) + 1)
return number
}
// function select_section(_select) {
    // var section_name_array = document.getElementsByName("section_name")

    // for (var i=0; i<section_name_array.length; i++) {
        // section_name_array[i].innerHTML = _select.value
    // }

    // show_specific_sections(_select[_select.selectedIndex].id)
// }
function change_game(id) {

var e = document.getElementById(id);
var strGame =  e.options[e.selectedIndex].value;
var strGameTxt=e.options[e.selectedIndex].text
hide_specific_sections()
if(strGame!="---")
{
var e = document.getElementById(id);	
document.getElementById("game_content").style.display=''
document.getElementById('ddl_'+strGame).style.display=''
document.getElementById("rec_"+strGame).style.display=''
generateRandomTemplate()
var tag_game = document.getElementsByName('game')

    for (var i=0; i<tag_game.length; i++) {
        tag_game[i].innerHTML =strGameTxt
		tag_game[i].style.display=''
    }
}else{
document.getElementById("game_content").style.display='none'
}
}

function change_recruiter(_input, tag_id) {
    var tag_array = document.getElementsByName(tag_id)

    for (var i=0; i<tag_array.length; i++) {
        tag_array[i].innerHTML ="<br/><br/>Regards, <br/>" + _input.value
		tag_array[i].style.display=''
    }
}
function change_tag(_input, tag_id) {
    var tag_array = document.getElementsByName(tag_id)
	
    for (var i=0; i<tag_array.length; i++) {

        tag_array[i].innerHTML = _input.value
    }
}

function change_reason(id){
document.getElementById("game_content").style.display=''
var e = document.getElementById(id);
var strReason =  e.options[e.selectedIndex].value;
reason=strReason
generateRandomTemplate()
}

function hide_specific_sections() {
    var specific_section_array = document.getElementsByClassName("specific_section")

    for (var i=0; i<specific_section_array.length; i++) {
        specific_section_array[i].style.display = 'none';
    }
}


function show_specific_sections(id) {
    hide_specific_sections()
    document.getElementById(id).style.display = '';
	var e = document.getElementById("gameSelection");
	var strGame =  e.options[e.selectedIndex].value;
   document.getElementById('ddl_'+strGame).style.display=''
document.getElementById("rec_"+strGame).style.display=''
	
}
