import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  // const listItems = heroes.map((element) => (
  //     <li key={element.id}>{JSON.stringify(element.superhero)}</li>
  // ) )

  return (
    /* {listItems} */
    <ul>
      {heroes.map((heroe) => (
        <li key={heroe.id}>{heroe.superhero}</li>
      ))}
    </ul>
  );
};
