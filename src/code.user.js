// ==UserScript==
// @name         Filter News Timeline
// @namespace    https://github.com/matheussampaio/github-extension
// @version      1.0.0
// @license      MIT
// @description  Filter News Timeline by push, stars, etc.
// @author       Matheus Sampaio <matheus@sampaio.us>
// @match        https://github.com/
// @grant        GM_addStyle
// @homepageURL  https://github.com/matheussampaio/github-extension
// @supportURL   https://github.com/matheussampaio/github-extension/issues
// @downloadURL  https://raw.githubusercontent.com/matheussampaio/github-extension/master/src/code.user.js
// @updateURL    https://raw.githubusercontent.com/matheussampaio/github-extension/master/src/code.user.js
// ==/UserScript==
(function() {
    'use strict';
    GM_addStyle('.news.column > .push { display: none !important; }');
})();
