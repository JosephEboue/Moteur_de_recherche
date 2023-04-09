import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchPhotos = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  async function searchValue(text) {
    axios
      .get(
        "https://pixabay.com/api/?key=35175989-46b93f1b6990778e9f80631d4&q=" +
          text
      )
      .then((res) => {
        // console.log("rrrrrr " + JSON.stringify(res.data.hits.length));
        setData(res.data.hits);
      });
  }

  async function listAllData() {
    // console.log("ffff");
    axios
      .get("https://pixabay.com/api/?key=35175989-46b93f1b6990778e9f80631d4")
      .then((res) => {
        console.log("rrrrrrrrrrr " + JSON.stringify(res.data.hits[0]));
        setData(res.data.hits);
      });
  }
  useEffect(() => {
    if (query == undefined || query == "") listAllData();
    else searchValue(query);
  }, [query]);

  useEffect(() => {
    listAllData();
  }, []);

  return (
    <>
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full mt-10">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search"
            required
          />
        </div>
      </form>
      <div className="container justify-center mx-auto py-10 flex items-center">
        <div className="grid grid-cols-4 gap-4">
          {data.map((card) => (
            <div className="shadow-lg: rounded-lg" key={card.id}>
              <img
                src={card.webformatURL}
                style={{ height: "200px", width: "300px" }}
              />
              <div className="text-center text-gray-500 italic">{card.views} views</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPhotos;
