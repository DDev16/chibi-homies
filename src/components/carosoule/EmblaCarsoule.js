import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../components/carosoule/media";
import "../..//components/carosoule/embla.scss";

const PARALLAX_FACTOR = 1.2;

const mediaData = [
  {
    name: "ChibiPsycho Mint",
    description:
      "Welcome to ChibiPsycho Mint, your exclusive destination for minting PsychoChibis – the perfect addition to your NFT collection. Dive into the world of collectibles with ease, and acquire these unique digital treasures effortlessly. Discover the madness of the PsychoChibis universe and begin your journey today with ChibiPsycho Mint, where every mint is a step closer to owning a piece of artistry!",
    linkUrl: "https://example.com/car1",
  },
  {
    name: "Gem Miner",
    description:
      "Introducing ChibiGem Miner: Soft Stake Your PsychoChibis, Mine Precious Gems! Welcome to the ChibiGem Miner, where you can uncover the hidden potential of your cherished PsychoChibis NFTs. Immerse yourself in the world of digital collectibles and witness your Chibis evolve into valuable PsychoGems as you stake them with us",
    linkUrl: "https://example.com/car2",
  },
  {
    name: "PsychoZombie Evolution",
    description: "Unlock the Power Within: Harness your hard-earned Psycho Gems to transform your adorable Chibis into mind-bending Psycho Chibis!",
    linkUrl: "https://example.com/dapp1",
  },
  
  
  {
    name: "Market",
    description: "Explore our exclusive collection of in-house NFTs and embark on a journey to prosperity. Trade here and reap the benefits, with 100% of trading fees distributed to our valued PsychoChibi holders!",
    linkUrl: "https://example.com/dapp1",
  },
  {
    name: "zOMbiE rUn",
    description: "a psycho chibi powered blockchain classic zombie evading game!",
    linkUrl: "https://example.com/dapp1",
  },
];

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [parallaxValues, setParallaxValues] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
    });
    setParallaxValues(styles);
  }, [embla, setParallaxValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    embla.on("resize", onScroll);
  }, [embla, onSelect, onScroll]);

  const handleLearnMoreClick = (index) => {
    const linkUrl = mediaData[index].linkUrl;
    if (linkUrl) {
      // Navigate to the specified link URL
      window.location.href = linkUrl;
    }
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div
                  className="embla__slide__parallax"
                  style={{ transform: `translateX(${parallaxValues[index]}%)` }}
                >
                  <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt={mediaData[index].title} // Use title as alt text
                  />
                  <button
                    className="learn-more-button"
                    onClick={() => handleLearnMoreClick(index)}
                  >
                    Learn More
                  </button>
                  <div className="embla__slide__caption">
                    <h3>{mediaData[index].name}</h3>
                    <p>{mediaData[index].description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
