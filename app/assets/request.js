import React from 'react';

class Request {
  constructor(method, url) {
    this.method = method;
    this.url = url;
  }
 async make() {
try {
        const response = await fetch(this.url, this.method);
        const data = await response.json();

        return await Promise.resolve(data);

    } catch (e) {
        console.log("ERROR" + e);

        return Promise.reject();
      }
  }
}

export default Request;