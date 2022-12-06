import React from "react";

import "../../assets/styles/index.scss";

import Grid from "./index";
import Card from "../Card";
import SimpleCard from "../SimpleCard";
import GridElement from "../GridElement";

export default {
  title: "Grid",
  component: Grid,
  argTypes: {
    whiteBackground: {
      description: "White background"
    },
    columnCount: {
      description: "Column count of Card",
      options: [3, 4, 6, 12],
      control: { type: "radio" }
    },
    children: {
      control: false
    }
  }
};

const Template = (args) => (
  <Grid>
    <GridElement
      xs={args.columnCount}
      sm={args.columnCount}
      md={args.columnCount}
      lg={args.columnCount}
      xl={args.columnCount}
    >
      <Card whiteBackground={args.whiteBackground} />
    </GridElement>
    <GridElement
      xs={args.columnCount}
      sm={args.columnCount}
      md={args.columnCount}
      lg={args.columnCount}
      xl={args.columnCount}
    >
      <Card whiteBackground={args.whiteBackground} />
    </GridElement>
    <GridElement
      xs={args.columnCount}
      sm={args.columnCount}
      md={args.columnCount}
      lg={args.columnCount}
      xl={args.columnCount}
    >
      <Card whiteBackground={args.whiteBackground} />
    </GridElement>
    <GridElement
      xs={args.columnCount}
      sm={args.columnCount}
      md={args.columnCount}
      lg={args.columnCount}
      xl={args.columnCount}
    >
      <Card whiteBackground={args.whiteBackground} />
    </GridElement>
  </Grid>
);

const SimpleTemplate = (args) => (
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

export const WithCards = Template.bind({});
WithCards.args = {
  whiteBackground: true,
  columnCount: 3
};

export const Simple = SimpleTemplate.bind({});
Simple.args = {};
