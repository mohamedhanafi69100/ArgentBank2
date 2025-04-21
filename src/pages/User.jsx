import React from "react";
import accounts from "../data/accounts.json";
import Account from "../components/accounts/Account";

const User = () => {
  return (
    <>
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </>
  );
};

export default User;
