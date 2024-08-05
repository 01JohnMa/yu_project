import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import { getBestQuestionResult } from "../../utils/bizUtils";
import questions from "../../data/questions.json";
// eslint-disable-next-line import/no-duplicates
import questionResults from "../../data/question_results.json";
import question_results from "../../data/question_results";
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";
import "./index.scss";

/**
 * 测试页面
 */
export default () => {
  // 答案
  const answerList = Taro.getStorageSync("answerList");
  const result = getBestQuestionResult(answerList, questions, questionResults);
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">
        {result.resultName}
        <View>
          <View className="at-article__h2 subTitle">{result.resultDesc}</View>
        </View>
      </View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={headerBg} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
