const { idExistsValidationDoc, bodyValidationDoc, validationStatusDoc } = require('./docAncillary');
const getAllResponses = require('../responses/getAll');

module.exports = {
  Documentation: {
    getAll: { route: '/tasks', method: 'get', ...getAllResponses },
    getById: { route: '/tasks/:id', method: 'get', validation: idExistsValidationDoc },
    createOne: { route: '/tasks', method: 'post', validation: bodyValidationDoc },
    deleteById: { route: '/tasks/:id', method: 'delete', validation: idExistsValidationDoc },
    updateById: {
      route: '/tasks/:id',
      method: 'put',
      validation: { params: idExistsValidationDoc.params, body: bodyValidationDoc.body },
    },
    updateStatusById: {
      route: '/tasks/:id/:status',
      method: 'put',
      validation: { params: { ...idExistsValidationDoc.params, ...validationStatusDoc.params } },
    },
  },
};
