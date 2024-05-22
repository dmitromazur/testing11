function toggleDisplay(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }


function show(){
  var element = document.getElementById('header_small_mobile');
  element.style.display = "block";
}

function hide(){
  var element = document.getElementById('header_small_mobile');
  element.style.display = "none";
}


function animateValue(element, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function() {
      current += increment;
      element.textContent = current + "%";
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

document.addEventListener("DOMContentLoaded", function() {
  let options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.5 
  };

  let callback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              let target = entry.target;
              animateValue(target, 0, 100, 2000);
              observer.unobserve(target); 
          }
      });
  };

  let observer = new IntersectionObserver(callback, options);

  document.querySelectorAll('.percent').forEach(percent => {
      observer.observe(percent);
  });
});