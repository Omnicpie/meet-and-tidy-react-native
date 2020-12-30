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
      // TODO this should only run when trying to create an event / flag
      const selectedImage = {
        uri: body.image,
        type: 'image/jpeg',
        name: 'some-img.jpg',
      };

      const formData = new FormData();
      formData.append('authToken', 'secret');
      formData.append('title', body.title);
      formData.append('description', body.description);
      formData.append('url', body.url);
      formData.append('location', body.location);
      formData.append('startsOn', body.startsOn);
      formData.append('startsAt', body.startsAt);
      formData.append('eventType', body.eventType);

      formData.append('image', selectedImage.uri);
      try {
        const response = await fetch(this.url, {
          method: 'POST',

          body: formData,
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
