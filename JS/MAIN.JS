{/* <refrence type="../jquery-3.7.1.min.js"/> */}
// $('#Open').on('click',function(){
//         if ($(window).width() <= 900) {
//             $('nav.navbar').animate({width:'30%'},500);
//             $('div.open').animate({translate:'10rem'},500);
//             // $('.Home .heading').animate({translate:'18px'},500)
//             $('section .container').animate({marginRight:'5%'},500);
//         } else {
//             $('nav.navbar').animate({width:'13%'},500);
//             $('div.open').animate({translate:'16rem'},500);
//             // $('.Home .heading').animate({translate:'20px'},500)
//             $('.nav-link').animate({width:'100%'},100);
//             $('.closebtn').animate({width:'20%'},500);
//             $('section .container').animate({marginRight:'5%'},500);
//         }
$('#Open').on('click',function(){
        if ($(window).width() <= 600) {
            $('nav.navbar').animate({width:'30%'},500);
            $('div.open').animate({translate:'10rem'},500);
            // $('.Home .heading').animate({translate:'18px'},500)
            $('section .container').animate({marginRight:'5%'},500);
        } else if($(window).width()<= 900 ){
            $('div.open').animate({translate:'16rem'},500);
            $('nav.navbar').animate({width:'30%'},500);
            $('section .container').animate({marginRight:'5%'},500);
        }else if($(window).width() <=1200){
            $('div.open').animate({translate:'22rem'},500);
            $('nav.navbar').animate({width:'30%'},500);
            $('section .container').animate({marginRight:'5%'},500);
        }else {
            $('nav.navbar').animate({width:'13%'},500);
            $('div.open').animate({translate:'20rem'},500);
            // $('.Home .heading').animate({translate:'20px'},500)
            $('.nav-link').animate({width:'100%'},100);
            $('.closebtn').animate({width:'20%'},500);
            $('section .container').animate({marginRight:'5%'},500);
        }
})
$('.closebtn').on('click',function(){
    if ($(window).width() <= 900) {
        $('nav.navbar').animate({width:'0'},500)
        $('div.open').animate({translate:'0'},500)
        // $('.Home .heading').animate({translate:'-5px'},500)
        $('nav.navbar').animate({width:'0'},500)
        $('.nav-link').animate({width:'0'},500)
        $('section .container').animate({marginRight:'25%'},500)
        $('section.Timer .container').animate({marginRight:'20%'},500)
    } else {
        $('nav.navbar').animate({width:'0'},500)
        $('div.open').animate({translate:'0'},500)
        // $('.Home .heading').animate({translate:'-20px'},500)
        $('nav.navbar').animate({width:'0'},500)
        $('.nav-link').animate({width:'0'},500)
        $('section .container').animate({marginRight:'25%'},500)
        $('.Timer .container').animate({marginRight:'20%'},500)
    }
})

// ___
$("#nav-link").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})

// ___
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
                    $("textarea").css('cssText',`color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
    border-color: #198754;
    outline: 0;
    box-shadow: rgb(25 135 84 / 34%) 0px 0px 0px 0.25rem;`)

                    $("#char").text("your available character finished").css('cssText',`background-color:green;color:#fff;padding:15px;`).append(' <i class="bi bi-check-circle-fill fs-5"></i>');

                    $("#num").empty()
                }
            else{
            
            $("#num").text(AmountLeft);
            }
    });
    
