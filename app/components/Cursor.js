import React, { useEffect, useState } from 'react';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
    const [isLinkHovered, setIsLinkHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX + window.scrollX,
                y: event.clientY + window.scrollY,
                z: 0
            });
        };

        const handleLinkMouseOver = () => {
            setIsLinkHovered(true);
        };

        const handleLinkMouseOut = () => {
            setIsLinkHovered(false);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const elements = document.querySelectorAll('a[href^="/"], button, h3');
        elements.forEach((element) => {
            element.addEventListener('mouseover', handleLinkMouseOver);
            element.addEventListener('mouseout', handleLinkMouseOut);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            elements.forEach((element) => {
                element.removeEventListener('mouseover', handleLinkMouseOver);
                element.removeEventListener('mouseout', handleLinkMouseOut);
            });
        };
    }, []);

    return (
        <>
            <div
                className="absolute z-[50] transition-transform duration-1000 ease-out cursor-border"
                style={{
                    transform: `translate3d(${position.x+5}px, ${position.y+5}px, ${position.z+5}px) scale(${isLinkHovered ? 1.2 : 1})`,
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16,185,129,0.3)',
                    boxShadow: '0px 0px 50px 2px rgba(16,185,129,0.5)',
                    filter: 'drop-shadow(0px 0px 50px rgba(16,185,129,0.5))'
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-full"
                />
            </div>
            <div
                className="absolute z-[55] transition-transform duration-500 ease-out"
                style={{
                    transform: `translate3d(${position.x+5}px, ${position.y+5}px, ${position.z+5}px) scale(${isLinkHovered ? 1.25 : 1})`,
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16,185,129,0.3)',
                    boxShadow: '0px 0px 50px 2px rgba(16,185,129,0.5)',
                    filter: 'drop-shadow(0px 0px 50px rgba(16,185,129,0.5))'
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-full"
                />
            </div>
            <div
                className={`absolute z-[60] transition-transform duration-150 ease-out mix-blend-difference cursor-root ${isLinkHovered ? 'bg-green-500 shadow-[0_0_50px_2px_rgb(16,185,129)]' : 'bg-white'}`}
                style={{
                    transform: `translate3d(${position.x+5}px, ${position.y+5}px, ${position.z+5}px) scale(${isLinkHovered ? 1.3 : 1})`,
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    boxShadow: '0px 0px 50px 2px rgba(16,185,129,0.5)',
                    filter: 'drop-shadow(0px 0px 50px rgba(16,185,129,0.5))'
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-full"
                />
            </div>
        </>
    );
}

export default Cursor;

