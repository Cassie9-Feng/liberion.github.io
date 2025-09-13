document.getElementById("language-switcher").addEventListener("click", function() {
    // Get current page filename (e.g. "index.html")
    const currentPage = window.location.pathname.split('/').pop();

    if (window.location.href.includes("/en/")) {
        // Currently English - switch to Chinese (go up one level)
        window.location.href = "../" + currentPage;
    } else {
        // Currently Chinese - switch to English (go to en subfolder)
        window.location.href = "en/" + currentPage;
    }
});

// 收缩menu
var nav = document.querySelectorAll('.nav-flex');
var menutitle = document.querySelectorAll('.menutitle-ch');
var menutitle = document.querySelectorAll('.menutitle');
var menu = document.querySelectorAll('.menu');
var button = document.querySelectorAll('.button');
var teamname = document.querySelector('.teamname');
var triangles = document.querySelectorAll('.triangle');
var subtitles = document.querySelectorAll('.subtitle'); // 选择所有副标题

let lastScrollTop = 0;

window.addEventListener("scroll", function(event) { // 使用 scroll 事件
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // 向下滚动
        nav.forEach(title => {
            title.classList.add('nav-flex_hidden');
        });
        menu.forEach(title => {
            title.classList.add('menu_hidden');
        });
        menutitle.forEach(title => {
            title.classList.add('menutitle-ch_hidden');
        });
        menutitle.forEach(title => {
            title.classList.add('menutitle_hidden');
        });
        // button.forEach(title => {
        //     title.classList.add('button_hidden');
        // });
        teamname.classList.add('teamname_hidden');
        // triangles.forEach(triangle => {
        //     triangle.classList.add('triangle_hidden');
        // });
        subtitles.forEach(subtitle => {
            subtitle.classList.add('subtitle_hidden'); // 添加副标题隐藏类
        });
    } else {
        // 向上滚动 
        nav.forEach(title => {
            title.classList.remove('nav-flex_hidden');
        });
        menu.forEach(title => {
            title.classList.remove('menu_hidden');
        });
        menutitle.forEach(title => {
            title.classList.remove('menutitle-ch_hidden');
        });
        menutitle.forEach(title => {
            title.classList.remove('menutitle_hidden');
        });
        // button.forEach(title => {
        //     title.classList.remove('button_hidden');
        // });
        teamname.classList.remove('teamname_hidden');
        // triangles.forEach(triangle => {
        //     triangle.classList.remove('triangle_hidden');
        // });
        subtitles.forEach(subtitle => {
            subtitle.classList.remove('subtitle_hidden'); // 移除副标题隐藏类
        });
    }
    lastScrollTop = st <= 0 ? 0 : st; // 为了IE兼容
}, false);
