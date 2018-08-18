/**
 * Created by funiannian on 2018/8/18.
 */
$(function(){
    //jquery中ajax的全局事件
    //ajaxSend() 在beforeSend回调函数之后触发
    //ajaxSuccess在success回调函数之后触发
    //ajaxError 在error回调函数之后触发
    //ajaxComplate在complete回调函数之后触发
    //ajaxStart() 在开始一个ajax请求时触发
    $(document).ajaxStart(function(){

        NProgress.start();
    })
    //ajaxStop() 在所有ajax请求结束时触发
    //加定时为了模拟进度条效果
    setInterval(function(){
        $(document).ajaxStop(function(){
            NProgress.done();
        })
    },500)






})