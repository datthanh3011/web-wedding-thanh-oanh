$(document).ready(function(){
    
    var linkFbCoDau = 'https://www.facebook.com/people/Oanh-Panda/pfbid031jWYgfXFjV5G22DUQtMZSGWMp2G8M1EK791JEtpBteVhh9d6weppaEufBeTsbx5hl/?mibextid=ZbWKwL'
    var linkFbChuRe = 'https://www.fb.com/thanh.ton.545'

    var countDownDate = new Date("Nov 21, 2023 17:30:00").getTime();

    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      $("#number-day").html(days)
      $("#number-hours").html(hours)
      $("#number-mins").html(minutes)
      $("#number-seconds").html(seconds)
      if (distance < 0) {
        clearInterval(x);
        $("#number-day").html(0)
        $("#number-hours").html(0)
        $("#number-mins").html(0)
        $("#number-seconds").html(0)
      }
    },1000);

    

    $('#fb-chure').click(function(){
      var openPage = window.open(linkFbChuRe, '_blank')
      openPage.focus();
    })
    //$('#imghome').on("load",
    //  $('#modal-load').delay(1500).fadeOut('fast',function(){
    //    $('body').removeAttr('id');
    //    $('#modal-load').attr("style","visibility: hidden;")
    //  })
    //)
    
    
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    }
    var hometargets = [$("#home")[0]];
    //var parent = $("#home");
    let attrLoadPage=0;
    const homeObserver = new IntersectionObserver( entries => 
      {
        entries.forEach(entry =>{
          if(entry.isIntersecting){
            if(attrLoadPage == 0){
              $('#modal-load').delay(1500).fadeOut('fast',function(){
                $('body').removeAttr('id');
                $('#modal-load').attr("style","visibility: hidden;")
                $("#area-text-name > h2").attr("style","animation: slideUp 1s ease-in-out;animation-delay: 1.5s; animation-fill-mode: forwards")
                $("#area-text-name > h4").attr("style","animation: fadeinup 1s ease-in-out;animation-delay: 2s;animation-fill-mode: forwards;")
                $("#text-save-date").attr("style","animation: slupUpCicle 1s ease-in-out;animation-delay: 2s;animation-fill-mode: forwards")
                attrLoadPage += 1;
              })
            }else if(attrLoadPage == 1){
              $("#area-text-name > h2").attr("style","animation: slideUp 1s ease-in-out;animation-delay: .5s; animation-fill-mode: forwards")
              $("#area-text-name > h4").attr("style","animation: fadeinup 1s ease-in-out;animation-delay: 1s;animation-fill-mode: forwards;")
              $("#text-save-date").attr("style","animation: slupUpCicle 1s ease-in-out;animation-delay: 1s;animation-fill-mode: forwards")
            }
            
            
          }else{
            $("#area-text-name > h2").attr("style","animation: ''; animation-delay: '';animation-fill-mode: ''")
            $("#area-text-name > h4").attr("style","animation: ''; animation-delay: '';animation-fill-mode: ''")
            $("#text-save-date").attr("style","animation: ''; animation-delay: '';animation-fill-mode: ''")
          }
        })
      }
    ,options
    );
    hometargets.forEach(target =>{
      homeObserver.observe(target)
    })

    var imgCoDauChuReTargets = $('.hinh-anh > img').get();
    const imgGroomBrideObservers = new IntersectionObserver(entries =>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          console.log(entry)
          //entry.target.attr("style","animation: slideUpImgCoDauChuRe .5s ease-in-out; animation-delay: 2s;animation-fill-mode: forwards;")
          entry.target.style = ("animation: slideUpImgCoDauChuRe .5s ease-in-out;animation-fill-mode: forwards;")

        }else{
          console.log(entry)
          entry.target.style = ("animation: ''; animation-delay: '';animation-fill-mode: ''")
          //entry.target.attr("style","animation: ''; animation-delay: '';animation-fill-mode: ''")
        }
        
      })
    }, options
      );
    imgCoDauChuReTargets.forEach(target =>
    {
      imgGroomBrideObservers.observe(target)

    })
    //imgGroomBrideObservers.observe(imgCoDauChuReTargets)
    $('#icon-arrow').click(function(){
      $('html , body').animate({scrollTop: $("#home").offset().top},0);
    })
})