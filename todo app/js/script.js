$(function() {
	$("#add").on("click", function() {
		var val = $("input").val();
		if (val !== '') {
			var elem = $("<li class='todolists'></li>").text(val);
			$(elem).append("<button class='rem'>X</button>");
			$("#mylist").append(elem);
			$("input").val("");
			$(".rem").on("click", function() {
				var ask = confirm("Do you want to delete this todo?");
				if(ask){
					$(this).parent().remove();
				}else{
					alert("It is not deleted");
				}
			});
		}else{
			alert("To-do Name Must not be empty");
		}
	});
});