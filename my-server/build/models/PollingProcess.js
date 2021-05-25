var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PollingProcessEntity = require('../entities/PollingProcess');
var PollingProcess = new Schema(PollingProcessEntity);
module.exports = mongoose.model('PollingProcess', PollingProcess);
//# sourceMappingURL=PollingProcess.js.map