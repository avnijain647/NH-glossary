
$(document).ready(function() {

$('.acronyms').hide()
})


$("ul.menu_main_menu li a").on('click', function() {
$('ul.menu_main_menu li ul.submenu').hide();
    var submenu = $(this).next('.submenu');
      // var menutitle = $(this).('ul.menu_main_menu li a');
        if($('.thisul').find('.submenu') != $(this)){
        $('.thisul').find('.submenu').hide();
    }

    submenu.toggle();
  // console.log(menutitle)
});


$('.filter-main a').on('click', function() {
  var filter = $(this).attr('data-filter')
  console.log(filter)
  $('.terms').hide()
  $('.acronyms').hide()
  $(filter).show()
  //   $('.filter-main a').removeClass('selected')
  // $(this).addClass('selected')

  return false
})
