/**
 * Customer stories.
 *
 * Only add a story here with the customer's written permission. The strategy
 * is clear: no testimonials or results claims until they're genuine.
 * The page shows a "coming soon" state while this list is empty.
 */
export type Story = {
  slug: string;
  business: string;
  person: string;
  role: string;
  industry: string;
  location: string;
  quote: string;
  daysToLaunch: number;
  movedFrom: string;
  results: { label: string; value: string }[];
  summary: string;
};

export const stories: Story[] = [];

export const storyPromises = [
  {
    title: "Real names, with permission",
    body: "Every story names the business and the owner, and they've approved every word.",
  },
  {
    title: "How long it really took",
    body: "Days from first call to launch, including any delays and why they happened.",
  },
  {
    title: "What moved, and what didn't",
    body: "Where their data came from, and anything we couldn't bring across.",
  },
  {
    title: "What changed after 90 days",
    body: "In their words and their numbers. If it didn't help, we'll learn from that too.",
  },
];
