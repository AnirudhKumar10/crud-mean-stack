'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Client = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    balance: {
        type: Number
    }
});

exports.default = _mongoose2.default.model('Client', Client, 'clients');