import Fastify from "fastify";
import userRoutes from "./routes/userRoutes.js";

const fastify = Fastify({ logger: true });

const PORT = 3000;

// Route
fastify.get("/", (request, reply) => {
  reply.code(200).send({ message: "Hii mathi - from fastify" });
});
fastify.register(userRoutes);





// Start 
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: "127.0.0.1" });
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
