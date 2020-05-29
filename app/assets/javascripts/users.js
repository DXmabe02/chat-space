$(function(){

  $('#user-search-field').on('keyup', function(){
    var input = $("#user-search-field").val();//フォームの値を取得して変数に代入する
    $.ajax({
      type: 'GET',    //HTTPメソッド
      url: '/users',       //users_controllerの、indexアクションにリクエストの送信先を設定する
      data: { keyword: input },   //テキストフィールドに入力された文字を設定する
      dataType: 'json',
    })
    .done(function(users) {
      console.log("成功です");
    })
    .fail(function() {
      console.log("失敗です");
    });
  })
});