export type ApiEvent = {
  description: string;
  id: number;
  imageUrls: Array<string>;
  startsAt: string;
  title: string;
};

export type ApiEventType = {
  id: number;
  name: string;
};

export type ApiMessType = {
  id: number;
  name: string;
};

export type ApiMess = {
  description: string;
  id: number;
  imageUrls: Array<string>;
  location: string;
  title: string;
  createdAt: string;
};
