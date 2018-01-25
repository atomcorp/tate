// @flow
// see note for why this using * as React:
// https://flow.org/en/docs/react/children/
import * as React from 'react';
import img from '../assets/breanna-galley-64436.jpg';
import Tate from '../tate/tate.js';

type Props = {
  children?: React.Node,
};

const Container = function (props: Props) {
  return (
    <div className="container">
      { props.children }
    </div>
  );
}

const Image = function (props: { passKey: number}) {
  return (
    <img src={img} alt=""/>
  )
}

class Canvas extends React.Component {
  
  constructor(props) {
    super(props);
    this.initTate = this.initTate.bind(this);
  }

  initTate(canvas) {
    if (canvas) {
      Tate(canvas);
    }
    
  }

  render() {
    return (
      <canvas 
        ref={self => this.initTate(self)} 
        style={{ 
          background: 'red'
        }} 
        width="100"
        height="100"
        id="frame"
      ></canvas>
    )
  }
}

const Page = () => {

  return(
    <Container>
    {/* {Array.from(Array(6)).map((val, i) => {
      return <Image key={i} />;
    }) } */}
      <Canvas />
    </Container >
  );
}

export default Page;