"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home")

app.set("views", "./views");
app.set("view engine", "ejs"); 

app.use("/", home); // use -> middle ware를 등록해주는 메서드. / 주소로 들어오는 요청들을 home에서 처리하겠다는 뜻

module.exports = app;

