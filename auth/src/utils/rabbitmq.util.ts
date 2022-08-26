import amqplib, {Channel, Connection} from "amqplib";
import {env} from "./validate-env.util";
import log from "./logger.util";
// let channel: Channel, connection: Connection;
//
// // connect to rabbitmq
// async function connect() {
//   try {
//     // rabbitmq default port is 5672
//     const amqpServer = "amqp://localhost:5672";
//     connection = await amqplib.connect(amqpServer);
//     channel = await connection.createChannel();
//
//     // make sure that the order channel is created, if not this statement will create it
//     await channel.assertQueue("order");
//   } catch (error) {
//     console.log(error);
//   }
// }
//
// connect();

export const CreateChannel = async (exchangeName: string) => {
  try {
    const connection: Connection = await amqplib.connect(env.AMQP_URL);
    const channel: Channel = await connection.createChannel();
    await channel
      .assertExchange(exchangeName, "direct")
      .then(() => log.info("assert exchange successful"));
    return channel;
  } catch (error) {
    log.error(error);
    throw error;
  }
};

export const PublishMessage = async (
  channel: Channel,
  binding_key: string,
  message: string,
  exchangeName: string
) => {
  try {
    channel.publish(exchangeName, binding_key, Buffer.from(message));
    log.info("message published successfully");
  } catch (error) {
    log.error(error);
    throw error;
  }
};

export const SubscribeToMessage = async (
  channel: Channel,
  service: any,
  binding_key: string,
  queueName: string,
  exchangeName: string
) => {
  const appQueue = await channel.assertQueue(queueName);
  await channel.bindQueue(appQueue.queue, exchangeName, binding_key);
  await channel.consume(appQueue.queue, (data) => {
    console.log("received data");
    console.log("The data:", data?.content.toString());
    // @ts-ignore
    channel.ack(data);
  });
};
