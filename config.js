module.exports = {
  TOKEN: "MTIwMjY2NzU3MjEyMjYyNDA1MQ.GvDCD0.UH2Cexp8J0o77KzxQKOrKypAGgkAnQ9wFGMcWE",
  ownerID: ["781261683993214976", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://Ahmad:mGNBLUaKgHjwcCNg@cluster0.aazwzuy.mongodb.net/",
  status: 'RTXX GG',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
