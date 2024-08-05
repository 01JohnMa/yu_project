import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton, AtRadio } from "taro-ui";
import { useEffect, useState } from "react";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import "./index.scss";

/**
 * 答题页面
 */
export default () => {
  const [current, setCurrent] = useState<number>(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const ratioOptions = currentQuestion.options.map((option) => {
    return {
      label: `${option.key}. ${option.value}`,
      value: option.key,
    };
  });
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  const [answerList] = useState<string[]>([]);
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      {JSON.stringify(answerList) }
      <View className="at-article__h2 title">
        {current}. {currentQuestion.title}
      </View>
      <View className="options-wrapper">
      <AtRadio
        options={ratioOptions}
        value={currentAnswer}
        onClick={(value) => {
          setCurrentAnswer(value);
          answerList[current - 1] = value;
        }}
      ></AtRadio>
      </View>
      {current < questions.length && (
        <AtButton
          type="primary"
          size="normal"
          className="controlBtn"
          circle
          disabled={!currentAnswer}
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          下一题
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          type="primary"
          size="normal"
          className="controlBtn"
          circle
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          上一题
        </AtButton>
      )}
      {current >= questions.length && (
        <AtButton
          type="primary"
          size="normal"
          className="controlBtn"
          circle
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/result/index",
            });
          }}
        >
          查看结果
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );
};
