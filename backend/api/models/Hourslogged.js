/**
 * Hourslogged.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'hours_logged',

  attributes: {

    week: {
      type: 'string',
      required: true
    },

    year: {
      type: 'string',
      required: true
    },

    member_id : {
      model: 'user',
      columnName: '_id',
      required: true
    },

    project_id : {
      model: 'project',
      columnName: '_id',
      required: true
    },

    detail: [{
      date_of_log: {
        type: 'string',
        required: true
      },
      hours: {
        type: 'integer',
        required: true
      }
    }]
  }
};
