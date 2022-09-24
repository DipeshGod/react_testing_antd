import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useFetch } from "../../hooks/useFetch";

const Pokemon = () => {
  const { loading, data } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/clefairy"
  );

  return (
    <div data-testid="pokemon">
      {!loading ? (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={data.sprites.back_default} />}
        >
          <Meta
            data-testid="poke_info"
            title={data.name.toUpperCase()}
            description={data.species.url}
          />
        </Card>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Pokemon;
