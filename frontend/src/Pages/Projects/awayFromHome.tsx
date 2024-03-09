import { Container } from '../../Components/Layout';
import Image from '../../Components/Image/Image';
import Link from '../../Components/Link';

const awayFromHome = () => {
  return (
    <Container>
      <h1>Away From Home</h1>
      <Link href='https://sonia-ch.github.io/ivis-project/#' text='Away From Home Website' inText={false}/>
      <p>In a group of 7 in a course in information visualization we came up with an idea of visualizing the location of refugees in an unbiased way. Where the unbiased part is not being able to identify each country straight away. Allowing the user to explore without any presumptions and can later get the name of the country on demand.</p>

      <Image 
        imagePath={require("../../assets/images/thumbnails/away-from-home.webp")}
        caption='Selecting a square in the grid reveals the refugee population, but not the country which the square represent.'
        figNumber={1}
        maxWidth='1000px'
      />

      <p>In order to get the name of the square you have to hover above the graph to the right. The goal was to promote exploring without being biased towards any country and only exploring those.</p>

      <p>Here I focused on implementing the grid to the left using mainly D3.js</p>
    </Container>
  );
};

export default awayFromHome;