"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/", home); // use -> middle ware를 등록해주는 메서드. / 주소로 들어오는 요청들을 home에서 처리하겠다는 뜻

app.set("views", "./src/views");
app.set("view engine", "ejs"); 

app.use(express.static(`${__dirname}/src/public`));


module.exports = app;