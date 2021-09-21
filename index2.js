class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anonymous",
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
    });
  }

  render() {
    return <p>Hello {this.state.name}</p>;
  }
}
export default App;
