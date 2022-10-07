
$(document).ready(function() {
$('.acronyms-bg').hide()
$('.acronyms').hide()
$('.filter-acronyms').hide()
  // $('.filter-terms a').css('text-decoraton', 'underline')
   var windowWidth = $(window).width()
  if(windowWidth<1200){
    $('.filter-main a.term-button').html('Terms')
    $('.filter-main a.acronym-button').html('Acronyms')
      $('.filter-main a.acronym-button').html('Acronyms')
  }
  else{
      $('.filter-main a.term-button').html('Terms & Terminologies')
      $('.filter-main a.acronym-button').html('Acronyms & Abbreviations')
  }


})



$("ul.menu_main_menu li a").on('click', function() {
$('ul.menu_main_menu li ul.submenu').hide();


    var submenu = $(this).next('.submenu');

        if($('.thisul').find('.submenu') != $(this)){
        $('.thisul').find('.submenu').hide();
    }

    submenu.toggle();

});


$('.filter-main a').on('click', function() {
  var filter = $(this).attr('data-filter')
  $('.terms').hide()
  $('.acronyms').hide()
  $('.terms-bg').hide()
  $('.acronyms-bg').hide()
  $('.filter-terms').hide()
  $('.filter-acronyms').hide()
  $(filter).show()


// $('.filter-main a').css('color', 'blue')


$('.filter-main a').css('font-family', 'Fellix-Regular')
$('.filter-main a').css('color', '#DD3E77')
$('.filter-main a').css('background-color', 'white')
$(this).css('color', '#FBF8F5')
$(this).css('background-color', '#DD3E77')
$(this).css('font-family', 'Fellix-Medium')
console.log(this)
$(filter).scrollTop(position)


  return false
})


$('.filter-terms a').on('click', function() {
  var filter2 = $(this).attr('data-filter')

  $('.row').hide()


  $(filter2).show()

  $('.filter-terms a').css('font-family', 'Fellix-Regular')

  $(this).css('font-family', 'Fellix-Bold')


$(filter).scrollTop(position)
  return false
})


$('.filter-acronyms a').on('click', function() {
  var filter3 = $(this).attr('data-filter')

  $('.row2').hide()


  $(filter3).show()

  $('.filter-acronyms a').css('font-family', 'Fellix-Regular')
  // $('.filter-acronyms a').css('text-decoraton', 'underline')
  $(this).css('font-family', 'Fellix-Bold')
  // $(this).css('text-decoraton', 'none')

$(filter).scrollTop(position)
  return false
})

$('.request').on('click', function() {
  if ($('.dialogue-box').is(':visible')){
    $('.dialogue-box').removeClass('show')

  } else {
    $('.dialogue-box').addClass('show')
  }
    return false


})


$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var windowWidth = $(window).width()
var windowWidth = $(window).width()
// var heightvoid = 100+'vh'
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixels / difference
  var bardiff =  windowWidth 
var barpercentage = percentage * bardiff/100




  $('.bar').css('width', barpercentage  )


 })
