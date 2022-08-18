export interface GetShowInterface {
  id?: number;
  name?: string;
  releaseYear?: number;
}

export interface ShowInput {
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: number;
  budget: number;
  revenue: number;
}

export interface ShowSchema extends ShowInput {
  showId: number;
  createdAt: string;
  updatedAt: string;
}
