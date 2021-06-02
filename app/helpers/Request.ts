class Request {
  method: string;

  path: string;

  readonly apiBase = 'http://192.168.178.47:1337';

  constructor(method: string, path: string) {
    this.method = method;
    this.path = path;
  }

  async make(): Promise<unknown> {
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
    return Promise.reject();
  }

  async createEventOrMess(body = {}): Promise<unknown> {
    if (this.method === 'POST') {
      const selectedImage = {
        uri: body.image,
        type: 'image/jpeg',
        name: 'some-img.jpg',
      };

      const formData = new FormData();
      formData.append('authToken', 'secret');
      formData.append('title', body.title);
      formData.append('name', body.name);
      formData.append('description', body.description);
      formData.append('url', body.url);
      formData.append('location', body.location);
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

        return Promise.resolve(response);
      } catch (e) {
        return Promise.reject();
      }
    }
    return Promise.reject();
  }
}

export default Request;
