import React from "react";
import "./style.scss";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Sticky2 = () => (
  <div className="sticky-contaniner">
    <Controller>
      <Scene triggerHook="onLeave" duration={6000} pin>
        <Timeline paused>
          <Tween from={{ opacity: 1 }} to={{ opacity: 1 }}>
            <div className="sticky">
              <Scene triggerHook="onLeave" duration={2000}>
                <Timeline
                  target={
                    <div className="heading">
                      <div className="overlay">
                        <h2 className="text-white" data-aos="zoom-in">
                          Make global operations possible
                        </h2>
                        <p className="text-white" data-aos="zoom-in">
                          By investing in TRU MARKET you are going to be a key
                          player in the supply chain by financing the operation
                          and receiving revenue for it in a transparent
                          ecosystem.
                        </p>
                      </div>
                    </div>
                  }
                >
                  <Tween duration={300} from={{ opacity: 1 }} to={{ opacity: 1 }} />
                </Timeline>
              </Scene>
            </div>
          </Tween>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div className="sticky2">
              <Scene triggerHook="onCenter" duration={2000}>
                <Timeline
                  position={"paused"}
                  target={
                    <div className="heading" >
                      <div className="overlay">
                        <h2 className="text-white" data-aos="zoom-in">Reinvent agroindustry</h2>
                        <p className="text-white" data-aos="zoom-in">
                          TRU MARKET's continuous research on smart contracts
                          allows players to operate safely and assure that
                          everyone gets their part done to get paid.
                        </p>
                      </div>
                    </div>
                  }
                >
                  <Tween duration={300} from={{ opacity: 1 }} to={{ opacity: 1 }} />
                </Timeline>
              </Scene>
            </div>
          </Tween>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <div className="sticky3">
              <Scene triggerHook="onEnter" duration={2000}>
                <Timeline
                  target={
                    <div className="heading">
                      <div className="overlay">
                        <h2 className="text-white" data-aos="zoom-in">Connect the world</h2>
                        <p className="text-white" data-aos="zoom-in">
                          You will have access and be able to play and
                          collaborate in a global network of peers that are
                          looking for continuous growth.
                        </p>
                      </div>
                    </div>
                  }
                >
                  <Tween duration={300} from={{ opacity: 1 }} to={{ opacity: 1 }} />
                </Timeline>
              </Scene>
            </div>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </div>
);

export default Sticky2;

{
  /* 

<div className="sticky-contaniner">
<Controller>
<Scene triggerHook="onLeave" duration={2000} pin>
  {(progress) => (
    <div className="sticky sticky-one">
      <Timeline totalProgress={progress} paused>
        <Tween from={{ y: "0%" }} to={{ y: "100%" }}>
          <div className="animation"></div>
        </Tween>
        <Timeline
          target={
            <div className="heading">
              <div className="overlay">
                <h2 className="text-white">
                  Make global operations possible
                </h2>
                <p className="text-white">
                  By investing in TRU MARKET you are going to be a key
                  player in the supply chain by financing the operation
                  and receiving revenue for it in a transparent ecosystem.
                </p>
              </div>
            </div>
          }
        >
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
          <Tween duration={10} from={{ y: "100%" }} to={{ y: "0%" }} />
        </Timeline>
      </Timeline>
    </div>
  )}
</Scene>
<Scene triggerHook="onLeave" duration={2000} pin>
  {(progress) => {
    console.log(progress);
    return (
      <div className="sticky2">
        <Timeline totalProgress={progress} paused>
          <Tween
            from={{ x: "10%", top: "60%" }}
            to={{ x: "60%", top: "10%" }}
          >
            <div className="animation"></div>
          </Tween>
          <Timeline
            target={
              <div className="heading">
                <div className="overlay">
                  <h2 className="text-white">Reinvent agroindustry</h2>
                  <p className="text-white">
                    TRU MARKET's continuous research on smart contracts
                    allows players to operate safely and assure that
                    everyone gets their part done to get paid.
                  </p>
                </div>
              </div>
            }
          >
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
            <Tween duration={10} from={{ y: "100%" }} to={{ y: "0%" }} />
          </Timeline>
        </Timeline>
      </div>
    );
  }}
</Scene>
<Scene triggerHook="onLeave" duration={2000} pin>
  {(progress) => (
    <div className="sticky3 sticky-one">
      <Timeline totalProgress={progress} paused>
        <Tween from={{ y: "0%" }} to={{ y: "100%" }}>
          <div className="animation"></div>
        </Tween>
        <Timeline
          target={
            <div className="heading">
              <div className="overlay">
                <h2 className="text-white">Connect the world</h2>
                <p className="text-white">
                  You will have access and be able to play and collaborate
                  in a global network of peers that are looking for
                  continuous growth.
                </p>
              </div>
            </div>
          }
        >
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
          <Tween duration={10} from={{ y: "100%" }} to={{ y: "0%" }} />
        </Timeline>
      </Timeline>
    </div>
  )}
</Scene>
</Controller> 
        </div>*/
}
