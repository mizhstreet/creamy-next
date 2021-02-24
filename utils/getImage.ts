import { S3_ENDPOINT } from "../config/config";

export function getImage(image: string): string {
  return S3_ENDPOINT + image;
}
