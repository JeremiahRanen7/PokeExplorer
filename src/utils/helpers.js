export const getTypeColor = (type) => {
    const typeColors = {
      fire: "bg-red-500",
      water: "bg-blue-500",
      grass: "bg-green-500",
      electric: "bg-yellow-400",
      ice: "bg-blue-300",
      fighting: "bg-red-700",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-300",
      psychic: "bg-pink-500",
      bug: "bg-lime-500",
      rock: "bg-yellow-700",
      ghost: "bg-purple-700",
      dark: "bg-gray-800",
      dragon: "bg-indigo-700",
      steel: "bg-gray-400",
      fairy: "bg-pink-300",
      normal: "bg-gray-300",
    };
  
    return typeColors[type] || "bg-gray-300";
  };