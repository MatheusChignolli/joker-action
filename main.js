const core = require("@actions/core");
const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

async function run() {
  const joke = await getJoke();
  console.log("The joke: ", joke);
  core.setOutput("joke-output", joke);
}

run();
