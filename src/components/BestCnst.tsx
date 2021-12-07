import React from 'react';

const BestCnst = () => {
  return (
    <div className="w-[800px] mx-auto">
      <div className="grid grid-rows-5 gap-2 container-md mt-12">
        <div className="h-50 grid grid-cols-7 grid-flow-col">
          <div className="bg-red-600 rounded-l-xl">
            <br />
          </div>
          <div className="bg-red-600">
            <br />
          </div>
          <div className="bg-red-600">
            <br />
          </div>
          <div className="bg-red-600">
            <br />
          </div>
          <div className="bg-red-600">
            <br />
          </div>
          <div className="bg-red-600">
            <img
              className="mt-4"
              src="http://fingfx.thomsonreuters.com/gfx/rngs/MOTOR-F1/0100408P0KF/img/Ferrari.png"
              alt=""
            ></img>
          </div>
          <div className="bg-red-600 text-white font-semibold rounded-r-xl">
            <h3 className="text-right mr-4">
              Ferrari <br />
              238 Wins
            </h3>
          </div>
        </div>
        <div className="h-50 grid grid-cols-7 grid-flow-col">
          <div className="bg-yellow-600 rounded-l-xl">
            <br />
          </div>
          <div className="bg-yellow-600">
            <br />
          </div>
          <div className="bg-yellow-600">
            <br />
          </div>
          <div className="bg-yellow-600">
            <br />
          </div>
          <div className="bg-yellow-600">
            <img
              className="mt-4"
              src="http://graphics.thomsonreuters.com/data/f1/images/cars2021/McLaren.png"
              alt=""
            ></img>
          </div>
          <div className="bg-yellow-600 text-white font-semibold rounded-r-xl">
            <h3 className="text-right mr-4">
              McLaren <br />
              183 Wins
            </h3>
          </div>
          <div></div>
        </div>
        <div className="h-50 grid grid-cols-7 grid-flow-col">
          <div className="bg-green-400 rounded-l-xl">
            <br />
          </div>
          <div className="bg-green-400">
            <br />
          </div>
          <div className="bg-green-400">
            <br />
          </div>
          <div className="bg-green-400">
            <img
              className="mt-4"
              src="https://www.formula1.com/content/dam/fom-website/manual/Misc/PreSeasonPowerRankings/mercedes.png.transform/9col/image.png"
              alt=""
            ></img>
          </div>
          <div className="bg-green-400 text-white font-semibold rounded-r-xl">
            <h3 className="text-right mr-4">
              Mercedes <br />
              124 Wins
            </h3>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="h-50 grid grid-cols-7 grid-flow-col">
          <div className="bg-blue-500 rounded-l-xl">
            <br />
          </div>
          <div className="bg-blue-500">
            <br />
          </div>
          <div className="bg-blue-500">
            <img
              className="mt-4"
              src="https://www.formula1.com/content/dam/fom-website/manual/Misc/PreSeasonPowerRankings/williams.png.transform/9col/image.png"
              alt=""
            ></img>
          </div>
          <div className="bg-blue-500 text-white font-semibold rounded-r-xl">
            <h3 className="text-right mr-4">
              Williams <br />
              114 Wins
            </h3>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="h-50 grid grid-cols-7 grid-flow-col">
          <div className="bg-gray-600 rounded-l-xl">
            <br />
          </div>
          <div className="bg-gray-600">
            <img
              className="mt-4"
              src="https://www.formula1.com/content/dam/fom-website/teams/2021-Team-Pages/teamcar-redbull.png.transform/2col-retina/image.png"
              alt=""
            ></img>
          </div>
          <div className="bg-gray-600 text-white font-semibold rounded-r-xl">
            <h3 className="text-right mr-4">
              Redbull <br />
              74 Wins
            </h3>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export { BestCnst };
