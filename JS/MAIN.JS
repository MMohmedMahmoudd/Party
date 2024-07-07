{/* <refrence type="../jquery-3.7.1.min.js"/> */}
$('.closebtn').on('click',function(){
    $('nav.navbar').animate({width:'0'},500)
    // $('nav.navbar').css('cssText',`display:none;!important`,500)
    $('.nav-link').animate({width:'0'},500)
    $('div.open').animate({width:'140%'},500)
    $('h2').animate({translate:'-50px'},500)
    $('.Home P').animate({translate:'-50px'},500)
})
$('#Open').on('click',function(){
    $('nav.navbar').animate({width:'13%'},500)
    $('.nav-link').animate({width:'100%'},100)
    $('div.open').animate({width:'100%'},500)
    $('.closebtn').animate({width:'020%'},500)
    $('h2').animate({translate:'20px'},500)
    $('.Home P').animate({translate:'20px'},500)

})
$('.container .head').on('click',function(){
    $('.container .info').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

})
window.onload = function() {
    
        countDownToTime("10 october 2021 9:56:00");
    }

    function countDownToTime(countTo) {
    
            let futureDate = new Date(countTo);
        futureDate = (futureDate.getTime()/1000);

        let now = new Date();
        now = (now.getTime()/1000);

        timeDifference = (futureDate- now);
            
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
        $(".Days").html(`${days} D`);
        $(".Hours").html(`${hours} h`);
        $(".minutes").html(`${ mins } m`);
        $('.seconds').html(`${ secs} s`)

    
        setInterval(function() {  countDownToTime(countTo); }, 1000);
    }
    var maxLength = 100;
    $('textarea').keyup(function() {
      var length = $(this).val().length;
      var AmountLeft = maxLength-length;
      if(AmountLeft<=0)
                {
                     $("#char").text("your available character finished").css('cssText',`background-color:green;color:#fff;padding:15px;`).append(' <i class="bi bi-check-circle-fill fs-5"></i>');

                    $("#num").empty()
                }
            else{
            
            $("#num").text(AmountLeft);
            }
    });
    