
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number
}

export const seedData: SeedData = {
    entries: [
        {
            description: "DB description sobre pending",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            description: "DB description sobre in-progres",
            status: "in-progress",
            createdAt: Date.now() - 1000,
        },
        {
            description: "DB description sobre finish",
            status: "finished",
            createdAt: Date.now() - 100000,
        }
    ]
}