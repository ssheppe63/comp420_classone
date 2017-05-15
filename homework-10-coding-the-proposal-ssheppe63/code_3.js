
var navBar = document.getElementById("spongebob-nav");
var article = document.getElementById("spongebob-article")



var toggleBtns = Array.from(document.getElementsByClassName("nav-toggle"));

toggleBtns.forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		e.preventDefault();
		navBar.classList.toggle("active");
		article.classList.toggle("active");
	});
});

var images = ['bahai.jpg', 'barcelona.jpg', 'budapest.JPG', 'budapest2.jpg']

// $('body').css({'background': 'url(carousel-images/' + images[Math.floor(Math.random() * images.length)] + ')'});
// $('.carousel').carousel({
// 	interval: 5000
// })
// $('body').css({'background': 'url(carousel-images/' + images[Math.floor(Math.random() * images.length)] + ')'});

$(function(){
	var x = 0;
	setInterval(function(){
		x-=1;
		$('body.home').css('background-position', x + 'px 0');
	}, 10);
})



$(".basic-info").click(function() {
    $('body').animate({
        scrollTop: $(".more_info").offset().top},
        'slow');
});

 $("#more").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('div').animate({
           scrollTop: $(this.hash).offset().top
         }, 300, function(){
   
           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = this.hash;
         });

    });
