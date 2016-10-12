var preview_block = $(".preview");
var preview_arr = $(".preview > ul > li");
var slide = $(".slide");
var active_index = slide_width = preview_width = preview_height = 0;

slide.append(preview_block.html());
preview_arr.eq(0).attr('class','active');

function motion(index){		
	slide_width = slide.width();
	
	preview_arr.removeClass('active');
	preview_arr.eq(index).attr('class','active');
	
	if ($( ".container" ).width() <= 1256){
		preview_width = preview_arr.eq(0).width();
		preview_block.animate({scrollLeft: preview_width * index}, 800);
	}
	else{
		preview_height = preview_arr.eq(0).height();
		preview_block.animate({scrollTop: preview_height * index}, 800);
	}
	slide.find("ul").animate({'right': slide_width * index}, 800);
}

$(preview_arr).on('click', function() {
	active_index = $( this ).index();
	motion( active_index );
});

$(".slideLeft").on('click', function() {
	active_index -=1;

	if (active_index == -1){ active_index = preview_arr.length - 1 }
		motion( active_index );
});

$(".slideRight").on('click', function() {
	active_index +=1;

	if (active_index == preview_arr.length){ active_index = 0 }
		motion( active_index );
});

$( window ).resize(function() {
	slide_width = slide.width();
	slide.find("ul").css('right', slide_width * active_index);

	if ($( ".container" ).width() <= 1256){
		preview_width = preview_arr.eq(0).width();
		preview_block.scrollLeft(preview_width * active_index);
	}
	else{
		preview_height = preview_arr.eq(0).height();
		preview_block.scrollTop(preview_height * active_index);
	}
});
