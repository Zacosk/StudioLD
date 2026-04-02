import React from "react";

export interface HomeSectionProps {
    title: string;
    children?: React.ReactNode;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ title, children }) => {
    return (
        <div className="mb-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            {children}
        </div>
    );
};