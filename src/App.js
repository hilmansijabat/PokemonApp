import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from './stores/actions/pokemon';
import Card from './components/Pokemon';

function App() {
  const dispatch = useDispatch();

  const { loading, pokemonDataDetail, error } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch])


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const pokemonApiStyle = {
    display: 'flex',
    fontWeight: 'bold',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#6527BE',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px', 
  };

  const cardStyle = {
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: '50px', 
    padding: '20px',
  };

  return (
    <>
      <div style={pokemonApiStyle}>Pokemon App</div>
        <div style={cardStyle}>
          {pokemonDataDetail.map((pokemonDetail, index) => (
            <Card 
              key={index}
              title={pokemonDetail.name}
              imageSrc={pokemonDetail.sprites.front_default}
            />
          ))}
        </div>
    </>
  );
}

export default App;
