class Request {
  method: string;

  path: string;

  readonly apiBase = 'http://192.168.178.47:1337';

  constructor(method: string, path: string) {
    this.method = method;
    this.path = path;
  }

  async make(body = {}): Promise<unknown> {
    if (this.method === 'GET') {
      try {
        const url = this.apiBase + this.path;
        const response = await fetch(url);
        const data = response;

        return Promise.resolve(data);
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
      formData.append('facilityType', body.facilityType);

      formData.append('image', selectedImage.uri);
      try {
        const url = this.apiBase + this.path;
        const response = await fetch(url, {
          method: 'POST',

          body: formData,
        });

        const data = response;

        return Promise.resolve(data);
      } catch (e) {
        console.log(`ERROR${e}`);

        return Promise.reject();
      }
    }
    return Promise.reject();
  }
}

export default Request;
