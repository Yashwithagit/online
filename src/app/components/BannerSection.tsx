import React, { useEffect, useState } from 'react';
import { bannerSectionInfo } from '@/lib/constant'; // Assuming correct import path
import Image from 'next/image';
import { animated, useSpring } from '@react-spring/web';

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bannerData, setBannerData] = useState(bannerSectionInfo[currentIndex]);

  const animationState = useSpring({
    from: { transform: 'translateY(5vh)' }, // Initial state
    to: async (prev) => ({ opacity: 1, transform: 'translateY(0px)' }), // Target state
    config: { duration: 1000 }, // Animation configuration
    reset: true, // Reset animation on state change
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % bannerSectionInfo.length;
      setBannerData(bannerSectionInfo[newIndex]);
      setCurrentIndex(newIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const { title, iphoneFrontImg, iphoneBackImg } = bannerData;

  return (
    <main className="h-screen flex items-center w-full justify-center mobile-banner__container ">

      <div dangerouslySetInnerHTML={{ __html: title }} className=" flex justify-center" />

      {iphoneFrontImg && iphoneBackImg && (
        <div className=" flex justify-around items-center gap-12 iphone-img__container">

          <animated.div style={animationState} >
            <Image
              src={iphoneFrontImg}
              width={125}
              height={125}
              className=" animate-iphone-up animate-iphone-left "
              alt="Phone image"
            />

          </animated.div>
          <animated.div style={animationState}>

            <Image
              src={iphoneBackImg}
              width={125}
              height={125}
              className=" animate-iphone-down animate-iphone-right "
              alt="Phone image"
            />

          </animated.div>
        </div>
      )}

    </main>
  );
};

export default React.memo(BannerSection);
