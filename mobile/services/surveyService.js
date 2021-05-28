import axios from 'axios';

let url = 'https://agnus-survey.herokuapp.com/';
var Items = [];
let result;
const getSurveysData = async () => {
  await axios
    .get(url + 'getActive', null, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    .then(
      (response) => {
        if (response.data) {
          result = response.data ? response.data : {};

          if (result) {
            for (var i = 0; i < Object.keys(result).length; i++) {
              key = Object.keys(result)[i];

              if (result[key].json) {
                let image = require('../assets/imgs/project15.jpg');

                let survey = JSON.parse(result[key].json);

                if (survey.pages[0].elements[0].name.toLowerCase() === 'icon') {
                  image = { uri: survey.pages[0].elements[0].imageLink };
                }

                Items.push({
                  id: key,
                  title: result[key].name || key,
                  survey: result[key].json || result[key],
                  image: image,
                  cta: 'Run Survey',
                  horizontal: true,
                });
              }
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

const getSurveyData = async (id) => {
  let item = {};

  await axios
    .get(url + `getSurvey/?surveyId:${id}`, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(
      (response) => {
        if (response.data) {
          result = response.data ? response.data : {};

          if (result) {
            console.log(result);

            key = Object.keys(result)[i];

            if (result[key].json) {
              let image = require('../assets/imgs/project15.jpg');

              let survey = JSON.parse(result[key].json);

              if (survey.pages[0].elements[0].name.toLowerCase() === 'icon') {
                image = { uri: survey.pages[0].elements[0].imageLink };
              }

              item = survey;
            }
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

  return item;
};
export { getSurveyData, getSurveysData };
