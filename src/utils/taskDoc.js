const idExistsValidationDoc = {
  params: {
    id: {
      type: 'integer', wherePass: 'params/URL', required: true, minLength: 1, shouldExistInDB: true,
    },
  },
};

const bodyValidationDoc = {
  body: {
    JSON: {
      name: {
        type: 'string', wherePass: 'body', required: true, minLength: 1,
      },
      description: {
        type: 'string', wherePass: 'body', required: true, minLength: 1,
      },
    },
  },
};

const validationStatusDoc = {
  params: {
    status: {
      type: 'integer', wherePass: 'params/URL', required: true, statusOptions: ['pending', 'ongoing', 'finished'],
    },
  },
};

module.exports = {
  Documentation: {
    getAll: { route: '/tasks', method: 'get' },
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
