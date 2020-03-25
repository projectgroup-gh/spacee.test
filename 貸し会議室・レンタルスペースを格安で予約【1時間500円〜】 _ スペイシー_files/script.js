
$(function(){

  $.ajax({
      url: 'https://www.spacee.jp/stations/1130208/listings',    // 表示させたいコンテンツがあるページURL
      cache: false,
      datatype: 'html',
      success: function(html) {
          var title = $(html).find('.v2_title').eq(9).text();    // 表示させたいコンテンツの要素を指定
          var img = $(html).find('.lazy').eq(0).attr('href');    // 表示させたいコンテンツの要素を指定
          $('#title').append(title);
          $('#img').append(img);    // append関数で指定先の要素へ出力
      }
    });


  $('#shinjuku-terminal-toggle').click(function() {

    if($('#shinjuku-terminal-toggle').hasClass('open')){
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
    } else {
      $('#shinjuku-recommend').slideDown();
      $('#shinjuku-terminal-toggle').addClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    }
  });

  $('#shibuya-terminal-toggle').click(function() {

    if($('#shibuya-terminal-toggle').hasClass('open')){
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
    } else {
      $('#shibuya-recommend').slideDown();
      $('#shibuya-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    }
  });

  $('#tokyo-terminal-toggle').click(function() {

    if($('#tokyo-terminal-toggle').hasClass('open')){
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
    } else {
      $('#tokyo-recommend').slideDown();
      $('#tokyo-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    }
  });

  $('#ikebukuro-terminal-toggle').click(function() {

    if($('#ikebukuro-terminal-toggle').hasClass('open')){
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
    } else {
      $('#ikebukuro-recommend').slideDown();
      $('#ikebukuro-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    }
  });

  $('#akihabara-terminal-toggle').click(function() {

    if($('#akihabara-terminal-toggle').hasClass('open')){
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
    } else {
      $('#akihabara-recommend').slideDown();
      $('#akihabara-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    }
  });

  $('#shinagawa-terminal-toggle').click(function() {

    if($('#shinagawa-terminal-toggle').hasClass('open')){
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
    } else {
      $('#shinagawa-recommend').slideDown();
      $('#shinagawa-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');

    }
  });

  $('#shinbashi-terminal-toggle').click(function() {

    if($('#shinbashi-terminal-toggle').hasClass('open')){
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
    } else {
      $('#shinbashi-recommend').slideDown();
      $('#shinbashi-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    }
  });


  $('#ueno-terminal-toggle').click(function() {

    if($('#ueno-terminal-toggle').hasClass('open')){
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
    } else {
      $('#ueno-recommend').slideDown();
      $('#ueno-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    }
  });

  $('#yokohama-terminal-toggle').click(function() {

    if($('#yokohama-terminal-toggle').hasClass('open')){
      $('#yokohama-recommend').slideUp();
      $('#yokohama-terminal-toggle').removeClass('open');
    } else {
      $('#yokohama-recommend').slideDown();
      $('#yokohama-terminal-toggle').addClass('open');
      $('#shinjuku-recommend').slideUp();
      $('#shinjuku-terminal-toggle').removeClass('open');
      $('#shibuya-recommend').slideUp();
      $('#shibuya-terminal-toggle').removeClass('open');
      $('#tokyo-recommend').slideUp();
      $('#tokyo-terminal-toggle').removeClass('open');
      $('#ikebukuro-recommend').slideUp();
      $('#ikebukuro-terminal-toggle').removeClass('open');
      $('#akihabara-recommend').slideUp();
      $('#akihabara-terminal-toggle').removeClass('open');
      $('#shinagawa-recommend').slideUp();
      $('#shinagawa-terminal-toggle').removeClass('open');
      $('#shinbashi-recommend').slideUp();
      $('#shinbashi-terminal-toggle').removeClass('open');
      $('#ueno-recommend').slideUp();
      $('#ueno-terminal-toggle').removeClass('open');
    }
  });



  $('.pg-fl').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
			var id = $(this).find('a').attr('href');
			var position = $(id).offset().top-70;
		$('html, body').animate({
		'scrollTop': position
	},500);
	});


  $('.pg-beggining').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
    $('html, body').animate({
      'scrollTop':0},500);
  });




  var itemHeights = [];
  var returnHeight;

  $(function(){
    $(".grad-item").each(function(){ //ターゲット(縮めるアイテム)
      var thisHeight = $(this).height(); //ターゲットの高さを取得
      itemHeights.push(thisHeight); //それぞれの高さを配列に入れる
      $(this).addClass("is-hide"); //CSSで指定した高さにする
      returnHeight = $(this).height(); //is-hideの高さを取得
    });
  });

  $(".grad-trigger").click(function(){ //トリガーをクリックしたら
    if(!$(this).hasClass("is-show")) {
      var index = $(this).index(".grad-trigger"); //トリガーが何個目か
      var addHeight = itemHeights[index]; //個数に対応する高さを取得
      $(this).addClass("is-show").next().animate({height: addHeight},200).removeClass("is-hide"); //高さを元に戻す
    } else {
      $(this).removeClass("is-show").next().animate({height: returnHeight},200).addClass("is-hide"); //高さを制限する
    }
  });



});
