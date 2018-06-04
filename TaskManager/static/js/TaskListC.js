/* globals TaskManager */

(function() {

  TaskManager.TaskListC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var TaskListC = TaskManager.TaskListC.prototype;
  var SharedC = Shared.SharedC.prototype;

  TaskListC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (actionName === "edit") {
      this.showForm(selectedObj);
      return this.getData();
    }
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };

  TaskListC.showForm = function showForm(selectedObj) {
    this.showView({
      name: "Task",
      container: 'trillo-dialog2-container',
      data: selectedObj
    });
  };

  TaskListC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };
})();