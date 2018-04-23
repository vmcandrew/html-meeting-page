$( document ).ready(function() {
    $("#meetings").html("<tr><th>Meeting</th><th>topic</th><th>start time</th><th>end time</th><th>location</th></tr>");

    $(document).on("click", "#meetings tr", function(e){
    	alert(this.id);
    })
});

class meeting {
	constructor(mname,location,topic,etime,stime,email){
		this.mname = mname;
		this.location = location;
		this.topic = topic;
		this.etime = etime;
		this.stime = stime;
		this.email = email;
	}
}

let meet = [];

let a = new meeting('test','testloc','testing','4:00','3:00','kd@kse.com');
let b = new meeting('test2','testloc2','testing2','5:00','4:00','adf@tye.com');

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