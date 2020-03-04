// REQUEST RECOMMEND TAGS
export const FETCH_RECOMMEND_TAGS = {
  SUCCESS: 'FETCH_RECOMMEND_TAGS_SUCCESS',
  ERROR: 'FETCH_RECOMMEND_TAGS_ERROR'
};
export type FETCH_RECOMMEND_TAGS_SUCCESS = typeof FETCH_RECOMMEND_TAGS.SUCCESS;
export type FETCH_RECOMMEND_TAGS_ERROR = typeof FETCH_RECOMMEND_TAGS.ERROR;

// REQUEST RECOMMEND DETAIL ACCORDING TO TAG
export const FETCH_RECOMMEND_TAG__DETAIL = {
  SUCCESS: 'FETCH_RECOMMEND_DETAIL_TAGS_SUCCESS',
  ERROR: 'FETCH_RECOMMEND_DETAIL_TAGS_ERROR'
};
export type FETCH_RECOMMEND_DETAIL_SUCCESS = typeof FETCH_RECOMMEND_TAG__DETAIL.SUCCESS;
export type FETCH_RECOMMEND_DETAIL_ERROR = typeof FETCH_RECOMMEND_TAG__DETAIL.ERROR;

export const FETCH_PLAYLIST_DETAIL = {
  SUCCESS: 'FETCH_PLAYLIST_DETAIL_SUCCESS',
  ERROR: 'FETCH_PLAYLIST_DETAIL_ERROR'
};
export type FETCH_PLAYLIST_DETAIL_SUCCESS = typeof FETCH_PLAYLIST_DETAIL.SUCCESS;
export type FETCH_PLAYLIST_DETAIL_ERROR = typeof FETCH_PLAYLIST_DETAIL.ERROR;

export const FETCH_SONG_URL = {
  SUCCESS: 'FETCH_SONG_URL_SUCCESS',
  ERROR: 'FETCH_SONG_URL_ERROR'
};
export type FETCH_SONG_URL_SUCCESS = typeof FETCH_SONG_URL.SUCCESS;
export type FETCH_SONG_URL_ERROR = typeof FETCH_SONG_URL.ERROR;

// PLAY CONTROL STATE
export const MUSIC_PLAYER = {
  PLAY_MUSIC: 'PLAY_MUSIC',
  STOP_MUSIC: 'STOP_MUSIC',
  SET_SOURCE: 'SET_SOURCE',
  LOAD_SOURCE: 'LOAD_SOURCE',
  SET_LOOP: 'SET_LOOP'
}

export type PLAY_MUSIC = typeof MUSIC_PLAYER.PLAY_MUSIC;
export type STOP_MUSIC = typeof MUSIC_PLAYER.STOP_MUSIC;
export type SET_SOURCE = typeof MUSIC_PLAYER.SET_SOURCE;
export type LOAD_SOURCE = typeof MUSIC_PLAYER.LOAD_SOURCE;
export type SET_LOOP = typeof MUSIC_PLAYER.SET_LOOP;
// play tracks
export const PLAY_TRACKS = 'PLAY_TRACKS';
export type PLAY_TRACKS = typeof PLAY_TRACKS;