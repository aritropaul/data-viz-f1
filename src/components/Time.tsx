import React from 'react';

import Marina2014 from '../static/marina-2014.svg';
import Marina2015 from '../static/marina-2015.svg';
import Marina2016 from '../static/marina-2016.svg';
import Marina2017 from '../static/marina-2017.svg';
import Marina2018 from '../static/marina-2018.svg';
import Marina2019 from '../static/marina-2019.svg';
import Monaco2014 from '../static/monaco-2014.svg';
import Monaco2015 from '../static/monaco-2015.svg';
import Monaco2016 from '../static/monaco-2016.svg';
import Monaco2017 from '../static/monaco-2017.svg';
import Monaco2018 from '../static/monaco-2018.svg';
import Monaco2019 from '../static/monaco-2019.svg';
import Monza2014 from '../static/monza-2014.svg';
import Monza2015 from '../static/monza-2015.svg';
import Monza2016 from '../static/monza-2016.svg';
import Monza2017 from '../static/monza-2017.svg';
import Monza2018 from '../static/monza-2018.svg';
import Monza2019 from '../static/monza-2019.svg';
import Redbull2014 from '../static/redbull-2014.svg';
import Redbull2015 from '../static/redbull-2015.svg';
import Redbull2016 from '../static/redbull-2016.svg';
import Redbull2017 from '../static/redbull-2017.svg';
import Redbull2018 from '../static/redbull-2018.svg';
import Redbull2019 from '../static/redbull-2019.svg';
import Spa2014 from '../static/spa-2014.svg';
import Spa2015 from '../static/spa-2015.svg';
import Spa2016 from '../static/spa-2016.svg';
import Spa2017 from '../static/spa-2017.svg';
import Spa2018 from '../static/spa-2018.svg';
import Spa2019 from '../static/spa-2019.svg';

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
    if (year == 2014) {
      return (
        <Marina2014 className="container w-800 h-500"></Marina2014>
      )
    }
    if (year == 2015) {
      return (
        <Marina2015 className="container w-800 h-500"></Marina2015>
      )
    }
    if (year == 2016) {
      return (
        <Marina2016 className="container w-800 h-500"></Marina2016>
      )
    }
    if (year == 2017) {
      return (
        <Marina2017 className="container w-800 h-500"></Marina2017>
      )
    }
    if (year == 2018) {
      return (
        <Marina2018 className="container w-800 h-500"></Marina2018>
      )
    }
    if (year == 2019) {
      return (
        <Marina2019 className="container w-800 h-500"></Marina2019>
      )
    }
    else {
      return (
        <div className="text-left font-semibold text-2xl mt-12 text-white">No data available for this year.</div>
      )
    }
  }
  if (track === 'spa') {
    if (year == 2014) {
      return (
        <Spa2014 className="container w-800 h-500"></Spa2014>
      )
    }
    if (year == 2015) {
      return (
        <Spa2015 className="container w-800 h-500"></Spa2015>
      )
    }
    if (year == 2016) {
      return (
        <Spa2016 className="container w-800 h-500"></Spa2016>
      )
    }
    if (year == 2017) {
      return (
        <Spa2017 className="container w-800 h-500"></Spa2017>
      )
    }
    if (year == 2018) {
      return (
        <Spa2018 className="container w-800 h-500"></Spa2018>
      )
    }
    if (year == 2019) {
      return (
        <Spa2019 className="container w-800 h-500"></Spa2019>
      )
    }
    else {
      return (
        <div className="text-left font-semibold text-2xl mt-12 text-white">No data available for this year.</div>
      )
    }
  }
  if (track === 'monza') {
    if (year == 2014) {
      return (
        <Monza2014 className="container w-800 h-500" />
      )
    }
    if (year == 2015) {
      return (
        <Monza2015 className="container w-800 h-500" />
      )
    }
    if (year == 2016) {
      return (
        <Monza2016 className="container w-800 h-500" />
      )
    }
    if (year == 2017) {
      return (
        <Monza2017 className="container w-800 h-500" />
      )
    }
    if (year == 2018) {
      return (
        <Monza2018 className="container w-800 h-500" />
      )
    }
    if (year == 2019) {
      return (
        <Monza2019 className="container w-800 h-500" />
      )
    }
    else {
      return (
        <div className="text-left font-semibold text-2xl mt-12 text-white">No data available for this year.</div>
      )
    }
  }
  if (track === 'redbull') {
    if (year == 2014) {
      return (
        <Redbull2014 className="container w-800 h-500" />
      )
    }
    if (year == 2015) {
      return (
        <Redbull2015 className="container w-800 h-500" />
      )
    }
    if (year == 2016) {
      return (
        <Redbull2016 className="container w-800 h-500" />
      )
    }
    if (year == 2017) {
      return (
        <Redbull2017 className="container w-800 h-500" />
      )
    }
    if (year == 2018) {
      return (
        <Redbull2018 className="container w-800 h-500" />
      )
    }
    if (year == 2019) {
      return (
        <Redbull2019 className="container w-800 h-500" />
      )
    }
    else {
      return (
        <div className="text-left font-semibold text-2xl mt-12 text-white">No data available for this year.</div>
      )
    }
  }
  else {
    return(<div></div>)
  }
};

/* eslint-enable */

export { Time };
