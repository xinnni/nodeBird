import React from "react";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
  );
};

export default Home;

/**
 * pages 폴더는 항상 이름이 pages여야 한다.
 * next는 pages를 인식해서
 * 이 안에 파일들을 개별적인 page 컴포넌트로 만들어 주기 때문이다.
 */
