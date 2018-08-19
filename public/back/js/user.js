$(function(){
// 已进入页面发送ajax
var currentPage = 1;
var pageSize = 5;
render();
function render(){
  $.ajax({
    type:'get',
    url:'/user/queryUser',
    data:{
      page:currentPage,
      pageSize:pageSize
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template('tpl',info);
      $('.it_table tbody').html(htmlStr);
  
      // 分页插件
      $('#paginator').bootstrapPaginator({
        // bootstrap版本
        bootstrapMajorVersion:3,
        currentPage:info.Page,
        totalPages: Math.ceil(info.total/info.size),
        onPageClicked:function(a,b,c,page){
          currentPage = page;
          render();
  
        }
      })
    }
})
}

})