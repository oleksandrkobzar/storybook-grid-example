import React from "react";

import "../../assets/styles/index.scss";

import Grid from "./index";
import Card from "../Card";
import SimpleCard from "../SimpleCard";
import GridElement from "../GridElement";

export default {
  title: "Grid With Different Sizes Of Card",
  component: Grid,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};

const Template = (args) => (
  <Grid>
    <GridElement xs={6} sm={6} lg={6}>
      <Card />
    </GridElement>
    <GridElement xs={6} sm={3} lg={3}>
      <Card />
    </GridElement>
    <GridElement xs={6} sm={3} lg={3}>
      <Card />
    </GridElement>
    <GridElement xs={6} sm={3} lg={3}>
      <Card />
    </GridElement>
    <GridElement xs={6} sm={3} lg={3}>
      <Card />
    </GridElement>
    <GridElement xs={6} sm={6} lg={6}>
      <Card />
    </GridElement>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};
