import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../firebase';
import { ref, onValue, set } from 'firebase/database';
import './Timer.css';

const DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

function formatTime(ms) {
    if (ms <= 0) return { h: '00', m: '00', s: '00' };
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return {
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
    };
}

const Timer = () => {
    const [startedAt, setStartedAt] = useState(undefined); // undefined = loading
    const [remaining, setRemaining] = useState(DURATION_MS);
    const [isFinished, setIsFinished] = useState(false);
    const intervalRef = useRef(null);

    // Listen to Firebase for the startedAt timestamp
    useEffect(() => {
        const timerRef = ref(db, 'hackathon/timerStartedAt');
        const unsub = onValue(timerRef, (snapshot) => {
            const val = snapshot.val();
            setStartedAt(val ?? null); // null means not started
        });
        return () => unsub();
    }, []);

    // Tick the clock
    useEffect(() => {
        if (startedAt === undefined || startedAt === null) {
            clearInterval(intervalRef.current);
            return;
        }

        const tick = () => {
            const elapsed = Date.now() - startedAt;
            const rem = DURATION_MS - elapsed;
            if (rem <= 0) {
                setRemaining(0);
                setIsFinished(true);
                clearInterval(intervalRef.current);
            } else {
                setRemaining(rem);
                setIsFinished(false);
            }
        };

        tick();
        intervalRef.current = setInterval(tick, 1000);
        return () => clearInterval(intervalRef.current);
    }, [startedAt]);

    const handleStart = async () => {
        const now = Date.now();
        await set(ref(db, 'hackathon/timerStartedAt'), now);
    };

    const time = formatTime(remaining);
    const isLoading = startedAt === undefined;
    const isRunning = startedAt !== null && !isFinished;

    // Progress for the ring (0 → 1 as time elapses)
    const elapsedFraction = startedAt
        ? Math.min(1, (DURATION_MS - remaining) / DURATION_MS)
        : 0;
    const circumference = 2 * Math.PI * 140; // radius 140
    const strokeDashoffset = circumference * (1 - elapsedFraction);

    return (
        <section className="timer-page">
            {/* Ambient blobs */}
            <div className="timer-blob timer-blob--1" />
            <div className="timer-blob timer-blob--2" />

            <div className="timer-inner">
                <div className="timer-label-top">
                    <span className="timer-dot" />
                    {isRunning ? 'Hackathon In Progress' : isFinished ? 'Hackathon Ended' : '24-Hour Hackathon Timer'}
                </div>

                <h1 className="timer-title">ENVISION 2026</h1>

                {/* Clock face */}
                <div className={`clock-wrap ${isRunning ? 'clock-running' : ''}`}>
                    {/* SVG ring */}
                    <svg className="clock-ring" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="150" cy="150" r="140"
                            fill="none"
                            stroke="rgba(30,64,175,0.15)"
                            strokeWidth="6"
                        />
                        {startedAt && (
                            <circle
                                cx="150" cy="150" r="140"
                                fill="none"
                                stroke="url(#timerGrad)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                transform="rotate(-90 150 150)"
                                className="ring-progress"
                            />
                        )}
                        <defs>
                            <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#1E40AF" />
                                <stop offset="100%" stopColor="#60A5FA" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Digits */}
                    <div className="clock-face">
                        {isLoading ? (
                            <span className="clock-loader">Loading…</span>
                        ) : isFinished ? (
                            <span className="clock-done">TIME'S UP</span>
                        ) : (
                            <div className="clock-digits">
                                <div className="digit-group">
                                    <span className="digit">{time.h}</span>
                                    <span className="digit-label">HRS</span>
                                </div>
                                <span className="digit-sep">:</span>
                                <div className="digit-group">
                                    <span className="digit">{time.m}</span>
                                    <span className="digit-label">MIN</span>
                                </div>
                                <span className="digit-sep">:</span>
                                <div className="digit-group">
                                    <span className="digit">{time.s}</span>
                                    <span className="digit-label">SEC</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Status / action */}
                {!isLoading && !isFinished && startedAt === null && (
                    <div className="timer-actions">
                        <p className="timer-subtitle">Timer has not started yet. Click below when the hackathon begins.</p>
                        <button className="timer-start-btn" onClick={handleStart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Start Timer
                        </button>
                    </div>
                )}

                {!isLoading && isRunning && (
                    <div className="timer-status-bar">
                        <span className="status-pill">
                            <span className="pulse-dot" />
                            Live
                        </span>
                    </div>
                )}

                {isFinished && (
                    <p className="timer-done-msg">The 24-hour hackathon window has closed. Thank you for participating!</p>
                )}
            </div>
        </section>
    );
};

export default Timer;
