module.exports = {
  responses: {
    200: {
      type: 'array',
      properties: {
        success: {
          type: 'boolean',
          description: 'true if the request was successful',
        },
        code: {
          type: 'integer',
          description: 'the status code of the response',
        },
        content: {
          type: 'array',
          description: 'the content of the response',
          contentEXample: [
            {
              id: 1,
              name: 'Task 1',
              description: 'Task 1 description',
              status: 'finished',
              createdAt: '2022-07-03T11:24:47.000Z',
              updatedAt: '2022-07-03T11:24:47.000Z',
            },
            {
              id: 2,
              name: 'Task 2',
              description: 'Task 2 description',
              status: 'pending',
              createdAt: '2022-07-03T11:24:47.000Z',
              updatedAt: '2022-07-03T11:24:47.000Z',
            },
          ],
        },
      },
    },
  },
  404: {
    type: 'object',
    properties: {
      success: {
        type: 'boolean',
        description: 'true if the request was successful',
      },
      code: {
        type: 'integer',
        description: 'the status code of the response',
      },
      message: {
        type: 'string',
        message: 'No tasks found',
      },
    },
  },
};
