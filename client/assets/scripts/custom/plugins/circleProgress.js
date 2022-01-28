/**
 * Creates visual circular progress element
 */
function configure() {
  $('.determinate').each(function(){
    var width = $(this).text();
    $(this).css('width', width)
      .empty()
      .append("<svg class='svg-inline--fa fa-circle'></svg>)");
  });
}

export default {
  configure
};
