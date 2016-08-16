'use strict';

var div = React.DOM.div
var h1  = React.DOM.h1

// a composite component
var MyTitle = React.createClass({
	render () {
		return (
			div(null,
				h1(null, 'Checkout this other title')
			)
		)
	}
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
	div(null,
		MyTitleFact(null),
		React.createElement(MyTitle, null),
		ce(MyTitle, null)
	)
)

ReactDOM.render(
	MyFirstComponent, document.getElementById('app')
)
