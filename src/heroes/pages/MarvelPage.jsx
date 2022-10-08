import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Universe</h1>
      <hr />
      <ul>
        <HeroList publisher="Marvel Comics" />
      </ul>
    </>
  );
};
