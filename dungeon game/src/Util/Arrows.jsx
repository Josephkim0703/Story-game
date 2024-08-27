import React, { useState, useEffect } from 'react';

function Arrows() {
  const [right, setRight] = useState("\u{1F802}");
  const [left, setLeft] = useState("\u{1F800}");

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    if (platform.includes('mac')) {
      setLeft("\u2192"); 
      setRight("\u2190");
    }
  }, []);

  return { left, right };
}

export default Arrows;