"use client";

import Image from "next/image";
import { useState, useRef, useMemo, useEffect } from "react";

// DancingGifGroup component to display a static group of dancing GIFs
const DancingGifGroup = ({ isVisible }: { isVisible: boolean }) => {
  // Array of dancing GIFs
  const dancingGifs = [
    "/gifs/dancingbear.gif",
    "/gifs/dancingfrog.gif",
    "/gifs/dancingkerry.gif",
    "/gifs/dancinggoofy.gif",
    "/gifs/dancing_girl.gif",
    "/gifs/dancingbabygirl.gif",
    "/gifs/girldancing.gif",
    "/gifs/Dancing_Dudes.gif",
    "/gifs/DancingTrolls.gif",
    "/gifs/elmodancing.gif",
    "/gifs/dancingE.gif",
    "/gifs/dancing_crocodile.gif",
    "/gifs/dancing_pencil.gif",
    "/gifs/dancinglep.gif",
    "/gifs/skeletondancing.gif",
    "/gifs/anidancingbetty.gif",
    "/gifs/FMGdancingskullline.gif",
    "/gifs/arg-dancing-rob-blue-on-white.gif",
    "/gifs/anistpatdancinglepjig.gif",
    "/gifs/mom_playing_music_kids_dancing_ani.gif",
  ];
  
  // Get random number of GIFs (between 3-7)
  const count = useMemo(() => Math.floor(Math.random() * 5) + 3, []); // 3 to 7
  
  // Get random dancing GIFs
  const randomGifs = useMemo(() => {
    const shuffled = [...dancingGifs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, [count]);

  if (!isVisible) return null;
  
  return (
    <div className="dancing-gif-group py-4 my-6 bg-white/30">
      <div className="flex flex-wrap justify-center gap-4">
        {randomGifs.map((gif, index) => (
          <div key={index} className="bg-white p-1 rounded-md">
            <Image 
              src={gif} 
              alt="Dancing" 
              width={120} 
              height={120} 
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [gradientColors, setGradientColors] = useState<string[]>([
    "#ff00ff", "#00ffff", "#ffff00", "#00ff00", "#ff6600"
  ]);
  
  // Function to handle audio play/pause
  const handleAudioStateChange = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        // Generate random colors when party mode activates
        generateRandomColors();
      }
    }
  };
  
  // Function to generate random colors for the gradient
  const generateRandomColors = () => {
    const colors = [];
    for (let i = 0; i < 5; i++) {
      const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      colors.push(`#${r}${g}${b}`);
    }
    setGradientColors(colors);
  };
  
  // Array of geocities-style border colors
  const borderColors = [
    "border-[#ff00ff]", // hot pink
    "border-[#00ffff]", // cyan
    "border-[#ffff00]", // yellow
    "border-[#00ff00]", // lime green
    "border-[#ff6600]", // orange
    "border-[#ff0000]", // red
    "border-[#9900ff]", // purple
    "border-[#0066ff]", // blue
    "border-[#00ff99]", // mint
    "border-[#ff99cc]", // light pink
  ];

  // Additional GIFs array
  const additionalGifs = [
    "/gifs/horses.gif",
    "/gifs/dinosaur.gif",
    "/gifs/celebrationoflife.gif",
  ];

  // Image data with widths and heights to calculate aspect ratios
  const images = [
    { src: "/images/IMG_1262.jpg", width: 2048, height: 1536, orientation: "landscape" },
    { src: "/images/IMG_3790.jpg", width: 1080, height: 1440, orientation: "portrait" },
    { src: "/images/IMG_4173.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4262.jpg", width: 1080, height: 1440, orientation: "portrait" },
    { src: "/images/IMG_4303.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4311.jpg", width: 1080, height: 1440, orientation: "portrait" },
    { src: "/images/IMG_4346.jpg", width: 1080, height: 1440, orientation: "portrait" },
    { src: "/images/IMG_4465.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4670.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4679.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4828.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4833.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4838.jpg", width: 1440, height: 1080, orientation: "landscape" },
    { src: "/images/IMG_4841.jpg", width: 1080, height: 1440, orientation: "portrait" },
    { src: "/images/IMG_5740.jpg", width: 2048, height: 1536, orientation: "landscape" },
    { src: "/images/IMG_5807.jpg", width: 2048, height: 1536, orientation: "landscape" },
    { src: "/images/IMG_6221.jpg", width: 3024, height: 4032, orientation: "portrait" },
    { src: "/images/IMG_6243.jpg", width: 3024, height: 4032, orientation: "portrait" },
    { src: "/images/IMG_6688.jpg", width: 2048, height: 1536, orientation: "landscape" },
    { src: "/images/IMG_7456.jpg", width: 2048, height: 1536, orientation: "landscape" },
  ];

  return (
    <div className={`min-h-screen bg-gray-200 text-black ${isPlaying ? 'gif-background' : ''}`}>
      {/* Construction Banner */}
      <div className={`${isPlaying ? 'bg-yellow-300' : 'bg-white'} text-center py-1 border-y-2 border-black marquee`}>
        <span style={{ fontFamily: isPlaying ? "Comic Sans MS, cursive" : "Arial, sans-serif" }}>
          ★★★ HAPPYBIRTHDAYBRIDGET.BIZ -- THE OFFICIAL WEBSITE FOR BRIDGET'S BIRTHDAY ★★★
        </span>
      </div>
      
      {/* Header Section with background box */}
      <header className="py-10 text-center">
        <div className="container mx-auto px-4">
          <div 
            className={`flex flex-col justify-center items-center mx-auto max-w-4xl ${isPlaying ? 'animated-gradient' : 'bg-gray-400'} p-8 md:p-12 rounded-lg shadow-lg`}
            style={isPlaying ? {
              background: `linear-gradient(-45deg, ${gradientColors.join(', ')})`,
              backgroundSize: '400% 400%',
              animation: 'gradient 5s ease infinite'
            } : {}}
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              {isPlaying && (
                <Image 
                  src="/gifs/BBOOP_CELEBRATION.gif" 
                  alt="Betty Boop" 
                  width={100} 
                  height={100} 
                  unoptimized
                />
              )}
              <h1 
                className={`${isPlaying ? 'text-6xl md:text-8xl' : 'text-5xl md:text-6xl'} font-bold text-white`}
                style={{ fontFamily: isPlaying ? "Comic Sans MS, cursive" : "Arial, sans-serif" }}
              >
                {isPlaying ? "HAPPY BIRTHDAY BRIDGET!" : "Happy Birthday Bridget"}
              </h1>
              {isPlaying && (
                <Image 
                  src="/gifs/BBOOP_CELEBRATION.gif" 
                  alt="Betty Boop" 
                  width={100} 
                  height={100} 
                  unoptimized
                />
              )}
            </div>
            
            {/* Audio Player */}
            <div className="bg-white/80 rounded-lg p-4 w-full max-w-md mt-4">
              <p className="text-xl font-bold mb-2" style={{ fontFamily: "Comic Sans MS, cursive" }}>
                press play to initiate bridget's birthday
              </p>
              <audio 
                ref={audioRef}
                className="w-full" 
                controls 
                src="/outkast.mp3" 
                onPlay={handleAudioStateChange}
                onPause={handleAudioStateChange}
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          
          {/* Birthday Globe */}
          {isPlaying && (
            <div className="flex justify-center my-4">
              <Image 
                src="/gifs/happybirthdayglobe2.gif" 
                alt="Happy Birthday Globe" 
                width={120} 
                height={120}
                unoptimized
              />
            </div>
          )}
        </div>
      </header>

      {/* First Dancing GIF Group */}
      <DancingGifGroup isVisible={isPlaying} />

      {/* Photo Gallery */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-12 items-center">
          {/* First section of images */}
          {images.slice(0, 3).map((image, index) => (
            <div key={image.src} className={`p-2 ${isPlaying ? borderColors[index % borderColors.length] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
              {image.orientation === "portrait" ? (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={600}
                  height={1000}
                  className="max-w-full max-h-[130vh] w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              ) : (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={800}
                  height={600}
                  className="max-w-full w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              )}
            </div>
          ))}
          
          {/* Bee GIF */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div>
                <Image 
                  src="/gifs/bee_over_flowers.gif" 
                  alt="Bee" 
                  width={150} 
                  height={150} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Next set of images */}
          {images.slice(3, 6).map((image, index) => (
            <div key={image.src} className={`p-2 ${isPlaying ? borderColors[(index + 3) % borderColors.length] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
              {image.orientation === "portrait" ? (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={600}
                  height={1000}
                  className="max-w-full max-h-[130vh] w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              ) : (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={800}
                  height={600}
                  className="max-w-full w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              )}
            </div>
          ))}
          
          {/* Additional GIF */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div>
                <Image 
                  src="/gifs/horses.gif" 
                  alt="Horses" 
                  width={200} 
                  height={150} 
                  unoptimized
                />
              </div>
            </div>
          )}

          {/* Second Dancing GIF Group */}
          <DancingGifGroup isVisible={isPlaying} />
          
          {/* Wedding Celebration GIF */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div>
                <Image 
                  src="/gifs/WeddingCelebration.gif" 
                  alt="Wedding Celebration" 
                  width={400} 
                  height={150} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Next set of images */}
          {images.slice(6, 9).map((image, index) => (
            <div key={image.src} className={`p-2 ${isPlaying ? borderColors[(index + 6) % borderColors.length] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
              {image.orientation === "portrait" ? (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={600}
                  height={1000}
                  className="max-w-full max-h-[130vh] w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              ) : (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={800}
                  height={600}
                  className="max-w-full w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              )}
            </div>
          ))}
          
          {/* Additional GIF */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div>
                <Image 
                  src="/gifs/dinosaur.gif" 
                  alt="Dinosaur" 
                  width={180} 
                  height={150} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Next set of images */}
          {images.slice(9, 12).map((image, index) => (
            <div key={image.src} className={`p-2 ${isPlaying ? borderColors[(index + 9) % borderColors.length] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
              {image.orientation === "portrait" ? (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={600}
                  height={1000}
                  className="max-w-full max-h-[130vh] w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              ) : (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={800}
                  height={600}
                  className="max-w-full w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              )}
            </div>
          ))}
          
          {/* Third Dancing GIF Group */}
          <DancingGifGroup isVisible={isPlaying} />
          
          {/* African Celebration GIF */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div>
                <Image 
                  src="/gifs/African_Celebration.gif" 
                  alt="African Celebration" 
                  width={200} 
                  height={200} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Sequence1.gif - Displayed Solo and Larger */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div className={`p-2 ${borderColors[5]} border-8 shadow-lg bg-white/70`}>
                <Image 
                  src="/gifs/sequence1.gif" 
                  alt="Sequence" 
                  width={500} 
                  height={400} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Additional GIF */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div>
                <Image 
                  src="/gifs/celebrationoflife.gif" 
                  alt="Celebration" 
                  width={200} 
                  height={150} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Next set of images */}
          {images.slice(12, 15).map((image, index) => (
            <div key={image.src} className={`p-2 ${isPlaying ? borderColors[(index + 12) % borderColors.length] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
              {image.orientation === "portrait" ? (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={600}
                  height={1000}
                  className="max-w-full max-h-[130vh] w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              ) : (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={800}
                  height={600}
                  className="max-w-full w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              )}
            </div>
          ))}
          
          {/* Sequence 3 GIF (from IMG_4908-4911) */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div className={`p-2 ${borderColors[7]} border-8 shadow-lg bg-white/70`}>
                <Image 
                  src="/gifs/sequence3.gif" 
                  alt="Sequence 3" 
                  width={800} 
                  height={600} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Dancing Baby Sequence */}
          {isPlaying && (
            <div className="flex justify-center w-full my-4">
              <div className={`p-2 ${borderColors[6]} border-8 shadow-lg bg-white/70`}>
                <Image 
                  src="/gifs/sequence2.gif" 
                  alt="Dancing Sequence" 
                  width={400} 
                  height={300} 
                  unoptimized
                />
              </div>
            </div>
          )}
          
          {/* Final Dancing GIF Group */}
          <DancingGifGroup isVisible={isPlaying} />
          
          {/* Final set of images - Make IMG_6243.jpg the last image */}
          {images.slice(18, 19).map((image, index) => (
            <div key={image.src} className={`p-2 ${isPlaying ? borderColors[(index + 18) % borderColors.length] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
              {image.orientation === "portrait" ? (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={600}
                  height={1000}
                  className="max-w-full max-h-[130vh] w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              ) : (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={800}
                  height={600}
                  className="max-w-full w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              )}
            </div>
          ))}
          
          {images.slice(19, 21).map((image, index) => (
            <div key={image.src} className={`p-2 ${isPlaying ? borderColors[(index + 19) % borderColors.length] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
              {image.orientation === "portrait" ? (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={600}
                  height={1000}
                  className="max-w-full max-h-[130vh] w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              ) : (
                <Image 
                  src={image.src} 
                  alt="Bridget Photo" 
                  width={800}
                  height={600}
                  className="max-w-full w-auto h-auto"
                  unoptimized={image.src.includes('.gif')}
                />
              )}
            </div>
          ))}
          
          {/* Display IMG_6243.jpg as the last image */}
          <div className={`p-2 ${isPlaying ? borderColors[1] + ' border-8' : 'bg-white border-2 border-gray-300'} shadow-lg bg-white/70`}>
            <Image 
              src="/images/IMG_6243.jpg" 
              alt="Bridget Photo" 
              width={600}
              height={1000}
              className="max-w-full max-h-[130vh] w-auto h-auto"
            />
          </div>
          
          {/* Message in Comic Sans */}
          <div className={`text-center my-10 p-6 ${isPlaying ? 'bg-white/70' : 'bg-white'} rounded-lg shadow-lg max-w-2xl`}>
            <h2 
              className={`text-4xl font-bold ${isPlaying ? 'text-fuchsia-600' : 'text-gray-600'}`}
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              happy birthday bridget, everyone loves you!!!
            </h2>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .gif-background {
          background-image: url('/bg.gif');
          background-repeat: repeat;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
