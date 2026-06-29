export interface Project {
  id: string;
  title: string;
  description: string;
  detail: string;
  images: string[];
  category: string;
  tags: string[];
}

export interface ProjectCategory {
  id: string;
  label: string;
  eyebrow: string;
  tagline: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "living-room",
    label: "Living Rooms",
    eyebrow: "Residential — I",
    tagline: "Where Architecture Meets Everyday Life",
    projects: [
      {
        id: "lr-01",
        title: "Ledakent Residence",
        description: "A sweeping open-plan salon in Kastamonu — warm oak flooring, a dramatic fireplace wall, and track lighting that sculpts every surface with precision.",
        detail: "3ds Max · V-Ray · Photoshop",
        images: [
          "/images/living-room/salon04.jpg",
          "/images/living-room/salon05.jpg",
        ],
        category: "Living Room",
        tags: ["Residential", "Kastamonu", "Turkey"],
      },
      {
        id: "lr-02",
        title: "Ledakent Duplex",
        description: "A double-height duplex with a floating staircase, crystal chandelier, and open dining. Every angle considered, every material deliberately chosen.",
        detail: "3ds Max · V-Ray · Photoshop",
        images: [
          "/images/living-room/salon02.jpg",
          "/images/living-room/salon03.jpg",
        ],
        category: "Living Room",
        tags: ["Residential", "Duplex", "Kastamonu"],
      },
      {
        id: "lr-03",
        title: "Ledakent Salon",
        description: "Natural light floods the living space through floor-to-ceiling windows. A calm, considered palette of grey, ivory, and walnut — restrained luxury at its finest.",
        detail: "3ds Max · Corona · Photoshop",
        images: [
          "/images/living-room/salon01.jpg",
          "/images/living-room/salon06.jpg",
        ],
        category: "Living Room",
        tags: ["Residential", "Open Plan", "Kastamonu"],
      },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchens",
    eyebrow: "Residential — II",
    tagline: "Culinary Spaces Elevated to Art",
    projects: [
      {
        id: "k-01",
        title: "Cologne Kitchen",
        description: "A Cologne residence kitchen with dark emperador marble countertops, aged oak cabinetry, and a brick-wall backdrop that brings warmth and texture to every surface.",
        detail: "3ds Max · V-Ray · Photoshop",
        images: [
          "/images/kitchen/kitchen-01.jpg",
          "/images/kitchen/kitchen-02.jpg",
        ],
        category: "Kitchen",
        tags: ["Residential", "Cologne", "Germany"],
      },
      {
        id: "k-02",
        title: "Cologne Detail Study",
        description: "A close study of material and craft — the cutlery drawer, the Smeg espresso machine, the emperor marble in morning light. Photorealism at its most intimate.",
        detail: "3ds Max · Corona · Photoshop",
        images: [
          "/images/kitchen/kitchen-03.jpg",
          "/images/kitchen/kitchen-01.jpg",
        ],
        category: "Kitchen",
        tags: ["Residential", "Detail", "Cologne"],
      },
      {
        id: "k-03",
        title: "Cologne Atelier",
        description: "The full kitchen view — island seating, an industrial-meets-classic aesthetic, and a golden figurine lamp that punctuates the space with unexpected wit.",
        detail: "3ds Max · V-Ray · Lightroom",
        images: [
          "/images/kitchen/kitchen-02.jpg",
          "/images/kitchen/kitchen-03.jpg",
        ],
        category: "Kitchen",
        tags: ["Residential", "Industrial", "Germany"],
      },
    ],
  },
  {
    id: "bathroom",
    label: "Bathrooms",
    eyebrow: "Residential — III",
    tagline: "Sanctuaries of Considered Luxury",
    projects: [
      {
        id: "b-01",
        title: "Ankara White Marble Suite",
        description: "Full-height Calacatta marble, rose gold fixtures, and a freestanding oval tub framed in backlit stone. A master bathroom conceived as a private spa.",
        detail: "3ds Max · V-Ray · Photoshop",
        images: [
          "/images/bathroom/Banyo_02.jpg",
          "/images/bathroom/Banyo_03.jpg",
        ],
        category: "Bathroom",
        tags: ["Residential", "Ankara", "Turkey"],
      },
      {
        id: "b-02",
        title: "Ankara Vanity Study",
        description: "A detailed render of the vanity zone — pendant drops in rose gold, a vessel basin, and the warm glow of an LED mirror against sculptural marble.",
        detail: "3ds Max · Corona · Photoshop",
        images: [
          "/images/bathroom/Banyo_01.jpg",
          "/images/bathroom/Banyo_02.jpg",
        ],
        category: "Bathroom",
        tags: ["Residential", "Vanity", "Ankara"],
      },
      {
        id: "b-03",
        title: "Ankara Warm Stone Bathroom",
        description: "Rich travertine tones, an oval backlit mirror, and an olive tree as a living accent. A bathroom that balances the warmth of nature with modern precision.",
        detail: "3ds Max · V-Ray · Lightroom",
        images: [
          "/images/bathroom/bathroom01.jpg",
          "/images/bathroom/bathroom02.jpg",
        ],
        category: "Bathroom",
        tags: ["Residential", "Travertine", "Ankara"],
      },
      {
        id: "b-04",
        title: "Ankara Guest WC",
        description: "A compact guest bathroom where every centimetre is resolved — fluted wall panel, a rounded mirror with warm backlight, and a slat wood accent wall.",
        detail: "3ds Max · Corona · Photoshop",
        images: [
          "/images/bathroom/bathroom03.jpg",
          "/images/bathroom/bathroom01.jpg",
        ],
        category: "Bathroom",
        tags: ["Residential", "Compact", "Ankara"],
      },
    ],
  },
  {
    id: "bedroom",
    label: "Bedrooms",
    eyebrow: "Residential — IV",
    tagline: "Spaces Conceived for Rest and Reverie",
    projects: [
      {
        id: "bd-01",
        title: "Izmir Master Suite",
        description: "Deep mocha tones, a rose gold dressing table, and dramatic floor-to-ceiling curtains. A master bedroom in Izmir that commands presence and invites calm.",
        detail: "3ds Max · V-Ray · Photoshop",
        images: [
          "/images/bedroom/bedroom-02.jpg",
          "/images/bedroom/bedroom-03.jpg",
        ],
        category: "Bedroom",
        tags: ["Residential", "Izmir", "Turkey"],
      },
      {
        id: "bd-02",
        title: "Izmir Soft Bedroom",
        description: "A serene palette of blush and oak — textured stone headboard wall, pendant lamps, and herringbone flooring that grounds the space in warmth.",
        detail: "3ds Max · Corona · Photoshop",
        images: [
          "/images/bedroom/bedroom-01.jpg",
          "/images/bedroom/bedroom-02.jpg",
        ],
        category: "Bedroom",
        tags: ["Residential", "Soft Tones", "Izmir"],
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    eyebrow: "Commercial — V",
    tagline: "Brand Experiences Rendered in Space",
    projects: [
      {
        id: "c-01",
        title: "ARD Office — Reception",
        description: "The reception hall of ARD Yönetim in Kastamonu — a vertical oak slat wall, living moss backdrop, and a monolithic black reception desk that commands authority.",
        detail: "3ds Max · V-Ray · Photoshop",
        images: [
          "/images/commercial/commercial-01.jpg",
          "/images/commercial/commercial-03.jpg",
        ],
        category: "Commercial",
        tags: ["Office", "Kastamonu", "Turkey"],
      },
      {
        id: "c-02",
        title: "ARD Office — Board Room",
        description: "The ARD boardroom viewed through glass — a sculptural oak slat canopy descends from ceiling to column, framing the conference table with architectural drama.",
        detail: "3ds Max · Corona · Photoshop",
        images: [
          "/images/commercial/commercial-02.jpg",
          "/images/commercial/commercial-01.jpg",
        ],
        category: "Commercial",
        tags: ["Boardroom", "Corporate", "Kastamonu"],
      },
      {
        id: "c-03",
        title: "ARD Office — Lounge",
        description: "The waiting lounge — a living plant wall bursting through raw stone, contrasted with black steel furniture and the warmth of the oak brand wall beyond.",
        detail: "3ds Max · V-Ray · Lightroom",
        images: [
          "/images/commercial/commercial-03.jpg",
          "/images/commercial/commercial-02.jpg",
        ],
        category: "Commercial",
        tags: ["Lounge", "Biophilic", "Kastamonu"],
      },
    ],
  },
];
