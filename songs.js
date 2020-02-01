const songs = [
    {
        id: 1,
        tts:
            '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/7d3d9306-2d9f-4c63-99a3-41ce1e2d654a.opus">',
        ttsExpl:
            '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/f2fb30c5-a882-4b75-ae14-d6c1cc9515d5.opus">',
        keywords: ['трасса', '95', 'мне осталась'],
        text:
            'снова в ночь летят дороги день в рассвет менять кому чья а мне досталась трасса е - 95',
        songName: 'Трасса E-95',
    },
    {
        id: 2,
        tts:
            '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/7131ea76-02bf-480f-a7de-1d4e89fc0018.opus">',
        ttsExpl:
            '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/44d0f1ac-99a4-470e-b76d-34a7011d748e.opus">',
        keywords: ['пачка', 'сигарет', 'есть в кармане', 'сегодняшний день', 'билет на самолёт'],
        text:
            'но если есть в кармане пачка сигарет значит все не так уж плохо на сегодняшний день и билет на самолет с серебристым крылом что взлетая оставляет земле лишь тень',
        songName: 'Пачка сигарет',
    },
    {
        id: 3,
        tts: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/5dc690bf-e06a-49fd-a402-e536820a533c.opus">',
        ttsExpl: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/2c426837-00ff-416d-b6cf-33e97ee1e6ee.opus">',
        keywords: ['старый дом', 'проклятый дом', 'решили заколотить', 'двери и окна'],
        text:
            'Мне больно видеть белый свет Мне лучше в полной темноте Я очень много-много лет Мечтаю только о еде Мне слишком тесно взаперти И я мечтаю об одном Скорей свободу обрести Прогрызть свой ветхий старый дом Проклятый старый дом!',
        songName: 'Проклятый старый дом',
    },
    {
        id: 4,
        tts: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/15b2e73d-ff4b-4442-8270-f4c59317fb92.opus">',
        ttsExpl: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/0854e618-66e3-4f0f-911a-f10b41825bbb.opus">',
        keywords: ['мне платили', 'каждый раз', 'бомжевала', 'возле трасс'],
        text:
            'Если б мне платили каждый раз каждый раз когда я думаю о тебе Я бы бомжевала возле трасс я бы стала самой бедной из людей Если б мне платили каждый раз каждый раз когда я думаю о тебе Я бы бомжевала возле трасс я бы стала самой бедной из людей',
        songName: 'Каждый раз',
    },
    {
        id: 5,
        tts: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/d076acf4-1f06-415f-923f-1f9de7ba66c8.opus">',
        ttsExpl: '<speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/888c1ac2-236a-4416-a559-be65e6d1f58e.opus">',
        keywords: ['оpбит', 'без сахара', 'о ком плакала', 'вспоминает тех'],
        text:
            'она жует свой оpбит без сахара и вспоминает тех о ком плакала она жует свой оpбит без сахара и ненавидит тех о ком плакала',
        songName: 'Орбит без сахара',
    },
];

module.exports.getSong = function(songsCount) {
    return songs[songsCount];
};

module.exports.songs = songs;
