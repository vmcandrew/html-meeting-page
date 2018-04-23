

$( document ).ready(function() {
    $("#meetings").html("<tr><th>Meeting</th><th>topic</th><th>start time</th><th>end time</th><th>location</th><th>status</th></tr>");
    


    $(document).on("click", "#meetings tr", function(e){
    	alert(this.id);
    })
});

class meeting {
	constructor(mname,topic,location,details,etime,stime,email){
		this.mname = mname;
		this.location = location;
		this.topic = topic;
		this.details = details;
		this.etime = etime;
		this.stime = stime;
		this.email = email;
	}
}

let meet = [];

let a = new meeting('test','testing','testloc','this is a test','4:00','3:00','kd@kse.com');
let b = new meeting('test2','testing2','testloc2','this is a test 2','5:00','4:00','adf@tye.com');

meet.push(a);

function add_meeting(m){
	$('#meetings').append('<tr id='+m.mname+'>');
	for (var property in m) {
		if(m.hasOwnProperty(property) && ['mname','topic','etime','stime','location'].includes(property)) {
			console.log(m[property]);
			$('#' + m.mname).append('<td>'+m[property]+'</td>');

		}

	}
	$('#'.mname).append('</tr>');
	
}

function create_meeting(){
	//console.log($('#meeti').val());
	if($('#meeti').val(),$('#topici').val(),$('#loci').val(),$('#detaili').val(),$('#starti').val(),$('#endi').val(),$('#participi').val() != ""){
	let a = new meeting($('#meeti').val(),$('#topici').val(),$('#loci').val(),$('#detaili').val(),$('#starti').val(),$('#endi').val(),$('#participi').val());
	add_meeting(a);
		} else {
	alert("fields not set!!!");
	}
}

$(document).on("click", ".createmeeting", function(e){
	create_meeting();

	$('#meetbox').hide();
    $('body').css("background-color","gray");
})

$(document).on("click", "#btn", function(e){
		$('table :input').val('');
    	$('#meetbox').show();
    	$('body').css("background-color","#262626");
    })

$(document).on("click", ".close", function(){
    	$('#meetbox').hide();
    	$('body').css("background-color","gray");
    })




