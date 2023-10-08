module.exports = {
  swagger: "2.0",
  info: {
    title: "Notes API",
    description: "This project uses the nodes js version 18.17.1",
  },
  schemes: ["http"],
  host: "localhost:3000",
  basePath: "/api/v1",
  paths: {
    "/notes": {
      get: {
        summary: "Retreive all notes",
        description: "Retrieve notes that are not deleted",
        produces: ["application/json"],
        responses: {
          200: {
            description: "notes retrieved successfully",
            schema: {
              type: "object",
              properties: {
                data: {
                  type: "object",
                  properties: {
                    items: {
                      type: "array",
                      items: {
                        $ref: "#/definitions/NoteRetrieveObject",
                      },
                    },
                  },
                },
              },
            },
          },
          500: { description: "Server error" },
        },
      },
      post: {
        summary: "Add note",
        description: "Add note to database",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Note object that needs to be added to the database",
            required: true,
            schema: { $ref: "#/definitions/NotePostObject" },
          },
        ],
        responses: {
          200: {
            description: "notes retrieved successfully",
            schema: { $ref: "#/definitions/NotePostObject" },
          },
          500: { description: "Server error" },
        },
      },
      delete: {
        summary: "Delete note",
        description: "Delete note from database",
        produces: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "id",
            description: "Note id that needs to be deleted",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          204: { description: "notes deleted successfully" },
          500: { description: "Server error" },
        },
      },
    },
  },
  definitions: {
    NoteRetrieveObject: {
      type: "object",
      properties: {
        id: {
          type: "integer",
        },
        title: {
          type: "string",
        },
        content: {
          type: "string",
        },
        author: {
          type: "string",
        },
        date: {
          type: "string",
        },
      },
    },
    NotePostObject: {
      type: "object",
      properties: {
        title: {
          type: "string",
        },
        content: {
          type: "string",
        },
        author: {
          type: "string",
        },
      },
    },
  },
};
