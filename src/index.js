import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import { connect } from "./database";

const app = express();

connect();

app.use("/graphql", graphqlHTTP({
    pretty: true,
    graphiql: true,
    schema: schema,
}));


app.listen(3000, () => {
    console.log("Server on port: 3000");
});