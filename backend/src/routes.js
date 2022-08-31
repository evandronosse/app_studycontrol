import LoginRoutes from './routes/login';
import LogoutRoutes from './routes/logout';
import usersRouter from './routes/users';
import error from './routes/error';
import levelsRoutes from './routes/levels';
import churchRoutes from './routes/church';

export default (server) => {
   LoginRoutes(server);
   LogoutRoutes(server)
   levelsRoutes(server);
   churchRoutes(server);
   usersRouter(server);
   error(server);

}