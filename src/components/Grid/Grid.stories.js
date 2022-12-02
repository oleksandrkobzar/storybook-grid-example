import React from "react";

import "../../assets/styles/index.scss";

import Grid from "./Grid";
import Card from "../Card/Card";

export default {
  title: "Grid",
  component: Grid
};

const Template = (args) => (
  <Grid {...args}>
    <Card xs={6} md={4} lg={3} />
    <Card xs={6} md={4} lg={3} />
    <Card md={4} lg={3} />
    <Card xs={6} md={6} lg={3} />
    <Card xs={6} md={6} lg={4} />
    <Card lg={4} />
    <Card xs={6} md={4} lg={4} />
    <Card xs={6} md={4} lg={6} />
    <Card md={4} lg={6} />
    <Card />
  </Grid>
);

export const Default = Template.bind({});
