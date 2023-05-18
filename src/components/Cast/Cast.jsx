import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImSad } from 'react-icons/im';

import { fetchMovie } from '../../fetchAPI';
import {
  CastList,
  CastContainer,
  CastItem,
  ActorImg,
  ActorImgWrapper,
  ActorDataWrapper,
  NoCastText,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    fetchMovie.getMovieCast(id).then(setCastList);
  }, [id]);

  if (!castList) {
    return null;
  }

  return (
    <CastContainer>
      {castList.length !== 0 ? (
        <CastList>
          {castList.map(el => (
            <CastItem key={el.id}>
              <ActorImgWrapper>
                <ActorImg
                  src={
                    el.profile_path
                      ? `${fetchMovie.BASE_URL}${el.profile_path}`
                      : fetchMovie.defaultImg
                  }
                  alt={el.name}
                />
              </ActorImgWrapper>
              <ActorDataWrapper>
                <p>{el.name}</p>
                <p>Character: {el.character}</p>
              </ActorDataWrapper>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <NoCastText>
          {' '}
          No cast info available for this movie <ImSad />
        </NoCastText>
      )}
    </CastContainer>
  );
};

export default Cast;
