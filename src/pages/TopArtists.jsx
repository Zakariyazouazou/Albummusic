import React from 'react';
import { dataSong } from '../Data/Data';
import { ArtistCard, Error, Loader } from '../components';

const TopArtists = () => {




  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {dataSong?.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  );
};

export default TopArtists;
