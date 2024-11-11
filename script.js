function updateTimer() {
    // Set the date we're counting down to (24 hours from now)
    const countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000);
  
    function update() {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("days").textContent = days + "d";
      document.getElementById("hours").textContent = hours + "h";
      document.getElementById("minutes").textContent = minutes + "m";
      document.getElementById("seconds").textContent = seconds + "s";
    }
    
    update();
    setInterval(update, 1000);
  }
  
  updateTimer();



  // crousal Actions
  
  let currentSlide = 0;
  const slides = document.querySelectorAll('.crousal-slide');
  const dots = document.querySelectorAll('.crousal-dot');
  
  function showSlide(n) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Reset to first slide if at the end
    currentSlide = n;
    if (currentSlide >= slides.length) {currentSlide = 0}
    if (currentSlide < 0) {currentSlide = slides.length - 1}
    
    // Add active class to current slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  function setSlide(n) {
    showSlide(n);
  }
  
  // Auto advance slides every 5 seconds
  setInterval(nextSlide, 5000);