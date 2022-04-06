export default interface TextToSpeechModel {
  output: output;
  return: returns;
}

export interface output {
  mode: string;
  audio: audio;
}

export interface audio {
  result: string[];
  numChannels: number;
  validBits: number;
  sizeSample: number;
  type: string;
  sampleRate: number;
}

export interface returns {
  massage: string;
  status: string;
}
