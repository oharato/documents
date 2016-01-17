(function(){
  'use strict';
  var msecPerSecond = 1000;
  var msecPerMinute = msecPerSecond * 60;
  var $startBtn = $('#start');
  var $stopBtn = $('#stop');
  var $resetBtn = $('#reset');
  var $bellBtn = $('#bell');
  var $settingBtn = $('#setting');
  var isCountDown = true;
  var timer;
  var defaultLeftMinute = 5;
  var defaultLeftSecond = 0;
  var defaultLeftMilliSeconds = defaultLeftMinute * msecPerMinute + defaultLeftSecond * msecPerSecond;
  var startTime;
  var elapsedMilliSeconds = 0;
  var lastMinStr = '';
  var lastSecStr = '';

  function slabTextHeadlines() {
    $("h1").slabText();
  };
  function msecToMinAndSec(msec){
    var min = Math.floor(msec / msecPerMinute);
    msec = msec - (min * msecPerMinute);
    var sec = Math.floor(msec / msecPerSecond);
    return {minutes: min, seconds: sec};
  }

  function leftMilliSeconds(msec){
    return defaultLeftMilliSeconds - msec;
  }

  function displayTime(msec){
    var time = msecToMinAndSec(msec);
    console.log(time);
    var minStr = ("0" + time.minutes).slice(-2)
    var secStr = ("0" + time.seconds).slice(-2)
    if(lastMinStr !== minStr || lastSecStr !== secStr){ 
      $('h1 span').text(minStr + ':' + secStr);
      lastMinStr = minStr;
      lastSecStr = secStr;
    }
  }
  function setButtonState(start, stop, reset){
    $startBtn.toggleClass('inactive', !start);
    $stopBtn.toggleClass('inactive', !stop);
    $resetBtn.toggleClass('inactive', !reset);
  }
  function centeringModal(){
    var w = $(window).width();
    var h = $(window).height();
    var cw = $("#modal-content").outerWidth(true);
    var ch = $("#modal-content").outerHeight(true);
    var pxleft = ((w - cw)/2);
    var pxtop = ((h - ch)/2);
    $("#modal-content").css({
      "left": pxleft + "px",
      "top": pxtop + "px"
    });
  }

  setTimeout(slabTextHeadlines, 500);
  setButtonState(true,false,false);
  if(isCountDown){
    $('h1').text(("0" + defaultLeftMinute).slice(-2) + ':' + ("0" + defaultLeftSecond).slice(-2));
  }else{
    $('h1').text('00:00');
  } 
  $startBtn.click(function(){
    if(timer) return;
    setButtonState(false,true,false);
    $startBtn.css('display', 'none');
    $stopBtn.css('display', 'inline-block');
    startTime = $.now();
    timer = setInterval(function(){
      var msec = elapsedMilliSeconds + $.now() - startTime;;
      // 1秒経ってからカウントダウンしているように見せる
      if(isCountDown) msec = leftMilliSeconds(msec) + msecPerSecond;
      displayTime(msec);
    }, 100)
  });
  $stopBtn.click(function(){
    if(!timer) return;
    setButtonState(true,false,true);
    $stopBtn.css('display', 'none');
    $startBtn.css('display', 'inline-block');
    elapsedMilliSeconds += $.now() - startTime;
    clearInterval(timer);
    timer = null;
  });
  $resetBtn.click(function(){
    if(timer) return;
    setButtonState(true,false,false);
    displayTime(isCountDown ? defaultLeftMilliSeconds : 0);
    elapsedMilliSeconds = 0;
    clearInterval(timer);
    timer = null;
  });
  
  $bellBtn.click(function(){
    var s = $('#sound').get(0);
    if(typeof s.currentTime !== 'undefined') s.currentTime = 0;
    s.play();
  });
  
  $settingBtn.click(function(){
    $(this).blur();
    centeringModal();
    $("#modal-overlay,#modal-content").fadeIn("slow");
  });
  $("#modal-overlay, #modal-close").click(function(){
    $("#modal-content,#modal-overlay").fadeOut("slow");
  });
  $(window).resize(centeringModal);
})();
