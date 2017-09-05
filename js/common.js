$('.language-select').click(function(){
$(this).toggleClass('open');
})
$('.language-select li').click(function(){
var setLang = $('.language-select').data('location'),
    dataLangSelect = $(this).data('lang')
      $('.language-select').data('location', dataLangSelect);
      $('.language-select li').removeClass('active');
      $(this).toggleClass('active');
})

$('.currency-select').click(function(){
$(this).toggleClass('open');
})
$('.currency-select li').click(function(){
var setLang = $('.currency-select').data('location'),
    dataCurrenSelect = $(this).data('curren')
      $('.currency-select').data('location', dataCurrenSelect);
      $('.currency-select li').removeClass('active');
      $(this).toggleClass('active');
})
$(".gamburger").on('click', function() {
		$(this).toggleClass("on");
		$('.mob-navigation').toggleClass("on");
});