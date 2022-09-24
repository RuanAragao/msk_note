fx_version 'cerulean'
game 'gta5'

author 'Ruan Aragão <ruanaragao2@gmail.com>'
description 'MSK Simple Notepad'
version '1.0.0'

server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'server.lua',
}

client_script 'client.lua'

ui_page 'nui/main.html'
files {
  'nui/*.html',
  'nui/images/*.svg',
  'nui/js/*.js',
  'nui/css/*.css'
}
