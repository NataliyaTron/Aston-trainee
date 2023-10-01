import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { useGetCountriesQuery } from "../api/countryApi";

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { data = [] } = useGetCountriesQuery();

  return (
    <>
      <List>
        {data.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={Math.random()}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

HomePage.propTypes = {
  setCountries: PropTypes.func,
  countries: PropTypes.array,
};
