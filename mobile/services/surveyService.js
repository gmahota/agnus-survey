import axios from 'axios';

let url = 'https://agnus-survey.herokuapp.com/';

var Items = [];
let result;
const getSurveysData = async () => {
  await axios
    .get(url + 'getActive', null, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(
      (response) => {
        if (response.data) {
          result = response.data ? response.data : {};

          if (result) {
            for (var i = 0; i < Object.keys(result).length; i++) {
              key = Object.keys(result)[i];
              Items.push({
                id: key,
                title: result[key].name || key,
                survey: result[key].json || result[key],
                image: require('../assets/imgs/project15.jpg'),
                cta: 'Run Survey',
                horizontal: true,
              });
            }
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

  return Items;

  // return new Promise((resolve, reject) => {
  //   setTimeout(async function () {
  //     const surveys = await fetch('https://agnus-survey.herokuapp.com/getActive').json();

  //     console.log(surveys);

  //     surveys ? resolve(surveys) : reject('Error');
  //   }, 40000);
  // });
};

const getSurvey = async (id) => {
  var surveys = await fetch('https://agnus-survey.herokuapp.com/getActive');

  console.log(surveys);

  return surveys;
};
export { getSurvey, getSurveysData };
