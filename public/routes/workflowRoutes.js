// "use strict";
// module.exports = function(app) {
//   var workflow = require("../controllers/workflowController");

//   // todoList Routes
//   app.route("/workflow").get(workflow.get_workflow);
//   // .post(todoList.create_a_task);

//   //   app
//   //     .route("/workflow/:id")
//   //     .get(todoList.read_a_task)
//   //     .put(todoList.update_a_task)
//   //     .delete(todoList.delete_a_task);
// };

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });
};

module.exports = appRouter;
