import { MotionCurves } from "../../../utils/curves.js";
import { Rhythm } from "../Rhythm.js";

// Aortic, Supine, Bell - Mid-Systolic Murmur - Mitral Regurg due to CAD
export const aorticMidSystolicMurmurRhythm: Rhythm = {
    name: "Mid-Systolic Murmur",
    location: "Aortic",
    sound: [
        // S1 sound from aortic location
        {
            time: 0.32,
            soundPath: "assets/sounds/aorticS1.wav",
        },
        // Mid-Systolic Murmur sound
        {
            time: 0.40,
            soundPath: "assets/sounds/mid-Systolic-Murmur.wav",
        },
        // S2 sound from aortic location
        {
            time: 0.62,
            soundPath: "assets/sounds/aorticS2.wav",
        },
    ]
};