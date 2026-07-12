"use client"
import { forwardRef, type ReactNode, useRef, useState } from "react";

interface Props {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "ghost";
    className?: string;
    onClick?: () => void;
}

export const MagneticButton = forwardRef<HTMLAnchorElement, Props>(
    ({ children, href = "#", variant = "primary", className = "", onClick }, ref) => {
        const wrap = useRef<HTMLDivElement>(null);
        const [offset, setOffset] = useState({ x: 0, y: 0 });

        const onMove = (e: React.MouseEvent) => {
            if (!wrap.current) return;
            const r = wrap.current.getBoundingClientRect();
            setOffset({
                x: (e.clientX - (r.left + r.width / 2)) * 0.25,
                y: (e.clientY - (r.top + r.height / 2)) * 0.25,
            });
        };
        const onLeave = () => {
            setOffset({ x: 0, y: 0 });
        };

        const base =
            "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all";
        const styles =
            variant === "primary"
                ? "bg-[var(--gold)] text-[var(--primary-foreground)] gold-glow hover:brightness-110"
                : "border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] text-foreground hover:bg-[color-mix(in_oklab,var(--gold)_10%,transparent)]";

        return (
            <div
                ref={wrap}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
                className="inline-block transition-transform duration-200 ease-out"
            >
                <a ref={ref} href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
                    {children}
                </a>
            </div>
        );
    }
);
MagneticButton.displayName = "MagneticButton";
