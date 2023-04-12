import { sidebar, siteMenu } from './const.js';
console.log('Hello, TypeScript!');
sidebar.addEventListener('click', () => {
    if (siteMenu.style.opacity === '0') {
        //siteMenuを表示する
        siteMenu.style.opacity = '1';
        siteMenu.style.left = '0';
    }
    else {
        //siteMenuを非表示にする
        siteMenu.style.opacity = '0';
        siteMenu.style.left = '-100%';
    }
    //変化のアニメーションは1秒かける
    siteMenu.style.transition = 'all 1s';
});
// topのbackground-imageを左右に動かす
const topImage = document.querySelector('.top');
// console.log('offsetwidth' + topImage.offsetWidth);
let currentPosition = 0; // 現在の位置を保存する変数
let direction = -1; // 動く方向を保存する変数
topImage.style.backgroundPositionX = `${currentPosition}px`;
const animate = () => {
    // console.log(currentPosition);
    // 1フレーム分動かす量を計算
    const moveBy = 0.5 * direction;
    currentPosition += moveBy;
    // 画像が右端に到達したら逆向きに動かす
    if (-1 * topImage.offsetWidth >= currentPosition) {
        // console.log('left');
        direction = 1;
    }
    // // 画像が左端に到達したら逆向きに動かす
    if (currentPosition > 0) {
        // console.log('right');
        direction = -1;
    }
    topImage.style.backgroundPositionX = `${currentPosition}px`;
    requestAnimationFrame(animate);
};
animate();
//# sourceMappingURL=app.js.map