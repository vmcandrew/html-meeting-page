

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



function add_meeting(m){
	meet.push(m);
	$('#meetings').append('<tr id='+m.mname+'>');
	$('#' + m.mname).append('<td>'+ m.mname + '</td><td>' +m.topic + '</td><td>'+m.stime+'</td><td>'+m.etime +'</td><td>'+m.location+'</td>');
	
	$('#'.mname).append('</tr>');
	
}

function create_meeting(){
	//console.log($('#meeti').val());
	
	let a = new meeting($('#meeti').val(),$('#topici').val(),$('#loci').val(),$('#detaili').val(),et,st,$('#participi').val());
	
	add_meeting(a);
	
}

function add_stime(){
	//console.log($('#hour').val());
	//console.log($('#minute').val());
	//console.log($('#ap').val());
	return $('#hour').val() +  ":" +$('#minute').val() + $('#ap').val();
	//let st = $('#hour').val();
}


function add_etime(){
	//console.log($('#hour').val());
	//console.log($('#minute').val());
	//console.log($('#ap').val());
	return $('#hour2').val() +  ":" +$('#minute2').val() + $('#ap2').val();
	//let st = $('#hour').val();
}

let st ="";
let et ="";

$(document).on("click", ".createmeeting", function(e){
	create_meeting();

	$('#meetbox').hide();
    $('body').css("background-color","gray");
})

$(document).on("click", ".addtime", function(e){
	//console.log(add_time());
	console.log($('.addtime'));
	st = add_stime();
	$('.timebox').hide();
	//console.log('test');
	//$('#meetbox').show();
	$('#meetbox').css("background-color", "rgba(128,128,128,.4)");
})

$(document).on("click", ".addtime2", function(e){
	//console.log(add_time());
	//console.log($('.addtime2'));
	et = add_etime();
	$('.timebox2').hide();
	//console.log('test');
	//$('#meetbox').show();
	$('#meetbox').css("background-color", "rgba(128,128,128,.4)");
})

$(document).on("click", "#btn", function(e){
		$('table :input').val('');
    	$('#meetbox').show();
    	$('body').css("background-color","#262626");
    })

$(document).on("click", "#starti", function(e){
	//$("#meetbox").hide();
	$("#meetbox").css("background-color","#262626");
	$(".timebox").show();
})



$(document).on("click", "#endi", function(e){
	//$("#meetbox").hide();
	$("#meetbox").css("background-color","#262626");
	$(".timebox2").show();
})

$(document).on("click", ".close", function(){
    	$('#meetbox').hide();
       	$('body').css("background-color","gray");
    })

$(document).on("click", ".close2", function(){
	$('.timebox').hide();
	$('#meetbox').css("background-color", "rgba(128,128,128,.4)");

})

$(document).on("click", ".close3", function(){
	$('.timebox2').hide();
	$('#meetbox').css("background-color", "rgba(128,128,128,.4)");

})




