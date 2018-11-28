
var n=0
$('div').on('click',function(e){
  setTimeout(function(){
    $(e.currentTarget).addClass('active')
  },n*500)
  n++
  if(n>6){
    setTimeout(function(){
      $(document).one('click',function(){
        $('div').removeClass('active')
        n=0
      })
    },0)
  }
 
})