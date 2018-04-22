const workflowExecutionList = [
  {
    created_at: "1970-01-01T00:00:00.000000",
    description: "this is the first execution.",
    id: "123e4567-e89b-12d3-a456-426655440000",
    input: "{}",
    output: "{}",
    params:
      '{"notify": [{"url": "http://endpoint/of/webhook", "headers": {"Content-Type": "application/json", "X-Auth-Token": "123456789"}, "type": "webhook"}, {"topic": "failover_queue", "host": "127.0.0.1", "type": "queue", "port": 5432, "backend": "rabbitmq"}], "env": {"k2": 123, "k1": "abc"}}',
    project_id: "40a908dbddfe48ad80a87fb30fa70a03",
    state: "RUNNING",
    updated_at: "2018-03-21T12:34:40.000000",
    workflow_id: "123e4567-e89b-12d3-a456-426655441111",
    workflow_name: "workflow_1",
    workflow_namespace: "some_namespace"
  },
  {
    created_at: "1970-01-01T00:00:00.000000",
    description: "this is the first execution.",
    id: "123e4567-e89b-12d3-a456-426655440000",
    input: "{}",
    output: "{}",
    params:
      '{"notify": [{"url": "http://endpoint/of/webhook", "headers": {"Content-Type": "application/json", "X-Auth-Token": "123456789"}, "type": "webhook"}, {"topic": "failover_queue", "host": "127.0.0.1", "type": "queue", "port": 5432, "backend": "rabbitmq"}], "env": {"k2": 123, "k1": "abc"}}',
    project_id: "40a908dbddfe48ad80a87fb30fa70a03",
    state: "ERROR",
    updated_at: "2018-03-21T16:44:00.000000",
    workflow_id: "123e4567-e89b-12d3-a456-426655441112",
    workflow_name: "workflow_1",
    workflow_namespace: "some_namespace"
  },
  {
    created_at: "1970-01-01T00:00:00.000000",
    description: "this is the first execution.",
    id: "123e4567-e89b-12d3-a456-426655440000",
    input: "{}",
    output: "{}",
    params:
      '{"notify": [{"url": "http://endpoint/of/webhook", "headers": {"Content-Type": "application/json", "X-Auth-Token": "123456789"}, "type": "webhook"}, {"topic": "failover_queue", "host": "127.0.0.1", "type": "queue", "port": 5432, "backend": "rabbitmq"}], "env": {"k2": 123, "k1": "abc"}}',
    project_id: "40a908dbddfe48ad80a87fb30fa70a03",
    state: "ERROR",
    updated_at: "2018-03-21T17:00:00.000000",
    workflow_id: "123e4567-e89b-12d3-a456-426655441113",
    workflow_name: "workflow_1",
    workflow_namespace: "some_namespace"
  },
  {
    created_at: "1970-01-01T00:00:00.000000",
    description: "this is the first execution.",
    id: "123e4567-e89b-12d3-a456-426655440000",
    input: "{}",
    output: "{}",
    params:
      '{"notify": [{"url": "http://endpoint/of/webhook", "headers": {"Content-Type": "application/json", "X-Auth-Token": "123456789"}, "type": "webhook"}, {"topic": "failover_queue", "host": "127.0.0.1", "type": "queue", "port": 5432, "backend": "rabbitmq"}], "env": {"k2": 123, "k1": "abc"}}',
    project_id: "40a908dbddfe48ad80a87fb30fa70a03",
    state: "RUNNING",
    updated_at: "2018-03-21T19:54:00.000000",
    workflow_id: "123e4567-e89b-12d3-a456-426655441114",
    workflow_name: "workflow_1",
    workflow_namespace: "some_namespace"
  },
  {
    created_at: "1970-01-01T00:00:00.000000",
    description: "this is the first execution.",
    id: "123e4567-e89b-12d3-a456-426655440000",
    input: "{}",
    output: "{}",
    params:
      '{"notify": [{"url": "http://endpoint/of/webhook", "headers": {"Content-Type": "application/json", "X-Auth-Token": "123456789"}, "type": "webhook"}, {"topic": "failover_queue", "host": "127.0.0.1", "type": "queue", "port": 5432, "backend": "rabbitmq"}], "env": {"k2": 123, "k1": "abc"}}',
    project_id: "40a908dbddfe48ad80a87fb30fa70a03",
    state: "RUNNING",
    updated_at: "2018-03-21T19:55:00.000000",
    workflow_id: "123e4567-e89b-12d3-a456-426655441115",
    workflow_name: "workflow_1",
    workflow_namespace: "some_namespace"
  },
  {
    created_at: "1970-01-01T00:00:00.000000",
    description: "this is the first execution.",
    id: "123e4567-e89b-12d3-a456-426655440000",
    input: "{}",
    output: "{}",
    params:
      '{"notify": [{"url": "http://endpoint/of/webhook", "headers": {"Content-Type": "application/json", "X-Auth-Token": "123456789"}, "type": "webhook"}, {"topic": "failover_queue", "host": "127.0.0.1", "type": "queue", "port": 5432, "backend": "rabbitmq"}], "env": {"k2": 123, "k1": "abc"}}',
    project_id: "40a908dbddfe48ad80a87fb30fa70a03",
    state: "RUNNING",
    updated_at: "2018-03-21T20:00:00.000000",
    workflow_id: "123e4567-e89b-12d3-a456-426655441116",
    workflow_name: "workflow_1",
    workflow_namespace: "some_namespace"
  }
];

module.exports = workflowExecutionList;
