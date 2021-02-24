import { HOST } from "../config/config";

export function getEndpoint(endpoint: string): string {
  return HOST + endpoint;
}
