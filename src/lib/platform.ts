import { createSignal } from "solid-js";

/** The desktop platforms an installer can be for. */
export const Platform = {
  Windows: "windows",
  MacOS: "macos",
} as const;

export type Platform = (typeof Platform)[keyof typeof Platform];

/** The kinds of device the page can detect. */
export const Device = {
  Windows: "windows",
  MacOS: "macos",
  ChromeOS: "chromeos",
  Mobile: "mobile",
  Unknown: "unknown",
} as const;

export type Device = (typeof Device)[keyof typeof Device];

/** The storage key for the platform the viewer picked. */
const STORAGE_KEY = "toolbox:platform";

/** Detects the viewer's device from the browser. */
function detectDevice(): Device {
  const userAgent = navigator.userAgent;
  const isTouchMac =
    /Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1;

  if (/Android|iPhone|iPad|iPod/.test(userAgent) || isTouchMac) {
    return Device.Mobile;
  }
  if (/CrOS/.test(userAgent)) return Device.ChromeOS;
  if (/Windows/.test(userAgent)) return Device.Windows;
  if (/Macintosh|Mac OS X/.test(userAgent)) return Device.MacOS;
  return Device.Unknown;
}

/** Reads the platform the viewer picked earlier, if any. */
function readStoredPlatform(): Platform | undefined {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return Object.values(Platform).find((platform) => platform === value);
  } catch {
    return undefined;
  }
}

/** The platform installers default to for a device. */
function platformForDevice(value: Device): Platform | undefined {
  if (value === Device.Windows) return Platform.Windows;
  if (value === Device.MacOS) return Platform.MacOS;
  return undefined;
}

/** The viewer's detected device. */
export const device = detectDevice();

const [platform, setPlatformSignal] = createSignal(
  readStoredPlatform() ?? platformForDevice(device),
);

/** The platform whose installers are highlighted. */
export { platform };

/** Sets the highlighted platform and remembers it for this viewer. */
export function setPlatform(value: Platform) {
  setPlatformSignal(value);
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage is unavailable; the choice lasts for this visit.
  }
}
