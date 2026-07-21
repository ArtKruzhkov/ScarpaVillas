export type Villa = {
  id: string;
  hero: {
    image: string;
    title: string;
    subtitle: {
      part1: string;
      italic: string;
      part2: string;
    };
  };
  overview: {
    title: string;
    description: string;
    images: {
      left: string;
      center: string;
      right: string;
    };
  };
  features: {
    items: {
      icon: string;
      alt: string;
      text?: string;
      before?: string;
      accent?: string;
    }[];

    images: {
      left: string;
      bottom: string;
      bottomObjectPosition?: string;
    };

    text: {
      intro: string;
      paragraph1: string;
      paragraph2: string;
    };
  };
  bookingCTA: {
    title: {
      bold: string;
      italic: string;
      text: string;
    };
  };
  card: {
    title: string;
    description: string;
    image: string;
  };
};

export const villas: Villa[] = [
  {
    id: 'tettineive',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-tettineive.png`,
      title: 'Tettineive',
      subtitle: {
        part1: 'A place for gathering,',
        italic: 'space, and quiet moments',
        part2: 'in the Langhe.',
      },
    },
    overview: {
      // title:
      //   'Tettineive is the most spacious of the Scarpa Villas — designed for families, gatherings, and time spent together without losing a sense of privacy.',

      // description:
      //   'Five bedrooms, generous living areas, and a large private garden create a setting where each moment unfolds naturally, between shared experiences and quiet personal time.',

      title: 'villa.tettineive.overview.title',
      description: 'villa.tettineive.overview.description',

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-left.png`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-center.png`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-right.png`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'Up to',
          accent: '12 guests',
          alt: 'Up to 12 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: '5 bedrooms',
          alt: '5 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/garden.svg`,
          accent: 'Private garden',
          alt: 'Private garden',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/panoramic_views.svg`,
          text: 'Panoramic views',
          alt: 'Panoramic views',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettineive-left.png`,
        bottom: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettineive-bottom.png`,
        bottomObjectPosition: 'object-[97%_center]',
      },

      // text: {
      //   intro: 'At Tettineive, space becomes part of the experience.',

      //   paragraph1:
      //     'Mornings begin in the quiet of the garden, with light stretching across the hills. Afternoons unfold slowly — between conversation, rest, and time outdoors.',

      //   paragraph2:
      //     'In the evening, the villa gathers everyone together again — around the table, in the open air, or simply watching the landscape change with the light.',
      // },
      text: {
        intro: 'villa.tettineive.features.intro',
        paragraph1: 'villa.tettineive.features.paragraph1',
        paragraph2: 'villa.tettineive.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'Villa Tettineive:',
        italic: 'ideal for families,',
        text: 'group stays, and private gatherings.',
      },
    },
    card: {
      title: 'Tettineive',
      description: 'The most spacious villa for gatherings, shared moments, and time together.',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/tettineive.png`,
    },
  },

  {
    id: 'bogliona',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-bogliona.png`,
      title: 'La Bogliona',
      subtitle: {
        part1: 'A quiet retreat for',
        italic: 'intimacy, warmth, and slow evenings',
        part2: 'in the Langhe.',
      },
    },
    overview: {
      // title:
      //   'La Bogliona is the most intimate of the Scarpa Villas — a space designed for couples and small groups who value privacy, warmth, and a slower rhythm of living.',

      // description:
      //   'With its direct view of the infinity pool and the surrounding vineyards, the villa offers a setting where the landscape becomes part of every moment.',

      title: 'villa.bogliona.overview.title',
      description: 'villa.bogliona.overview.description',

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bogliona-left.png`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bogliona-center.png`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bogliona-right.png`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'Up to',
          accent: '9 guests',
          alt: 'Up to 9 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: '4 bedrooms',
          alt: '4 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/firepit.svg`,
          accent: 'Private garden & firepit',
          alt: 'Private garden & firepit',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/pool_view.svg`,
          text: 'Direct view of the infinity pool',
          alt: 'Direct view of the infinity pool',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bogliona-left.png`,
        bottom: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bogliona-bottom.png`,
      },

      // text: {
      //   intro: 'At La Bogliona, everything feels closer.',

      //   paragraph1:
      //     'Light enters through wide windows, opening the villa to the surrounding landscape, while inside, the atmosphere remains warm and grounded.',

      //   paragraph2:
      //     'Evenings unfold slowly — by the fire, in the garden, or around the table — where time seems to soften and extend beyond the moment.',
      // },
      text: {
        intro: 'villa.bogliona.features.intro',
        paragraph1: 'villa.bogliona.features.paragraph1',
        paragraph2: 'villa.bogliona.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'Villa La Bogliona:',
        italic: 'ideal for couples',
        text: 'and small groups seeking privacy.',
      },
    },
    card: {
      title: 'La Bogliona',
      description: 'The most intimate villa for couples and quiet stays.',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/bogliona.png`,
    },
  },

  {
    id: 'bricchi',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-bricchi.png`,
      title: 'I Bricchi',
      subtitle: {
        part1: 'Light, openness, and a ',
        italic: 'modern way of living',
        part2: 'in the Langhe.',
      },
    },
    overview: {
      // title:
      //   'I Bricchi is a villa defined by light and openness — where large windows and panoramic views bring the landscape into every room.',

      // description:
      //   'Designed for shared moments and quiet reflection alike, it offers a contemporary space that feels both expansive and intimate.',

      title: 'villa.bricchi.overview.title',
      description: 'villa.bricchi.overview.description',

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bricchi-left.png`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bricchi-center.png`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bricchi-right.png`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'Up to',
          accent: '10 guests',
          alt: 'Up to 10 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: '5 bedrooms',
          alt: '5 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/large_window.svg`,
          accent: 'Panoramic balconies & large windows',
          alt: 'Panoramic balconies & large windows',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/pool_view.svg`,
          text: 'Outdoor pergola space',
          alt: 'Outdoor pergola space',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bricchi-left.png`,
        bottom: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bricchi-bottom.png`,
      },

      // text: {
      //   intro: 'At I Bricchi, light becomes part of the experience.',

      //   paragraph1:
      //     'Throughout the day, it moves through the villa, shifting the atmosphere from morning clarity to soft evening tones.',

      //   paragraph2:
      //     'Spaces are designed for both gathering and retreat — from long conversations under the pergola to quiet moments by the fireplace.',
      // },
      text: {
        intro: 'villa.bricchi.features.intro',
        paragraph1: 'villa.bricchi.features.paragraph1',
        paragraph2: 'villa.bricchi.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'Villa I Bricchi:',
        italic: 'ideal for groups who value light,',
        text: 'openness, and contemporary design.',
      },
    },
    card: {
      title: 'I Bricchi',
      description: 'A light-filled contemporary villa with panoramic views.',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/bricchi.png`,
    },
  },

  {
    id: 'tettimorra',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-tettimorra.png`,
      title: 'Tettimorra',
      subtitle: {
        part1: 'A timeless retreat overlooking ',
        italic: 'the vineyards',
        part2: ' of Monvigliero.',
      },
    },
    overview: {
      // title:
      //   'Tettimorra is a villa rooted in Piedmontese tradition — where the atmosphere of a historic countryside home has been carefully preserved and reimagined.',

      // description:
      //   'With its restored wooden beams, quiet interiors, and direct views over the Monvigliero vineyard, it offers a stay defined by intimacy, authenticity, and a deep connection to the land.',

      title: 'villa.tettimorra.overview.title',
      description: 'villa.tettimorra.overview.description',

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettimorra-left.png`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettimorra-center.png`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettimorra-right.png`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'Up to',
          accent: '10 guests',
          alt: 'Up to 10 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: '4 - 5 bedrooms',
          alt: '4-5 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/garden.svg`,
          accent: 'Terrace overlooking Monvigliero',
          alt: 'Terrace overlooking Monvigliero',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/panoramic_views.svg`,
          text: 'Traditional architectural details',
          alt: 'Traditional architectural details',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettimorra-left.png`,
        bottom: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettimorra-bottom.png`,
      },

      // text: {
      //   intro:
      //     'At Tettimorra, time moves differently — slower, more gently, following the rhythm of the vineyards.',

      //   paragraph1:
      //     'From the terrace, the Monvigliero landscape unfolds like a continuous horizon of vines, changing with the light throughout the day.',

      //   paragraph2:
      //     'Mornings begin in silence, with coffee overlooking the hills. Evenings settle into a quiet stillness, where the presence of the landscape becomes part of the experience.',
      // },
      text: {
        intro: 'villa.tettimorra.features.intro',
        paragraph1: 'villa.tettimorra.features.paragraph1',
        paragraph2: 'villa.tettimorra.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'Villa Tettimorra:',
        italic: 'ideal for slow living,',
        text: 'vineyard views, and quiet moments.',
      },
    },
    card: {
      title: 'Tettimorra',
      description: 'A traditional villa rooted in the vineyards of Monvigliero',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/tettimorra.png`,
    },
  },
];
