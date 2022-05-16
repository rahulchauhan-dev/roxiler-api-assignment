import asyncHandler from "express-async-handler";

import axios from "axios";

//@desc get todo list
//@route GET /api/todos

const getTodos = asyncHandler(async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const filteredData = data.map(({ userId, ...data }) => data);

  if (filteredData) {
    res.json(filteredData);
  } else {
    res.status(401);
    throw new Error("Cant Find TODOS");
  }
});

export { getTodos };
