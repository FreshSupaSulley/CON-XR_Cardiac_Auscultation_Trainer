import { MotionCurves } from "../../../utils/curves.js";
import { Rhythm } from "../Rhythm.js";

// Aortic, Supine, Bell - Early Systolic Murmur - Acute Mitral Regurg
export const aorticEarlySystolicMurmurRhythm: Rhythm = {
    name: "Early Systolic Murmur",
    sound: [
        // S1 sound from aortic location
        {
            time: 0.32,
            soundPath: "assets/sounds/aorticS1.wav",
        },
        // Early Systolic Murmur sound
        {
            time: 0.34,
            soundPath: "assets/sounds/early-Systolic-Murmur.wav",
        },
        // S2 sound from aortic location
        {
            time: 0.62,
            soundPath: "assets/sounds/aorticS2.wav",
        },
    ]
};