function main() {
	$(".skillset").hide();
  $(".skillset").fadeIn(1000);
  $(".projects").hide();
  
  $(".projects-button").on('click', function() {
    $(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('Project Viewed');
  })
};

$(document).ready(main);