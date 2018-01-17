$("document").ready(function(){

	var userArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "iwilldominate", "habathcx", "RobotCaleb", "noobs2ninjas", "gosu"];
	
	for(i = 0; i <userArr.length; i++){

		showUsers(userArr[i]);

	}	

	function showUsers(userName){

		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + userName + '?callback=?', function(userStream){

			if(userStream.stream == null){

				$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + userName + '?callback=?', function(userData) {	

				$('#box').append('<li class="data2"><a href="https://www.twitch.tv/' + userName + '/" target="_blank"><img src="' + userData.logo + '" class="img">' + userData.display_name + ' <span class="fa fa-ban" style="color:red"> Offline</span></a></li>')
				});
			
			}


			else {

				$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + userName + '?callback=?', function(userData) {	

				$('#box').append('<li class="data"><a href="https://www.twitch.tv/' + userName + '/" target="_blank"><img src="' + userData.logo + '" class="img">' + userData.display_name + ' <span> Currently playing: ' + userData.game + '</span> <span class="fa fa-check-square-o" style="color:green"> Online</span></a></li>')
				});

			}


		});		

	}

	$('#online').click(function(){

		$('li').filter('.data2').css("display", "none");
		$('li').filter('.data').css("display", "block");
	});

	$('#offline').click(function(){

		$('li').filter('.data2').css("display", "block");
		$('li').filter('.data').css("display", "none");

	});

	$('#all').click(function(){

		$('li').filter('.data2').css("display", "block");
		$('li').filter('.data').css("display", "block");
		

	});


	$('#search').keyup(function(){

		var input, filter, ul, li, a, i;
	    input = document.getElementById('search');
	    filter = input.value.toUpperCase();
	    ul = document.getElementById('box');
	    li = ul.getElementsByTagName('li');

	    for (i = 0; i < li.length; i++) {
	        a = li[i].getElementsByTagName("a")[0];
	        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
	            li[i].style.display = "";
	        } else {
	            li[i].style.display = "none";
	        }
	    }


	});

});
