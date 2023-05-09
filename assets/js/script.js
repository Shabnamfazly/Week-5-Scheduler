$(document).ready(function(){
var options = {
  startingHour: 9,
  endingHour: 23,
}

function updateTimeSlots() {
  var currentHour = dayjs().hour();
  $('.time-block').each(function (){
    var hour = parseInt( $(this).attr('id').split("-")[1]);
    console.log(hour, currentHour,"hello");

    if (hour < currentHour) {
      $(this).addClass('past');
    }
    else if (hour === currentHour) {
      $(this).removeClass("past")
      $(this).addClass('present');
    }
    else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass('future');
    }
  });
}

$(".saveBtn").on("click", function(){
  
  var hour = $(this).parent().attr("id");
  var ToDo = $(this).siblings(".description").val()

  localStorage.setItem(hour, ToDo);
  

})
for(let i = 9; i <= 17 ; i++){
$(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}


  updateTimeSlots();

  
  

  setInterval(function (){
    var currentDay = dayjs().format('dddd MMMM D YYYY, h:mm:ss a');
    $('#currentDay').text(currentDay);
    updateTimeSlots();
  }, 1000) ;
})



