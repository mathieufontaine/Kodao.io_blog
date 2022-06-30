export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
    {
      name: "email",
      title: "Email",
      type: "text",
    },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show until approved here",
    },
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
};
