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
    
    function monhac(){
      $("#music")[0].play();
    }
    function closethungo(){
      $("#modal-thu-ngo").addClass("visibility-hidden");
      $("body").removeClass("overflow-hide")
    }
    $("#start-btn").click(function(){
      monhac();
      closethungo();
    })
    $(".backgroud-thungo").click(function(){
      monhac();
      closethungo();
    })
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

    let containerHeart = $("#containerHeart")
    let body = $("body")
    let count = 50
    let height = screen.height
    console.log('chieu dai man hinh' + height)
    for (let x = 0; x < 50; x++) {
      let leftHeart = Math.floor(Math.random() * containerHeart.innerWidth() ) 
      if (leftHeart > 60) {
        leftHeart = leftHeart - 60
      }
      let topHeart = Math.floor(Math.random() * body.innerHeight() - height )
      let widthHeart = Math.floor(Math.random() * 30)
      let div = document.createElement("div")
      let timeHeart = Math.floor(Math.random() * 5 + 5)
      let blurHeart = Math.floor(Math.random() * 5)
      div.classList.add("heart")
      div.style.left = leftHeart + 'px'
      div.style.top = topHeart + 'px'
      div.style.width = widthHeart + 'px'
      div.style.height = widthHeart + 'px' 
      div.style.animationDuration = timeHeart + 's'
      div.style.filter = "blur(" + blurHeart + 'px)'
      containerHeart.append(div)
    }
    
    var detailImages =[]
    let containerGallery = $('#container-gallery')
    var  column = []
    var arrayImages=['./img/album/1a.jpg','./img/album/1b.jpg','./img/album/2a.jpg','./img/album/4a.jpg','./img/album/6b.jpg','./img/album/8b.jpg','./img/album/9a.jpg','./img/album/10b.jpg' ]
    var detailImages = [
      {
        src : './img/album/1a.jpg',
        widthOrigin: '2929',
        heightOrigin: '1940',
      },
      {
        src : './img/album/1b.jpg',
        widthOrigin: '2334',
        heightOrigin: '3682',
      },
      {
        src : './img/album/2a.jpg',
        widthOrigin: '2953',
        heightOrigin: '4134',
      },
      {
        src : './img/album/4a.jpg',
        widthOrigin: '2935',
        heightOrigin: '4134',
      },
      {
        src : './img/album/6b.jpg',
        widthOrigin: '2932',
        heightOrigin: '4134',
      },
      {
        src : './img/album/8b.jpg',
        widthOrigin: '1268',
        heightOrigin: '2030',
      },
      {
        src : './img/album/9a.jpg',
        widthOrigin: '2941',
        heightOrigin: '4134',
      },
      {
        src : './img/album/10b.jpg',
        widthOrigin: '2935',
        heightOrigin: '2024',
      },
    ]
    
    if (containerGallery.innerWidth()> 915) {
      let number = 3
      for (let x = 0; x < number; x++) {
        //column.push(containerGallery.innerWidth()/number*x)
        column.push(100/number*x)
      }
      
    }
    for (let x = 0; x < detailImages.length; x = x + column.length) {
      let i = x
      column.forEach(left => {
        detailImages[i].push({left: left})
        i = i+1
      });
    }
    console.log(detailImages)
    
    
    
    //for (let x = 0; x < arrayImages.length; x+3) {
    //  var temp =x
    //  column.forEach(left => {
    //    var obj = {left : left +'%'}
    //    arrayImages[0]
    //    temp = temp+1
    //  });
    //}
      
})