/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

const colors = require('colors/safe');
const debug = require('debug')('app:server');
const BaseHandler = require('./base-handler');
const { WS_EVENTS } = require('../../../shared/constants');

module.exports = class Garden2CloudHandler extends BaseHandler {
  setup(io, clients, manager) {
    super.setup(io, clients, manager);
    this.addEvent(WS_EVENTS.garden2Cloud);
    this.addListener(this.handleGardenToCloud.bind(this));
  }

  async handleGardenToCloud(socket, type, message) {
    debug(colors.green('[Garden]'), WS_EVENTS.garden2Cloud, message);
    switch (type) {
    
    default:
      return null;
    }
  }
};
