function simple_tooltip(target_items, name){
 $(target_items).each(function(i){
        $("body").append("<div class='"+name+"' id='"+name+i+"'><h3 class='tooltip-title'>"+$(this).attr('title')+"</h3><p>"+$(this).attr('alt')+"</p></div>");
        var my_tooltip = $("#"+name+i);

        $(this).removeAttr("title").mouseover(function(){
                my_tooltip.css({opacity:1, display:"none"}).fadeIn(400);
        }).mousemove(function(kmouse){
            
            my_tooltip.css({left:kmouse.pageX-270, top:kmouse.pageY+15});

        }).mouseout(function(){
                my_tooltip.fadeOut(400);
                var position = $('#map-img').position();
                var percentLeft = position.left/$("#map").width() * 100;
                var percentTop = position.top/$("#map").height() *100;
                //alert("map height: "+$('#map').height()+"  map width: "+$('#map').width()+"\n"+JSON.stringify($("#map-img").position()));
                //alert("map height: "+$('#map').height()+"  map width: "+$('#map').width()+"\ntop: "+percentTop+"left: "+percentLeft);
                
        });
    });
}

function set_point(top,left){
    var moveTop = ($('#map').height() - 500)/2 + top
    var moveLeft = ($('#map').width() - 500)/2 + left    
    $("#map-img").animate({top: moveTop.toString()+'px', left: moveLeft.toString()+'px'});
}
    
$(document).ready(function(){
    var med={width: "900px",height: "1169px"};
    var large={width: "1800px",height: "2338px"};
    var small={width: "450px",height: "584px"};



    simple_tooltip(".tooltipper","tooltip");
    $("#map-img").draggable();
    //$("#map").resizable();

    $("#map-img").css({top:"-967px", left:"-644px"});
    $(".tooltipper").click(function(){
        if($('input[type="radio"]:checked').val()!=="large"){
            $('input[name=radio][value=large]').attr('checked', true);
            $("#map-img").animate(large);
        }
        if ($(this).attr('id')==='mepkin'){
            set_point(-353,-359)
            //$("#map-img").animate({top: '-21.88%', left: '-39.46%'});   
        }else if ($(this).attr('id')==='biggins'){
            set_point(-22,-188) 
        }else if ($(this).attr('id')==='strawberry'){
            set_point(-426,-455)
            //$("#map-img").animate({top: '-282px', left: '-455px'});   
        }else if ($(this).attr('id')==='parnassus'){
            set_point(-745,-529)            
            //$("#map-img").animate({top: '-745px', left: '-529px'});   
        }
    });
    $("#radio").click(function() { 
            var val= $('input[type="radio"]:checked').val();
            if(val==="small"){
                $("#map-img").animate(small);
               
                $("#map-img").css({top:"-31px", left:"20px"});
            }else if(val==="med"){
                $("#map-img").animate(med);
                $("#map-img").css({top:"-359px", left:"-207px"});
            }else{
                $("#map-img").animate(large);
                $("#map-img").css({top:"-967px", left:"-644px"});
            }
            // $("#map-img").animate({top:""});
    });
});