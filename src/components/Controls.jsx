import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europ" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState();

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleChangeCountry = (selectedOption) => {
    setRegion(selectedOption);
  };

  return (
    <Wrapper>
      <Search search={search} onSeach={handleSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={handleChangeCountry}
      />
    </Wrapper>
  );
};
