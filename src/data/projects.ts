export interface Project {
    slug: string;
    title: string;
    client: string;
    year: string;
    location: string;
    services: string[];
    image: string;
    description: string;
    stats: {
        label: string;
        value: string;
    }[];
}

export const PROJECTS: Project[] = [
    {
        slug: "ardenta-tower",
        title: "Ardenta Tower",
        client: "PT. Skymetra Development",
        year: "2022",
        location: "Jakarta, Indonesia",
        services: ["HVAC Installation", "Electrical Grid", "Smart Building Control"],
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        description:
            "A 45-story sustainable office tower in the heart of Jakarta. We provided a complete turnkey solution for the building's central cooling plant and high-voltage electrical distribution system. The project focused on energy efficiency, utilizing smart sensors to optimize cooling based on occupancy.",
        stats: [
            { label: "Cooling Capacity", value: "2,500 TR" },
            { label: "Power Load", value: "5.2 MW" },
            { label: "Duration", value: "18 Months" },
        ],
    },
    {
        slug: "bali-central-mall",
        title: "Bali Central Mall",
        client: "Pacific Retail Group",
        year: "2023",
        location: "Denpasar, Bali",
        services: ["Air Conditioning", "Lighting Design", "Emergency Power"],
        image:
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop",
        description:
            "Bali's premier shopping destination required a robust climate control system to handle tropical humidity. Our team installed a state-of-the-art chiller system and an artistic lighting package for the facade. We also integrated a backup generator system to ensure 100% uptime.",
        stats: [
            { label: "Floor Area", value: "85,000 m²" },
            { label: "HVAC Units", value: "120+" },
            { label: "Completion", value: "Nov 2023" },
        ],
    },
    {
        slug: "indotech-plant",
        title: "Indotech Plant",
        client: "Indotech Industrial Corp.",
        year: "2021",
        location: "Surabaya, East Java",
        services: ["Industrial Ventilation", "Heavy Power", "Process Cooling"],
        image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop",
        description:
            "A specialized manufacturing facility requiring precise temperature and humidity control. We designed and installed a custom industrial ventilation system and the facility's main power substation. Safety and reliability were providing redundant systems for critical production lines.",
        stats: [
            { label: "Power Capacity", value: "10 MW" },
            { label: "Ventilation", value: "500k CFM" },
            { label: "Safety Rating", value: "Tier A" },
        ],
    },
];
