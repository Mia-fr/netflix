import Title from "./Title";
import FilmList from "./FilmList";

const Section = (props) => {
  return (
    <>
      <Title titleOfCategory={props.titleOfCategory} />

      <FilmList filmPicture={props.filmPicture} />
    </>
  );
};

export default Section;
