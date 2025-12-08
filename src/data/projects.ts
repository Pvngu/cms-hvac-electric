import ProjectImage1 from "@assets/projects/pacific-heights-towers-san-francisco-ca-primary-photo.webp";
import ProjectImage2 from "@assets/projects/Santa_Monica_Place_Macerich.webp";
import ProjectImage3 from "@assets/projects/San-Diego-Otay-Mesa-neighborhood.webp";

export interface Project {
    slug: string;
    title: string;
    client: string;
    year: string;
    location: string;
    services: string[];
    image: ImageMetadata;
    description: string;
    stats: {
        label: string;
        value: string;
    }[];
}

export const PROJECTS: Project[] = [
    {
        slug: "pacific-heights-tower",
        title: "Pacific Heights Tower",
        client: "SoCal Development Group",
        year: "2023",
        location: "San Diego, CA",
        services: ["HVAC Installation", "Electrical Grid", "Smart Building Control"],
        image:
            ProjectImage1,
        description:
            "A premier high-rise in downtown San Diego. We provided a complete turnkey solution for the building's central cooling plant and high-voltage electrical distribution system. The project focused on Title 24 compliance and energy efficiency.",
        stats: [
            { label: "Cooling Capacity", value: "2,500 TR" },
            { label: "Power Load", value: "5.2 MW" },
            { label: "Duration", value: "18 Months" },
        ],
    },
    {
        slug: "santa-monica-plaza",
        title: "Santa Monica Plaza",
        client: "West Coast Retail",
        year: "2024",
        location: "Los Angeles, CA",
        services: ["Air Conditioning", "Lighting Design", "Emergency Power"],
        image:
            ProjectImage2,
        description:
            "A luxury shopping destination in LA requiring a robust climate control system. Our team installed a state-of-the-art chiller system and an artistic lighting package for the facade. We also integrated a backup generator system to ensure 100% uptime.",
        stats: [
            { label: "Floor Area", value: "85,000 sq ft" },
            { label: "HVAC Units", value: "120+" },
            { label: "Completion", value: "Nov 2023" },
        ],
    },
    {
        slug: "mesa-industrial-hub",
        title: "Mesa Industrial Hub",
        client: "TechWay Corp.",
        year: "2022",
        location: "San Diego, CA",
        services: ["Industrial Ventilation", "Heavy Power", "Process Cooling"],
        image:
            ProjectImage3,
        description:
            "A specialized manufacturing facility in Otay Mesa requiring precise temperature and humidity control. We designed and installed a custom industrial ventilation system and the facility's main power substation.",
        stats: [
            { label: "Power Capacity", value: "10 MW" },
            { label: "Ventilation", value: "500k CFM" },
            { label: "Safety Rating", value: "Tier A" },
        ],
    },
];
