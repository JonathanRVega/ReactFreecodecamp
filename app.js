//1

console.log("Exercise 1")
console.log("const JSX = <h1>Hello JSX!</h1>");

//2

console.log("Exercise 2");
console.log("const JSX = ( <div> <h1>Hello</h1> <p>Default text</p> <ul> <li>1</li> <li>2</li> <li>3</li> </ul> </div>);");

//3

console.log("Exercise 3");
console.log("const JSX = ( <div> {/* This is a comment*/} <h1>This is a block of JSX</h1> <p>Here's a subtitle</p>n </div>);");

//4

console.log("Exercise 4");
console.log("const JSX = ( <div> <h1>Hello World</h1> <p>Lets render this to the DOM</p> </div>); ReactDOM.render(JSX, document.getElementById('challenge-node'));")

//5
console.log("Exercise 5");
console.log("const JSX = (<div className='myDiv'> <h1>Add a class to this div</h1> </div>);");

//6
console.log("Exercise 6");
console.log("const JSX = (<div> <h2>Welcome to React!</h2> <br /> <p>Be sure to close all tags!</p> <hr /> </div>);");

//7
console.log("Exercise 7");
console.log("const MyComponent = function() { return ( <div className='customClass'>Text</div>);}");

//8
console.log("Exercise 8");
console.log("class MyComponent extends React.Component {constructor(props) {super(props);} render() { return ( <div> <h1>Hello React!</h1> </div>); } }; ");

//message
console.log("Starting this exercise I only console log the answers and not the all of the problem");

//9
console.log("Exercise 9");
console.log("<ChildComponent />");

//10
console.log("Exercise 10");
console.log("<TypesOfFruit/> <Fruits/>");

//11
console.log("Exercise 11");
console.log("<NonCitrus/> <Citrus/>      <Fruits/>");

//12
console.log("Exercise 12");
console.log("<Fruits/> <Vegetables/>  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));");

//13
console.log("Exercise 13");
console.log("class MyComponent extends React.Component{ constructor(props){ super(props); } render(){ return( <div id='challenge-node'> <h1>My First React Component!</h1> </div> ); } }; ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));");

//14
console.log("Exercise 14");
console.log("<p>The current date is: {props.date}</p>    <CurrentDate date={Date()}/>");

//15
console.log("Exercise 15");
console.log("return <p>{props.tasks.join(', ')}</p>;     <List tasks={['Walk', 'Cook', 'Bake']} />    <List tasks={['Study', 'Code', 'Eat']} />");

//16
console.log("Exercise 16");
console.log("ShoppingCart.defaultProps = { items: 0 };");

//17
console.log("Exercise 17");
console.log("return <Items quantity={10}/>");

//18
console.log("Exercise 18");
console.log("Items.propTypes = {quantity: PropTypes.number.isRequired}");

//19
console.log("Exercise 19");
console.log("<p>Your temporary password is: <strong> {this.props.tempPassword} </strong></p>  <ReturnTempPassword tempPassword={'xxxxxxxx'}/>" );

//20
console.log("Exercise 20");
console.log("const Camper = props => <p>{props.name}</p>; Camper.defaultProps = { name: 'CamperBot' }; Camper.propTypes = { name: PropTypes.string.isRequired};");

//21
console.log("Exercise 21");
console.log("this.state = { name: 'Jonathan'}");

//22
console.log("Exercise 22");
console.log("<h1> {this.state.name}</h1>");

//23
console.log("Exercise 23");
console.log("const name = this.state.name; <h1>{name}</h1>");

//24
console.log("Exercise 24");
console.log("this.setState({name: 'React Rocks!'});");

//25
console.log("Exercise 25");
console.log("this.handleClick = this.handleClick.bind(this);} handleClick() { this.setState({ text: 'You clicked!'});}");

//26
console.log("Exercise 26");


