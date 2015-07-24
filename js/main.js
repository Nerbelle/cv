var template =0;
var reason='default';
hide_specific_sections();
generateRandomTemplate();

function generateRandomTemplate(){

var num=NumRandom();
while(template==num){
num=NumRandom()

}
template=num;

show_specific_sections('hots_'+reason+'_'+template);

}
function NumRandom(){
var number = Math.floor((Math.random() * 5) + 1)
return number
}
function select_section(_select) {
    var section_name_array = document.getElementsByName("section_name")

    for (var i=0; i<section_name_array.length; i++) {
        section_name_array[i].innerHTML = _select.value
    }

    show_specific_sections(_select[_select.selectedIndex].id)
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

    // if (id == 'hots') {
        // change_region(document.getElementById('bnet_region'))
        // document.getElementById('input_bnet').style.display = '';
        // document.getElementById('ted_nickname').style.display = 'none';
        // document.getElementById('ted_title').style.display = 'none';
        // document.getElementById('ted_nickname_bnet').style.display = '';
        // document.getElementById('ted_title_bnet').style.display = '';
    // } else if (id == 'lol') {
        // change_region(document.getElementById('lol_region'))
        // document.getElementById('input_lol').style.display = '';
        // document.getElementById('ted_title_lol').style.display = '';
        // document.getElementById('ted_title').style.display = 'none';
        // document.getElementById('ted_nickname').style.display = '';
    // } else {
        // document.getElementById('ted_title').style.display = '';
        // document.getElementById('ted_nickname').style.display = '';
    // }
}
