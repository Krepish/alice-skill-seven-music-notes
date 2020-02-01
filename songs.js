const songs = [
    {
        id: 1,
        tts: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/7d3d9306-2d9f-4c63-99a3-41ce1e2d654a.opus">',
        ttsExpl: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/f2fb30c5-a882-4b75-ae14-d6c1cc9515d5.opus">',
        keywords: ['трасса', 'е 95'],
        songName: 'Трасса E-95'
    },
    {
        id: 2,
        tts: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/7131ea76-02bf-480f-a7de-1d4e89fc0018.opus">',
        ttsExpl: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/44d0f1ac-99a4-470e-b76d-34a7011d748e.opus">',
        keywords: ['пачка сигарет', 'есть в кармане пачка сигарет', 'если есть в кармане пачка сигарет'],
        songName: 'Пачка сигарет'
    }
];

module.exports.getRandomSong = function() {
    var rand = Math.floor(Math.random() * songs.length);

    return songs[rand];
};

module.exports.songs = songs;
