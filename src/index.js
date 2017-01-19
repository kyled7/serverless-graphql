'use strict';

require('dotenv').config();

import { graphql } from 'graphql';
import schema from "./graphql/schema";
import * as rootValue from './graphql/resolvers';

exports.graphql = (event, context, cb) => {
  console.log('Received event', event);

  const body = event.body;

  return graphql(schema, body.query, rootValue, null, body.variables)
    .then((response) => cb(null, response))
    .catch((err) => cb(err));
};

