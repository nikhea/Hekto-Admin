import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useDeviceProperties = () => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isRetina, setIsRetina] = useState(false);

  const desktopOrLaptopQuery = useMediaQuery({ minWidth: 1224 });
  const bigScreenQuery = useMediaQuery({ minWidth: 1824 });
  const tabletOrMobileQuery = useMediaQuery({ maxWidth: 1224 });
  const portraitQuery = useMediaQuery({ orientation: "portrait" });
  const retinaQuery = useMediaQuery({ minResolution: "2dppx" });

  useEffect(() => {
    setIsDesktopOrLaptop(desktopOrLaptopQuery);
    setIsBigScreen(bigScreenQuery);
    setIsTabletOrMobile(tabletOrMobileQuery);
    setIsPortrait(portraitQuery);
    setIsRetina(retinaQuery);
  }, [
    desktopOrLaptopQuery,
    bigScreenQuery,
    tabletOrMobileQuery,
    portraitQuery,
    retinaQuery,
  ]);

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  };
};

export default useDeviceProperties;
