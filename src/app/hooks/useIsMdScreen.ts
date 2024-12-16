import { useState, useEffect } from "react";

const useIsMdScreen = (): boolean => {
  const [isMdScreen, setIsMdScreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMdScreen(window.innerWidth >= 768);
      };
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isMdScreen;
};

export default useIsMdScreen;
