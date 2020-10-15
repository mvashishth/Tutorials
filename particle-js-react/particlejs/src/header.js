import React from 'react';

import Particles from 'react-particles-js';

function Header() {
  return (
  	 <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      color: "#000000",
      height: "100%"
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1803.4120608655228
            }
          },
          color: {
            value: "#000000"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: "#000000"
            },
            polygon: {
              nb_sides: 4
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.4008530152163807,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity:0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
  );
}

export default Header;
