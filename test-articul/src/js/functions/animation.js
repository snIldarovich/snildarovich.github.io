window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.animated-element');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = element.getBoundingClientRect().top;

    var screenHeight = window.innerHeight;

    if (positionFromTop - screenHeight <= 0) {
      element.classList.add('animate');
    }
  }
});
