import { sidebar, sideBarMask, topImage, siteMenuMask, siteMenuContents, shopNameP, contents1H1, contents1Img1, contents1P, contents2H1, } from './const.js';
// import * as $ from 'jquery';
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
        // console.log('siteMenuを表示する');
        siteMenuMask.style.opacity = '1';
        siteMenuContents.style.opacity = '1';
        siteMenuMask.style.left = '0';
        siteMenuContents.style.left = '0';
    }
    else {
        //siteMenuを非表示にする
        // console.log('siteMenuを非表示にする');
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
// console.log('bottomOfScreen: ' + bottomOfScreen);
const rect = shopNameP.getBoundingClientRect();
// console.log('rect: ' + rect);
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
    // console.log('topOfH1: ' + topOfH1);
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
    // console.log('topOfImg: ' + topOfImg);
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
    // console.log('topOfImg: ' + topOfImg);
    const triggerPoint = window.innerHeight - window.innerHeight / 10;
    if (window.scrollY + triggerPoint >= topOfImg) {
        contents1P.style.opacity = '1';
    }
});
const play = () => {
    // SVG要素をSnap.svgで操作するためのオブジェクトを取得します。
    const l = Snap('#logo');
    // パス要素を選択します。
    const p = l.select('path');
    // SVG内のすべての子要素を削除します。
    l.clear();
    // アニメーションの開始を待機します。
    setTimeout(() => {
        // 表示するテキストを設定します。
        const logoTitle1 = '洗練された雰囲気';
        const logoTitle2 = '心地よい空間';
        // ランダムな文字列を初期化します。
        let logoRandom1 = '';
        let logoRandom2 = '';
        // 表示するテキストを設定し、SVG内に中央揃えで配置します。
        // text-anchor属性をmiddleに設定することでテキストを中央揃えします。
        const logoTitleContainer1 = l
            .text('50%', '40%', '')
            .attr({ 'text-anchor': 'middle' });
        const logoTitleContainer2 = l
            .text('50%', '65%', '')
            .attr({ 'text-anchor': 'middle' });
        // ランダムな文字列生成のための文字セットを定義します。
        const possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
        // ロゴタイトルの全ての文字についてループします。
        for (let i = 0; i < logoTitle1.length + 1; i++) {
            // ロゴタイトルの部分文字列とランダム文字列を組み合わせます。
            logoRandom1 = logoTitle1.substr(0, i);
            for (let j = i; j < logoTitle1.length; j++) {
                // ランダムな文字を追加します。
                logoRandom1 += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            // ランダムなタイトルを生成します。
            generateRandomTitle(i, logoRandom1, logoTitleContainer1);
        }
        setTimeout(() => {
            for (let i = 0; i < logoTitle2.length + 1; i++) {
                logoRandom2 = logoTitle2.substr(0, i);
                for (let j = i; j < logoTitle2.length; j++) {
                    logoRandom2 += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                generateRandomTitle(i, logoRandom2, logoTitleContainer2);
            }
        }, 200);
    }, 0); // 2秒後にアニメーションを開始します. // 2秒後にアニメーションを開始します。
};
// ランダムなタイトルを生成するための関数を定義します。
const generateRandomTitle = (i, logoRandom, logoTitleContainer) => {
    setTimeout(() => {
        // テキスト要素のテキストを更新します。
        logoTitleContainer.attr({ text: logoRandom });
    }, i * 70);
};
// class="contents2"のh1要素が画面内に入ったらアニメーションを開始する
let n = 0;
window.addEventListener('scroll', () => {
    const topOfH1 = contents2H1.offsetTop;
    const triggerPoint = window.innerHeight - window.innerHeight / 5;
    // console.log('window.scrollY: ' + window.scrollY);
    // console.log('triggerPoint: ' + triggerPoint);
    // console.log('topOfH1: ' + topOfH1);
    if (window.scrollY + triggerPoint >= topOfH1 && n === 0) {
        play();
        n++;
    }
});
// ------------------------------------------------------------
$(function () {
    console.log('$(function() {');
    $('.instagramContents').each(function () {
        console.log('each');
        // スライド（画像）の数を取得
        var $slides = $(this).find('.instagramPost'), slideNum = $slides.length, currentIdx = 0; // 何番目か
        console.log('slideNum: ' + slideNum);
        console.log('currentIdx: ' + currentIdx);
        // 最初の画像をフェードイン
        $(".instagramContents .instagramPost").eq(currentIdx).fadeIn();
        console.log('fadeIn');
        // 3秒後に次のスライドを表示
        setTimeout(dispNextSlide, 3000);
        // 次のスライドを表示するメソッド
        function dispNextSlide() {
            console.log('dispNextSlide');
            var nextIdx = currentIdx + 1;
            // 最後のスライドの場合ははじめに戻る
            if (nextIdx > (slideNum - 1)) {
                nextIdx = 0;
            }
            // 現在のスライドをフェードアウト
            $(".instagramContents .instagramPost").eq(currentIdx).fadeOut(function () {
                $(".instagramContents .instagramPost").eq(nextIdx).fadeIn(function () {
                    // フェードイン完了後に次のスライドを表示する
                    setTimeout(dispNextSlide, 3000);
                });
            });
            // インデックスを更新
            currentIdx = nextIdx;
        }
    });
});
//# sourceMappingURL=app.js.map