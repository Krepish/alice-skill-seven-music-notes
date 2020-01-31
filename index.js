const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/', function (req, res) {
    console.log('req', req);

    const { request, version, session } = req.body;

    let text = '';
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
        text = 'Привет. Спасибо, что запустили навык Семь нот. Я могу рассказать правила игры или можем сразу приступить к игре. ' +
            'Но пока я могу только повторять фразы, которые вы сказали.';
    } else if (reqText === 'стоп' || reqText === 'пока') {
        text = 'Ладно, пока-пока!';
        end_session = true;
    } else if (reqText === 'помощь' || reqText === 'что ты умеешь' ) {
        text = 'Пока я могу только повторять фразы, которые вы сказали.';
    } else {
        text = `Вы сказали: ${reqText}`;
    }

    res.json({
        session,
        version: version,
        response: {
            text: text || 'Что-то пошло не так',
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
