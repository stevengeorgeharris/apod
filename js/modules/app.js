var apod = {
  returnedData: {
    // Will replace with API data
  },
  init: function () {
    var url = "https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=SMSSVoBpeTlTKc8nGXKVcVThKkjHsZSvTx1Xq1Tj";
    this.call(url);
  },
  call: function (url) {
    $.ajax({
      url: url
    }).done(function (data) {
      returnedData = data;
      console.log(returnedData);
      apod.updateImage();
    });
  },
  updateImage: function () {
    var imageURL = returnedData.url;
    var $image = $('.apod-image img');
    setTimeout(function() {
        $('.header').addClass('reduce');
    }, 1000);
    $image.attr('src', imageURL);
  }
};
