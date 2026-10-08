import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Heart, Compass, CheckCircle2, ArrowRight, ShieldCheck, Sun, Droplets } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Introduction Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#E8E2D5] text-[#2C4835] border border-[#D5CBB9] mb-4 dark:bg-[#1C2C22] dark:text-emerald-300 dark:border-[#2C4635]">
            <Sprout className="w-3.5 h-3.5 text-[#C85A32] dark:text-emerald-400" />
            <span>Meet The Author & Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#173623] dark:text-[#FAF7F2] leading-tight mb-6">
            Small spaces can grow wild, delicious things.
          </h1>

          <p className="text-base sm:text-lg text-[#55695D] dark:text-[#A1B8AA] max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-[#1E3E2B] dark:text-white">The Balcony Gardener</strong>. I’m Maya Green, and I believe you don’t need an acre of countryside soil to experience the profound joy of eating food you grew with your own hands.
          </p>
        </div>

        {/* Bio Spotlight Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#E5DDCF] dark:bg-[#15221B] dark:border-[#22362A] shadow-md mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Visual Avatar / Emblem */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-2 border-[#D5CBB9] dark:border-[#2C4134] shadow-lg shrink-0 bg-[#1E3E2B]">
              <img
                src="/images/maya_green.jpg"
                alt="Maya Green, Urban Horticulturist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#173623] dark:text-[#FAF7F2]">
                  Maya Green
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-emerald-400">
                  Urban Horticulturist, Container Grower & Writer
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#475C4E] dark:text-[#CBDCD1] leading-relaxed">
                My gardening journey didn’t start on a sprawling idyllic family farm. It started eight years ago on a blustery, 45-square-foot concrete balcony on the fourth floor of an apartment building in Portland. I had two struggling pots of convenience-store mint, a wobbly plastic chair, and absolutely zero idea how wind corridors or perched water tables worked.
              </p>

              <p className="text-sm sm:text-base text-[#475C4E] dark:text-[#CBDCD1] leading-relaxed">
                After killing more than a few tomato starts with well-intentioned overwatering, I immersed myself in container agronomy, microclimate mapping, soilless potting science, and vertical architecture. Within three years, that very same 45-square-foot slab was producing over 40 pounds of organic cherry tomatoes, crisp greens, hot peppers, and fresh herbs every single season.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-[#5B6D62] dark:text-[#8FA898]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32] dark:text-emerald-400" />
                  8+ Years Container Tested
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32] dark:text-emerald-400" />
                  100% Organic & Chemical-Free
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32] dark:text-emerald-400" />
                  Renter & Apartment Friendly
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Tenets Section */}
        <section id="philosophy" className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173623] dark:text-[#FAF7F2] mb-3">
              The 5 Balcony Tenets
            </h3>
            <p className="text-sm text-[#55695D] dark:text-[#A1B8AA]">
              Principles that turn cramped urban corners into flourishing sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#F6F1E6] border border-[#E3D9C9] dark:bg-[#16241C] dark:border-[#22382B]">
              <div className="w-8 h-8 rounded-xl bg-[#1E3E2B] text-white flex items-center justify-center font-bold text-xs mb-4">
                01
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
                Soil Volume Over Surface Area
              </h4>
              <p className="text-xs sm:text-sm text-[#475C4E] dark:text-[#A1B8AA] leading-relaxed">
                Roots don’t care about horizontal acres; they care about cubic liters of well-aerated living soil. Giving a single plant a deep, high-quality container always beats crowding three plants into a tiny decorative trough.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F1E6] border border-[#E3D9C9] dark:bg-[#16241C] dark:border-[#22382B]">
              <div className="w-8 h-8 rounded-xl bg-[#1E3E2B] text-white flex items-center justify-center font-bold text-xs mb-4">
                02
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
                Respect Your Microclimate
              </h4>
              <p className="text-xs sm:text-sm text-[#475C4E] dark:text-[#A1B8AA] leading-relaxed">
                A fourth-floor balcony has its own wind speeds, thermal bounce from concrete walls, and sharp shadows. Never fight your exposure; choose varieties that naturally relish the conditions you have.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F1E6] border border-[#E3D9C9] dark:bg-[#16241C] dark:border-[#22382B]">
              <div className="w-8 h-8 rounded-xl bg-[#1E3E2B] text-white flex items-center justify-center font-bold text-xs mb-4">
                03
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
                Feed the Soil, Not Just the Stem
              </h4>
              <p className="text-xs sm:text-sm text-[#475C4E] dark:text-[#A1B8AA] leading-relaxed">
                Chemical fertilizers give plants a short, watery spike followed by salt accumulation in pots. Feed your containers with worm castings, seaweed extract, and compost to build living biology.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F1E6] border border-[#E3D9C9] dark:bg-[#16241C] dark:border-[#22382B]">
              <div className="w-8 h-8 rounded-xl bg-[#1E3E2B] text-white flex items-center justify-center font-bold text-xs mb-4">
                04
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
                Verticality is Your Superpower
              </h4>
              <p className="text-xs sm:text-sm text-[#475C4E] dark:text-[#A1B8AA] leading-relaxed">
                When floor space is occupied by a patio chair, look up! Railing boxes, hanging baskets, and wall trellises multiply your photosynthetic harvest area threefold without crowding your feet.
              </p>
            </div>

            <div className="md:col-span-2 p-6 rounded-2xl bg-[#FAF0E6] border border-[#E8CDBB] dark:bg-[#201815] dark:border-[#42291F]">
              <div className="w-8 h-8 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold text-xs mb-4">
                05
              </div>
              <h4 className="font-serif text-lg font-bold text-[#451B0D] dark:text-[#FEECE5] mb-2">
                Start Small & Savor Every Sprout
              </h4>
              <p className="text-xs sm:text-sm text-[#613322] dark:text-[#EAC2B0] leading-relaxed">
                You don't need fifty pots on day one. Start with one fragrant basil plant and a tray of cut-and-come-again greens. Learn their rhythms, celebrate the first harvest, and let your urban garden grow as your confidence blossoms.
              </p>
            </div>

          </div>
        </section>

        {/* Small-Space Balcony FAQ */}
        <section className="mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173623] dark:text-[#FAF7F2] mb-6">
            Frequently Asked Balcony Questions
          </h3>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#E5DDCF] dark:bg-[#15221B] dark:border-[#22362A]">
              <h4 className="font-bold text-base text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
                Will my containers exceed apartment balcony weight limits?
              </h4>
              <p className="text-sm text-[#475C4E] dark:text-[#A1B8AA] leading-relaxed">
                Most modern residential balconies are rated for 40 to 60 pounds per square foot. By using lightweight geotextile fabric grow bags or resin planters filled with soilless peat/coco-coir potting mixes (rather than dense stone urns filled with garden clay), your containers will remain well within standard structural tolerances. Distribute heavy pots against building support walls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#E5DDCF] dark:bg-[#15221B] dark:border-[#22362A]">
              <h4 className="font-bold text-base text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
                How do I prevent dirty water from dripping onto my downstairs neighbors?
              </h4>
              <p className="text-sm text-[#475C4E] dark:text-[#A1B8AA] leading-relaxed">
                Always pair planters with deep drainage saucers. Water slowly so soil absorbs moisture before overflowing, and empty stagnant saucer runoff with a turkey baster or sponge 30 minutes after watering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#E5DDCF] dark:bg-[#15221B] dark:border-[#22362A]">
              <h4 className="font-bold text-base text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
                What can I grow if my balcony receives zero direct sunlight?
              </h4>
              <p className="text-sm text-[#475C4E] dark:text-[#A1B8AA] leading-relaxed">
                North-facing balconies receive ample bright indirect ambient light. You can cultivate magnificent crops of spearmint, Asian greens (tatsoi, mizuna), arugula, wild chives, alpine strawberries, and shade-loving microgreens! Check out our Sunlight Guide for a full crop layout.
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <div className="text-center p-8 sm:p-10 rounded-3xl bg-[#1E3E2B] text-white">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Ready to plant your first seed?
          </h3>
          <p className="text-sm text-emerald-100/80 max-w-md mx-auto mb-6">
            Dive into our ten comprehensive guides covering soil blends, companion herbs, cherry tomatoes, and gentle organic care.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C85A32] text-white font-semibold text-sm hover:bg-[#B84E27] transition-colors"
          >
            <span>Explore All 10 Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
