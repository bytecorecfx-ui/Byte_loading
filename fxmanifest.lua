fx_version 'cerulean'
game 'gta5'
lua54 'yes'
use_experimental_fxv2_oal 'yes'
loadscreen_cursor 'yes'

name 'Byte_loading'
description 'Byte loadscreen NUI; manual shutdown via Byte_core.'
version '1'
author 'Byte'

loadscreen 'html/index.html'
loadscreen_manual_shutdown 'yes'

files {
	'html/index.html',
	'html/style.css',
	'html/script.js',
	'html/config.js',
	'html/img/*.*',
	'html/video/*.*',
}
