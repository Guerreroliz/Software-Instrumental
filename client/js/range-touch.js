function addRangeListeners() {
  console.log("added range listeners");
  $("body").on("input", "input.display-value", function () {
    console.log("display value");
    $(this).next().val($(this).val());
  });

  // see:Nuevo Código*/

  $('body').on("input", 'input[type="range"]', function (e) {
        var min = e.target.min,
        max = e.target.max,
        val = e.target.value;
      if (val < 70) {
        $(e.target).css({
          'background-image': '-webkit-gradient(linear, 70% 0%, 70% 100%, color-stop(0%, green), color-stop(100%, green))'
        });
      }
      if (val > 70 && val < 86) {      
        $(e.target).css({
          'background-image': 'linear-gradient(to right, green , yellow)'
        });
      } 
      if (val > 86) {      
        $(e.target).css({
          'background-image': 'linear-gradient(to right, green , yellow,red)'
        });
      }
    
      $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
      });
    }).trigger('input');
            
}