var actionExecutionList = require("../data/action-execution-list");
var workflowList = require("../data/workflow-list");
var workflowExecutionList = require("../data/workflow-execution-list");
var fs = require("fs");

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/workflow", function(req, res) {
    res.status(200).send(workflowExecutionList);
  });

  app.get("/workflow-execution", function(req, res) {
    res.status(200).send(workflowExecutionList);
  });

  app.get("/action-execution", function(req, res) {
    res.status(200).send(actionExecutionList);
  });

  app.get("/yaml", function(req, res) {
    fs.readFile("./public/data/workflow_1.yaml", "utf8", function(err, data) {
      if (err) throw err;
      res.status(200).send(data);
    });
  });
};

module.exports = appRouter;
