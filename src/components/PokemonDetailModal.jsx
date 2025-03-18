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
        className="bg-gradient-to-br from-indigo-800 to-purple-900 rounded-xl max-w-md w-full p-6 relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white/70 hover:text-white"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
            className="relative w-40 h-40 mb-4"
            animate={{
              y: [0, -10],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full blur-xl"
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

          <h2 className="text-3xl font-bold capitalize mb-1">
            {pokemon.name}
          </h2>
          <p className="text-lg text-white/70 mb-4">
            #{pokemon.id.toString().padStart(3, "0")}
          </p>

          <div className="flex gap-2 mb-6">
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className={`${getTypeColor(
                  typeInfo.type.name
                )} px-3 py-1 rounded-full text-sm font-medium`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>

          <div className="w-full grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-white/70 text-sm mb-1">Height</p>
              <p className="font-semibold">
                {(pokemon.height / 10).toFixed(1)} m
              </p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-white/70 text-sm mb-1">Weight</p>
              <p className="font-semibold">
                {(pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
          </div>

          <div className="w-full mb-4">
            <h3 className="text-xl font-semibold mb-3">Stats</h3>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="mb-2">
                <div className="flex justify-between mb-1">
                  <p className="text-sm capitalize">
                    {stat.stat.name.replace("-", " ")}
                  </p>
                  <p className="text-sm font-semibold">{stat.base_stat}</p>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-yellow-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full">
            <h3 className="text-xl font-semibold mb-3">Abilities</h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((ability) => (
                <span
                  key={ability.ability.name}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm"
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