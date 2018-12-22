import React from 'react'
//In a functional stateless component, the props are received in the function signature as arguments:
//  class Greeting_4 extends Component {
//   render() {
//     return (
//       <div className="App">
//        <h1>{this.props.greeting}</h1>
//       </div>
//     );
//   }
// }

// const Greeting_4 =    props          => <h1>{props.greeting}</h1>;
//const Greeting_5 = ({ greeting })    => <h1>{greeting}</h1>;
const Greeting_6 = ({ greeting })    => <h1>{greeting.text}</h1>;

export default Greeting_6;
