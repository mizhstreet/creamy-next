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
}

const Auth = createContainer(useAuth);
export { Auth };
