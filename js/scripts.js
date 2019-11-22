$(document).ready(function(){
  $("button.18ormore").click(function(){
    $(".over18").show();
    $(".under18").hide();
  });

  $("button.17orless").click(function(){
    $(".under18").show();
    $(".over18").hide();
  });
});
