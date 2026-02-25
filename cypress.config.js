const { defineConfig } = require("cypress");
require("dotenv").config();  //load the env file 

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    env:{

 BASE_URL: process.env.BASE_URL,
USERNAME : process.env.USERNAME,
PASSWORD : process.env.PASSWORD

    }
  },
});
