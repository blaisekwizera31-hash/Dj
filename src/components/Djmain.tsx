import { Grid, GridItem } from "@chakra-ui/react";
const Djmain = () => {
  return (
    <Grid templateAreas={`"grid1 grid2"`} templateColumns="1fr 1fr">
      <GridItem area="grid1">hellogrid</GridItem>
      <GridItem area="grid2">helloworld</GridItem>
    </Grid>
  );
};

export default Djmain;
