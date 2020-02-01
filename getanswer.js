const { songs, getSong } = require('./songs');

const stages = {
    start: {
        yes: {
            text: 'Начнем',
            nextStage: 'playing'
        },
        no: {
            text: 'Пока'
        },
        warningText: 'Ответьте, пожалуйста, да или нет'
    },
    playing: {
        warningText: 'Не поняла, что вы сказали',
        yes: 'Вы выиграли. Песня называется ',
        nextStep: 'Прослушайте еще одну мелодию!',
        no: 'Это неверный ответ. Песня называется '
    }
}

module.exports.getAnswer = function(stage, reqText, currentSongId, songsCount) {
    console.log('stage, reqText, currentSongId', stage, reqText, currentSongId);

    const answer = {};
    let currentStage = stages[stage];
    console.log('currentStage', currentStage);

    if (stage === 'playing' && currentSongId) {
        const song = getSong(songsCount);

        console.log('currentSongId ^^^^^^^^^', currentSongId);
        const songFromCollection = songs.find(item => (item.id === currentSongId));
        console.log('song ------>', songFromCollection);

        // Запрос содержит одну из ключевых фраз
        const success = songFromCollection.keywords.some(k => reqText.includes(k));

        // Запрос состоит из двух и более слов (длиннее 2 символов)
        // и полностью входит в припев песни
        const successOr =
            reqText.split(' ').filter(w => w.length > 2).length > 1 &&
            songFromCollection.text.includes(reqText);

        if (success || successOr) {
            answer.text = currentStage.yes + songFromCollection.songName + currentStage.nextStep;
            // добавить паузы
            answer.tts = currentStage.yes + songFromCollection.songName + songFromCollection.ttsExpl + currentStage.nextStep + song.tts;
            answer.win = 1;
        } else {
            answer.text = currentStage.no + songFromCollection.songName + currentStage.nextStep;
            // добавить паузы
            answer.tts = currentStage.no + songFromCollection.songName + songFromCollection.ttsExpl + currentStage.nextStep + song.tts;
            answer.win = -1;
        }

        answer.currentSongId = song.id;
        answer.stage = stage;

        return answer;
    }

    if (reqText === 'да') {
        const yesAnswer = currentStage.yes;
        if (yesAnswer) {
            const song = getSong(songsCount);

            answer.text = yesAnswer.text;
            answer.tts = song.tts;
            answer.currentSongId = song.id;
            answer.stage = yesAnswer.nextStage;
        } else {
            answer.text = currentStage.warningText,
            answer.stage = stage
        }

        return answer;
    }

    if (reqText === 'нет') {
        const noText = currentStage.no;

        if (noText) {
            answer.text = noText.text;
            answer.end_session = true;
        } else {
            answer.text = currentStage.warningText;
        }

        return answer;
    }

    if (stage === 'start' && reqText !== 'нет' && reqText !== 'да') {
        answer.text =  stages.start.warningText;
        answer.stage = 'start';
    }

    return answer;
}
