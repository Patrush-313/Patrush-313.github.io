import { sidebar, sideBarMask } from './const.js';

console.log('Hello, TypeScript!');

if (sidebar) {
  sidebar.addEventListener('click', () => {
    // 透明度を100にする
    sideBarMask.style.opacity = '100';
    //cssのtopの値を0にする
    sideBarMask.style.top = '0';
    // 表示速度を1秒にする
    sideBarMask.style.transition = '1s';
  });
}
