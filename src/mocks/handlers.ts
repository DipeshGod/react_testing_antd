import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:3000/api/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: { msg: "successfull" } }));
  }),
];
