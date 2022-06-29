	var textWrapper = document.querySelector('.slogan-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.slogan-1 .letter',
        translateY: [200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 300 + 50 * i
    });

    var textWrapper = document.querySelector('.slogan-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.slogan-2 .letter',
        translateY: [200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 300 + 50 * i
    });

    TweenMax.to(".wrapper", 2, {
        top: "-100%",
        ease: Expo.easeInOut,
        delay: 0.5
    });

    var tl = new TimelineMax();

    tl.from(".loader", 1.2, {
        scaleY: "0%",
        y: 80,
        ease: Expo.easeInOut,
        delay: 0.5,
        transformOrigin:"50% 100%"
    });

    tl.to(".loader", 1.2, {
        height: "20vh",
        scaleY: "0%",
        ease: Expo.easeInOut,
        transformOrigin:"0% -100%"
    });

    TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
    delay: 0.5,
    });

    var tl = new TweenMax.staggerFrom(".menu > div", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 0.5
    }, 0.1);

    var tl = new TweenMax.staggerFrom(".hero-container > div", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 0.7
    }, 0.1);

	// AOS pluggins initialize

	 AOS.init({
	 	duration:1500 //  global duration 

	 });

    // back-to-the-top java initialize

	const backToTopButton = document.querySelector("#back-to-top-btn");

	window.addEventListener("scroll", scrollFunction);

	function scrollFunction() {
	  if (window.pageYOffset > 300) { // Show backToTopButton
	    if(!backToTopButton.classList.contains("btnEntrance")) {
	      backToTopButton.classList.remove("btnExit");
	      backToTopButton.classList.add("btnEntrance");
	      backToTopButton.style.display = "block";
	    }
	  }
	  else { // Hide backToTopButton
	    if(backToTopButton.classList.contains("btnEntrance")) {
	      backToTopButton.classList.remove("btnEntrance");
	      backToTopButton.classList.add("btnExit");
	      setTimeout(function() {
	        backToTopButton.style.display = "none";
	      }, 250);
	    }
	  }
	}

	backToTopButton.addEventListener("click", smoothScrollBackToTop);

	function smoothScrollBackToTop() {
	  const targetPosition = 0;
	  const startPosition = window.pageYOffset;
	  const distance = targetPosition - startPosition;
	  const duration = 200;
	  let start = null;
	  
	  window.requestAnimationFrame(step);

	  function step(timestamp) {
	    if (!start) start = timestamp;
	    const progress = timestamp - start;
	    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
	    if (progress < duration) window.requestAnimationFrame(step);
	  }
	}

	function easeInOutCubic(t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t*t + b;
		t -= 2;
		return c/2*(t*t*t + 2) + b;
	};

	// baffle plunggins intialize

	const text = baffle(".data");
      text.set({
            characters : '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
            speed: 300
      });
      text.start();
      text.reveal(10000);


    // introduction

$(document).ready(function(){
      $(".card-header").click(function(){
       // self clicking close
       if($(this).next(".card-body").hasClass("active")){
    $(this).next(".card-body").removeClass("active").slideUp()
    $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
       }
       else{

    $(".card .card-body").removeClass("active").slideUp()
    $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
    $(this).next(".card-body").addClass("active").slideDown()
    $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
    }
      })
    })

    // tabs

    const tabs = document.querySelectorAll(".tabs li");
    const contents = document.querySelectorAll(".gametime-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

    // to move active class from previous tab // 
    tabs.forEach(tab => tab.classList.remove("active"));

    tab.classList.add("active");

    //  to。show content according to tab seleted
    contents.forEach((c) => c.classList.remove("active"));

    contents[index].classList.add("active");
        });
    }); 

    // to run the animation intially when the page loads //
    tabs[0].click();






