export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  // tamaño visual del contenedor (px exactos de Figma)
  w: number;
  h: number;
}

export const CardService: ServiceCard[] = [
  {
    id: 1,
    title: "Functional Training",
    description:
      "Build strength, agility, and endurance with bodyweight-focused workouts.",
    image: "/img-service/gym.webp",
    alt: "Athlete doing push-ups in a gym",
    w: 790,
    h: 235,
  },
  {
    id: 2,
    title: "Yoga & Flexibility",
    description:
      "Improve balance, reduce stress, and enhance mobility through guided yoga sessions.",
    image: "/img-service/yoga.webp",
    alt: "Woman doing yoga on a mat",
    w: 380.1,
    h: 345,
  },
  {
    id: 3,
    title: "CrossFit & Conditioning",
    description:
      "Push your limits with high-intensity workouts designed for real results.",
    image: "/img-service/crossfit.webp",
    alt: "Man lifting kettlebell",
    w: 380,
    h: 345,
  },
  {
    id: 4,
    title: "Boxing Classes",
    description:
      "Train like a fighter with expert-led boxing sessions to boost confidence and power.",
    image: "/img-service/boxing.webp",
    alt: "Boxer throwing punch in the ring",
    w: 538.26,
    h: 600,
  },
];
