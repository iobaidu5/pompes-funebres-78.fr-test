$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
});

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}

// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
// });


$(document).ready(function() {
  $('.portfolio').each(function() {
      $(this).addClass('show');
  });

  $('#filters .filter').on('click', function() {
      var filterValue = $(this).data('filter');
      $('#filters .filter').removeClass('active');
      $(this).addClass('active');
      
      if (filterValue === '*') {
          $('.portfolio').each(function() {
              $(this).hide("slow").removeClass('show').delay(500).queue(function(next) {
                  $(this).show("slow").addClass('show');
                  next();
              });
          });
      } else {
          $('.portfolio').each(function() {
              $(this).hide("slow").removeClass('show');
          });
          $(filterValue).each(function() {
              $(this).hide("slow").removeClass('show').delay(500).queue(function(next) {
                  $(this).show("slow").addClass('show');
                  next();
              });
          });
      }
  });
});

$(document).ready(function () {
  $('.tabs_ul li:first-child').addClass('active');
  $('.tab-content .tab-pane:first-child').addClass('in active');

  $('.tabs_ul a').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
  
      $('.tabs_ul .active').removeClass('active');
      $this.parent().addClass('active');
  
      $('.tab-content .tab-pane').removeClass('in active');
      var target = $this.attr('href');
      $(target).addClass('in active');
  });
});
