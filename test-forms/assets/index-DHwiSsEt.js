(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();document.addEventListener("DOMContentLoaded",function(){document.getElementById("button-1").addEventListener("click",function(e){if(e.preventDefault(),document.getElementById("button-1").getAttribute("type")==="button"){const t=document.getElementById("button-1").previousElementSibling;t&&document.querySelector("#error-1")&&(t.style.display="block")}}),document.querySelectorAll(".form__label").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("button-1").setAttribute("type","submit"),document.getElementById("button-1").addEventListener("click",function(t){t.preventDefault(),document.getElementById("form-1").classList.add("form_checked"),document.getElementById("form-2").classList.remove("form_inactive")})})}),document.getElementById("button-2").addEventListener("click",function(e){if(e.preventDefault(),document.getElementById("button-2").getAttribute("type")==="button"){const t=document.querySelector("#error-2");t&&(t.style.display="block")}});function u(){const e=document.querySelectorAll(".form__input[required]");for(const t of e)if(!t.value)return!1;return!0}document.getElementById("button-2").addEventListener("click",function(e){u()&&(document.getElementById("button-2").setAttribute("type","submit"),e.preventDefault(),document.getElementById("form-2").classList.add("form_checked"),document.getElementById("form-3").classList.remove("form_inactive"))}),document.getElementById("button-3").addEventListener("click",function(e){if(e.preventDefault(),document.getElementById("button-3").getAttribute("type")==="button"){const t=document.getElementById("button-3").previousElementSibling;t&&document.querySelector("#error-3")&&(t.style.display="block")}}),document.querySelectorAll(".form__label-checkbox").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("button-3").setAttribute("type","submit"),document.getElementById("button-3").addEventListener("click",function(t){t.preventDefault(),["form-1","form-2","form-3"].forEach(r=>{document.getElementById(r).classList.add("form_invisible")}),document.getElementById("form-4").classList.remove("form_invisible"),document.getElementById("form-4").classList.add("form_checked")})})})});
