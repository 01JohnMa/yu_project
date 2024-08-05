import { View ,Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";
import "./index.scss";


/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI 性格测试</View>
      <View className="at-article__h3 subTitle">
        只需 2 分钟，就能非常准确地描述出你是谁，以及你的性格特点
      </View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
        }}
      >
        开始测试
      </AtButton>
      <Image src={headerBg} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
