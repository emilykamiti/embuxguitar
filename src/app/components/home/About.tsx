import { Award, Users, Video, TrendingUp } from 'lucide-react';

export function About() {
  const achievements = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Quality Content",
      description: "Over 1500 in-depth tech reviews and analysis videos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Reach",
      description: "19M+ subscribers across multiple platforms"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Multiple awards for tech journalism and video production"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "15+ Years",
      description: "Over a decade of consistent, quality tech content"
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
              <span className="text-red-500">About</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6">
              Making Tech Accessible to Everyone
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a tech content creator focused on delivering honest, in-depth 
              reviews and analysis of the latest gadgets and technology. From 
              smartphones to electric vehicles, I break down complex tech into 
              digestible, engaging content.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              What started as a passion project in my bedroom has grown into 
              one of the most trusted voices in tech media. My goal is simple: 
              help people make informed decisions about the technology they use 
              every day.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800">
                📱 Smartphones
              </div>
              <div className="px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800">
                💻 Laptops
              </div>
              <div className="px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800">
                🚗 Electric Vehicles
              </div>
              <div className="px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800">
                🎧 Audio
              </div>
              <div className="px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800">
                ⌚ Wearables
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-500/50 transition-colors"
                >
                  <div className="text-red-500 mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="mt-8 bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl text-red-500 mb-2">
                  Top 1%
                </div>
                <p className="text-gray-300">
                  Among tech content creators worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
