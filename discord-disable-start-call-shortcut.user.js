// ==UserScript==
// @name        discord-disable-start-call-shortcut
// @namespace   https://github.com/mkalinski
// @version     1.0.0
// @description Prevents the "start call" shortcut (ctrl+') from firing, because it's too easy to trigger it accidentally
// @match       https://discord.com/*
// @grant       none
// @run-at      document-end
// @inject-into auto
// @homepageURL https://github.com/mkalinski/userscript-discord-disable-start-call-shortcut
// ==/UserScript==
(() => {
    'use strict';

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === "'") {
            event.stopPropagation();
        }
    }, {capture: true});
})();
