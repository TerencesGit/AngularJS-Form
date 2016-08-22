angular.module('myApp', [])
    .controller('formController', function($scope) {
        $scope.title = "Validate Forms with Angular";
        $scope.usrnull = "用户名不为空";
        $scope.usrlengtherror = "用户名长度应在6-12位之间";
        $scope.passnull = "密码不为空";
        $scope.passlengtherror = "密码长度应在6-12位之间";
        $scope.pass2error = "两次密码输入不一致";
        $scope.success = "Success!";
        $scope.userdata = {};
        $scope.submitForm = function(event) {
            console.log($scope.userdata)
        }
    })
    .directive('compare', function() {
        var obj = {};
        obj.sctrict = "AE";
        obj.scope = {
            orgText: "=compare"
        }
        obj.require = "ngModel";
        obj.link = function(sco, ele, att, con) {
            con.$validators.compare = function(val) {
                return val == sco.orgText;
            }
            sco.$watch('orgText', function() {
                con.$validate()
            })
        }
        return obj;
    })
