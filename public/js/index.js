const END_POINT = 'https://itubefoxserver.herokuapp.com';

$('#menu-download').dropdown({
    constrainWidth: false,
    alignment: 'right'
});

$('#open-menu').click(function (e) {
    $('.custom-menu').show('fast');
});

$('#close-menu').click(function (e) {
    $('.custom-menu').hide('fast');
});

$('#download-audio').click(function (e) {
    e.preventDefault();
    let url = $('#get-url-video').val();
    if (url !== '') {
        if (validate_url(url)) {
            M.toast({ html: 'O download começará em breve', classes: 'green' });
            $.post(END_POINT + '/download/audio', { url: url }, function (data) {
                $('#get-url-video').val('');
                location.href = END_POINT + '/download?url=' + data.url + '&filename=' + data.filename;
            });
        } else {
            M.toast({ html: 'Informe um link do YouTube' });
        }
    } else {
        M.toast({ html: 'Informe o link do vídeo' });
    }
});

$('#download-video').click(function (e) {
    e.preventDefault();
    let url = $('#get-url-video').val();
    if (url !== '') {
        if (validate_url(url)) {
            M.toast({ html: 'O download começará em breve', classes: 'green' });
            $.post(END_POINT + '/download/video', { url: url }, function (data) {
                $('#get-url-video').val('');
                location.href = END_POINT + '/download?url=' + data.url + '&filename=' + data.filename;
            });
        } else {
            M.toast({ html: 'Informe um link do YouTube' });
        }
    } else {
        M.toast({ html: 'Informe o link do vídeo' });
    }
});

function validate_url(url) {
    let regular = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    let result = url.match(regular);
    if (result) {
        return true;
    } else {
        return false;
    }
}

