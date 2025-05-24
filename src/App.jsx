import { styled } from "speedy-jsx";

// 使用 let 自动转换为 ref，不需要手动调用 ref() 和 .value
let count = 0;

function increment() {
  // 不需要 .value，自动转换
  count++;
}

function decrement() {
  // 不需要 .value，自动转换
  count--;
}

// @computed
const doubleCount = count * 2;

// @computed
const countStatus = count === 0 ? "零" : count > 0 ? "正数" : "负数";

// 使用 $: 语法创建响应式效果（自动转换为 watchEffect）
$: console.log(`当前计数: ${count}, 两倍值: ${doubleCount}`);

function reset() {
  count = 0;
}

export default (
  <Container>
    <Title>计数器应用</Title>
    <p>
      当前计数: <CountDisplay>{count}</CountDisplay>
      <StatusBadge status={countStatus}>{countStatus}</StatusBadge>
    </p>
    <p>双倍值: {doubleCount}</p>
    <ButtonContainer>
      <DecrementButton onClick={decrement}>减少</DecrementButton>
      <IncrementButton onClick={increment}>增加</IncrementButton>
    </ButtonContainer>
    <ButtonContainer>
      <ResetButton onClick={reset}>重置</ResetButton>
    </ButtonContainer>
  </Container>
);

// 添加全局样式
styled.global({
  "html, body": {
    margin: 0,
    padding: 0,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    color: "#333",
    lineHeight: "1.6",
    height: "100%",
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "#app": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  button: {
    fontFamily: "inherit",
    fontSize: "14px",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
  },
});
const fadeIn = styled.keyframes({
  from: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});
// 使用 styled 系统创建样式化组件
const Container = styled.div`
  text-align: center;
  padding: 30px;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  animation: ${fadeIn} 0.6s ease;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 500;
`;

const CountDisplay = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
  margin-left: 10px;
  background-color: ${(props) => {
    if (props.status === "正数") return "#4caf50";
    if (props.status === "负数") return "#f44336";
    return "#ffc107";
  }};
  color: white;
  animation: ${fadeIn} 0.3s ease;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const DecrementButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(244, 67, 54, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(244, 67, 54, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(244, 67, 54, 0.4);
  }
`;

const IncrementButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(76, 175, 80, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(76, 175, 80, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(76, 175, 80, 0.4);
  }
`;

const ResetButton = styled.button`
  padding: 8px 16px;
  margin-top: 15px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(33, 150, 243, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(33, 150, 243, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(33, 150, 243, 0.4);
  }
`;
