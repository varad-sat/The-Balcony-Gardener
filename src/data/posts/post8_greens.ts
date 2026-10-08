import { Post } from '../../types';
import { defaultAuthor } from './author';

export const post8Greens: Post = {
  id: 'growing-leafy-greens-you-can-harvest-all-year',
  slug: 'growing-leafy-greens-you-can-harvest-all-year',
  title: 'Growing Leafy Greens You Can Harvest All Year',
  subtitle: 'Cut-and-come-again harvesting, succession sowing, and cold-hardy brassicas for continuous salad bowls across four seasons.',
  category: 'Vegetables',
  excerpt: 'Supermarket salad mixes spoil in days, but balcony greens stay crisp on the stem until you need them. Discover the best varieties, succession sowing schedules, and winter shielding for year-round homegrown bowls.',
  author: defaultAuthor,
  date: 'June 11, 2026',
  publishedTimestamp: '2026-06-11',
  readTimeMinutes: 8,
  featured: false,
  imageUrl: '/images/leafy_greens.jpg',
  imageAlt: 'Vibrant organic lettuce and leafy salad greens in container planter boxes',
  coverStyle: {
    gradient: 'from-[#194D33] via-[#26704C] to-[#399468]',
    darkGradient: 'from-[#0A2216] via-[#113423] to-[#1A4C34]',
    accentColor: '#34D399',
    badgeBg: 'bg-emerald-900/60 text-emerald-200 border-emerald-700/50',
    illustrationType: 'leafy-greens'
  },
  tags: ['Leafy Greens', 'Salad Garden', 'Succession Planting', 'Winter Gardening', 'Urban Harvest'],
  quickTip: {
    title: 'The Cut-and-Come-Again Harvest Secret',
    text: 'Never yank up the entire root crown of leaf lettuces, chard, or kale! Instead, use clean scissors to trim only the mature outer leaves about one inch above the soil line, leaving the central growing heart (the apical meristem) intact. The plant will produce new tender leaves from the core for up to eight consecutive weeks.'
  },
  keyTakeaways: [
    'Leafy greens possess shallow root systems, making them exceptional candidates for wide, shallow railing troughs and 6-inch window boxes.',
    'Greens thrive in partial shade (3 to 4 hours of morning sun), which prevents summer heat bolting and keeps leaves tender.',
    'Succession sowing a small pinch of seeds every two to three weeks guarantees a never-ending pipeline of crisp salads.',
    'Asian greens like Tatsoi and Mizuna withstand freezing temperatures down to 20°F (-6°C) under simple fabric fleece.'
  ],
  sections: [
    {
      heading: 'The Daily Salad Revolution',
      paragraphs: [
        "Store-bought packaged salad mixes are notoriously fragile. Packed in modified-atmosphere plastic bags, leaves undergo rapid oxidation the second the seal is broken, degenerating into soggy, unappetizing leaves within forty-eight hours. By contrast, having three or four rectangular railing boxes of live, thriving greens on your balcony completely changes your culinary life.",
        "When your salad is still growing until three minutes before dinner, you experience crisp textures, peppery bite, and vibrant chlorophyll that no grocery store can replicate. Even better, leafy greens are the ultimate high-return urban crop: they grow quickly, require minimal soil depth, tolerate shaded apartment exposures, and can be harvested in every single month of the calendar year with minimal protection."
      ]
    },
    {
      heading: 'The 4-Season Balcony Greens Lineup',
      subheading: 'Choosing the right varieties for heat, frost, and shoulder seasons',
      paragraphs: [
        "To achieve uninterrupted year-round harvests, you must rotate varieties that match the temperature profile of each season:",
        "1. Spring & Fall Standards: Loose-leaf lettuces such as 'Black Seeded Simpson', 'Lollo Rossa', and 'Salad Bowl' produce delicate ruffled foliage that relishes crisp 55°F to 70°F (13°C to 21°C) weather. Butterhead varieties like 'Tom Thumb' form charming tennis-ball-sized heads perfect for individual bowls.",
        "2. Summer Heat-Resistant Heroes: When summer temperatures climb, ordinary lettuces bolt—sending up bitter, milky flowering stalks. In hot months, switch to heat-tolerant greens: 'Jericho' romaine, Malabar spinach, Swiss chard ('Bright Lights'), and New Zealand spinach, which thrive under blazing sun without losing sweetness.",
        "3. Winter Frost Champions: Cold weather actually concentrates sugars in cold-hardy brassicas, making them sweeter after frost! Asiatic greens like Tatsoi (which grows in gorgeous flat rosettes), Mizuna (peppery serrated frills), 'Winter Density' lettuce, and Dinosaur Kale (Lacinato) will happily endure light freezes and snow flurries with nothing more than a transparent plastic tote inverted over the planter box.",
        "4. Spicy Accent Greens: Elevate your bowl with Wild Rocket (Arugula) and Watercress. Arugula sprouts in forty-eight hours and provides zesty, peppery complexity to balance buttery lettuces."
      ]
    },
    {
      heading: 'The Master Technique: Succession Sowing',
      paragraphs: [
        "The biggest pitfall for beginners is sowing an entire packet of 500 lettuce seeds in a single afternoon. Four weeks later, you have sixty heads of lettuce maturing simultaneously—far more than you can eat—followed by an empty, barren planter for the rest of the season.",
        "The solution is disciplined succession sowing. Divide your window box or trough into three sections. Sow a modest pinch of seeds in Section 1 on Week 1. Sow Section 2 on Week 3. Sow Section 3 on Week 5. By the time Section 3 is germinating, Section 1 is ready for its first cut-and-come-again harvest. By rotating this continuous rhythm, you achieve a steady, perpetual harvest without gluts or dry spells."
      ],
      steps: [
        {
          title: 'Sow at Shallow Depth',
          detail: 'Lettuce seeds need light to germinate! Sprinkle seeds across moist potting soil, press down gently with your palm, and dust with barely 1/8 inch of fine vermiculite or compost.'
        },
        {
          title: 'Mist Gently',
          detail: 'Use a fine misting bottle during the first week so you do not blast tiny seeds down into deep darkness with heavy water streams.'
        },
        {
          title: 'Thin Early and Eat the Thinnings',
          detail: 'When seedlings are two inches tall, thin them to 4 inches apart. Never discard the thinnings—they are gourmet microgreens!'
        }
      ]
    },
    {
      heading: 'Soil Depth and Container Economics',
      subheading: 'Greens don’t need deep pots—maximize surface area',
      paragraphs: [
        "Unlike taproot crops like carrots or deep-rooted fruiting tomatoes, leafy greens have shallow, fibrous root systems that inhabit the top 4 to 6 inches of soil. This means you do not need bulky, heavy 10-gallon tubs.",
        "Take advantage of this biology by utilizing wide, shallow railing planters, recycled wooden wine crates lined with weed fabric, or modular vertical pocket planters attached to balcony walls. A standard 24-inch long by 6-inch deep railing planter holds enough soil volume to sustain a family’s nightly side-salad greens all season long."
      ],
      bulletPoints: [
        'Feed greens every two weeks with a diluted high-nitrogen organic liquid fertilizer like fish emulsion or kelp extract to spur vegetative leafy growth.',
        'If leaves begin tasting mildly bitter in midsummer, move planters into afternoon shade or drape a 30% white shade cloth overhead.',
        'Keep potting mix consistently moist; drying out triggers premature flowering and fibrous leaf texture.'
      ]
    },
    {
      heading: 'Indoor Winter Windowsill Microgreens',
      paragraphs: [
        "When deep January snow blankets your balcony and temperatures drop below zero, shift your greens production indoors to a bright kitchen windowsill. Fill shallow takeaway containers or cafeteria trays with 1.5 inches of potting soil, sow pea shoots, sunflower greens, and radish seeds densely like a carpet, and harvest nutrient-packed microgreens in just ten days with kitchen shears. There is no off-season for the urban gardener."
      ]
    }
  ],
  conclusion: "A thriving balcony greens garden proves that you don't need a sprawling country homestead to eat fresh, vibrant, living food every day. With a pair of railing planters, a packet of heirloom seeds, and ten minutes of care a week, you'll never buy bagged salad again."
};
