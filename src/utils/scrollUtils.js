import { scroller } from 'react-scroll';

const scrollHandeler = element => {
  scroller.scrollTo(element, {
    duration: 1500,
    // delay: 100,
    smooth: true,
    // offset: 50,
  });
};

export default scrollHandeler;
