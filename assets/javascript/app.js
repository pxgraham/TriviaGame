$(document).ready(function () {
    var starting = true;
    var right = 0;
    var wrong = 0;
    var btnId;
    var time = 15;
    var intervalId;
    var timeoutId;
    var page = 0;
    var answerBtns = [];
    var question = $('#question');
    var subQuestion = $('#subQuestion');
    var completion = $('#completion');
    var good = $('#resGood');
    var bad = $('#resBad');
    var answers = $('#answers');
    var answerText = {
        q1: [
            'Throw Banana at Criminal',
            'Throw gun at Criminal',
            'Tell Criminal to Come out with his hands up',
            'Throw money at Criminal'
        ],
        q2: [
            'Insult Criminals Mother',
            'Insult Criminals Dog',
            'Tell Criminal that you will give him the money when he gives up the hostage',
            'Insult the Criminals Hair'
        ],
        q3: [
            'Throw applesauce at criminal',
            'Tell criminal to grow up and get a real job',
            'Tell criminal he holds his gun like a baby',
            'Sympathize with criminal, try to understand his motive'
        ],
        q4: [
            'Ask criminal if he is dizzy',
            'Call criminals bluff, he wouldnt shoot a fly',
            'Radio the swat team and tell them to proceed while hes distracted',
            'Draw a picture of a flower for the criminal'
        ],
        q5: [
            'Ask for Criminals Moms Phone number',
            'Tell criminal that the swat team is right behind him',
            'Ask criminal for gas money',
            'Tell swat team to keep closing in'
        ],
        q6: [
            'Go to the store to grab a beer real quick',
            'Ask criminal if hes free for a beer on Sunday',
            'Ask the criminal for 5 bucks to go buy beer',
            'Buy more time for swat team'
        ],
        q7: [
            'Eat some pie',
            'Decide that hes long gone and give up',
            'Listen to some sad music cuz you just failed',
            'Tell Swat Team that he is heading for the back of the stoor'
        ],
        q8: [
            'Tell Criminal that the money is at the front door',
            'Go in there and give the criminal a hug',
            'Find criminals mom on twitter and send her some DMs',
            'Think about what you want for dinner'
        ],
        q9: [
            'Ask criminal what the dealio is',
            'Tell criminal to take a nap',
            'Ask criminal to go away nicely',
            'Grab Your Gun'
        ],
        q10: [
            'Dodge Bullet',
            'Take a bullet to the knee',
            'Have a weird realization that life is in slow motion right now',
            'Close Your eyes and hope for the best'
        ],
    };
    $('#start').click(function () {
        right = 0;
        wrong = 0;
        btnId;
        time = 15;
        page = 1;
        $('#main').css('display', 'none');
        $('#quiz').css('display', 'block');
        for (var i = 0; i < 4; i++) {
            $('#aBtn' + i).removeAttr('disabled');
        };
        next();
    });

    $('.aBtn').click(function (e) {
        completion.text(page * 10 + '%');
        if (page === 1) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn2') {
                right++;
                good.text('The Criminal is not willing to comply, however you bought some more time. Good job!')
                pause();
            } else {
                wrong++;
                bad.text('The Criminal gets Infurated and throws the object back at you! The threat level rises...')
                pause();
            };
        } else if (page === 2) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn2') {
                right++;
                good.text('Good Job... Lying to the criminal will buy time for the swat team to come in.')
                pause();
            } else {
                wrong++;
                bad.text('"How Dare you Insult me like that!" The Threat level Rises')
                pause();
            };
        } else if (page === 3) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn3') {
                right++;
                good.text('The criminal tells you he had a rough childhood... he seems to be calmer')
                pause();
            } else {
                wrong++;
                bad.text('"Are you serious right now:..." Threat Level Rises')
                pause();
            };
        } else if (page === 4) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn2') {
                right++;
                good.text('The Swat Team gets closer....')
                pause();
            } else {
                wrong++;
                bad.text('The criminal stops spinning and says you are a baby')
                pause();
            };
        } else if (page === 5) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn3') {
                right++;
                good.text('Good job general! The swat team is making good progress')
                pause();
            } else {
                wrong++;
                bad.text('Are you serious right now?')
                pause();
            }
        } else if (page === 6) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn3') {
                right++;
                good.text('You explain to the criminal that everything will be alright, and every life saved will save him as well')
                pause();
            } else {
                wrong++;
                bad.text('Beer? Are you Serious?')
                pause();
            };
        } else if (page === 7) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn3') {
                right++;
                good.text('The swat team reroutes')
                pause();
            } else {
                wrong++;
                bad.text('This isn\'t looking so god')
                pause();
            };
        } else if (page === 8) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn0') {
                right++;
                good.text('The criminal believes you and heads for the front door')
                pause();
            } else {
                wrong++;
                bad.text('You hear another gun shot, but no voices this time')
                pause();
            };
        } else if (page === 9) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn3') {
                right++;
                good.text('You pick up your gone and are prepared for the worst')
                pause();
            } else {
                wrong++;
                bad.text('The criminal cocks his glock')
                pause();
            };
        } else if (page === 10) {
            btnId = $(e.target).attr('id');
            page++;
            if (btnId === 'aBtn0') {
                right++;
                good.text('You Dodge the bullet but it somehow Misses Riley!! She must have had slow mow mode on too!')
                pause();
            } else if (btnId === 'aBtn1') {
                right++;
                good.text('The bullet hits you in the knee. That one hurt!')
                pause();
            } else if (btnId === 'aBtn2') {
                right++;
                good.text('Slow Mow is pretty weird right lol. Wait aren\'t we being shot at right now?')
                pause();
            } else {
                right++;
                good.text('You close your eyes and see a bright taco in your vision....')
                pause();
            }
        };
    });

    function pause() {
        for(let x = 0; x < 4; x++) {
            $('#aBtn' + x).prop('disabled', 'true');
        }
        clearInterval(intervalId);
        timeoutId = setTimeout(next, 3500);
    };

    function next() {
        good.text('');
        bad.text('');
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        time = 15;
        $('#time').text('0:15');
        intervalId = setInterval(timer, 1000);
        if (page === 1) {
            question.text('Your arive at your local Walmart and find that people are being held hostage!');
            subQuestion.text('You need to negotiate with the criminal to get everyone out of here safely');
            for (var i = 0; i < 4; i++) {
                $('#aBtn' + i).text(answerText.q1[i]);          
            };
        };
        if (page === 2) {
            question.text('The Criminal Demands you give him 1 million dollars and a Helecopter');
            subQuestion.text('He says if you do not give it to him you will regret it');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q2[i]);
                answerBtns[i].removeAttr('disabled'); 
            };
        };
        if (page === 3) {
            question.text('The criminal is getting Impatient. He is yelling and pointing his gun at people');
            subQuestion.text('Calm him down before it is too late!');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q3[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if (page === 4) {
            question.text('The criminal punches the cash register repeatedly like a lunatic');
            subQuestion.text('He is threatening to spin in circles while blasting his machine gun');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q4[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if (page === 5) {
            question.text('The criminal stumbles around and sits down to catch his breath');
            subQuestion.text('Now would be a good chance to make another move');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q5[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if (page === 6) {
            question.text('The criminal tells you to give him the money right now, or he will start firing');
            subQuestion.text('He is unsteady and shaky, he seems like hes serious...');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q6[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if (page === 7) {
            question.text('The criminal drags the tied up hostages to the back of the stoor');
            subQuestion.text('');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q7[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if (page === 8) {
            question.text('You here a gunshot and the Criminal yell "I missed inentionally! the next ones going through your tattoo!"');
            subQuestion.text('This is very bad. If we don\'t do something quick, we will be in big trouble');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q8[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if (page === 9) {
            question.text('The criminal approaches the front door');
            subQuestion.text('He points the Gun directly at you!');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q9[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if (page === 10) {
            question.text('The Criminal Fires his Gun!!!');
            subQuestion.text('In slow motion time you see the bullet exit the barrel. Your assistant, Riley, is standing right behind you. If you dodge the bullet, it will hit Riley. There are no other options.');
            for (var i = 0; i < 4; i++) {
                answerBtns[i] = $('#aBtn' + i);
                answerBtns[i].text(answerText.q10[i]);
                answerBtns[i].removeAttr('disabled');                 
            };
        };
        if(page === 11) {
            clearInterval(intervalId);
            $('#quizTitle').text('Against all odds, everybody survives and the Swat Team detains the criminal! You got ' + right + ' correct out of 10! Congratulations. Great job out there today soldier.');
            $('#start').text('Try Again?');
            $('#quiz').css('display', 'none');
            $('#main').css('display', 'block');
            $('#time').text('0:00');
        }
    };
    function timer() {
        time--;
        if (time === 0) {
            wrong++;
            page++;
            bad.text('You are taking too long! The criminals threat level is rising!')
            pause();
        };
        if (time < 10) {
            $('#time').text('0:0' + time);
        } else {
            $('#time').text('0:' + time);
        };
    };

});