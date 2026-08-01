
var index = 0;
const verCodes = [
    'dqjk', 
    '28fa',
    'kjym',
    'ssmy',
    'bj4q',
    's6k2',
    '3bpe',
    '8fmj',
    'wf9m',
    'fwxz'
];

$(document).ready(function() {
    $('.el-input__inner').blur(function() {
        // check input isNullOrEmpty
        if (!!!this.value) {
            $(this.parentElement.nextElementSibling).show();
            $(this.parentElement.nextElementSibling).text(`请输入${this.placeholder}`);
            return;
        }
        // handle password
        if (this.id === 'password' && this.value.length < 6) {
            $(this.parentElement.nextElementSibling).show();
            $(this.parentElement.nextElementSibling).text('密码长度不能小于6位');
            return;
        }
        // hide the error
        $(this.parentElement.nextElementSibling).hide();
    })

    $('.eye-icon').click(function() {
        // toggle eye icon
        $('.eye-icon').toggle();
        // modified input type
        const inputType = document.getElementById('password').type;
        $('#password').attr('type', inputType === 'password' ? 'type' : 'password');
    })

    $('#form').submit(function() {
        $('#btnLogin').attr('disabled', true);
        $('#btnLogin').addClass('is-loading');

        const accounts = (window['accounts'] || []);
        const username = $('#username').val();
        const password = $('#password').val();
        const verifyCode = $('#verifyCode').val();
        if (!!!username || !!!password || password.length < 6 || !!!verifyCode){
            [$('#username'), $('#password'), $('#verifyCode')].forEach(x => x.blur());
            $('#btnLogin').attr('disabled', false);
            $('#btnLogin').removeClass('is-loading');
            return false;
        }
        if (verCodes[index - 1] !== verifyCode) {
            $('#btnLogin').attr('disabled', false);
            $('#btnLogin').removeClass('is-loading');
            $(document.body).append('<div role="alert" class="el-message el-message--error" style="top: 20px; z-index: 2000;" ><p class="el-message__content">验证码错误</p></div>');
            setTimeout(() => $('.el-message.el-message--error:eq(0)').remove(), 2500);
            $('#verifyCode').val('').blur();
            refreshVerify();
            return false;
        }
        if (!accounts.some(x => x.username === username && x.password === password)) {
            $('#btnLogin').attr('disabled', false);
            $('#btnLogin').removeClass('is-loading');
            $(document.body).append('<div role="alert" class="el-message el-message--error" style="top: 20px; z-index: 2000;" ><p class="el-message__content">账户或密码错误</p></div>');
            setTimeout(() => $('.el-message.el-message--error:eq(0)').remove(), 2500);
            return false;
        }
        localStorage.setItem('username', username);
        location.href = 'index.html';
        return false;
    })

    refreshVerify();
})

function refreshVerify() {
    var curIndex = randomIntFromInterval(1,10);
    if (index === curIndex) return refreshVerify();

    $("#verify").attr("src", `./static/picture/${curIndex}.png`);
    index = curIndex;
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}