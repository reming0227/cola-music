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