// ==UserScript==
// @name         Filter News Timeline
// @namespace    https://github.com/matheussampaio/github-extension
// @version      1.0.0
// @description  Filter News Timeline by push, stars, etc.
// @author       Matheus Sampaio <matheus@sampaio.us>
// @match        https://github.com/
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('.news.column > .push { display: none !important; }');
    
})();
