class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

const aws = (server) => {
  server.isAWS = true;
  server.awsInfo = () => {
    return server.url;
  };
  return server;
};

const azure = (server) => {
  server.isAzure = true;
  server.port += 500;
  return server
};


const s1 = aws(new Server("12.34.56.78", 8080));

console.log(s1.isAWS);
console.log(s1.awsInfo());

const s2 = azure(new Server("12.34.56.78", 1000));

console.log(s2.isAzure);
console.log(s2.url);
