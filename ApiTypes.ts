export type ApiEventImage = {
  fileName: string;
};

export type ApiEvent = {
  description: string;
  id: number;
  images: Array<ApiEventImage>;
  startsOn: string;
  title: string;
};
