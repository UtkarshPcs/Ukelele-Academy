'use client';

import React, {useState, useEffect, useRef} from 'react';
import {UKULELE_STRINGS} from '@/lib/ukulele-theory';
import {
  ukuleleAudio,
  detectUkulelePitch,
  PitchDetectionResult,
} from '@/lib/audio-engine';
import {Mic, MicOff, Volume2, Check} from 'lucide-react';

export default function UkuleleTuner() {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [pitchResult, setPitchResult] = useState<PitchDetectionResult | null>(null);
  const [selectedTargetString, setSelectedTargetString] = useState<4 | 3 | 2 | 1>(4);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);

  const stopMicrophone = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsListening(false);
    setPitchResult(null);
  };

  const startMicrophone = async () => {
    setMicError(null);
    if (typeof window === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setMicError(
        'Your current browser frame does not support live microphone access. Tap any string tile below to tune by ear with reference tones.'
      );
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          autoGainControl: false,
          noiseSuppression: false,
        },
      });
      mediaStreamRef.current = stream;

      const AudioCtx =
        window.AudioContext ||
        (window as unknown as {webkitAudioContext: typeof AudioContext})
          .webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      setIsListening(true);

      const buffer = new Float32Array(analyser.fftSize);
      const updatePitch = () => {
        if (!analyserRef.current || !audioCtxRef.current) return;
        analyserRef.current.getFloatTimeDomainData(buffer);
        const detected = detectUkulelePitch(buffer, audioCtxRef.current.sampleRate);
        if (detected) {
          setPitchResult(detected);
          setSelectedTargetString(detected.closestString.stringNumber);
        }
        rafRef.current = requestAnimationFrame(updatePitch);
      };

      rafRef.current = requestAnimationFrame(updatePitch);
    } catch {
      setMicError(
        'Microphone permission was declined. Use the four reference tone tiles below to match each string by ear.'
      );
      setIsListening(false);
    }
  };

  useEffect(() => {
    return () => {
      stopMicrophone();
    };
  }, []);

  const targetStringInfo =
    UKULELE_STRINGS.find((s) => s.stringNumber === selectedTargetString) ||
    UKULELE_STRINGS[0];

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-[14px] font-semibold text-[#3F5C62]">
            Standard High-G Tuning · G4 · C4 · E4 · A4
          </div>
          <h2 className="font-fraunces text-[26px] md:text-[32px] font-bold text-[#12343B] mt-1">
            Tune your four strings
          </h2>
          <p className="text-[18px] text-[#3F5C62] mt-1">
            Pluck a string near your microphone or tap a string tile to match its tone by ear.
          </p>
        </div>

        <button
          type="button"
          onClick={isListening ? stopMicrophone : startMicrophone}
          className={`px-6 py-3 rounded-full text-[16px] font-bold flex items-center gap-2 transition-colors min-h-[48px] shrink-0 koa-focus ${
            isListening
              ? 'bg-[#12343B] text-[#FFF7E8]'
              : 'bg-[#FF7A59] hover:bg-[#F26A47] text-[#12343B]'
          }`}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5" />
              <span>Stop microphone</span>
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              <span>Start microphone tuner</span>
            </>
          )}
        </button>
      </div>

      {micError && (
        <div className="p-4 rounded-[24px] bg-[#FFC857]/25 text-[16px] text-[#12343B]">
          {micError}
        </div>
      )}

      {/* Stage Surface for Pitch Gauge */}
      <div
        className="rounded-[32px] p-6 sm:p-8 koa-shadow text-center space-y-6"
        style={{background: 'linear-gradient(180deg, #E4EFE7 0%, #FFF7E8 100%)'}}
      >
        <div className="font-dm-mono text-[44px] font-bold text-[#12343B] leading-none">
          {pitchResult ? pitchResult.closestString.note : targetStringInfo.note}
        </div>
        <div className="text-[16px] text-[#3F5C62]">
          String {targetStringInfo.stringNumber} · {targetStringInfo.positionLabel} (
          <span className="font-dm-mono">{targetStringInfo.baseFrequency} Hz</span>)
        </div>

        <div className="max-w-md mx-auto space-y-2">
          <div className="flex justify-between text-[14px] font-semibold text-[#3F5C62]">
            <span>♭ Low (Tighten)</span>
            <span className="text-[#12343B]">In Tune</span>
            <span>♯ High (Loosen)</span>
          </div>
          <div className="h-4 bg-[#12343B]/15 rounded-full relative overflow-hidden">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#12343B] -translate-x-1/2 z-10" />
            {pitchResult && (
              <div
                className={`absolute top-0.5 bottom-0.5 w-4 rounded-full transition-all duration-100 ${
                  pitchResult.status === 'in-tune' ? 'bg-[#3DB9A5]' : 'bg-[#FFC857]'
                }`}
                style={{
                  left: `${Math.max(
                    6,
                    Math.min(94, 50 + pitchResult.centsOff * 0.9)
                  )}%`,
                  transform: 'translateX(-50%)',
                }}
              />
            )}
          </div>

          <div className="pt-2 text-[16px] font-medium text-[#12343B]">
            {pitchResult ? (
              pitchResult.status === 'in-tune' ? (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3DB9A5] text-[#12343B] font-bold">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>In tune ({pitchResult.frequency} Hz)</span>
                </span>
              ) : (
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFC857]/40 text-[#12343B]">
                  {pitchResult.frequency} Hz —{' '}
                  {pitchResult.status === 'flat'
                    ? 'Slightly low, tighten gently'
                    : 'Slightly high, loosen gently'}
                </span>
              )
            ) : (
              <span className="text-[#3F5C62]">
                Tap any string tile below to hear its exact reference tone.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 4 Reference Tone Tiles on Paper Surface */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {UKULELE_STRINGS.map((str) => {
          const isSelected = selectedTargetString === str.stringNumber;
          return (
            <button
              key={str.stringNumber}
              type="button"
              onClick={() => {
                setSelectedTargetString(str.stringNumber);
                ukuleleAudio.playString(str.stringNumber, 0, {
                  duration: 2.6,
                  volume: 0.34,
                });
              }}
              className={`p-5 rounded-[24px] bg-[#FFFCF5] text-left transition-all koa-shadow flex flex-col justify-between gap-3 koa-focus ${
                isSelected
                  ? 'ring-2 ring-[#12343B]'
                  : 'ring-1 ring-[#12343B]/12 hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[14px] font-semibold text-[#3F5C62]">
                  <span>String {str.stringNumber}</span>
                  <Volume2 className="w-4 h-4 text-[#12343B]" />
                </div>
                <div className="font-fraunces text-[26px] font-bold text-[#12343B] mt-1">
                  {str.note}
                </div>
                <div className="font-dm-mono text-[15px] text-[#3F5C62]">
                  {str.baseFrequency} Hz · {str.mnemonicWord}
                </div>
              </div>
              <p className="text-[15px] text-[#3F5C62] leading-snug">
                {str.positionLabel}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
