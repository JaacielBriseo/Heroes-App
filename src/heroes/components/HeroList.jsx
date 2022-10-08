import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  // const listItems = heroes.map((element) => (
  //     <li key={element.id}>{JSON.stringify(element.superhero)}</li>
  // ) )

  return (
    /* {listItems} */
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heroes.map((heroe) => (
      <HeroCard key={heroe.id}
      {...heroe}/>
      ))}
    </div>
  );
};
