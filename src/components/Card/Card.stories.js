import React from "react";

import "../../assets/styles/index.scss";

import Card from "./index";
import Grid from "../Grid";
import GridElement from "../GridElement";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    whiteBackground: {
      description: "White background"
    }
  }
};

const Template = (args) => (
  <Grid>
    <GridElement xs={12} sm={6} md={4} lg={4}>
      <Card {...args} />
    </GridElement>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  whiteBackground: true,
  title: "Lorem ipsum dolor",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius cansectetur.",
  priceTitle: "Room starting at",
  price: 106,
  linkTitle: "Find out more",
  linkUrl: "/"
};
