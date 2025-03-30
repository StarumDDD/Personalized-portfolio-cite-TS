import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}: LottieAnimationProps) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice',
      }}
    />
  );
};

export default LottieAnimation;
