import React from "react";

import "../../assets/styles/index.scss";

import Grid from "./index";
import Card from "../Card";
import SimpleCard from "../SimpleCard";
import GridElement from "../GridElement";

export default {
  title: "Simple Grid",
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
    <GridElement xs={6} md={4} lg={3}>
      <SimpleCard />
    </GridElement>
    <GridElement xs={6} md={4} lg={3}>
      <SimpleCard />
    </GridElement>
    <GridElement md={4} lg={3}>
      <SimpleCard />
    </GridElement>
    <GridElement xs={6} md={6} lg={3}>
      <SimpleCard />
    </GridElement>
    <GridElement xs={6} md={6} lg={4}>
      <SimpleCard />
    </GridElement>
    <GridElement lg={4}>
      <SimpleCard />
    </GridElement>
    <GridElement xs={6} md={4} lg={4}>
      <SimpleCard />
    </GridElement>
    <GridElement xs={6} md={4} lg={6}>
      <SimpleCard />
    </GridElement>
    <GridElement md={4} lg={6}>
      <SimpleCard />
    </GridElement>
    <GridElement>
      <SimpleCard />
    </GridElement>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};
