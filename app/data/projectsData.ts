// @/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  category: 'branding' | 'packaging' | 'flyer'; // Simplified categories
  imageSrc: string;
  pdfUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "branding-01",
    title: "Ecosystem Strategy 01",
    category: "branding",
    imageSrc: "/cover/cover3.jpg",
    pdfUrl: "/branding/branding3.pdf",
  },
  {
    id: "packaging-01",
    title: "Tactile Structural Pack 01",
    category: "packaging",
    imageSrc: "/packaging/packaging1.jpg",
  },
  {
    id: "flyer-01",
    title: "Premium Print 01",
    category: "flyer",
    imageSrc: "/flyer/flyer1.jpg",
  },
  {
    id: "branding-02",
    title: "Style Matrix 02",
    category: "branding",
    imageSrc: "/cover/cover2.jpg",
    pdfUrl: "/branding/branding2.pdf",
  },
  {
    id: "packaging-02",
    title: "Commercial Label 02",
    category: "packaging",
    imageSrc: "/packaging/packaging2.jpg",
  },
  {
    id: "flyer-02",
    title: "Event Composition 02",
    category: "flyer",
    imageSrc: "/flyer/flyer2.jpg",
  },
];