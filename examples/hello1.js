var { graphql, buildSchema } = require('graphql');

// 使用 GraphQL schema language 构建一个 schema
// 定义 Query 类型的 schema 来处理 GraphQL 查询
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// 需要一个 API 根节点，为每个 API 端点提供一个名为“resolver”的函数
// 根节点为每个 API 入口端点提供一个 resolver 函数
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

// 运行 GraphQL query '{ hello }' ，执行 GraphQL 查询，输出响应
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});