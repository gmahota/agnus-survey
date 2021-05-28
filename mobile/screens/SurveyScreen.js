import React, { Component } from 'react';
import {
  TouchableHighlight,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';
import { SimpleSurvey } from 'react-native-simple-survey';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

import { getSurveyData } from '../services/surveyService';

const surveyDemo = [
  {
    questionType: 'Info',
    questionText: 'Welcome2 to the React Native Simple Survey Example app! Tap next to continue',
  },
  {
    questionType: 'TextInput',
    questionText: 'Simple Survey supports free form text input.\n\nWhat is your favorite color?',
    questionId: 'favoriteColor',
    placeholderText: 'Tell me your favorite color!',
  },
  {
    questionType: 'NumericInput',
    questionText: 'It also supports numeric input. Enter your favorite number here!',
    questionId: 'favoriteNumber',
    placeholderText: '42',
  },
  {
    questionType: 'NumericInput',
    questionText: 'New to 3.0, default values!\n\nHow many balls can you juggle at once?',
    questionId: 'jugglingBalls',
    defaultValue: '0',
  },
  {
    questionType: 'SelectionGroup',
    questionText:
      'Naturally Simple Survey also has multiple choice questions. By default they acts like checkboxes, answers can be selected and deselected.\n\nWhat is your favorite pet?',
    questionId: 'favoritePet',
    options: [
      {
        optionText: 'Dogs',
        value: 'dog',
      },
      {
        optionText: 'Cats',
        value: 'cat',
      },
      {
        optionText: 'Ferrets',
        value: 'ferret',
      },
      {
        optionText: 'Snakes',
        value: 'snake',
      },
      {
        optionText: 'Guinea pigs',
        value: 'guinea',
      },
    ],
  },
  {
    questionType: 'MultipleSelectionGroup',
    questionText: 'Select two or three of your favorite foods!',
    questionId: 'favoriteFoods',
    questionSettings: {
      maxMultiSelect: 3,
      minMultiSelect: 2,
    },
    options: [
      {
        optionText: 'Sticky rice dumplings',
        value: 'sticky rice dumplings',
      },
      {
        optionText: 'Pad Thai',
        value: 'pad thai',
      },
      {
        optionText: 'Steak and Eggs',
        value: 'steak and eggs',
      },
      {
        optionText: 'Tofu',
        value: 'tofu',
      },
      {
        optionText: 'Ice cream!',
        value: 'ice cream',
      },
      {
        optionText: 'Injera',
        value: 'injera',
      },
      {
        optionText: 'Biryani',
        value: 'biryani',
      },
      {
        optionText: 'Tamales',
        value: 'tamales',
      },
    ],
  },
  {
    questionType: 'MultipleSelectionGroup',
    questionText:
      'Simple Survey can auto advance after a question has been answered. Select two things you do to relax:',
    questionId: 'relax',
    questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 2,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Reading a good book',
        value: 'reading',
      },
      {
        optionText: 'Going on vacation',
        value: 'vacations',
      },
      {
        optionText: 'Eating meals with family',
        value: 'meals',
      },
      {
        optionText: 'Heading to the ocean',
        value: 'ocean',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Simple Survey can also simulate radio button behavior. Pick from below: ',
    questionId: 'radio',
    questionSettings: {
      allowDeselect: false,
    },
    options: [
      {
        optionText: 'I was forced to pick option 1',
        value: 'option 1',
      },
      {
        optionText: 'I have to pick option 2',
        value: 'option 2',
      },
      {
        optionText: 'I guess option 3',
        value: 'option 3',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Simple Survey also supports default selections: ',
    questionId: 'singleDefault',
    questionSettings: {
      defaultSelection: 0,
    },
    options: [
      {
        optionText: 'This is the default option',
        value: 'default',
      },
      {
        optionText: 'This is the alternative option',
        value: 'alternative',
      },
    ],
  },
  {
    questionType: 'MultipleSelectionGroup',
    questionText: 'And of course it supports multiple defaults: ',
    questionId: 'multipleDefaults',
    questionSettings: {
      defaultSelection: [0, 2],
      maxMultiSelect: 2,
      minMultiSelect: 2,
    },
    options: [
      {
        optionText: 'This is the first default option',
        value: 'first default',
      },
      {
        optionText: 'This is the first alternate option',
        value: 'first alternative',
      },
      {
        optionText: 'This is the second default option',
        value: 'second default',
      },
      {
        optionText: 'This is the second alternate option',
        value: 'second alternative',
      },
    ],
  },
  {
    questionType: 'Info',
    questionText: 'That is all for the demo, tap finish to see your results!',
  },
];

export default class SurveyScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
      },
      headerTintColor: '#fff',
      headerTitle: 'Sample Survey',
      headerTitleStyle: {
        flex: 1,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: PURPLE,
      answersSoFar: '',
      survey: surveyDemo,
    };

    this.getSurvey = this.getSurvey.bind(this);
  }

  async componentDidMount() {
    this.getSurvey();
  }

  async getSurvey() {
    let data = await getSurveyData();
    // this.setState({ survey: data });

    console.log(data);
  }

  onSurveyFinished(answers) {
    /**
     *  By using the spread operator, array entries with no values, such as info questions, are removed.
     *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
     *  to the rest of your code, can be done.
     *
     *  Answers are returned in an array, of the form
     *  [
     *  {questionId: string, value: any},
     *  {questionId: string, value: any},
     *  ...
     *  ]
     *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
     *  to you.
     *
     *  As an example
     *  {
     *      questionId: "favoritePet",
     *      value: {
     *          optionText: "Dogs",
     *          value: "dog"
     *      }
     *  }
     *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
     *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
     */

    const infoQuestionsRemoved = [...answers];

    // Convert from an array to a proper object. This won't work if you have duplicate questionIds
    const answersAsObj = {};
    for (const elem of infoQuestionsRemoved) {
      answersAsObj[elem.questionId] = elem.value;
    }

    this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
  }

  /**
   *  After each answer is submitted this function is called. Here you can take additional steps in response to the
   *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
   *  is restricted (age, geo-fencing) from your app.
   */
  onAnswerSubmitted(answer) {
    this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
  }

  renderPreviousButton(onPress, enabled) {
    return (
      <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
        <Button
          color={nowTheme.COLORS.ERROR}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={nowTheme.COLORS.ERROR}
        >
          <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14 }} color={theme.COLORS.WHITE}>
            {'Previous'}
          </Text>
        </Button>
      </View>
    );
  }

  renderNextButton(onPress, enabled) {
    return (
      <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
        <Button
          color={nowTheme.COLORS.SUCCESS}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={nowTheme.COLORS.SUCCESS}
        >
          <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14 }} color={theme.COLORS.WHITE}>
            {'Next'}
          </Text>
        </Button>
      </View>
    );
  }

  renderFinishedButton(onPress, enabled) {
    return (
      <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
        <Button onPress={onPress} disabled={!enabled} color={nowTheme.COLORS.SUCCESS}>
          <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14 }} color={theme.COLORS.WHITE}>
            {'Finished'}
          </Text>
        </Button>
      </View>
    );
  }

  renderButton(data, index, isSelected, onPress) {
    return (
      <View
        key={`selection_button_view_${index}`}
        style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
      >
        <Button
          onPress={onPress}
          color={isSelected ? nowTheme.COLORS.PRIMARY : nowTheme.COLORS.SECONDARY}
          style={isSelected ? styles.button_bold : styles.button}
          key={`button_${index}`}
        >
          <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14 }} color={theme.COLORS.WHITE}>
            {data.optionText}
          </Text>
        </Button>
      </View>
    );
  }

  renderQuestionText(questionText) {
    return (
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text numLines={1} style={styles.questionText}>
          {questionText}
        </Text>
      </View>
    );
  }

  renderTextBox(onChange, value, placeholder, onBlur) {
    return (
      <View>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => onChange(text)}
          numberOfLines={1}
          underlineColorAndroid={'white'}
          placeholder={placeholder}
          placeholderTextColor={'rgba(184,184,184,1)'}
          value={value}
          multiline
          onBlur={onBlur}
          blurOnSubmit
          returnKeyType="done"
        />
      </View>
    );
  }

  renderNumericInput(onChange, value, placeholder, onBlur) {
    return (
      <TextInput
        style={styles.numericInput}
        onChangeText={(text) => {
          onChange(text);
        }}
        underlineColorAndroid={'white'}
        placeholderTextColor={'rgba(184,184,184,1)'}
        value={String(value)}
        placeholder={placeholder}
        keyboardType={'numeric'}
        onBlur={onBlur}
        maxLength={3}
      />
    );
  }

  renderInfoText(infoText) {
    return (
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
    );
  }

  render() {
    const { survey } = this.state;

    if (!survey) {
      return (
        <Block flex center style={styles.container}>
          <Text>Loading...</Text>
        </Block>
      );
    }

    return (
      <Block flex center style={styles.home}>
        <Block flex style={styles.container}>
          <Block flex>
            <ImageBackground
              source={Images.SurveyMSBackground}
              style={{ flex: 1, height: height, width, zIndex: 1 }}
            />

            <Block space="between" style={styles.padded}>
              <Block middle>
                <SimpleSurvey
                  ref={(s) => {
                    this.surveyRef = s;
                  }}
                  survey={survey}
                  renderSelector={this.renderButton.bind(this)}
                  containerStyle={styles.surveyContainer}
                  selectionGroupContainerStyle={styles.selectionGroupContainer}
                  navButtonContainerStyle={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}
                  renderPrevious={this.renderPreviousButton.bind(this)}
                  renderNext={this.renderNextButton.bind(this)}
                  renderFinished={this.renderFinishedButton.bind(this)}
                  renderQuestionText={this.renderQuestionText}
                  onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                  onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                  renderTextInput={this.renderTextBox}
                  renderNumericInput={this.renderNumericInput}
                  renderInfo={this.renderInfoText}
                />
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: { width: width },
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  surveys: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  button_bold: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    fontWeight: 'bold',
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
  answersContainer: {
    width: '90%',
    maxHeight: '20%',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 10,
  },
  surveyContainer: {
    width: 'auto',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignContent: 'center',
    padding: 5,
    flexGrow: 0,
  },
  selectionGroupContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-end',
  },
  background: {
    flex: 1,
    minHeight: 800,
    maxHeight: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20,
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,

    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
  },
  numericInput: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
  },
});
