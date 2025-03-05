"use client";
import { useEffect } from "react";

function PreloadLogoImage() {
  useEffect(() => {
    const logoImage = new Image();
    logoImage.src = "/images/logos/juporia-rounded-logo-opt.png";
  }, []);

  return null;
}

export default PreloadLogoImage;
