import userController from "../controller/userController.js";

const fastifyRoute = async (fastify, options) => {
  fastify.post("/users/create-user", userController.createUser);
  fastify.get("/users/get-user", userController.getUsers);
  fastify.get("/users/getuser/:id", userController.getUserByID);
  fastify.put("/users/update/:id", userController.updateUser);
  fastify.delete("/users/delete/:id", userController.deleteUser);
};

export default fastifyRoute;
