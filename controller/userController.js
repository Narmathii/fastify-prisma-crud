import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const userController = {
  // create
  createUser: async (request, reply) => {
    try {
      const { name, email } = request.body;

      if (!name || !email) {
        return reply.code(400).send({ error: "Name and Email required" });
      }

      const user = await prisma.user.create({
        data: { name, email },
      });
      ``;

      return reply.code(201).send(user);
    } catch (error) {
      return reply.code(400).send({ error: error.message });
    }
  },

  // read
  getUsers: async (request, reply) => {
    try {
      const users = await prisma.user.findMany();
      return reply.code(200).send(users);
    } catch (error) {
      return reply.code(500).send({ error: error.message });
    }
  },

  // readByID
  getUserByID: async (request, reply) => {
    try {
      const { id } = request.params;
      console.log(request.params);

      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });

      if (!user) {
        return reply.code(404).send({ error: "User not found" });
      }
      return reply.code(200).send(user);
    } catch (error) {
      return reply.code(500).send({ error: error.message });
    }
  },

  // Update
  updateUser: async (request, reply) => {
    try {
      const { id } = request.params;
      const { name, email } = request.body;

      console.table([name, email, id]);

      const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email },
      });

      if (!user) {
        return reply.code(400).send({ error: "User updates failed" });
      }
      return reply.code(200).send(user);
    } catch (error) {
      return reply.code(500).send({ error: error.message });
    }
  },

  // Delete
  deleteUser: async (request, reply) => {
    try {
      const { id } = request.params;
      const delteUser = await prisma.user.delete({
        where: { id: Number(id) },
      });

      console.log(delteUser);

      if (!delteUser) {
        return reply.code(400).send({ error: "User not deleted" });
      }

      return reply.code(200).send({ message: "User deleted successfully" });
    } catch (error) {
      return reply.code(500).send({ error: error.message });
    }
  },
};

export default userController;
