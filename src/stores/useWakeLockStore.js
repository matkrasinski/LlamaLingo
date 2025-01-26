export const useWakeLockStore = (set) => ({
  wakeLock: null,
  isWakeLockActive: false,

  // Store wakeLock object
  setWakeLock: (wakeLock) => set({ wakeLock }),

  // Store active state
  setIsWakeLockActive: (isActive) => set({ isWakeLockActive: isActive }),

  // Request a wake lock
  async requestWakeLock() {
    try {
      if ("wakeLock" in navigator) {
        const wakeLockObj = await navigator.wakeLock.request("screen");
        set({ wakeLock: wakeLockObj, isWakeLockActive: true });

        // Listen for release events
        wakeLockObj.addEventListener("release", () => {
          console.log("Wake Lock was released");
          set({ isWakeLockActive: false });
        });

        console.log("Wake Lock is active");
      } else {
        console.warn("Wake Lock API is not supported in this browser.");
      }
    } catch (err) {
      console.error(`Failed to acquire Wake Lock: ${err.message}`);
    }
  },

  // Release the wake lock
  async releaseWakeLock() {
    const { wakeLock } = set.getState(); // Access current wakeLock
    if (wakeLock) {
      await wakeLock.release();
      set({ wakeLock: null, isWakeLockActive: false });
      console.log("Wake Lock released manually");
    }
  },
});
