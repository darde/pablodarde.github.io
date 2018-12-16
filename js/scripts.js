window.onload = function() {
  'use strict';

  var doc = document.querySelectorAll('.social div');

  doc.forEach(function(item, index) {
    setTimeout(function() {
      item.classList.add('active');
    }, 200 * (index + 1));
  });
};
