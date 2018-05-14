var test = require('tape')

var aes256 = require('./aes256')

test('encrypts', t=>{
	t.equal( 
		aes256.encrypt( 
			'sometext', 
			'somepass'
		), 
		'89426e6335351fb4'
	)
	t.end()
})

test('decrypts', t=>{
	t.equal( 
		aes256.decrypt( 
			'89426e6335351fb4', 
			'somepass'
		), 
		'sometext'
	)
	t.end()
})
