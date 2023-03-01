import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ParallaxScrollView from './parallex';
import styles, {HEADER_HEIGHT} from './style';

const HeaderView = () => {
  return <View style={styles.headerView}></View>;
};

const BottomView = () => {
  return (
    <View style={styles.bottomView}>
      <View style={{height: 700}}></View>
    </View>
  );
};

const renderNavBar = () => {
  return (
    <SafeAreaView style={styles.navContainer}>
      <HeaderView />
    </SafeAreaView>
  );
};

const renderContent = () => {
  return <BottomView />;
};

const Main = () => {
  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={310}
        extraScrollHeight={60}
        navbarColor={'#FFFFFF'}
        backgroundImage={{
          uri: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80',
        }}
        renderNavBar={renderNavBar}
        title={'hello'}
        titleStyle={styles.titleAltStyle}
        renderContent={renderContent}
        containerStyle={styles.container}
      />
    </View>
  );
};

export default Main;
