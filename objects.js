var playlist = {Sheeran: 'Hello my freinds'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  playlist.artist.delete()
  return playlist
}
