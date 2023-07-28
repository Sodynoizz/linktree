"use client"
import React, { useEffect, useRef, useState } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

interface Props {
  data: {
    name: string;
  };
}

const TypewriterComponent: React.FC<Props> = ({ data }) => {
  const [typewriterInstance, setTypewriterInstance] = useState<TypewriterClass | null>(null);

  useEffect(() => {
    if (typewriterInstance) {
      typewriterInstance
        .typeString(data.name)
        .callFunction(() => {
          setTimeout(() => {
            typewriterInstance?.deleteAll();
          }, 2000);
        })
        .pauseFor(2000)
        .start();
    }
  }, [data, typewriterInstance]);

  return (
    <span>
      <Typewriter
        onInit={(typewriter) => {
          setTypewriterInstance(typewriter);
        }}
        options={{
          cursor: '_',
          delay: 300,
          loop: true,
        }}
      />
    </span>
  );
};

export default TypewriterComponent;
