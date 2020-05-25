import config from './config';
import * as express from 'express';
import routes from './routes/index';
import * as morgan from 'morgan';
import * as helmet from 'helmet'; // Security

const PORT = config.port || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.enableAccessLogs) {
  app.use(morgan('tiny'));
}
app.use(helmet());

app.use(express.static('public'));

routes(app);

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});
