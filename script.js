$(document).ready(function(){
    $("#main").click(function(){
        $(".info-display").slideDown();
         $("#main").css({
            'margin-bottom' :'0px'
         })
         
    })

    $(".info").click(function(){
        $(".info").slideUp();
        $("#main").css({
            'margin-bottom' :'4px'
         })
    })
 
     

    $(".secnddiv").click(function(){
        $(".scnd").slideDown();
         $(".secnddiv").css({
            'margin-bottom' :'0px'
         })
         
    })

    $(".scnd").click(function(){
        $(".scnd").slideUp();
        $(".secnddiv").css({
            'margin-bottom' :'4px'
         })
    })
})