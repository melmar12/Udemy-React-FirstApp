var Greeter = React.createClass({
  render: function () {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>hey whatsup hello</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name ="Mel"/>,
  document.getElementById('app')
);
