// AMD模块定义语法,如

define(["require", "exports"], function(require, exports) {
  const UserModel = (function() {
    function UserModel() {}
    return UserModel;
  })();
  return UserModel;
});
