export type ApiAttendance = {
  eventId: number;
  userId: number;
};

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

export type ApiFacility = {
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

export type ApiMessType = {
  id: number;
  name: string;
};

export type ApiUser = {
  id: number;
  email: string;
  name: string;
};
