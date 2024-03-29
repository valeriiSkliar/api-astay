import express, {Request, Response} from 'express';
import {ApplicationConfig, ApiApplication} from './application';
import http from 'http';
import path from 'path';
import {once} from 'events';

export {ApplicationConfig};

export class ExpressServer {
  public readonly app: express.Application;
  public readonly lbApp: ApiApplication;
  private server?: http.Server;

  constructor(private readonly options: ApplicationConfig = {}) {
    this.app = express();
    this.lbApp = new ApiApplication(options);
    this.app.use('/api', this.lbApp.requestHandler);

    this.app.use(express.static(path.join(__dirname, '../public')));
    this.app.get('/', function (_req: Request, res: Response) {
      res.sendFile(path.resolve('public/express.html'));
    });
    this.app.get('/hello', function (_req: Request, res: Response) {
      res.send('Hello world!');
    });
  }

  async boot() {
    await this.lbApp.boot();
  }

  public async start() {
    await this.lbApp.start();
    const port = this.lbApp.restServer.config.port ?? 3000;
    const host = this.lbApp.restServer.config.host || '127.0.0.1';
    this.server = this.app.listen(port, host);
    await once(this.server, 'listening');
  }

  // For testing purposes
  public async stop() {
    if (!this.server) return;
    await this.lbApp.stop();
    this.server.close();
    await once(this.server, 'close');
    this.server = undefined;
  }
}
