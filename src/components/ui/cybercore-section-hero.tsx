import React, { useState, useEffect, CSSProperties } from "react";

export interface CybercoreBackgroundProps {
    streamCount?: number;
}

const DEFAULT_STREAM_COUNT = 25;

const DATA_CHARS = ['0','1','R$','%','+','▲','■','◆','★','€','$','K','M','x'];

interface DataStream {
    id: number;
    left: string;
    duration: number;
    delay: number;
    chars: Array<{ char: string; opacity: number }>;
    fontSize: number;
}

const CybercoreBackground: React.FC<CybercoreBackgroundProps> = ({
    streamCount = DEFAULT_STREAM_COUNT,
}) => {
    const [streams, setStreams] = useState<DataStream[]>([]);

    useEffect(() => {
        const generated: DataStream[] = Array.from({ length: streamCount }).map((_, i) => {
            const charCount = Math.floor(Math.random() * 8) + 6;
            const chars = Array.from({ length: charCount }).map(() => ({
                char: DATA_CHARS[Math.floor(Math.random() * DATA_CHARS.length)],
                opacity: Math.random() * 0.7 + 0.3,
            }));
            return {
                id: i,
                left: `${Math.random() * 100}%`,
                duration: Math.random() * 4 + 6,
                delay: Math.random() * 8,
                chars,
                fontSize: Math.floor(Math.random() * 6) + 10,
            };
        });
        setStreams(generated);
    }, [streamCount]);

    return (
        <div className="cybercore-scene" role="img" aria-label="Background com fluxo de dados de anuncios e IA">
            <div className="cybercore-floor" />
            <div className="cybercore-column" />
            <div className="cybercore-data-container">
                {streams.map((stream) => (
                    <div
                        key={stream.id}
                        className="cybercore-data-stream"
                        style={{
                            left: stream.left,
                            animationDuration: `${stream.duration}s`,
                            animationDelay: `${stream.delay}s`,
                            fontSize: `${stream.fontSize}px`,
                        } as CSSProperties}
                    >
                        {stream.chars.map((char, idx) => (
                            <span key={idx} style={{ opacity: char.opacity }}>
                                {char.char}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CybercoreBackground;
