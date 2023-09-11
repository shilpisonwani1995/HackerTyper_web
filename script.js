let a = [
  "Initializing Hack Tool...",
  "Connecting to Facebook...",
  "Connecting to Server 1...",
  "Connection failed. Retrying...",
  "Connecting to Server 2...",
  "Connected Successfully...",
  "Username i am shilpi...",
  "Trying Brute Force...",
  "200K passwords tried...",
  "Match not found...",
  "Another 200K password tried...",
  "Match not found...",
  "Another 200K password tried...",
  "Match not found...",
  "Another 200K password tried...",
  "Match found...",
  "Accessing Account...",
  "Hack Successful...",
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const showHack = async (message) => {
  await sleep(2);
  console.log(message);
  text.innerHTML = text.innerHTML + message + "<br>";
};

// async iife
(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i]);
  }
})();
