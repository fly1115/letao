/**
 * Created by funiannian on 2018/8/18.
 */
$(function(){
    //　功能1.进行表单验证配置
    $('#form').bootstrapValidator({
        //配置验证图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //配置字段
        fields:{
            username:{
                validators:{
                    notEmpty:{
                        message:'用户名不能为空'
                    },
                    stringLength:{
                        min:2,
                        max:6,
                        message:'用户名长度必须是 2-6 位'
                    },
                    callback:{
                        message:'用户名不存在'
                    }
                }
            },

            password:{
                validators:{
                    notEmpty:{
                        message:'密码不能为空'
                    },
                    stringLength:{
                        min:6,
                        max:12,
                        message:'密码长度必须是 6-12 位'
                    },
                    callback:{
                        message:'密码错误'
                    }
                }
            }
        }
    })

    //　功能2.注册表单成功事件
    $('#form').on('success.form.bv',function(e){
        e.preventDefault();
    //    使用ajax提交
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data:$('#form').serialize(),
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.success){
                    location.href = 'index.html';
                }
                if(info.error === 1000){
                    $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback');
                }
                if(info.error === 1001){
                    $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
                }

            }

        })
    })

    // 功能3.重置按钮
    $('.btn-reset').click(function(){
        //重置按钮,给实例对象重置
        $('#form').data('bootstrapValidator').resetForm();
    })




})