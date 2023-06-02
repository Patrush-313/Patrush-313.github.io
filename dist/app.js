import { sidebar, sideBarMask, topImage, siteMenuMask, siteMenuContents, shopNameP, contents1H1, contents1Img1, contents1P, } from './const.js';
console.log('Hello, TypeScript!');
// ------------------------------------------------------------
// サイトが読み込まれたらサイドバーマスクを表示する
window.addEventListener('DOMContentLoaded', () => {
    sideBarMask.style.opacity = '1';
    sideBarMask.style.top = '0';
    sideBarMask.style.transition = 'all 1.5s';
    siteMenuMask.style.transition = 'all 1s';
    // 1秒後にサイドバーマスクを非表示にする
    setTimeout(() => {
        sideBarMask.style.transition = 'all 0.4s';
        sideBarMask.style.opacity = '0';
        // サイトメニューの透明度変更開始を1秒後にする
        setTimeout(() => {
            siteMenuMask.style.transition = 'all 1.5s';
            siteMenuMask.style.opacity = '0';
        }, 200);
    }, 1200);
});
// ------------------------------------------------------------
// サイドバーをクリックしたらサイドバーを表示/非表示にする
sidebar.addEventListener('click', () => {
    if (siteMenuMask.style.opacity === '0') {
        //siteMenuを表示する
        console.log('siteMenuを表示する');
        siteMenuMask.style.opacity = '1';
        siteMenuContents.style.opacity = '1';
        siteMenuMask.style.left = '0';
        siteMenuContents.style.left = '0';
    }
    else {
        //siteMenuを非表示にする
        console.log('siteMenuを非表示にする');
        siteMenuMask.style.opacity = '0';
        siteMenuContents.style.opacity = '0';
        siteMenuMask.style.left = '-100%';
        siteMenuContents.style.left = '-100%';
    }
    //変化のアニメーションは1秒かける
    siteMenuMask.style.transition = 'all 1s';
    siteMenuContents.style.transition = 'all 1s';
});
// ------------------------------------------------------------
// topのbackground-imageを左右に動かす
let currentPosition = 0; // 現在の位置を保存する変数
let direction = -1; // 動く方向を保存する変数
topImage.style.backgroundPositionX = `${currentPosition}px`;
const animate = () => {
    // 1フレーム分動かす量を計算
    const moveBy = 0.5 * direction;
    currentPosition += moveBy;
    // 画像が右端に到達したら逆向きに動かす
    if (-1 * topImage.offsetWidth >= currentPosition) {
        direction = 1;
    }
    // // 画像が左端に到達したら逆向きに動かす
    if (currentPosition > 0) {
        direction = -1;
    }
    topImage.style.backgroundPositionX = `${currentPosition}px`;
    requestAnimationFrame(animate);
};
animate();
// ------------------------------------------------------------
// sidebarのShopNameをスクロールしたら表示する
const bottomOfScreen = window.innerHeight;
console.log('bottomOfScreen: ' + bottomOfScreen);
const rect = shopNameP.getBoundingClientRect();
console.log('rect: ' + rect);
window.addEventListener('scroll', () => {
    shopNameP.style.transition = 'opacity 0.5s'; // 0.5秒のトランジションを追加
    const topOfP = rect.top + window.scrollY;
    // console.log('topOfP: ' + topOfP);
    if (topOfP >= bottomOfScreen) {
        shopNameP.style.opacity = '100';
    }
    else {
        shopNameP.style.opacity = '0';
    }
});
// ------------------------------------------------------------
// class="contents1"のh1要素を取得
window.addEventListener('scroll', () => {
    contents1H1.style.transition = 'opacity 3s'; // 3秒のトランジションを追加
    const topOfH1 = contents1H1.offsetTop;
    console.log('topOfH1: ' + topOfH1);
    const triggerPoint = window.innerHeight - window.innerHeight / 10;
    if (window.scrollY + triggerPoint >= topOfH1) {
        contents1H1.style.opacity = '1';
    }
});
// ------------------------------------------------------------
// class="contents1"のimg要素を取得
window.addEventListener('scroll', () => {
    contents1Img1.style.transition = 'opacity 3s'; // 3秒のトランジションを追加
    const topOfImg = contents1Img1.offsetTop;
    console.log('topOfImg: ' + topOfImg);
    const triggerPoint = window.innerHeight - window.innerHeight / 10;
    if (window.scrollY + triggerPoint >= topOfImg) {
        contents1Img1.style.opacity = '1';
    }
});
// ------------------------------------------------------------
// class="contents1"のimg要素を取得
window.addEventListener('scroll', () => {
    contents1P.style.transition = 'opacity 3s'; // 3秒のトランジションを追加
    const topOfImg = contents1P.offsetTop;
    console.log('topOfImg: ' + topOfImg);
    const triggerPoint = window.innerHeight - window.innerHeight / 10;
    if (window.scrollY + triggerPoint >= topOfImg) {
        contents1P.style.opacity = '1';
    }
});
//# sourceMappingURL=app.js.map