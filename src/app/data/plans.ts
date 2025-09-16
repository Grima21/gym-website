import { Activity, Dumbbell, Award, Crown, Weight } from "lucide-react";

export const plans = [
  {
    id: 1,
    title: "Boxing Plan",
    description: "Train like a fighter",
    icon: Activity, // o Target
    monthly: "Monthly: $39",
    monthly3: "3 Months: $99",
    yearly: "Yearly: $299/",

    features: [
      "Unlimited boxing classes",
      "Sparring sessions",
      "Access to all equipment",
      "Personalized training",
    ],
  },
  {
    id: 2,
    title: "CrossFit Plan",
    description: "High-intensity workouts",
    icon: Dumbbell,
    monthly: "Monthly: $49",
    monthly3: "3 Months: $129",
    yearly: "Yearly: $399",
    features: [
      "Unlimited CrossFit sessions",
      "Specialized coaching",
      "WOD (workout of the day)",
      "Strength programs",
    ],
  },
  {
    id: 3,
    title: "Regular Gym",
    description: "Unlimited equipment access",
    icon: Weight,
    monthly: "Monthly: $29",
    monthly3: "3 Months: $79",
    yearly: "Yearly: $249",
    features: [
      "Full equipment access",
      "Basic coaching guidance",
      "Flexible schedules",
      "Basic nutrition guidance",
    ],
  },
  {
    id: 4,
    title: "All Access Plan",
    description: "All-in-one experience",
    icon: Crown, // o Award
    monthly: "Monthly: $69",
    monthly3: "3 Months: $179",
    yearly: "Yearly: $549",

    premium: true,
    features: [
      "Full gym access",
      "CrossFit and boxing classes",
      "Nutrition guidance",
      "Priority bookings",
    ],
  },
];
