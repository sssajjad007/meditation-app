import { toString } from "../../../library";
import { IFavTrack } from "../../types";

export function parseFavTrack(payload: any): IFavTrack {
  const favTrack: string[] = [];
  const length: number = Array.isArray(payload.fav_track)
    ? payload.fav_track.length
    : 0;
  for (let index = 0; index < length; index++) {
    const element = payload.fav_track[index];
    favTrack.push(toString(element));
  }
  return {
    favTrack,
  };
}