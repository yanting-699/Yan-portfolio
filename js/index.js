$(document).ready(function(){
    $('.top').click(function(){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });
});

$(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
    $(function(){ $('.nav-about').click(function(){ 
        event.preventDefault();
        $('html,body').animate({scrollTop:$('#about').offset().top}, 1000); 
        });  
    });
});

$(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
    $(function(){ $('.nav-ex').click(function(){ 
        event.preventDefault();
        $('html,body').animate({scrollTop:$('#experience').offset().top}, 1000); 
        });  
    }); 
});

$(document).ready(function(){
    $(function(){ $('.nav-skill').click(function(){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('#skill').offset().top},1000);
        });
    });
})

$(document).ready(function(){
    $(function(){ $('.dropdown-item1').click(function(){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('#layout').offset().top},1000);
        });
    });
})

$(document).ready(function(){
    $(function(){
        $('.dropdown-item2').click(function(){
            $('html,body').animate({scrollTop:$('#javascript').offset().top},1000);
        });
    });
})

$(document).ready(function(){
    $(function(){
        $('.dropdown-item3').click(function(){
            $('html,body').animate({scrollTop:$('#framework').offset().top},1000);
        });
    });
})



