/**
* Astronomy Picture of the Day
* @author Steven Harris
*
*/

var apod = {
  returnedData: {
    // Will replace with API data
  },
  storeImage: "",
  sameImage: false,
  storeDate: localStorage.date,
  url: "https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=SMSSVoBpeTlTKc8nGXKVcVThKkjHsZSvTx1Xq1Tj",
  /**
   * Here we want to record the current date and store it.
   * Everytime the script is run we check if the date has changed.
   * This is to stop hundreds of API calls, we should only call it once
   * per day, as the image only updates once.
   *
   */
  checkDate: function () {
    var newDate = new Date();
    var month = newDate.getMonth();
    var day = newDate.getDay();
    var checkThis = day + " " + month;
    if (checkThis === this.storeDate) {
      this.sameImage = true;
      this.updateImage();
    } else {
      this.call(this.url);
      localStorage.setItem('date', checkThis);
    }
  },
  init: function () {
    this.checkDate();
  },
  call: function (url) {
    $.ajax({
      url: url
    }).done(function (data) {
      returnedData = data;
      apod.updateImage();
      apod.storeLocally();
    });
  },
  storeLocally: function () {
    storeImage = returnedData.url; // Use local storage to store URL.
    localStorage.setItem('image', storeImage);
  },
  updateImage: function () {
    var imageURL;
    var $image = $('.apod-image img');
    if (this.sameImage === true) {
      imageURL = localStorage.getItem('image');
    } else {
      imageURL = returnedData.url;
    }
    setTimeout(function() {
      $('.header').addClass('reduce');
    }, 1000);
    setTimeout(function() {
      $('.comet').addClass('fly');
    }, 2000);
    $image.attr('src', imageURL);
  }
};
