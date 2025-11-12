// Copyright (c) 2025 YTY3212
// Licensed under the MIT License.
// See LICENSE file in the project root for details.

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
