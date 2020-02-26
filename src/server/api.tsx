import req from './request';

const server_url: string = `/api`;

const Api = {
  fetch_recommend_tags: () => req(`${server_url}/playlist/hot`, 'GET'),
  fetch_recommend_tags_detail: (cat: string) => req(`${server_url}/top/playlist?limit=30&cat=${cat}`, 'GET'),
  fetch_playlist_detail: (playlistId: number) => req(`${server_url}/playlist/detail?id=${playlistId}`, 'GET'),
  fetch_song_url: (songId: number) => req(`${server_url}/song/url?id=${songId}`, 'GET'),
}

export default Api;