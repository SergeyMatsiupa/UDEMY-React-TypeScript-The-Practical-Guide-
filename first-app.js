var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userNameA;
userNameA = 34;
userNameA = "Max";
var userName;
//  userName = 34;
userName = "Max";
var userAge = 34;
var isValid = true;
// string, number, boolean
var userID = 123;
userID = "abc1";
// userID = false;
// let user: object;
// user = 'Max';
var user;
user = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: "abc", //123
};
// user = {};
// let hobbies: Array<string>;
var hobbies;
hobbies = ["Sports", "Reading", "Cooking"];
// hobbies = [1, 2, 3];
var objects;
objects = [{ name: "Max", age: 34 }];
var API_KEY = "abc123";
function addNoReturn(a, b) {
    var result = a + b;
    console.log("result", result);
}
function add(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, 
//   calcFn: (a: number, b: number) => number
calcFn) {
    calcFn(a, b);
}
calculate(1, 2, add);
var userID1 = 123;
var userT;
var creds;
creds = {
    password: "123",
    email: "test@example.com",
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) { }
login(creds);
login(new AuthCredentials());
var admin;
admin = {
    permissions: ["login"],
    userName: "Max",
};
var adminI;
admin = {
    permissions: ["login"],
    userName: "Max",
};
var role;
role = "admin";
role = "editor";
role = "user";
// role = 'adb';
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
        //  ...
    }
}
var roles;
roles = ["admin", "editor"];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (data) { },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
// const newUser = merge<{ name: string }, { age: number }>(
var newUser = merge({ name: "Max" }, { age: 34 });
newUser.age;
