/* =====================================================================
   COLIN KLINE — MR. REAL ESTATE :: scripts.js
   Vanilla JS, no dependencies, just like Mom used to make.
   ===================================================================== */

(function () {
    'use strict';

    // ----------- HIT COUNTER -----------
    // Increment a localStorage-backed visitor count on first hit per session.
    function bumpHitCounter() {
        var el = document.querySelector('.hit-counter .digits');
        if (!el) return;
        var KEY = 'colinkline_hits';
        var SESSION_KEY = 'colinkline_session';
        var hits = parseInt(localStorage.getItem(KEY) || '13742', 10);
        var sessionSeen = sessionStorage.getItem(SESSION_KEY);
        if (!sessionSeen) {
            hits++;
            localStorage.setItem(KEY, String(hits));
            sessionStorage.setItem(SESSION_KEY, '1');
        }
        // Format with leading zeros and a comma like a real 90s counter
        var padded = String(hits).padStart(8, '0');
        var formatted = padded.slice(0, 3) + ',' + padded.slice(3);
        el.textContent = formatted;
    }

    // ----------- LAST UPDATED TIMESTAMP -----------
    // 90s sites loved a "last modified" line. Update it to today.
    function setLastUpdated() {
        var el = document.querySelector('[data-last-updated]');
        if (!el) return;
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var d = new Date();
        var stamp = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
        el.textContent = 'SITE LAST UPDATED: ' + stamp;
    }

    // ----------- KONAMI EASTER EGG -----------
    // ↑↑↓↓←→←→BA — tip o' the hat to anyone who tries it.
    function konami() {
        var seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                   'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
        var idx = 0;
        document.addEventListener('keydown', function (e) {
            var key = e.key;
            if (key === seq[idx] || key.toLowerCase() === seq[idx]) {
                idx++;
                if (idx === seq.length) {
                    document.body.style.animation = 'rainbow 0.5s linear infinite';
                    setTimeout(function () { document.body.style.animation = ''; }, 5000);
                    idx = 0;
                }
            } else {
                idx = 0;
            }
        });
    }

    // ----------- KICKOFF -----------
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            bumpHitCounter();
            setLastUpdated();
            konami();
        });
    } else {
        bumpHitCounter();
        setLastUpdated();
        konami();
    }
})();
