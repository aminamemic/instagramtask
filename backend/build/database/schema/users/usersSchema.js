"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    publicDetails: {
        username: String,
        firstName: String,
        lastName: String,
        birthdate: Number,
        address: {
            country: String,
            town: String,
            address: String
        }
    },
    privateDetails: {
        password: String,
        code: String,
        token: String,
        client_id: String
    }
});
exports.User = mongoose_1.model("User", exports.UserSchema);
//# sourceMappingURL=usersSchema.js.map