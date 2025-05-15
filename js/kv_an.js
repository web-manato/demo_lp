//タイムラインを使用してアニメーションを適用
var tl = gsap.timeline();

tl.from('.bl_kv_subCopy',{
    delay: 0.5,
    autoAlpha: 0,
    duration: 0.3,
})
.from('.bl_kv_mainCopy',{
    autoAlpha: 0,
    duration: 0.3,
})
.from('.bl_kv_function_listItem',{
    delay: 0.3,
    y: 20,
    autoAlpha: 0,
    duration: 0.3,
    stagger: 0.1,
})
.from('.bl_kv_form_microCopy_group',{
    autoAlpha: 0,
    duration: 0.5,
    rotation: 90,
})