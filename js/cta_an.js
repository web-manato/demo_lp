// 複数要素の取得
var sections = document.querySelectorAll('.ly_cont__cta');

gsap.set('.bl_cta_btn', {
    y: 80,
})
// タイムラインとスクロールトリガーの設定
sections.forEach((section, index) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        }
    })

    var title = section.querySelector('.bl_cta_ttl');
    var text = section.querySelector('.bl_cta_txt');
    var button = section.querySelector('.bl_cta_btn');

    tl.from(title, {
            autoAlpha: 0,
            y: -30,
            duration: 0.3,
        })
        .from(text, {
            autoAlpha: 0,
            y: -30,
            duration: 0.3,
        })
        .to(button, {
            delay: 0.3,
            y: 0,
        })
});