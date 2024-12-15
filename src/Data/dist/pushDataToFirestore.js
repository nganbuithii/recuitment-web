"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var firestore_1 = require("firebase/firestore");
var FakeData_json_1 = require("./FakeData.json");
var firebaseConfig_1 = require("../services/firebaseConfig");
var pushDataToFirestore = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, _a, subject, subjectRef, _b, _c, question, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 9, , 10]);
                _i = 0, _a = FakeData_json_1["default"].subjects;
                _d.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                subject = _a[_i];
                return [4 /*yield*/, firestore_1.addDoc(firestore_1.collection(firebaseConfig_1.db, "subjects"), {
                        id: subject.id,
                        name: subject.name
                    })];
            case 2:
                subjectRef = _d.sent();
                console.log("M\u00F4n thi \"" + subject.name + "\" \u0111\u01B0\u1EE3c t\u1EA1o v\u1EDBi ID: " + subjectRef.id);
                _b = 0, _c = subject.questions;
                _d.label = 3;
            case 3:
                if (!(_b < _c.length)) return [3 /*break*/, 6];
                question = _c[_b];
                return [4 /*yield*/, firestore_1.addDoc(firestore_1.collection(firebaseConfig_1.db, "subjects/" + subjectRef.id + "/questions"), {
                        id: question.id,
                        question: question.question,
                        options: question.options,
                        correctAnswer: question.correctAnswer
                    })];
            case 4:
                _d.sent();
                _d.label = 5;
            case 5:
                _b++;
                return [3 /*break*/, 3];
            case 6:
                console.log("C\u00E2u h\u1ECFi cho m\u00F4n thi \"" + subject.name + "\" \u0111\u00E3 \u0111\u01B0\u1EE3c th\u00EAm th\u00E0nh c\u00F4ng.");
                _d.label = 7;
            case 7:
                _i++;
                return [3 /*break*/, 1];
            case 8:
                console.log("Đẩy dữ liệu lên Firestore thành công!");
                return [3 /*break*/, 10];
            case 9:
                error_1 = _d.sent();
                console.error("Lỗi khi đẩy dữ liệu lên Firestore: ", error_1);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
pushDataToFirestore();
