// @flow
// see note for why this using * as React:
// https://flow.org/en/docs/react/children/
import * as React from 'react';
import img from '../assets/breanna-galley-64436.jpg';

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

const Page = function() {
  return (
    <Container>
      {Array.from(Array(6)).map((val, i) => {
        return <Image key={i} />;
      }) }
    </Container>
  );
}

export default Page;