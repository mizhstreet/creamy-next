import axios from "axios";
import { useState } from "react";
import { createContainer } from "unstated-next";
import { IUser } from "../interfaces/user";
import { getEndpoint } from "../utils/getEndpoint";
import { IItem } from "./selected-container";

type qa = {
  quantity: number;
};

function useAuth() {
  const [user, setUser] = useState<IUser>();

  const login = async (username: string, password: string) => {
    const res = await axios.post<IUser>(getEndpoint("/api/auth/login"), { username, password });

    if (res.data.userid) {
      setUser(res.data);
      return true;
    }
    return false;
  };

  return { user, login };
}

const Auth = createContainer(useAuth);
export { Auth };
