export interface Coordinates {
  city: string;
  latitude: number;
  longitude: number;
}

export type GeoResult = {
  latitude: number;
  longitude: number;
  name: string;
};

export type GeoResponse = {
  results?: GeoResult[];
};
