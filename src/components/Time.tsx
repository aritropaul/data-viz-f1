import React from 'react';

import Monaco2014 from '../static/monaco-2014.svg';
import Monaco2015 from '../static/monaco-2015.svg';
import Monaco2016 from '../static/monaco-2016.svg';
import Monaco2017 from '../static/monaco-2017.svg';
import Monaco2018 from '../static/monaco-2018.svg';
import Monaco2019 from '../static/monaco-2019.svg';
import { marinabay } from '../utils/marinabay';
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
    if (year == 2014) {
      return (
        <Monaco2014 className="container w-800 h-500"></Monaco2014>
      )
    }
    if (year == 2015) {
      return (
        <Monaco2015 className="container w-800 h-500"></Monaco2015>
      )
    }
    if (year == 2016) {
      return (
        <Monaco2016 className="container w-800 h-500"></Monaco2016>
      )
    }
    if (year == 2017) {
      return (
        <Monaco2017 className="container w-800 h-500"></Monaco2017>
      )
    }
    if (year == 2018) {
      return (
        <Monaco2018 className="container w-800 h-500"></Monaco2018>
      )
    }
    if (year == 2019) {
      return (
        <Monaco2019 className="container w-800 h-500"></Monaco2019>
      )
    }
    else {
      return (
        <div className="text-left font-semibold text-2xl mt-12 text-white">No data available for this year.</div>
      )
    }
  }
  if (track === 'marinabay') {
    return (
      <div>
        {console.log({marinabay})}
        <h1>{track}</h1>
        { marinabay.filter(((race: { year: number; }) => race.year === year)).map((filteredRace: { time_x: string }) => {
          return <h3>{ filteredRace.time_x }</h3>
        })}
      </div>
    );
  }
  if (track === 'spa') {
    return (
      <div>
        {console.log({spa})}
        <h1>{track}</h1>
        { spa.filter(((race: { year: number; }) => race.year === year)).map((filteredRace: { time_x: string }) => {
          return <h3>{ filteredRace.time_x }</h3>
        })}
      </div>
    );
  }
  if (track === 'monza') {
    return (
      <div>
        {console.log({monza})}
        <h1>{track}</h1>
        { monza.filter(((race: { year: number; }) => race.year === year)).map((filteredRace: { time_x: string }) => {
          return <h3>{ filteredRace.time_x }</h3>
        })}
      </div>
    );
  }
  if (track === 'redbull') {
    return (
      <div>
        {console.log({redbull})}
        <h1>{track}</h1>
        { redbull.filter(((race: { year: number; }) => race.year === year)).map((filteredRace: { time_x: string }) => {
          return <h3>{ filteredRace.time_x }</h3>
        })}
      </div>
    );
  }
  else {
    return(<div></div>)
  }
};

/* eslint-enable */

export { Time };
