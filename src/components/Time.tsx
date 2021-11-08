import React from 'react';

import { marinabay } from '../utils/marinabay';
import { monaco } from '../utils/monaco';
import { monza } from '../utils/monza';
import { redbull } from '../utils/redbull';
import { spa } from '../utils/spa';

type ITimeProps = {
  id: string;
  year: number;
};

/* eslint-disable */ 

const Time = (props: ITimeProps) => {
  const track = props.id;
  const { year } = props;

  if (track === 'monaco') {
    return (
      <div>
        {console.log({monaco})}
        <h1>{track}</h1>
        { monaco.filter(((race: { year: number; }) => race.year === year)).map((filteredRace: { time_x: string }) => {
          return <h3>{ filteredRace.time_x }</h3>
        })}
      </div>
    );
  }
  if (track === 'marinabay') {
    return (
      <div>
        {console.log({marinabay})}
        <h1>{track}</h1>
        <h3>{year}</h3>
      </div>
    );
  }
  if (track === 'spa') {
    return (
      <div>
        {console.log({spa})}
        <h1>{track}</h1>
        <h3>{year}</h3>
      </div>
    );
  }
  if (track === 'monza') {
    return (
      <div>
        {console.log({monza})}
        <h1>{track}</h1>
        <h3>{year}</h3>
      </div>
    );
  }
  if (track === 'redbull') {
    return (
      <div>
        {console.log({redbull})}
        <h1>{track}</h1>
        <h3>{year}</h3>
      </div>
    );
  }
  else {
    return(<div></div>)
  }
};

/* eslint-enable */

export { Time };
