import { useEffect } from "react";
import WebFont from "webfontloader";

export const useWebFonts = (fontFamilies: string[]) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: fontFamilies,
      },
    });
  }, []);
};
