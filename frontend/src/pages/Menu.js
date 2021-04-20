import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { AppContext } from "../context/context";

const Menu = () => {
  const [recipes, setRecipes] = useState([]);

  const { dispatch, loading, addItem } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      dispatch({
        type: "LOADING",
        payload: true,
      });
      try {
        const res = await axios.get("/recipes");
        setRecipes(res.data);
      } catch (error) {
        console.log(error);
      }
      dispatch({
        type: "LOADING",
        payload: false,
      });
    };
    getData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Typography variant="h2" color="primary" align="center">
        OUR MENU
      </Typography>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item xs={6} md={4} align="center">
            <RecipeCard key={recipe._id} recipe={recipe} addItem={addItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Menu;
