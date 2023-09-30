import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
/*import {
  selectVisibleCountries,
  selectCountriesInfo,
} from "../store/countries/countries-selectors";*/
import { loadCountries } from "../store/countries/countries-actions";
/*import { selectControls } from "../store/controls/controls-selectors";*/
import { useGetCountriesQuery } from "../api/countryApi";

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  //const { search, region } = useSelector(selectControls);
  /*const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );*/
  //const { status, error, quantity } = useSelector(selectCountriesInfo);

  /*useEffect(() => {
    if (!quantity) {
      dispatch(loadCountries());
    }
  }, [quantity, dispatch]);*/

  const { data = [] } = useGetCountriesQuery();
  console.log(data);

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

      {/* <Controls />

      {error && <h2>Can not fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}

      {/* {status === "received" && (
        <List>
          {countries.map((c) => {
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
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )} */}
    </>
  );
};

HomePage.propTypes = {
  setCountries: PropTypes.func,
  countries: PropTypes.array,
};
