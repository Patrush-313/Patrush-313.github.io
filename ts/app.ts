import {
  sidebar,
  sideBarMask,
  topImage,
  siteMenuMask,
  siteMenuContents,
  shopNameP,
  contents1H1,
  contents1Img1,
  contents2Img1,
  contents3Img1,
  contents1P,
  contents2P,
  contents3P,
  contents2H1,
  contents3H1,
  contents1Window
} from './const.js';
// import * as $ from 'jquery';

console.log('Hello, TypeScript!');

// ------------------------------------------------------------
// ページがリロードされたときの処理
window.addEventListener('beforeunload', () => {
  // 最上部にスクロールする
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

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
  } else {
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
  } else {
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

// class="contents1"のimg1要素を取得
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

// class="contents1"のwindow要素を取得
window.addEventListener('scroll', () => {
  contents1Window.style.transition = 'opacity 3s'; // 3秒のトランジションを追加

  const topOfImg = contents1Window.offsetTop;
  // console.log('topOfImg: ' + topOfImg);

  const triggerPoint = window.innerHeight - window.innerHeight / 10;

  if (window.scrollY + triggerPoint >= topOfImg) {
    contents1Window.style.opacity = '1';
  }
});

// ------------------------------------------------------------

// class="contents1"のp要素を取得
window.addEventListener('scroll', () => {
  contents1P.style.transition = 'opacity 3s'; // 3秒のトランジションを追加

  const topOfImg = contents1P.offsetTop;
  // console.log('topOfImg: ' + topOfImg);

  const triggerPoint = window.innerHeight - window.innerHeight / 10;

  if (window.scrollY + triggerPoint >= topOfImg) {
    contents1P.style.opacity = '1';
  }
});

// ------------------------------------------------------------

// Snap.svgライブラリへの参照を設定します。
declare let Snap: any;

const play = () => {
  // SVG要素をSnap.svgで操作するためのオブジェクトを取得します。
  const l: any = Snap('#logo');

  // パス要素を選択します。
  const p: any = l.select('path');

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
    const logoTitleContainer1: any = l
      .text('50%', '40%', '')
      .attr({ 'text-anchor': 'middle' });
    const logoTitleContainer2: any = l
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
        logoRandom1 += possible.charAt(
          Math.floor(Math.random() * possible.length)
        );
      }
      // ランダムなタイトルを生成します。
      generateRandomTitle(i, logoRandom1, logoTitleContainer1);
    }

    setTimeout(() => {
      for (let i = 0; i < logoTitle2.length + 1; i++) {
        logoRandom2 = logoTitle2.substr(0, i);
        for (let j = i; j < logoTitle2.length; j++) {
          logoRandom2 += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
        generateRandomTitle(i, logoRandom2, logoTitleContainer2);
      }
    }, 200);
  }, 0); // 2秒後にアニメーションを開始します. // 2秒後にアニメーションを開始します。
};

