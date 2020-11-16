class Request {
  constructor(method, url) {
    this.method = method;
    this.url = url;
  }

  async make(body = {}) {
    if (this.method === 'GET') {
      try {
        const response = await fetch(this.url);
        const data = await response;

        return await Promise.resolve(data);
      } catch (e) {
        console.log(`ERROR${e}`);

        return Promise.reject();
      }
    }
    if (this.method === 'POST') {
      try {
        const response = await fetch(this.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        const data = await response;

        return await Promise.resolve(data);
      } catch (e) {
        console.log(`ERROR${e}`);

        return Promise.reject();
      }
    }
  }
}

export default Request;
