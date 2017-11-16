"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../common/util/Utils");
var Dal = (function () {
    function Dal() {
        this.log = Utils_1.Utils.getLogger("Dal");
    }
    Dal.prototype.createDocument = function (model, data, errorCb, successCb) {
        model.create(data, function (err) {
            err ? errorCb(err) : successCb();
        });
    };
    Dal.prototype.findDocumentById = function (model, id, errorCb, successCb) {
        model.findById(id, function (err, data) {
            err ? errorCb(err) : successCb(data);
        });
    };
    Dal.prototype.findOneDocument = function (model, query, errorCb, successCb) {
        model.findOne(query, function (err, data) {
            err ? errorCb(err) : successCb(data);
        });
    };
    Dal.prototype.findAllDocuments = function (model, errorCb, successCb) {
        model.find({}, function (err, data) {
            err ? errorCb(err) : successCb(data);
        });
    };
    Dal.prototype.updateDocumentById = function (model, id, data, errorCb, successCb) {
        model.findByIdAndUpdate(id, data, function (err) {
            err ? errorCb(err) : successCb();
        });
    };
    Dal.prototype.updateDocumentByFilter = function (model, filter, data, errorCb, successCb) {
        model.findOneAndUpdate(filter, data, function (err) {
            err ? errorCb(err) : successCb();
        });
    };
    Dal.prototype.removeDocumentById = function (model, id, errorCb, successCb) {
        model.findByIdAndRemove(id, function (err) {
            err ? errorCb(err) : successCb();
        });
    };
    Dal.prototype.removeDocuments = function (model, filter, errorCb, successCb) {
        model.remove(filter, function (err) {
            err ? errorCb(err) : successCb();
        });
    };
    Dal.prototype.searchDocuments = function (model, filter, errorCb, successCb, options) {
        var query = model.find(filter);
        query.skip(Utils_1.Utils.isNumber(options.skip) ? options.skip : 0)
            .limit(Utils_1.Utils.isNumber(options.limit) ? options.limit : 1000)
            .exec(function (err, data) {
            err ? errorCb(err) : successCb(data);
        });
    };
    Dal.prototype.countDocuments = function (model, filter, errorCb, successCb) {
        model.count(filter, function (err, data) {
            err ? errorCb(err) : successCb(data);
        });
    };
    return Dal;
}());
exports.Dal = Dal;
//# sourceMappingURL=dal.js.map