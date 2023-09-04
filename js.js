$(".tablinks").click(function(){
  $(".tablinks").removeClass("activelinks");
  $(".tabcontents").removeClass("activetabs");

  $(this).addClass("activelinks");

  if(this.innerHTML=="Skills")
  {
    $(".tabcontents").eq(0).toggleClass("activetabs")
  }
  else
  {
    $(".tabcontents").eq(1).toggleClass("activetabs")
  }


})



$(".checkbox").change(function() {
  // Toggle the "dark" class on the body to change the background color
  $("body").toggleClass("dark");
  
  // Replace the image source based on the dark mode state
  const gridContainer = $(".right");
  
    if ($("body").hasClass("dark")) {
      gridContainer.css("background-image", 'url("Group 2.png")'); // Dark mode background image
      gridContainer.css("background-size", '100vh');
      $(".heroheading").css("color",'#ffffff');
      $(".logo").attr("src",'White Modern Beauty Logo (3).png');

      


    } else {
      $(".heroheading").css("color",'#FF0009');
      gridContainer.css("background-image", 'url("WhatsApp_Image_2023-03-28_at_23_12_42-6k2u-tTX--transformed.jpeg")'); // Light mode background image
      $(".logo").attr("src",'White Modern Beauty Logo (1).png');
    }
});

