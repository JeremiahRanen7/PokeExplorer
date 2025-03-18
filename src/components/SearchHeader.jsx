import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SearchHeader = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="py-6 px-4">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        <motion.h1
          className="text-4xl font-bold mb-4 md:mb-0 ml-12"
          whileHover={{ scale: 1.1 }}
        >
          PokéExplorer
        </motion.h1>
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search for a Pokémon..."
            className="w-full px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-white/70"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default SearchHeader;