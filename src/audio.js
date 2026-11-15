// Synthesized ambience: no samples, external requests, or autoplay.
export function createAudio() {
  let context,
    master,
    enabled = false,
    volume = 0.25;
  const voices = [];
  async function enable() {
    try {
      if (!context) {
        context = new AudioContext();
        master = context.createGain();
        master.gain.value = 0;
        master.connect(context.destination);
        const buffer = context.createBuffer(
            1,
            context.sampleRate * 3,
            context.sampleRate,
          ),
          data = buffer.getChannelData(0);
        let last = 0;
        for (let i = 0; i < data.length; i++) {
          last = (last + (Math.random() * 2 - 1) * 0.03) / 1.02;
          data[i] = last * 3;
        }
        const noise = context.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;
        const filter = context.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 1800;
        noise.connect(filter).connect(master);
        noise.start();
        voices.push(noise);
        for (const frequency of [47, 94, 131]) {
          const osc = context.createOscillator(),
            gain = context.createGain();
          osc.type = "sine";
          osc.frequency.value = frequency;
          gain.gain.value = 0.035;
          osc.connect(gain).connect(master);
          osc.start();
          voices.push(osc);
        }
      }
      await context.resume();
      enabled = true;
      apply();
      return true;
    } catch {
      return false;
    }
  }
  function apply() {
    if (master)
      master.gain.setTargetAtTime(
        enabled ? volume : 0,
        context.currentTime,
        0.08,
      );
  }
  return {
    enable,
    setVolume(v) {
      volume = Math.max(0, Math.min(1, v));
      apply();
    },
    mute() {
      enabled = false;
      apply();
    },
    get enabled() {
      return enabled;
    },
    get status() {
      return context?.state || "not-started";
    },
    cue() {
      if (!context || !enabled) return;
      const osc = context.createOscillator(),
        gain = context.createGain();
      osc.frequency.setValueAtTime(180, context.currentTime);
      osc.frequency.exponentialRampToValueAtTime(
        520,
        context.currentTime + 0.3,
      );
      gain.gain.setValueAtTime(0.08, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.6);
      osc.connect(gain).connect(master);
      osc.start();
      osc.stop(context.currentTime + 0.65);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    },
    suspend() {
      context?.suspend();
    },
    resume() {
      if (enabled) context?.resume();
    },
  };
}
