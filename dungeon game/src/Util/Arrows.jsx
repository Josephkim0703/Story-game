import React, { useState, useEffect } from 'react';

function Arrows() {
  const [right, setRight] = useState("🢘");
  const [left, setLeft] = useState("🢚");

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