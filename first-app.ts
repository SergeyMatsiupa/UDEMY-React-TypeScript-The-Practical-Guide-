let userNameA;

userNameA = 34;
userNameA = "Max";

let userName: string;

//  userName = 34;
userName = "Max";

let userAge: number = 34;
let isValid = true;

// string, number, boolean

let userID: string | number = 123;
userID = "abc1";
// userID = false;

// let user: object;
// user = 'Max';
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", //123
};

// user = {};

// let hobbies: Array<string>;
let hobbies: string[];

hobbies = ["Sports", "Reading", "Cooking"];
// hobbies = [1, 2, 3];

let objects: { name: string; age: number }[];
objects = [{ name: "Max", age: 34 }];

const API_KEY = "abc123";

function addNoReturn(a: number, b: number): void {
  const result = a + b;
  console.log("result", result);
}

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(
  a: number,
  b: number,
  //   calcFn: (a: number, b: number) => number
  calcFn: AddFn
) {
  calcFn(a, b);
}

calculate(1, 2, add);

type StringOrNum = string | number;
let userID1: StringOrNum = 123;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
let userT: User;

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: "123",
  email: "test@example.com",
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(creds);
login(new AuthCredentials());

// interface Credentials {
// mode: string;
// }
// extending interface Credentials with new property (declaration merging)

type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;
admin = {
  permissions: ["login"],
  userName: "Max",
};

interface AdminI {
  permissions: string[];
}

type AppUserI = {
  userName: string;
};

interface AppAdminI extends Admin, AppUser {}

let adminI: AppAdminI;
admin = {
  permissions: ["login"],
  userName: "Max",
};

// let role: 'admin' | 'user' | 'editor';
type Role = "admin" | "user" | "editor";
let role: Role;

role = "admin";
role = "editor";
role = "user";
// role = 'adb';

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    //  ...
  }
}

let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(data) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

// const newUser = merge<{ name: string }, { age: number }>(
const newUser = merge(
  { name: "Max" },
  { age: 34 }
);
newUser.age;
