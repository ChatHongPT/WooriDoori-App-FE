import Router from "./router/Router";
import { useNotification } from "./hooks/useNotification";

function App() {
  // SSE 알림 연결 및 처리
  useNotification();

  return <Router />;
}

export default App;
