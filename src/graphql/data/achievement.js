"use strict";

import dynogels from 'dynogels';
import Joi from 'joi';
import uuid from 'uuid';

const mapItem = (item) => {
  const data = item.attrs;
  return {
    id: data.id,
    title: data.title
  };
};
const mapItems = (items) => items.map(mapItem);

const modelConfig = {
  hashKey: 'id',
  timestamps : true,
  schema: {
    id: Joi.string(),
    title: Joi.string(),
  },
  indexes: [{
    hashKey: 'title',
    name: 'TitleIndex',
    type: 'global'
  }]
}


const list = () => {
  const Achievement = dynogels.define('Achievement', Object.assign({}, modelConfig, {
    tableName : process.env.ACHIEVEMENT_TABLE_NAME
  }));

  return new Promise((resolve, reject) => {
    Achievement.scan().exec((err, result) => {
      if(err) reject(err);
      else resolve(mapItems(result.Items));
    });
  })
};

const add = (args) => {
  const Achievement = dynogels.define('Achievement', Object.assign({}, modelConfig, {
    tableName : process.env.ACHIEVEMENT_TABLE_NAME
  }));

  const achievement = Object.assign({}, {
    id: uuid.v4()
  }, args.achievement);

  return new Promise((resolve, reject) => {
    Achievement.create(achievement, (err, result) => {
      if(err) reject(err);
      else resolve(mapItem(result));
    });
  });
};

export {list, add}