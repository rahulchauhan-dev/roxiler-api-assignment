import asyncHandler from "express-async-handler";

import axios from "axios";

//@desc get todo list and user info by userId
//@route GET /api/users/:id

const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const todosListData = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const newUserData = {
    ...data,
    todo: todosListData.data.filter((item) => item.userId == userId),
  };

  if (newUserData) {
    res.json(newUserData);
  } else {
    res.status(401);
    throw new Error("Cant Find User");
  }
});

export { getUserById };
