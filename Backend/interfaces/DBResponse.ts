import GenreInterface from "./Genre";
import MovieInterface from "./Movie";
import PlaylistInterface from "./Playlist";
import UserInterface from "./User";
export interface DBResponse {
  result: boolean;
  msg: DBMessage;
  code?: number;
  data?: object | object[];
}
export interface LoginResponse {
  result: boolean;
  msg:
    | DBMessage.USER_LOGGED_IN
    | DBMessage.USER_NOT_LOGGED_IN
    | DBMessage.USER_NOT_FOUND
    | DBMessage.INVALID_CREDIENTIALS;
  data: UserInterface | undefined;
  token?: object | undefined;
}

export interface UserCreationResponse {
  result: boolean;
  msg:
    | DBMessage.USER_CREATED
    | DBMessage.USER_NOT_CREATED
    | DBMessage.USER_EXISTS
    | DBMessage.USER_NOT_FOUND
    | DBMessage.INVALID_CREDIENTIALS
    | DBMessage.INVALID_EMAIL
    | DBMessage.INVALID_PASSWORD;
  data: UserInterface | undefined;
}

export interface GetWatchlistResponse {
  msg:
    | DBMessage.WATCHLIST_NOT_FOUND
    | DBMessage.WATCHLIST_FOUND
    | DBMessage.WATCHLIST_EMPTY
    | DBMessage.USER_NOT_FOUND;
  result: boolean;
  data: MovieInterface[] | undefined;
}

export interface MovieCreationResponse {
  result: boolean;
  msg: DBMessage.MOVIE_CREATED | DBMessage.MOVIE_NOT_CREATED;
  data: MovieInterface | undefined;
}

export interface DeleteFromWatchlistResponse {
  result: boolean;
  msg:
    | DBMessage.WATCHLIST_NOT_FOUND
    | DBMessage.WATCHLIST_UPDATED
    | DBMessage.WATCHLIST_NOT_UPDATED
    | DBMessage.MOVIE_NOT_FOUND
    | DBMessage.MOVIE_UPDATED
    | DBMessage.MOVIE_NOT_UPDATED
    | DBMessage.NOT_IN_WATCHLIST
    | DBMessage.USER_NOT_FOUND
    | DBMessage.WATCHLIST_EMPTY;
  data: MovieInterface | undefined;
}

export interface GetMovieResponse {
  result: boolean;
  msg:
    | DBMessage.INVALID_QUERY
    | DBMessage.MOVIE_NOT_FOUND
    | DBMessage.MOVIE_FOUND
    | DBMessage.TMDB_API_ERROR;
  data: MovieInterface | MovieInterface[] | undefined;
}

export interface GetGenresReponse {
  result: boolean;
  msg: DBMessage.TMDB_API_ERROR | DBMessage.GENRES_FOUND;
  data: GenreInterface[] | GenreInterface | undefined;
}

export interface AddToWatchlistResponse {
  result: boolean;
  msg:
    | DBMessage.MOVIE_NOT_FOUND
    | DBMessage.MOVIE_FOUND
    | DBMessage.WATCHLIST_NOT_FOUND
    | DBMessage.WATCHLIST_UPDATED
    | DBMessage.USER_NOT_FOUND
    | DBMessage.MOVIE_NOT_FOUND
    | DBMessage.WATCHLIST_NOT_UPDATED
    | DBMessage.ALREADY_IN_WATCHLIST;
  data: MovieInterface | undefined;
}

export interface CreatePlaylistResponse {
  result: boolean;
  msg:
    | DBMessage.PLAYLIST_CREATED
    | DBMessage.PLAYLIST_NOT_CREATED
    | DBMessage.USER_NOT_FOUND
    | DBMessage.INVALID_NAME;
  data: PlaylistInterface | undefined;
}

export interface GetPlaylistsResponse {
  result: boolean;
  msg:
    | DBMessage.PLAYLIST_NOT_FOUND
    | DBMessage.PLAYLIST_FOUND
    | DBMessage.USER_NOT_FOUND
    | DBMessage.NO_PLAYLISTS;
  data: PlaylistInterface[] | undefined;
}
export interface GetPlaylistResponse {
  result: boolean;
  msg:
    | DBMessage.PLAYLIST_NOT_FOUND
    | DBMessage.PLAYLIST_FOUND
    | DBMessage.USER_NOT_FOUND
    | DBMessage.NO_PLAYLISTS;
  data: PlaylistInterface | undefined;
}

export interface DeletePlaylistResponse {
  result: boolean;
  msg:
    | DBMessage.PLAYLIST_NOT_FOUND
    | DBMessage.PLAYLIST_DELETED
    | DBMessage.PLAYLIST_NOT_DELETED;
  data: PlaylistInterface | undefined;
}

export interface RenamePlaylistResponse {
  result: boolean;
  msg:
    | DBMessage.PLAYLIST_NOT_FOUND
    | DBMessage.PLAYLIST_UPDATED
    | DBMessage.PLAYLIST_NOT_UPDATED;
  data: PlaylistInterface | undefined;
}

