(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".header__nav-btn"),n=document.querySelector(".nav__list"),o=document.querySelector(".page");r.addEventListener("click",function(){n.classList.toggle("open"),o.classList.toggle("open")})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".dropmenu > .nav__list-link, .dropmenu > .dropmenu__list-link").forEach(n=>{n.addEventListener("click",function(o){o.preventDefault(),this.parentElement.classList.toggle("active")})})});
