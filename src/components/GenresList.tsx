import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenresList = () => {
  const { data, err, isLoading } = useGenres();

  if (err) return null;
  if (isLoading) return isLoading && <Spinner size="xl" />;
  return (
    <List paddingY="5px">
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack margin={1}>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontSize="lg" variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
