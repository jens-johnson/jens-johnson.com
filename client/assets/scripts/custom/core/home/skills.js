const circleProgress = () => {
  $('.determinate').each(function(){
    var width = $(this).text();
    $(this).css('width', width)
      .empty()
      .append("<svg class='svg-inline--fa fa-circle'></svg>)");                
  });
}

const initSkills = () => {
  circleProgress();
}

export default initSkills;
