function simple_tooltip(target_items, name){
 $(target_items).each(function(i){
        //$("body").append("<div class='"+name+"' id='"+name+i+"'><h3 class='tooltip-title'>"+$(this).attr('title')+"</h3><p>"+$(this).attr('alt')+"</p></div>");
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
//                alert("map height: "+$('#map').height()+"  map width: "+$('#map').width()+"\n"+JSON.stringify($("#map-img").position()));
//                alert("map height: "+$('#map').height()+"  map width: "+$('#map').width()+"\ntop: "+percentTop+"left: "+percentLeft);
                
        });
    });
}

function set_point(top,left){
    var moveTop = ($('#map').height() - 500)/2 + top
    var moveLeft = ($('#map').width() - 500)/2 + left    
    $("#map-img").animate({top: moveTop.toString()+'px', left: moveLeft.toString()+'px'});
}
   
//function loadXMLDoc(){
//var xmlhttp;
//var txt,x,i;
//if (window.XMLHttpRequest)
//  {// code for IE7+, Firefox, Chrome, Opera, Safari
//  xmlhttp=new XMLHttpRequest();
//  }
//else
//  {// code for IE6, IE5
//  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//  }
//xmlhttp.onreadystatechange=function()
//  {
//  if (xmlhttp.readyState==4 && xmlhttp.status==200)
//    {
//    xmlDoc=xmlhttp.responseXML;
//    txt="";
//    x=xmlDoc.getElementsByTagName("plantation");
//    for (i=0;i<x.length;i++)
//      {
//      txt=txt + x[i].childNodes[0].nodeValue + "<br>";
//      }
//    document.getElementById("post-title").innerHTML=txt;
//    }
//  }
//xmlhttp.open("GET","plantationData.xml",true);
//xmlhttp.send();
//$("#post-title").innerHTML(txt);
//}

$(document).ready(function(){
    var med={width: "1353px",height: "1757px"};
    var large={width: "1800px",height: "2338px"};
    var small={width: "900px",height: "1169px"};
//    var maxSize = {width: "1800px",height: "2338px"};
//    var minSize = 



    simple_tooltip(".tooltipper","tooltip");
    $("#map-img").draggable();
    //$("#map").resizable();

    $("#map-img").css({top:"-967px", left:"-644px"});
    $(".tooltipper").click(function(){
        if($('input[type="radio"]:checked').val()!=="large"){
//            $('input[name=radio][value=large]').attr('checked', true);
//            $("#map-img").animate(large);
        }
        if ($(this).attr('id')==='mepkin'){
            set_point(-518,-40)
            //$("#map-img").animate({top: '-21.88%', left: '-39.46%'});   
        }else if ($(this).attr('id')==='biggins'){
            set_point(-1416,-740) 
        }else if ($(this).attr('id')==='charleston'){
            set_point(-1216,-1390)
            //$("#map-img").animate({top: '-282px', left: '-455px'});   
        }else if ($(this).attr('id')==='camden'){
            set_point(-500,-1150)            
            //$("#map-img").animate({top: '-745px', left: '-529px'});   
        }else if ($(this).attr('id')==='plantation'){
            set_point(-200,-1000)            
            //$("#map-img").animate({top: '-745px', left: '-529px'});   
        }
    });
    $("#radio button").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var val= this.innerHTML;
        if(val==="Small"){
                $("#map-img").animate(small);
               
                $("#map-img").css({top:"-31px", left:"20px"});
            }else if(val==="Medium"){
                $("#map-img").animate(med);
                $("#map-img").css({top:"-359px", left:"-207px"});
            }else{
                $("#map-img").animate(large);
                $("#map-img").css({top:"-967px", left:"-644px"});
            }
            // $("#map-img").animate({top:""});
            
    });
    $("#slider-row").niceScroll();
//    loadXMLDoc();
});