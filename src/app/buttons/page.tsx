import React from "react";
import {
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
} from "../components/Buttons";

function page() {
  return (
    <div className="bg-black p-10 h-screen text-white">
      <h1 className="text-center font-bold text-5xl">Buttons</h1>
      <hr className="my-10" />
      <div className="flex gap-16 flex-wrap justify-evenly">
        <Button1 bg="white" as="button" text="Button 1" />
        <Button2 text="Button 2" />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button5 color="gradient" />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

export default page;
