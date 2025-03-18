import { useState, useEffect } from "react";
import SearchHeader from "./components/SearchHeader";
import PokemonCard from "./components/PokemonCard";
import PokemonDetailModal from "./components/PokemonDetailModal";
import LoadingSpinner from "./components/LoadingSpinner";
import { getTypeColor } from "./utils/helpers";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            return await detailResponse.json();
          })
        );
        setPokemon(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="container mx-auto px-4 pb-12">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredPokemon.map((pokemon, index) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  index={index}
                  getTypeColor={getTypeColor}
                  onClick={handlePokemonClick}
                />
              ))}
            </motion.div>

            {filteredPokemon.length === 0 && (
              <div className="text-center mt-12">
                <motion.p
                  className="text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  No Pokémon found matching "{searchTerm}"
                </motion.p>
              </div>
            )}
          </>
        )}
      </main>
      
      {showModal && selectedPokemon && (
        <PokemonDetailModal 
          pokemon={selectedPokemon} 
          getTypeColor={getTypeColor} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;