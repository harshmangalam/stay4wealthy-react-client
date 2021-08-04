import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import Service from "../components/Service";

function Services() {
  return (
    <Box>
      <Grid
        width="100%"
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3 ,1fr)"]}
        gap={6}
      >
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Grid>
    </Box>
  );
}

export default Services;

const services = [
  {
    id: 1,
    title: "PMS",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },

  {
    id: 2,
    title: "Loans",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },

  {
    id: 3,
    title: "Fixed Deposit",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },

  {
    id: 4,
    title: "Real State",

    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },

  {
    id: 5,
    title: "Mutual Fund",

    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },

  {
    id: 6,
    title: "Insurance",

    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },
];
