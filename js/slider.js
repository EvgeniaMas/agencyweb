let current_fs, next_fs, previous_fs; //fieldsets
let count = 1;

let collection = Number($('.projects_slide').length);



current_fs = $('.active_project');
$("#project_slider_prev").click(function(){
let previous_fs = $(current_fs).prev();
$(current_fs).removeClass('active_project');
previous_fs.addClass('active_project');
current_fs.hide('slow');     
previous_fs.fadeIn(1000);
current_fs = previous_fs;
count--;
if (count<collection){ 
$('#project_slider_next').fadeIn(1000);      
}

if (count==0){
$('#project_slider_prev').hide('slow'); 
}
if (count<2){ 
$('#project_slider_prev').hide('slow'); 
}
});

$('#project_slider_next').click(function(){ 
let next_fs = current_fs.next();
$(current_fs).removeClass('active_project');
next_fs.addClass('active_project');

//show the next fieldset
current_fs.hide('slow');     
next_fs.fadeIn(1000); 
count++;
if (count>0){ 
$('#project_slider_prev').fadeIn(1000); 
}    
if (count>collection-1){ 
$('#project_slider_next').hide('slow');

}
current_fs = next_fs;
});   



 
 