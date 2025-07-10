import { useState } from "react";

const Grocery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const groceries = [
    "Apples",
    "Bananas",
    "Carrots",
    "Milk",
    "Eggs",
    "Bread",
    "Tomatoes",
    "Cheese",
  ];

  const filteredGroceries = groceries.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">🛒 Grocery List</h1>
      
      <input
        type="text"
        placeholder="Search groceries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredGroceries.length === 0 ? (
        <p className="text-gray-500 text-center">No items found</p>
      ) : (
        <ul className="space-y-2">
          {filteredGroceries.map((item, index) => (
            <li
              key={index}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Grocery;
