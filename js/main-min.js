!function($){window.scrollTo(0,0),setTimeout((function(){n.play()}),1e3),$(".card .front button").on("click",(function(){$(this).parent().parent().addClass("is-flipped")})),$(".card .back button").on("click",(function(){$(this).parent().parent().removeClass("is-flipped")}));var e=new ScrollMagic.Controller,t=$("body"),n=new TimelineMax({paused:!0}).to(t,.15,{autoAlpha:1,ease:Power4.easeInOut});(new TimelineMax).set(t,{autoAlpha:0}),new ScrollMagic.Scene({triggerElement:"#img-cards"}).on("enter",(function(e){n.play()})).triggerHook(.6).addTo(e),$hero=$(".hero"),$opening=$hero.find(".opening"),$openingL=$opening.find(".opening-left"),$openingR=$opening.find(".opening-right");new TimelineMax({paused:!0}).to($openingL,1,{xPercent:"+=50",yPercent:"-=30",ease:Power4.easeInOut}).to($openingR,1,{xPercent:"-=50",yPercent:"-=30",ease:Power4.easeInOut},"-=1").to($hero,.1,{filter:"brightness(1.3)",ease:Power4.easeInOut},"-=0.3").to($hero,.1,{filter:"brightness(1)",ease:Power4.easeInOut},"-=0.2").to($hero,.1,{filter:"brightness(1.3)",ease:Power4.easeInOut},"-=0.05").to($hero,.1,{filter:"brightness(1)",ease:Power4.easeInOut},"-=0.04");(new TimelineMax).set($openingL,{xPercent:"-=50",yPercent:"+=30",autoAlpha:1}).set($openingR,{xPercent:"+=50",yPercent:"+=30",autoAlpha:1});var r=$("#chart-immigration");$listImmigration=r.find("li");var i=$(".bar-first").width(),o=$listImmigration.first().find(".bar").attr("value");$(".bar").removeClass("grow"),(new TimelineMax).set($listImmigration.find(".bar"),{width:"0"});var a=!1;new ScrollMagic.Scene({triggerElement:"#chart-immigration"}).on("enter",(function(e){a||($listImmigration.each((function(e){var t=$(this).find(".bar").attr("value");$(this).find(".counter").html(t),$resultInPx=i/100*(100/o*t),$resultInPxFraction=$resultInPx/100*30;var n=$(this).find(".bar");$(this).find(".counter");TweenMax.to(n,1.5,{width:$resultInPx-$resultInPxFraction,ease:Power4.easeInOut})})),$(".counter").counterUp({delay:10,time:1e3}),a=!0)})).triggerHook(.7).addTo(e);var s=$("#chart-smic").find("li"),l=!1;new ScrollMagic.Scene({triggerElement:"#chart-smic"}).on("enter",(function(e){var t=s.first().find(".bar").attr("value");l||(s.each((function(e){var n=$(this).find(".bar").attr("value");$(this).find(".counter2").html(n),$resultInNbr=100/t*n,$resultInPx=i/100*$resultInNbr,$resultInPxFraction=$resultInPx/100*30;var r=$(this).find(".bar");TweenMax.to(r,1.5,{width:$resultInPx-$resultInPxFraction,ease:Power4.easeInOut})})),$(".counter2").counterUp({delay:10,time:1e3}),l=!0)})).triggerHook(.7).addTo(e),new jBox("Tooltip",{attach:".tooltip",trigger:"click",closeOnMouseleave:!1,closeButton:!0,maxWidth:350,position:{x:"center",y:"top"},offset:{x:0,y:-10},animation:"move"}),$("#chapter-selection").on("change",(function(){var e=$(this).val(),t=$("#"+e);t.length&&$("html, body").animate({scrollTop:t.offset().top},1e3)}))}(jQuery);