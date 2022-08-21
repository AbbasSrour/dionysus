import express from "express";
import {createProxyMiddleware} from "http-proxy-middleware";
import {env} from "../utils/validate-env.util";

const Router = express.Router();

Router.use(
  "/api/v1/shows",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);
Router.use(
  "/api/v1/search",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);
Router.use(
  "/api/v1/actors",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);
Router.use(
  "/api/v1/directors",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);
Router.use(
  "/api/v1/genres",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);
Router.use(
  "/api/v1/imdb",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

Router.use(
  "/api/v1/languages",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

Router.use(
  "/api/v1/studios",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

Router.use(
  "/api/v1/languages",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);
Router.use(
  "/api/v1/servers",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);
Router.use(
  "/api/v1/writers",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

Router.use(
  "/api/v1/movies",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

Router.use(
  "/api/v1/writers",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

Router.use(
  "/api/v1/videos",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

Router.use(
  "/api/v1/images",
  createProxyMiddleware({
    target: env.SHOW_DB_SERVICE,
    changeOrigin: true,
  })
);

export default Router;
