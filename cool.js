// ==UserScript==
// @name ITPub downloader
// @author TheCjw
// @description xxx
// @match http://www.itpub.net/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

$(document).ready(function(){
	$('ignore_js_op').find('a').click(function(){
		var downloadLink = $(this).attr('href');
        var reg = /(?:attachment\.php\?aid\=)(\w{55}|\w{48})/i
		var result = reg.exec(downloadLink);
		if (result != null) {
			var fileId = result[1];
			$(this).attr('href', 'forum.php?mod=attachment&aid='+fileId);
		}
	});
});
