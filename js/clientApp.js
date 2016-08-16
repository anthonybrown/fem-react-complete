'use strict';

var div = React.DOM.div
var h1  = React.DOM.h1

// a composite component
var MyTitle = React.createClass({
	render () {
		return (
			div(null,
				h1(null, this.props.title)
				//h1(null, 'Checkout this other title')
			)
		)
	}
})

var MyTitleFact = React.createFactory(MyTitle) // never have to use createFactory with JSX
var ce = React.createElement

var MyFirstComponent = (
	div(null,
		MyTitleFact({title: 'Props are great.'}),
		React.createElement(MyTitle, {title: 'Use props everywhere.'}),
		ce(MyTitle, {title: 'Props are the best.'})
	)
)

ReactDOM.render(
	MyFirstComponent, document.getElementById('app')
)
