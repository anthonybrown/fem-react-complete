'use strict';

var div = React.DOM.div;
var h1  = React.DOM.h1;

var MyTitle = React.createClass({
	render () {
		return (
			div(null,
				h1({style: {color: this.props.color}}, this.props.title)
			)
		);
	}
});

var MyTitleFact = React.createFactory(MyTitle) // never have to use createFactory with JSX
var ce = React.createElement

var MyFirstComponent = (
	div(null,
		MyTitleFact({title: 'Props are great.',                       color : 'rebeccapurple'}),
		MyTitleFact({title: 'Use props, they\'re great!.',            color : 'darkorange'}),
		React.createElement(MyTitle, {title: 'Use props everywhere.', color : 'steelblue'}),
		ce(MyTitle, {title: 'Props are the best.',                    color : 'slategrey'})
	)
);

ReactDOM.render(
	MyFirstComponent, document.getElementById('app')
);