export interface UpdatePlaylistResponse {
  result: boolean;
  msg:
    | DBMessage.PLAYLIST_NOT_FOUND
    | DBMessage.PLAYLIST_UPDATED
    | DBMessage.PLAYLIST_NOT_UPDATED;
  data: PlaylistInterface | undefined;
  renamed?: boolean;
}
export interface RemoveFromPlaylistResponse {
  result: boolean;
  msg:
    | DBMessage.PLAYLIST_NOT_FOUND
    | DBMessage.PLAYLIST_UPDATED
    | DBMessage.PLAYLIST_NOT_UPDATED
    | DBMessage.MOVIE_NOT_FOUND
    | DBMessage.MOVIE_UPDATED
    | DBMessage.MOVIE_NOT_UPDATED
    | DBMessage.NOT_IN_PLAYLIST
    | DBMessage.USER_NOT_FOUND
    | DBMessage.PLAYLIST_EMPTY;
  data: MovieInterface | undefined;
}
export interface AddToPlaylistResponse {
  result: boolean;
  msg:
    | DBMessage.MOVIE_NOT_FOUND
    | DBMessage.MOVIE_FOUND
    | DBMessage.PLAYLIST_NOT_FOUND
    | DBMessage.PLAYLIST_UPDATED
    | DBMessage.USER_NOT_FOUND
    | DBMessage.MOVIE_NOT_FOUND
    | DBMessage.PLAYLIST_NOT_UPDATED
    | DBMessage.ALREADY_IN_PLAYLIST;
  data: MovieInterface | undefined;
}
export enum DBMessage {
  INVALID_QUERY = "Invalid query",
  USER_CREATED = "User created successfully",
  USER_EXISTS = "User already exists",
  USER_LOGGED_IN = "User logged in successfully",
  USER_LOGGED_OUT = "User logged out successfully",
  USER_UPDATED = "User updated successfully",
  USER_DELETED = "User deleted successfully",
  USER_NOT_DELETED = "User not deleted",
  USER_NOT_UPDATED = "User not updated",
  USER_NOT_LOGGED_IN = "User not logged in",
  USER_NOT_LOGGED_OUT = "User not logged out",
  USER_NOT_CREATED = "User not created",
  USER_NOT_FOUND = "User not found",
  USER_NOT_AUTHENTICATED = "User not authenticated",
  USER_NOT_AUTHORIZED = "User not authorized",
  INVALID_EMAIL = "Invalid email",
  INVALID_PASSWORD = "Invalid password",
  INVALID_CREDIENTIALS = "Invalid credentials",
  WATCHLIST_CREATED = "Watchlist created successfully",
  WATCHLIST_FOUND = "Watchlist found",
  WATCHLIST_NOT_CREATED = "Watchlist not created",
  WATCHLIST_DELETED = "Watchlist deleted successfully",
  WATCHLIST_NOT_DELETED = "Watchlist not deleted",
  WATCHLIST_UPDATED = "Watchlist updated successfully",
  WATCHLIST_NOT_UPDATED = "Watchlist not updated",
  WATCHLIST_NOT_FOUND = "Watchlist not found",
  MOVIE_CREATED = "Movie created successfully",
  MOVIE_NOT_CREATED = "Movie not created",
  MOVIE_DELETED = "Movie deleted successfully",
  MOVIE_NOT_DELETED = "Movie not deleted",
  MOVIE_UPDATED = "Movie updated successfully",
  MOVIE_NOT_UPDATED = "Movie not updated",
  MOVIE_NOT_FOUND = "Movie not found",
  MOVIE_FOUND = "Movie found",
  TMDB_API_ERROR = "TMDB API error",
  GENRES_FOUND = "Genres found",
  WATCHLIST_EMPTY = "Watchlist is empty",
  NOT_IN_WATCHLIST = "Movie not in watchlist",
  ALREADY_IN_WATCHLIST = "Movie already in watchlist",
  PLAYLIST_CREATED = "Playlist created successfully",
  PLAYLIST_NOT_CREATED = "Playlist not created",
  PLAYLIST_DELETED = "Playlist deleted successfully",
  PLAYLIST_NOT_DELETED = "Playlist not deleted",
  PLAYLIST_UPDATED = "Playlist updated successfully",
  PLAYLIST_NOT_UPDATED = "Playlist not updated",
  PLAYLIST_NOT_FOUND = "Playlist not found",
  PLAYLIST_FOUND = "Playlist found",
  ALREADY_IN_PLAYLIST = "Movie already in playlist",
  NOT_IN_PLAYLIST = "Movie not in playlist",
  INVALID_PLAYLIST = "Invalid playlist",
  INVALID_NAME = "Invalid name",
  PLAYLISTS_FOUND = "Playlists found",
  PLAYLISTS_NOT_FOUND = "Playlists not found",
  PLAYLIST_EMPTY = "Playlist is empty",
  NO_PLAYLISTS = "No playlists",
}
