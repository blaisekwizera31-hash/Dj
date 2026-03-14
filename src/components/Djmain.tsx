import { Grid, GridItem, Image, Heading, Text, Box } from "@chakra-ui/react";

const Djmain = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={10}
      mt="50px"
      p={{ base: 5, md: 20 }}
      alignItems="center"
    >
      {/* Text Section */}
      <GridItem>
        <Box maxW="600px">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="light"
            lineHeight={{ base: "1.2", md: "1.2" }}
            mb={6}
          >
            LA-based DJ and Music Producer
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
            LA-based DJ spinning beats from hip-hop to house, bass, and chill vibes. 
            Think worldwide, party local. Drop your email to get notified about upcoming gigs.
          </Text>

          <Text mt={4} lineHeight="1.8">
            Feel the rhythm, move your feet, and join the global dance floor. 
            Every set is a journey — from deep basslines to smooth downtempo grooves.
          </Text>

          <Text mt={4} lineHeight="1.8">
            Connecting music lovers everywhere, one beat at a time. 
            Exclusive mixes and live sets straight from the heart of LA. 
            Be the first to know when new tracks drop or when I hit the stage near you.
          </Text>

          <Text mt={4} lineHeight="1.8">
            Curated sounds for those who crave both energy and vibe. 
            From underground clubs to rooftop parties, the vibe is always alive. 
            Stay in the loop and never miss a night of unforgettable music. 
            Sign up now and let the beats take you places.
          </Text>
        </Box>
      </GridItem>

      {/* Image Section */}
      <GridItem>
        <Image
          src="/bg.png"
          alt="DJ"
          borderRadius="md"
          objectFit="cover"
         height="700px"
         justifySelf="center"
         mt="-20"
          
        />
      </GridItem>
    </Grid>
  );
};

export default Djmain;