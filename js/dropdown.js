function toggleVisibility(element) {
  var status = element.css('display');
  var newStatus = (status === 'hidden' ? 'visible' : 'hidden');
  element.css('visibility', newStatus);
}

function toggleDisplay(element) {
  var status = element.css('display');
  var newStatus = (status === 'none' ? 'block' : 'none');
  element.css('display', newStatus);
}

$(document).ready(function() {
  $('#nav-expand').on('click', function() {
    toggleDisplay($('#dropdown'));
  });

  $('#default-nav button, #dropdown button').on('click', function() {
    if ($(this).attr('target') === '_blank') {
      window.open($(this).attr('href'), '_blank');
      return;
    }
    window.location.href = $(this).attr('href');
  });
});
