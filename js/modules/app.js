/**
* Astronomy Picture of the Day
* @author Steven Harris
* @version 1.0.0
*
*/

var apod = {
  returnedData: {
    // Will replace with API data
  },
  storeImage: "",
  storeTitle: "",
  storeReturnedDate: "",
  storeExplanation: "",
  sameImage: false,
  sameVideo: false,
  storeDate: localStorage.date,
  storeMedia: localStorage.media,
  url: "https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=SMSSVoBpeTlTKc8nGXKVcVThKkjHsZSvTx1Xq1Tj",
  /**
   * Here we want to record the current date and store it.
   * Everytime the script is run we check if the date has changed.
   * This is to stop hundreds of API calls, we should only call it once
   * per day, as the image only updates once.
   *
   */
  checkDate: function() {
    var newDate = new Date();
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var checkThis = day + " " + month;
    if (checkThis === this.storeDate) {
      this.sameImage = true;
      this.sameVideo = true;
      if (this.storeMedia == "video") {
        this.updateVideo();
      } else {
        this.updateImage();
      }
      this.updateInfo();
    } else {
      this.call(this.url);
      localStorage.setItem('date', checkThis);
    }
  },
  init: function() {
    this.checkDate();
    this.attach();
  },
  call: function(url) {
    $.ajax({
      url: url
    }).done(function(data) {
      returnedData = data;
      if (returnedData.media_type == "video") {
        apod.updateVideo();
      } else {
        apod.updateImage();
      }
      apod.updateInfo();
      apod.storeLocally();
    });
  },
  storeLocally: function() {
    storeImage = returnedData.hdurl; // Use local storage to store URL.
    storeTitle = returnedData.title;
    storeReturnedDate = returnedData.date;
    storeExplanation = returnedData.explanation;
    storeMediaType = returnedData.media_type;
    storeVideoUrl = returnedData.url;

    if (storeImage) {
      localStorage.setItem('image', storeImage);
    }
    if (storeVideoUrl) {
      localStorage.setItem('video', storeVideoUrl);
    }
    localStorage.setItem('title', storeTitle);
    localStorage.setItem('returnedDate', storeReturnedDate);
    localStorage.setItem('explanation', storeExplanation);
    localStorage.setItem('media', storeMediaType);
  },
  updateVideo: function() {
    var videoSource;
    var $iframe = $('.apod-video-embed');
    if (this.sameVideo === true) {
      videoSource = localStorage.getItem('video');
    } else {
      videoSource = returnedData.url;
    }
    $iframe.attr('src', videoSource);
    $('.apod-image').addClass('hide');
    this.animation();
  },
  updateImage: function() {
    var imageURL;
    var $imageCont = $('.apod-image');
    var img = $('<img>');
    if (this.sameImage === true) {
      imageURL = localStorage.getItem('image');
    } else {
      imageURL = returnedData.hdurl;
    }
    img.attr('src', imageURL);
    $imageCont.append(img);
    $('.apod-video-embed').addClass('hide');
    this.animation();
  },
  animation: function() {
    setTimeout(function() {
      $('.shuttle').addClass('blast-off');
    }, 1000);
    setTimeout(function() {
      $('.to-fade-in').addClass('faded');
    }, 3000);
    setTimeout(function() {
      $('.comet').addClass('fly');
    }, 4000);
  },
  updateInfo: function() {
    var $titleCont = $('.apod-info__title');
    var $dateCont = $('.apod-info__date');
    var $textCont = $('.apod-info__text');
    var title, date, explanation;

    if (this.sameImage === true) {
      title = localStorage.getItem('title');
      date = localStorage.getItem('returnedDate');
      explanation = localStorage.getItem('explanation');
    } else {
        title = returnedData.title;
        date = returnedData.date;
        explanation = returnedData.explanation;
    }

    $titleCont.append(title);
    $dateCont.append(date);
    $textCont.append(explanation);
  },
  attach: function() {
    var $popInfo = $('.apod-info');
    var $popOpen = $('.pop-open');
    var $popClose = $('.apod-info__close');

    $popOpen.on('click', function() {
      $popInfo.removeClass('close');
      $popInfo.addClass('open');
    });

    $popClose.on('click', function() {
      $popInfo.removeClass('open');
      $popInfo.addClass('close');
    });
  }
};
