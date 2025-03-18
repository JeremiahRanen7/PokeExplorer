import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const PokemonDetailModal = ({ pokemon, getTypeColor, onClose }) => {
  if (!pokemon) return null;
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-indigo-800 to-purple-900 rounded-xl max-w-sm w-full p-4 relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white/70 hover:text-white"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center">
          <motion.div
            className="relative w-28 h-28 mb-3" 
            animate={{
              y: [0, -6],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full blur-md"
              animate={{
                scale: [1, 1.1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={
                pokemon.sprites.other["official-artwork"].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
              className="w-full h-full object-contain relative z-10"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring" }}
            />
          </motion.div>

          <h2 className="text-2xl font-bold capitalize mb-0.5"> 
            {pokemon.name}
          </h2>
          <p className="text-base text-white/70 mb-2"> 
            #{pokemon.id.toString().padStart(3, "0")}
          </p>

          <div className="flex gap-1.5 mb-3"> 
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className={`${getTypeColor(
                  typeInfo.type.name
                )} px-2 py-0.5 rounded-full text-xs font-medium`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>

          <div className="w-full grid grid-cols-2 gap-2 mb-3"> 
            <div className="bg-white/10 p-2 rounded-lg">
              <p className="text-white/70 text-xs mb-0.5">Height</p>
              <p className="font-semibold text-sm">
                {(pokemon.height / 10).toFixed(1)} m
              </p>
            </div>
            <div className="bg-white/10 p-2 rounded-lg">
              <p className="text-white/70 text-xs mb-0.5">Weight</p>
              <p className="font-semibold text-sm">
                {(pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
          </div>

          <div className="w-full mb-3"> 
            <h3 className="text-lg font-semibold mb-2">Stats</h3> 
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="mb-1.5"> 
                <div className="flex justify-between mb-0.5">
                  <p className="text-xs capitalize">
                    {stat.stat.name.replace("-", " ")}
                  </p>
                  <p className="text-xs font-semibold">{stat.base_stat}</p>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5"> 
                  <motion.div
                    className="bg-yellow-400 h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full">
            <h3 className="text-lg font-semibold mb-2">Abilities</h3> 
            <div className="flex flex-wrap gap-1.5"> // Reduced spacing
              {pokemon.abilities.map((ability) => (
                <span
                  key={ability.ability.name}
                  className="bg-white/10 px-2 py-0.5 rounded-full text-xs" 
                >
                  {ability.ability.name.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PokemonDetailModal;