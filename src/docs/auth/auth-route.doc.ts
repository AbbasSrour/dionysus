import login from "./controllers/login.doc";
import logout from "./controllers/logout.doc"
import refreshToken from "./controllers/refresh-token.doc";
import register from "./controllers/register.doc";

const authRoutes = {
  "/api/v1/auth/register": {
    ...register,
  },
  "/api/v1/auth/login": {
    ...login,
  },
  "api/v1/auth/logout": {
    ...logout,
  },
  "api/v1/auth/refreshtoken": {
    ...refreshToken,
  }
};
export default authRoutes;
