import { CommonActions } from '@react-navigation/native';

export function resetNavigateTo(navigation, routeName, params) {
  /**
   * DO NOT RESET CURRENT NAVIGATION IF IT'S ALREADY ON THE SAME ROUTE
   */
  // if (navigation.state.routeName === routeName) return;
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        { name: routeName },
      ],
    })
  );
}

export function navigationCheckShouldComponentUpdate(props) {
  const { navigation } = props;
  return navigation.isFocused();
}
