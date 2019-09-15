var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentDidMount : function() {
        console.log('componentDidMount')
        console.log('komponent jest montowany w drzewie DOM')
    },

    shouldComponentUpdate: function() {
        console.log('Czy coś sie zmieniło?  true/false')
        return true
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate -> komponent montowany w drzewie DOM')
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount -> nie mam tu czego odpinać')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', { onClick: this.increment }, 'increment'),
            React.createElement('button', { onClick: this.decrement }, 'decrement'),
        );
    }
});

var MoreCounters = React.createClass( {
    propTypes: {
        Counter: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h3', {}, 'counter 1'),
            React.createElement(Counter),
            React.createElement('h3', {}, 'counter 2'),
            React.createElement(Counter),
            React.createElement('h3', {}, 'counter 3'),
            React.createElement(Counter),
        );
    }
});

var element = React.createElement(MoreCounters);
ReactDOM.render(element, document.getElementById('app'));