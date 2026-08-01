$(document).ready(function() {
    const date = new Date();
    let yyyy = date.getFullYear(),
        MM = '' + (date.getMonth() + 1),
        dd = '' + date.getDate(),
        HH = '' + date.getHours(),
        mm = '' + date.getMinutes(),
        ss = '' + date.getSeconds();

        if (MM.length < 2) MM = '0' + MM;
        if (dd.length < 2) dd = '0' + dd;
        if (HH.length < 2) HH = '0' + HH;
        if (mm.length < 2) mm = '0' + mm;
        if (ss.length < 2) ss = '0' + ss;

    $('#updateDateTxt').text(`${yyyy}-${MM}-${dd} ${HH}:${mm}`);

    let link = window['filename'];
    if (![link.indexOf('http://'), link.indexOf('https://')].includes(0)) {
        link = './assets/download/' + link;
    }
    
    const links = document.getElementsByClassName('downloadLink');
    for (let item of links) {
        item.href = link;
        item.target = '_blank';
    }
})