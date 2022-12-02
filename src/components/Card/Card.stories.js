import React from "react";

import "../../assets/styles/index.scss";

import Card from "./Card";
import Grid from "../Grid/Grid";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    xs: {
      description: "Column count of Card on mobile (xs)"
    },
    sm: {
      description: "Column count of Card on small tablet (sm)"
    },
    md: {
      description: "Column count of Card on tablet (md)"
    },
    lg: {
      description: "Column count of Card on small desktop or tablet (lg)"
    },
    xl: {
      description: "Column count of Card on desktop (xl)"
    }
  }
};

const Template = (args) => (
  <Grid>
    <Card {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  xs: 12,
  sm: 12,
  md: 3,
  lg: 4,
  xl: 6
};
