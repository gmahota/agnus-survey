import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, Button, theme, Text } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
import { getSurveysData } from '../services/surveyService';
const { width } = Dimensions.get('screen');

import nowTheme from '../constants/Theme';

class Home extends React.Component {
  renderArticles = (surveys) => {
    const { navigation } = this.props;

    if (surveys.length === 0) {
      return (
        <Block flex center style={styles.home}>
          <Text>Loading...</Text>
        </Block>
      );
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.articles}>
        <Block flex>
          <Block center>
            <Button
              shadowless
              style={styles.button}
              color={nowTheme.COLORS.PRIMARY}
              onPress={() => navigation.navigate('Survey')}
            >
              <Text
                style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                color={theme.COLORS.WHITE}
              >
                Sample Survey
              </Text>
            </Button>
          </Block>

          {surveys.map((item) => {
            return <Card key={item.id} item={item} horizontal />;
          })}
        </Block>
      </ScrollView>
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      surveys: [],
    };
    this.getSurveys = this.getSurveys.bind(this);
  }

  async componentDidMount() {
    this.getSurveys();
  }

  async getSurveys() {
    let data = await getSurveysData();
    this.setState({ surveys: data });
  }

  render() {
    const { surveys } = this.state;
    if (surveys.length === 0) {
      return (
        <Block flex center style={styles.home}>
          <Text>Loading...</Text>
        </Block>
      );
    }
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles(surveys)}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});

export default Home;
