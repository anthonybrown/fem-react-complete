'use strict';

var div = React.DOM.div
var h1  = React.DOM.h1

// demonstrating a side effect in render method
//var x = 0

// a composite component
var MyTitle = React.createClass({
	render () {
		// not good to have the render method cause side effect
		// keep the render method pure (no side effects)
		//x++
		return (
			div(null,
				h1(null, this.props.title)
				//h1(null,x + ': ' + this.props.title)
			)
		)
	}
})

var MyTitleFact = React.createFactory(MyTitle) // never have to use createFactory with JSX
var ce = React.createElement

var MyFirstComponent = (
	div(null,
		MyTitleFact({title: 'Props are great.'}),
		MyTitleFact({title: 'More props are great.'}),
		React.createElement(MyTitle, {title: 'Use props everywhere.'}),
		ce(MyTitle, {title: 'Props are the best.'})
	)
)

ReactDOM.render(
	MyFirstComponent, document.getElementById('app')
)
