console.log("Heyo");

$(document).ready(function(){
  $(".text-box h1").on({
    mouseenter: function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#002C4A");
      $(this).css("border-radius", "10px");
      $(this).css("transition", ".5s ease");
    },  
    mouseleave: function(){
      $(this).css("background-color", "#002C4A");
      $(this).css("color", "white");
      $(this).css("border-radius", "10px");
    },  
  });
});

$(".caseStudy-col1").on({
  mouseenter: function(){
    $(this).css("background-color", "rgb(58, 190, 147)");
    $(this).css("box-shadow", "5px 5px .2px rgba(0, 0, 0, 1)");
    $(this).css("border", "2px solid black");
    $(this).css("transition", ".2s ease");

  },  
  mouseleave: function(){
    $(this).css("background-color", "rgb(58, 179, 147)");
    $(this).css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 1)");
    $(this).css("border", "0px solid black");
  },
});

$(".caseStudy-col2").on({
  mouseenter: function(){
    $(this).css("background-color", "#3548b6");
    $(this).css("box-shadow", "5px 5px .2px rgba(0, 0, 0, 1)");
    $(this).css("border", "2px solid black");
    $(this).css("transition", ".2s ease");

  },  
  mouseleave: function(){
    $(this).css("background-color", "#2A3990");
    $(this).css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 1)");
    $(this).css("border", "0px solid black");
  },
});

$(".caseStudy-col3").on({
  mouseenter: function(){
    $(this).css("background-color", "#1a697a");
    $(this).css("box-shadow", "5px 5px .2px rgba(0, 0, 0, 1)");
    $(this).css("border", "2px solid black");
    $(this).css("transition", ".2s ease");

  },  
  mouseleave: function(){
    $(this).css("background-color", "#134F5C");
    $(this).css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 1)");
    $(this).css("border", "0px solid black");
  },
});