
import { WS_EVENTS } from '../../shared/constants';
import ClientConfig from '../../config/client';

export default class Connection {
  static get socket() { return Connection._socket; }

  static setup() {
    // eslint-disable-next-line no-undef
    Connection._socket = io('https://cloud-smart-garden.herokuapp.com', {
    // Connection._socket = io(`http://localhost:${ClientConfig.backendPort}`, {
      transports: ['websocket']
    });
    Connection._socket.on(WS_EVENTS.cloudConnect, () => {
      console.log('connected');
    });
  }
}
