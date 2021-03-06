// see note for why this using * as React:
// https://flow.org/en/docs/react/children/
import * as React from 'react';
import { images } from '../tate/debug.js';
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

class TateDiv extends React.Component {
  constructor(props) {
    super(props);
    this.initTate = this.initTate.bind(this);
  }
  initTate(el) {
    if (el) {
      Tate(el, {});
    }
  }
  render() {
    return (
      <div
        className="tate"
        ref={self => this.initTate(self)} >
        {this.props.children}
      </div>
    );
  }
}

const Image = function (props: { url: string, title: string}) {
  return (
    <img 
    src={props.url} 
    data-tate-hires={props.url} 
    alt=""
    title={props.title} />
  )
}

class Canvas extends React.Component {
  
  constructor(props) {
    super(props);
    this.initTate = this.initTate.bind(this);
  }

  initTate(el) {
    if (el) {
      Tate(el);
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

const canvasOrIMGChildren = 'IMGChildren';

const Page = () => {

  return (
    <Container>
      {
        canvasOrIMGChildren === 'IMGChildren' 
        ? (
            <TateDiv>
              {
                images.map((val, i) => {
                  return <Image url={val} title={`title${i}`} key={i} />;
                })
              }
            </TateDiv>
        )
        : <Canvas />
      }
      </Container >
  );
}

export default Page;