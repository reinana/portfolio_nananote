import React from 'react'

type BadgeProps = {
    title: string;
}
const techColorMap = new Map<string, string>([
    ["Next.js 14", "bg-[#171717]"],
    ["React", "bg-[#5ED3F3]"],
    ["tailwind", "bg-[#38BDF8]"],
    ["AWS EC2", "bg-[#ED8134]"],
    ["supabase", "bg-[#37996B]"]
]);

const Badge = ({ title }: BadgeProps) => {
    const colorCode = techColorMap.get(title)
    return (
        <div className={`flex items-center ${colorCode} text-white text-sm text-center font-semibold rounded-lg px-2`}>{title}</div>
    )
}

export default Badge