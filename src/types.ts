export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IMovies {
  _id: string;
  title: string;
  type: 'movie' | 'series';
  posterImg: string;
  rating: string;
  url: string;
  qualityResolution: string;
  genres: string[];
}

export interface IMovieDetails
  extends Omit<IMovies, 'url' | 'qualityResolution'> {
  quality: string;
  releaseDate: string;
  director: string;
  synopsis: string;
  duration: string;
  trailerUrl: string;
  countries: string[];
  casts: string[];
}

export interface IStreamSources {
  provider: string;
  url: string;
  resolutions: string[];
}

export interface ISetOfGenres {
  parameter: string;
  name: string;
  numberOfContents: number;
  url: string;
}

export interface ISetOfCountries {
  parameter: string;
  name: string;
  numberOfContents: number;
  url: string;
}

export interface ISetOfYears {
  parameter: string;
  numberOfContents: number;
  url: string;
}

export interface ISeries extends Omit<IMovies, 'qualityResolution'> {
  episode: number;
}

export interface ISeasonsList {
  season: number;
  totalEpisodes: number;
}

export interface ISeriesDetails extends Omit<ISeries, 'url'> {
  status: string;
  releaseDate: string;
  director: string;
  synopsis: string;
  duration: string;
  trailerUrl: string;
  countries: string[];
  casts: string[];
  seasons: ISeasonsList[];
}
