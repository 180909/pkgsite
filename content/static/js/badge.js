'use strict';
/*!
 * @license
 * Copyright 2019-2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
const snippetEls = document.querySelectorAll('.js-toolsCopySnippet');
snippetEls.forEach(inputEl => {
  inputEl.addEventListener('click', e => {
    var _a;
    e.preventDefault();
    (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.select();
    document.execCommand('copy');
  });
});
//# sourceMappingURL=badge.js.map
