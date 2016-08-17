'use strict'
var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle	= require('./MyTitle')
var	div	= React.DOM.div

var MyTitleFact = React.createFactory(MyTitle) // never have to use createFactory with JSX
var ce					= React.createElement

var MyFirstComponent = (
	div(null,
		MyTitleFact({title: 'Props are great.', color: 'rebeccapurple'}),
		MyTitleFact({title: 'Use props, they\'re great!.', color: 'mediumaquamarine'}),
		React.createElement(MyTitle, {title: 'Use props everywhere.', color: 'steelblue'}),
		ce(MyTitle, {title: 'Props are the best.', color: 'slategrey'})
	)
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
