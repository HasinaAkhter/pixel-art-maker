//function to make sure it loads after html 
$(function(){

function makeGrid() {    //set vars inside makeGrid so no parameters
  var height=$('#input_height').val();  
  var width=$('#input_width').val();
  var table=$('#pixel_canvas');
  var colour=$('#colorPicker');
  table.children().remove(); //removes any grid created previously
  for (let r=0; r<height; r++) {  //loops for creating grid
    table.append('<tr></tr>');
    for (let c=0; c<width; c++) {  
      $('tr').last().append('<td></td>'); //adds new cells to last rows
    }
  }
  
  table.on('click', 'td', function(){  //listens to clicks on created table and colours tds
      $(this).css('background-color', colour.val());
  });
}

$("#button").click(function(evt) { //calls the function makeGrid
  evt.preventDefault();  //prevents reloading page with submit button
  makeGrid();
});
});