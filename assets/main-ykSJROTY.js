(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".js-header-list");o.addEventListener("click",t=>{const n=t.target,c=n.closest(".header-list__item");if(!c||n.classList.contains("header-nav-item_active"))return;o.querySelector(".header-nav-item_active").classList.remove("header-nav-item_active"),c.classList.add("header-nav-item_active")});const i=document.querySelector(".js-hamburger"),r=document.querySelector(".js-header-menu");i.addEventListener("click",()=>{e(),i.classList.contains("active")?r.addEventListener("click",s):r.removeEventListener("click",s)});function s(t){t.target.classList.contains("js-header-menu-item")&&(e(),r.removeEventListener("click",s))}function e(){i.classList.toggle("active"),r.classList.toggle("active"),r.classList.toggle("hidden-on-mobile"),i.classList.contains("active")?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"}});document.addEventListener("DOMContentLoaded",()=>{let o=window.matchMedia("(max-width: 768px)"),i;const r=()=>{o.matches?i=new Swiper(".info-slider",{spaceBetween:20,initialSlide:1,loop:!0,slidesPerView:2.1,pagination:{el:".info-pagination",clickable:!0}}):i!==void 0&&i.destroy()};r(),window.addEventListener("resize",()=>{r()})});
