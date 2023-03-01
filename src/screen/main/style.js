import {StyleSheet, Dimensions, Platform} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
export const HEADER_HEIGHT =
  Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 110) : 64;
const NAV_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 264;

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navContainer: {
    marginHorizontal: 24,
    marginTop: isAndroid && 10,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: isAndroid ? 38 : 10,
  },
  topSubView: {
    flexDirection: 'row',
  },
  shareIcon: {
    marginRight: 24,
  },
  image: {
    height: isAndroid ? 314 : 305,
  },
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    // height: 300,
    marginBottom: 500,
    shadowColor: 'black',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subBottomView: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  contentContainerStyle: {
    marginLeft: 24,
    marginTop: 30,
    paddingBottom: isAndroid ? 30 : 65,
  },
  containerStyle: {
    marginRight: 24,
  },
  authorName: {
    fontSize: 17,

    color: '#333',
    marginBottom: 10,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  countryFlagContainer: {
    width: 15,
    height: 10,
    marginRight: 5,
  },
  countryName: {
    fontSize: 12,

    color: '#767676',
  },
  specialisationHeading: {
    marginBottom: 12,
    fontSize: 14,

    color: '#333',
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 32,
    flexWrap: 'wrap',
  },
  tagBox: {
    backgroundColor: 'white',
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  tagName: {
    fontSize: 13,
    color: `${'#333'}B3`,
  },
  descriptionHeading: {
    fontSize: 14,
    color: '#343434',
    marginBottom: 6,
  },
  desc: {
    width: 340,
    textAlign: 'left',
    fontSize: 13,
    color: '#767676',
  },
  showMore: {
    color: '#F089B0',
    fontSize: 13,
    marginLeft: 4.3,
    marginBottom: isAndroid ? -4 : 0,
  },
  contentByAuthor: {
    fontSize: 14,
    color: '#333',
    marginTop: 40,
    marginBottom: 16,
  },
  sessionCoverImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  contentByAuthorContainer: {
    marginBottom: 15,
  },
  titleStyle: {
    width: 160,
  },
  iconContainer: {
    width: 35,
    height: 35,
    backgroundColor: '#F8F8F8E6',
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {marginLeft: 5},
  titleAltStyle: {
    color: '#333',
    fontSize: 17,

    width: 180,
    marginLeft: isAndroid ? -135 : -90,
    marginTop: isAndroid ? 55 : 20,

    height: isAndroid ? 20 : null,
  },
});
