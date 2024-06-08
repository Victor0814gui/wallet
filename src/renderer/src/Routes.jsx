import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { SignIn } from "./screens/SingIn";
import { SignUp } from "./screens/SingUp";
import { Dashboard } from "./screens/Dashboard";
import { Wrapper } from "./Wrapper";
import { Analytics } from "./screens/Analytics";
import { Settings } from "./screens/Settings";
import { Purchases } from "./screens/Purchases";
import { Timer } from "./screens/Timer";
import { Reports } from "./screens/Reports";
import { AccountManager } from "./screens/AccountManager";
import { Tools } from "./screens/Tools";

export function Router() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/analytics" exact element={<Analytics />} />

          <Route path="/settings" exact element={<Settings />} />
          <Route path="/purchases" exact element={<Purchases />} />
          <Route path="/timer" exact element={<Timer />} />
          <Route path="/reports" exact element={<Reports />} />

          <Route path="/tools" exact element={<Tools />} />
          <Route path="/account-manager" exact element={<AccountManager />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}
