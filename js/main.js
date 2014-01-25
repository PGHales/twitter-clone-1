$(function() {


	$('textarea').click(function() {
    $(this).addClass('expand');
    $('#tweet-controls').css("display", "block");
  }); //end textarea click

    $('textarea').keydown(function() {
    	var count = $(this).val().length;

    	var remaining = 139 - count;

        $('#char-count').text( remaining );

      if(remaining <= 10) {
        $("#char-count").css({
            'color': 'red'
          });

      }

      if(remaining >= 11) {
        $("#char-count").css({
            'color': '#999'
          });
      }

      if(remaining <= 0) {
        $("button").attr("disabled", "disabled");
      }

      if(remaining >= 1) {
        $("button").removeAttr("disabled", "disabled");
      }

  });//end textarea keydown

$('#tweet-submit').click(function() {
  var newTweet  = $('.tweet').eq(0).clone(),
      tweetText = $('.tweet-compose').val(),
      avatar = $('#alagoon').clone(),
      image = $('.avatar').val(),
      // newName = $('.fullname').val();
      name = $('.name').clone(),
      craft = $('.fullname').val();


  newTweet.find('.tweet-text').text(tweetText);
  newTweet.find('.avatar').attr('src', 'img/alagoon.jpg')
  newTweet.find('.fullname').text(craft)





  $('#stream').prepend(newTweet);

  



  //.clone() copies an element
  //.find() searches within an element

});//end tweet submit click


});//end page load
