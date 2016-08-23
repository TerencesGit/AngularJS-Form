(function(window){
    var app=angular.module('myApp', []);
    app.controller('formController', function($scope) {
        $scope.userdata={};
        $scope.emailnull = "请输入邮箱";
        $scope.emailerror = "请输入正确邮箱地址";
        $scope.usrnull = "请输入用户名";
        $scope.usrerror = "以字母开头，且只能包含字母、数字、下划线，6-12位之间";
        $scope.passnull = "请输入密码";
        $scope.passerror = "密码长度在6-12位之间";
        $scope.pass2error = "两次密码输入不一致";
        $scope.success = "SUCCESS !";
        $scope.submitForm = function(){
            $scope.submitted = true
        }
    })
    .directive('compare', function() {
        var obj = {};
        obj.sctrict = "AE";
        obj.scope = {
            orgText: "=compare"
        }
        obj.require = "ngModel"
        obj.link = function(sco, ele, att, con) {
            con.$validators.compare = function(val) {
                return val == sco.orgText;
            }
            sco.$watch('orgText', function() {
                con.$validate()
            })
        }
        return obj
    })
})(window)

