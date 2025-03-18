import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const PokemonCard = ({ pokemon, index, getTypeColor, onClick }) => {
  return (
    <motion.div
      key={pokemon.id}
      className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 cursor-pointer transform transition-all hover:shadow-lg hover:shadow-yellow-400/30"
      whileHover={{ y: -10, scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={() => onClick(pokemon)}
    >
      <div className="p-4">
        <motion.div
          className="bg-white/5 rounded-full p-4 mb-4 flex justify-center"
          whileHover={{ rotate: 5 }}
        >
          <motion.img
            src={
              pokemon.sprites.other["official-artwork"].front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            className="w-32 h-32 object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: index * 0.05,
            }}
          />
        </motion.div>
        <div className="text-center">
          <h2 className="text-xl font-semibold capitalize mb-2">
            {pokemon.name}
          </h2>
          <p className="text-sm text-white/70 mb-3">
            #{pokemon.id.toString().padStart(3, "0")}
          </p>
          <div className="flex justify-center gap-2">
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className={`${getTypeColor(
                  typeInfo.type.name
                )} px-3 py-1 rounded-full text-xs font-medium`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;