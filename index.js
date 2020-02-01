const express = require("express");
const app = express();

const { getAnswer } = require('./getanswer');

const port = process.env.PORT || 8888;
let stage = 'start';
let currentSongId;
let counter = 0;
const MAX_COUNT = 2;
let songsCount = 0;

app.use(express.json());

app.post('/', function (req, res) {
    const { request, version, session } = req.body;

    let text = '';
    let tts = '';
    let end_session = false;
    let reqText = request.original_utterance.toLowerCase();

    if (reqText === 'ping') {
        text = 'pong';
        end_session = true

        res.json({
            session,
            version: version,
            response: {
                text: text || 'Что-то пошло не так',
                end_session
            }
        });
    }

    if (session.message_id === 0) {
        return res.json({
            session,
            version: version,
            response: {
                text:`
                    Добрый вечер и добро пожаловать в игру Семь нот.
                    Прослушайте фрагмент и угадайте песню. Готовы начить?`,
                tts:`
                    Добрый вечер - - и добро пожаловать в игру Семь нот.
                    - - - <speaker audio="dialogs-upload/3ade1c63-df9b-41f9-8ec5-50b59bf9f176/e7b2cde8-add9-4853-97d9-29455bc89541.opus">
                    - - - Прослушайте фрагмент и угадайте песню.  - - Готовы начить?`,
                end_session,
            },
        });
    }

    if (MAX_COUNT - songsCount) {
        const answer = getAnswer(stage, reqText, currentSongId);

        text = answer.text;
        tts = answer.tts;
        stage = answer.stage;

        var win = answer.win;

        if(win) {
            songsCount++;

            if (win > 0) {
                counter++;
            }
        }

        if (stage === 'playing') {
            currentSongId =  answer.currentSongId;
        }

        end_session = answer.end_session || false;
    } else {
        text = `Игра закончена. Вы угадали ${counter} из ${MAX_COUNT}. Сыграем еще раз, да или нет?`;
        stage = 'start';
        songsCount = 0;
    }

    res.json({
        session,
        version: version,
        response: {
            text: text || 'Что-то пошло не так',
            tts: tts,
            end_session
        },
    });
});

app.use('*', function (req, res) {
    res.sendStatus(404);
});

// начинаем прослушивание подключений на 3000 порту
app.listen(port, function() {
    console.log('Игра-навык "Семь нот" запущена на порту ' + port );
});
