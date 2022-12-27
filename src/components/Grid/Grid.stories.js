import React from "react";

import "../../assets/styles/index.scss";

import Grid from "./index";
import Card from "../Card";
import GridElement from "../GridElement";

export default {
  title: "Grid With Cards",
  component: Grid,
  argTypes: {
    whiteBackground: {
      description: "White background"
    },
    columnCountOnMobile: {
      description: "Column count of Card on mobile (max 4)",
      options: [2, 4],
      control: { type: "radio" }
    },
    columnCountOnTablet: {
      description: "Column count of Card on tablet (max 6)",
      options: [2, 3, 6],
      control: { type: "radio" }
    },
    columnCountOnDesktop: {
      description: "Column count of Card on desktop (max 12)",
      options: [3, 4, 6, 12],
      control: { type: "radio" }
    },
    elementCount: {
      description: "Element count in Grid",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: "select" }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
};

const Template = (args) => (
  <Grid>
    {Array.from({ length: args.elementCount }).map(() => (
      <GridElement
        xs={args.columnCountOnMobile * 3}
        sm={args.columnCountOnTablet * 2}
        md={args.columnCountOnTablet * 2}
        lg={args.columnCountOnDesktop}
        xl={args.columnCountOnDesktop}
      >
        <Card whiteBackground={args.whiteBackground} />
      </GridElement>
    ))}
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  whiteBackground: true,
  columnCountOnMobile: 2,
  columnCountOnTablet: 3,
  columnCountOnDesktop: 3,
  elementCount: 4
};