// ランダムなタイトルを生成するための関数を定義します。
const generateRandomTitle = (
  i: number,
  logoRandom: string,
  logoTitleContainer: any
) => {
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

// class="contents2"のimg1要素を取得
window.addEventListener('scroll', () => {
  contents2Img1.style.transition = 'opacity 3s'; // 3秒のトランジションを追加

  const topOfImg = contents2Img1.offsetTop;
  // console.log('topOfImg: ' + topOfImg);

  const triggerPoint = window.innerHeight - window.innerHeight / 10;

  if (window.scrollY + triggerPoint >= topOfImg) {
    contents2Img1.style.opacity = '1';
  }
});

// ------------------------------------------------------------

// class="contents1"のp要素を取得
window.addEventListener('scroll', () => {
  contents2P.style.transition = 'opacity 3s'; // 3秒のトランジションを追加

  const topOfImg = contents2P.offsetTop;
  // console.log('topOfImg: ' + topOfImg);

  const triggerPoint = window.innerHeight - window.innerHeight / 10;

  if (window.scrollY + triggerPoint >= topOfImg) {
    contents2P.style.opacity = '1';
  }
});


// ------------------------------------------------------------
const play2 = () => {
  // SVG要素をSnap.svgで操作するためのオブジェクトを取得します。
  const l2: any = Snap('#logo2');

  // パス要素を選択します。
  const p2: any = l2.select('path');

  // SVG内のすべての子要素を削除します。
  l2.clear();

  // アニメーションの開始を待機します。
  setTimeout(() => {
    // 表示するテキストを設定します。
    const logoTitle2_1 = '旬の恵みと';
    const logoTitle2_2 = '楽しみの季節';

    // ランダムな文字列を初期化します。
    let logoRandom2_1 = '';
    let logoRandom2_2 = '';

    // 表示するテキストを設定し、SVG内に中央揃えで配置します。
    // text-anchor属性をmiddleに設定することでテキストを中央揃えします。
    const logoTitleContainer2_1: any = l2
      .text('50%', '40%', '')
      .attr({ 'text-anchor': 'middle' });
    const logoTitleContainer2_2: any = l2
      .text('50%', '65%', '')
      .attr({ 'text-anchor': 'middle' });

    // ランダムな文字列生成のための文字セットを定義します。
    const possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';

    // ロゴタイトルの全ての文字についてループします。
    for (let i = 0; i < logoTitle2_1.length + 1; i++) {
      // ロゴタイトルの部分文字列とランダム文字列を組み合わせます。
      logoRandom2_1 = logoTitle2_1.substr(0, i);
      for (let j = i; j < logoTitle2_1.length; j++) {
        // ランダムな文字を追加します。
        logoRandom2_1 += possible.charAt(
          Math.floor(Math.random() * possible.length)
        );
      }
      // ランダムなタイトルを生成します。
      generateRandomTitle(i, logoRandom2_1, logoTitleContainer2_1);
    }

    setTimeout(() => {
      for (let i = 0; i < logoTitle2_2.length + 1; i++) {
        logoRandom2_2 = logoTitle2_2.substr(0, i);
        for (let j = i; j < logoTitle2_2.length; j++) {
          logoRandom2_2 += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
        generateRandomTitle(i, logoRandom2_2, logoTitleContainer2_2);
      }
    }, 200);
  }, 0); // 2秒後にアニメーションを開始します. // 2秒後にアニメーションを開始します。
};

// class="contents3"のh1要素が画面内に入ったらアニメーションを開始する
let n2 = 0;
window.addEventListener('scroll', () => {
  const topOfH1_2 = contents3H1.offsetTop;
  const triggerPoint_2 = window.innerHeight - window.innerHeight / 5;

  if (window.scrollY + triggerPoint_2 >= topOfH1_2 && n2 === 0) {
    play2();
    n2++;
  }
});

// ------------------------------------------------------------

// class="contents3"のimg1要素を取得
window.addEventListener('scroll', () => {
  contents3Img1.style.transition = 'opacity 3s'; // 3秒のトランジションを追加

  const topOfImg = contents3Img1.offsetTop;
  // console.log('topOfImg: ' + topOfImg);

  const triggerPoint = window.innerHeight - window.innerHeight / 10;

  if (window.scrollY + triggerPoint >= topOfImg) {
    contents3Img1.style.opacity = '1';
  }
});

// ------------------------------------------------------------
// instagramの投稿を画像とする場合

$(function() {
  // .instagramContentsが画面内に表示されたら処理を実行
  $(window).on('scroll', function() {
    var contentTop = $('.instagramContents').offset().top;
    var contentBottom = contentTop + $('.instagramContents').outerHeight();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    
    if (contentTop < windowBottom && contentBottom > windowTop) {
      console.log("slide-Start")
      startSlideshow();
      $(window).off('scroll');
    }
  });
  
  function startSlideshow() {
    console.log('startSlideshow');
    $('.instagramContents').each(function() {
      var $slides = $(this).find('.instagramPost');
      var slideNum = $slides.length;
      var currentIdx = 0;
      
      $(".instagramContents .instagramPost").eq(currentIdx).fadeIn();
      
      setTimeout(dispNextSlide, 3000);
      
      function dispNextSlide() {
        var nextIdx = currentIdx + 1;
        
        if (nextIdx > (slideNum - 1)) {
          nextIdx = 0
        }
        
        $(".instagramContents .instagramPost").eq(currentIdx).fadeOut(function() {
          $(".instagramContents .instagramPost").eq(nextIdx).fadeIn(function() {
            setTimeout(dispNextSlide, 2000);
          });
        });
        
        currentIdx = nextIdx;
      }
    });
  }
});

// ------------------------------------------------------------
// instagramの投稿を画像とする場合

  // instagramConts要素を取得し、型をHTMLElementとして明示的に指定
  const instagramContents = document.querySelector('.instagramContents') as HTMLElement;
  // instagram-Post img要素を取得し、型をNodeListOf<HTMLElement>として明示的に指定
  const instagramPosts = document.querySelectorAll('.instagramPost') as NodeListOf<HTMLElement>;
  // instagram-Post img要素を取得し、型をNodeListOf<HTMLElement>として明示的に指定
  const instagramImgs = document.querySelectorAll('.instagramPost img') as NodeListOf<HTMLElement>;

  const instagramImg = instagramImgs[0];
  const height = instagramImg.offsetHeight

  console.log(`height: ${height}px`);
  instagramContents.style.paddingBottom = `${height}px`;

  instagramPosts.forEach(element => {
    element.style.display = `none`;
  });


// ------------------------------------------------------------
// instagramの投稿を埋め込み式とする場合

// $(function() {
//   // console.log('$(function() {');
//   $('.instagramContents').each(function() {
//     // console.log('each');
//     // スライド（画像）の数を取得
//     var $slides = $(this).find('.instagramPost'),
//         slideNum = $slides.length,
//         currentIdx = 0; // 何番目か

//         // console.log('slideNum: ' + slideNum);
//         // console.log('currentIdx: ' + currentIdx);

  
//     // 最初の画像をフェードイン
//     $(".instagramContents .instagramPost").eq(currentIdx).fadeIn();
//     // console.log('fadeIn');
  
//     // 3秒後に次のスライドを表示
//     setTimeout(dispNextSlide, 3000);
  
//     // 次のスライドを表示するメソッド
//     function dispNextSlide() {
//       // console.log('dispNextSlide');
//       var nextIdx = currentIdx + 1;
  
//       // 最後のスライドの場合ははじめに戻る
//       if (nextIdx > (slideNum - 1)) {
//         nextIdx = 0
//       }
  
//       // 現在のスライドをフェードアウト
//       $(".instagramContents .instagramPost").eq(currentIdx).fadeOut(function() {
//         $(".instagramContents .instagramPost").eq(nextIdx).fadeIn(function() {
//           // フェードイン完了後に次のスライドを表示する
//           setTimeout(dispNextSlide, 2000);
//         });
//       });

//       // インデックスを更新
//       currentIdx = nextIdx;
//     }
//   });
//  });
 
// // ------------------------------------------------------------
// instagramの投稿を埋め込み式とする場合

//   // instagramConts要素を取得し、型をHTMLElementとして明示的に指定
//   const instagramContents = document.querySelector('.instagramContents') as HTMLElement;
//   // instagram-media要素を取得し、型をNodeListOf<HTMLElement>として明示的に指定
//   const instagramMedias = document.querySelectorAll('.instagram-media') as NodeListOf<HTMLElement>;

//   // 初期の高さと最大の高さ
// let oldHeight = 0;
// let maxHeight = 0;

// window.addEventListener('DOMContentLoaded', () => {
//   // 最初のinstagram-mediaの要素を取得
//   const instagramMedia = document.querySelector('.instagram-media') as HTMLElement;
  
//   // 高さの監視を開始
//   const checkHeight = setInterval(() => {
//     // 現在の高さを取得
//     const newHeight = instagramMedia.offsetHeight;

//     // 高さが変化したかチェック
//     if (newHeight !== oldHeight) {
//       console.log(`Height changed from ${oldHeight}px to ${newHeight}px`);
//       oldHeight = newHeight;
//     }

//     // 最大の高さを更新
//     if (newHeight > maxHeight) {
//       maxHeight = newHeight;
//       console.log(`New max height: ${maxHeight}px`);
//       instagramContents.style.paddingBottom = `${maxHeight}px`;
//     }

//     // // newHeightが0の場合は監視を停止
//     // if (newHeight === 0) {
//     //   clearInterval(checkHeight);
//     //   console.log('Stopped monitoring height');
//     //   console.log(`Max height during monitoring: ${maxHeight}px`);
//     // }
//   }, 100); // 100ミリ秒ごとにチェック
// });

// ------------------------------------------------------------

// class="contents1"のp要素を取得
window.addEventListener('scroll', () => {
  contents3P.style.transition = 'opacity 3s'; // 3秒のトランジションを追加

  const topOfImg = contents3P.offsetTop;
  // console.log('topOfImg: ' + topOfImg);

  const triggerPoint = window.innerHeight - window.innerHeight / 10;

  if (window.scrollY + triggerPoint >= topOfImg) {
    contents3P.style.opacity = '1';
  }
});