/**
 * Created by funiannian on 2018/8/18.
 */

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
        $(document).ajaxStop(function(){
            NProgress.done();
        })

    // 用户登录拦截
    if(location.href.indexOf('login.html') === -1){
        //  地址栏中没有login.html,说明当前页面不是登录页面,需要登录拦截
        $.ajax({
            type:'get',
            url:'/employee/checkRootLogin',
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.success){
                }
                if(info.error){
                    location.href = 'login.html'
                }
            }
        })

    }


    $(function(){
    // 1.分类管理切换功能
    $('.nav .category').click(function(){
        $('.nav .child').stop().slideToggle();
    })

    //2. 左侧侧边栏切换功能
    $('.icon_menu').click(function(){
        console.log(1111);
        // $('.lt_aside').toggleClass('hidemenu');
        $('.lt_aside').toggleClass("hidemenu");
        $('.it_main').toggleClass('hidemenu');
        $('.lt_topbar').toggleClass('hidemenu');
    })
    // 3.点击topbar退出按钮, 弹出模态框
    $('.icon_logout').click(function(){
        console.log(1111);
        $('#logoutModal').modal('show');
    })
    // 4.点击退出按钮向后台发送ajax
    $('.btn-logout').click(function(){
        $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.success){  
                    location.href = 'login.html';
                }
            }
        })
    })



})