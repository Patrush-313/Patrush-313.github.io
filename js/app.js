"use strict";
exports.__esModule = true;
var const_1 = require("./const");
console.log('Hello, TypeScript!');
// const sidebar: HTMLElement | null = document.querySelector('.sidebar');
// const sideBarMask: HTMLElement | null = document.querySelector('.sideBarMask');
if (const_1.sidebar && const_1.sideBarMask) {
    const_1.sidebar.addEventListener('click', function () {
        const_1.sideBarMask.style.opacity = '100';
        console.log('sidebarMaskの透明度を100に変更');
    });
}
