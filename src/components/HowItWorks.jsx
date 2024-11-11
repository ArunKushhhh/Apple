import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { useRef } from "react";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        toggleActions: "restart reverse restart reverse",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      y: 0,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-ax-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro Chip.
            <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                ref={videoRef}
                muted
                autoPlay
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold mt-3 text-center">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container md:ml-20">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chips that delivers out
              {` `}
              <span className="text-white">
                best graphic performance by far.
              </span>
            </p>
            <p className="hiw-text g_fadeIn mt-10">
              Mobile {` `}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">With 6 Cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
