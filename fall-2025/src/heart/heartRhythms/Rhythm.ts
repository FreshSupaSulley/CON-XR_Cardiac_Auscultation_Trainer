import { CurveFunction } from "../../utils/curves.js";
import { normalS1S2Rhythm } from "./NormalS1S2.js";
import { s4GallopRhythm } from "./S4Gallop.js";
import { s3GallopRhythm } from "./S3Gallop.js";
import { midSystolicClickRhythm } from "./Mid-SystolicClick.js";
import { midSystolicMurmurRhythm } from "./Mid-SystolicMurmur.js"
import { splitS1Rhythm } from "./SplitS1.js"
import { earlySystolicMurmurRhythm } from "./EarlySystolicMurmur.js";
import { lateSystolicMurmurRhythm } from "./LateSystolicMurmur.js";
import { holosystolicMurmurRhythm } from "./HolosystolicMurmur.js";
import { clickLateSystolicMurmurRhythm } from "./Click-Late-SystolicMurmur.js";
import { s4MidSysRhythm } from "./S4&Mid-SysMurmur.js"
import { s3HolosysMurmurRhythm } from "./S3&HolosysMurmur.js"
import { mitralOpeningSnapAndDiastolicMurmurRhythm } from "./MitralOpeningSnap&DiastolicMurmur.js"

export type AnimationKeyframe = {
	time: number;
	animationEnd: number;
	blendshape: ("LA" | "RA" | "LV" | "RV")[];
	value: number;
	curveFunction: CurveFunction;
}

export type SoundKeyframe = {
	time: number;
	soundPath: string;
};

export type Rhythm = {
	name: string;
	animation?: AnimationKeyframe[];
	sound?: SoundKeyframe[];
};

export const defaultRhythm: Rhythm = normalS1S2Rhythm;

export const availableRhythms: Rhythm[] = [
	normalS1S2Rhythm,
	s3GallopRhythm,
	s4GallopRhythm,
	midSystolicClickRhythm,
	splitS1Rhythm,
	earlySystolicMurmurRhythm,
	midSystolicMurmurRhythm,
	lateSystolicMurmurRhythm,
	holosystolicMurmurRhythm,
	clickLateSystolicMurmurRhythm,
	s4MidSysRhythm,
	s3HolosysMurmurRhythm,
	mitralOpeningSnapAndDiastolicMurmurRhythm
];