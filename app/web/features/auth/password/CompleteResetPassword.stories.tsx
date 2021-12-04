import { Meta, Story } from "@storybook/react";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import React from "react";
import { mockedService } from "stories/serviceMocks";

import CompleteResetPassword from "./CompleteResetPassword";

export default {
  component: CompleteResetPassword,
  title: "Me/Auth/CompleteResetPasswordPage",
} as Meta;

interface CompleteResetPasswordArgs {
  isLoading?: boolean;
  shouldSucceed?: boolean;
}

const Template: Story<CompleteResetPasswordArgs> = ({
  isLoading = false,
  shouldSucceed = true,
} = {}) => {
  setMocks({ isLoading, shouldSucceed });
  return <CompleteResetPassword />;
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Success = Template.bind({});

export const Failed = Template.bind({});
Failed.args = {
  shouldSucceed: false,
};

function setMocks({
  isLoading,
  shouldSucceed,
}: Required<CompleteResetPasswordArgs>) {
  mockedService.account.completePasswordReset = () =>
    isLoading
      ? new Promise(() => void 0)
      : shouldSucceed
      ? Promise.resolve(new Empty())
      : Promise.reject(new Error("Invalid token"));
}
